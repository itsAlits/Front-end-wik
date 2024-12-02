"use client"

import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter();
  const [filters, setFilters] = useState({
    harga_min: '',
    harga_max: '',
    kilometer_min: '',
    kilometer_max: '',
    tahun_min: '',
    tahun_max: '',
    kapasitas_mesin: 'Semua',
    brand: 'Semua',
    model: 'Semua',
    status_pajak: 'Semua',
  });

  const [formattedValues, setFormattedValues] = useState({
    harga_min: '',
    harga_max: '',
    kilometer_min: '',
    kilometer_max: '',
  });

  const [weights, setWeights] = useState({
    weight_harga: 4,
    weight_kilometer: 3,
    weight_status_pajak: 3
  });

  const [filteredResults, setFilteredResults] = useState([]);

  const formatNumber = (value) => {
    // Remove non-digit characters
    const number = value.replace(/\D/g, '');
    // Format with thousand separator
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  // Convert weights from 1-10 scale to 0-1 scale
  const normalizeWeights = (weights) => {
    const total = Object.values(weights).reduce((sum, weight) => sum + weight, 0);
    return {
      weight_harga: weights.weight_harga / total,
      weight_kilometer: weights.weight_kilometer / total,
      weight_status_pajak: weights.weight_status_pajak / total
    };
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (['harga_min', 'harga_max', 'kilometer_min', 'kilometer_max'].includes(name)) {
      // Format display value
      const formattedValue = formatNumber(value);
      setFormattedValues(prev => ({
        ...prev,
        [name]: formattedValue
      }));
      
      // Store actual numeric value for submission
      setFilters(prev => ({
        ...prev,
        [name]: value.replace(/\D/g, '')
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleWeightChange = (e) => {
    const { name, value } = e.target;
    const numValue = parseInt(value) || 0;
    // Ensure weight is between 1 and 10
    const boundedValue = Math.min(Math.max(numValue, 1), 10);
    setWeights(prev => ({
      ...prev,
      [name]: boundedValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert weights to 0-1 scale before sending
    const normalizedWeights = normalizeWeights(weights);
    
    // Prepare request data
    const requestData = {
      // Basic filters with proper type conversion and fallbacks
      harga_min: parseInt(filters.harga_min) || 0,
      harga_max: parseInt(filters.harga_max) || 1000000000,
      kilometer_min: parseInt(filters.kilometer_min) || 0,
      kilometer_max: parseInt(filters.kilometer_max) || 1000000,
      tahun_min: parseInt(filters.tahun_min) || 2000,
      tahun_max: parseInt(filters.tahun_max) || 2024,
      
      // Category filters with proper handling of "Semua"
      kapasitas_mesin: filters.kapasitas_mesin === 'Semua' ? 'Semua' : filters.kapasitas_mesin,
      brand: filters.brand === 'Semua' ? 'Semua' : filters.brand,
      model: filters.model === 'Semua' ? 'Semua' : filters.model,
      status_pajak: filters.status_pajak === 'Semua' ? 'Semua' : filters.status_pajak,
      
      // Normalized weights
      weight_harga: normalizedWeights.weight_harga,
      weight_kilometer: normalizedWeights.weight_kilometer,
      weight_status_pajak: normalizedWeights.weight_status_pajak
    };

    console.log('Request data:', requestData);


    // Send request to backend
    fetch('http://127.0.0.1:5000/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        // Handle case where no results are found
        setFilteredResults([]);
        console.log('Search message:', data.message);
        // You might want to show this message to the user
      } else {
        setFilteredResults(data);
        console.log('Search results:', data);
      }
    })
    .catch(error => {
      console.error('Error searching motors:', error);
      setFilteredResults([]);
    });
  };

  return (
    <div className="flex">
      {/* <Sidebar/> */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Cari Motor</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-base-200 p-6 rounded-lg shadow-lg">
          {/* Harga Range */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Harga Minimum</span>
              </label>
              <input
                type="text"
                name="harga_min"
                value={formattedValues.harga_min}
                onChange={handleInputChange}
                className="input input-bordered w-full"
                placeholder="Rp 0"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Harga Maximum</span>
              </label>
              <input
                type="text"
                name="harga_max"
                value={formattedValues.harga_max}
                onChange={handleInputChange}
                className="input input-bordered w-full"
                placeholder="Rp 1.000.000.000"
              />
            </div>
          </div>

          {/* Kilometer Range */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Kilometer Minimum</span>
              </label>
              <input
                type="text"
                name="kilometer_min"
                value={formattedValues.kilometer_min}
                onChange={handleInputChange}
                className="input input-bordered w-full"
                placeholder="0"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Kilometer Maximum</span>
              </label>
              <input
                type="text"
                name="kilometer_max"
                value={formattedValues.kilometer_max}
                onChange={handleInputChange}
                className="input input-bordered w-full"
                placeholder="1.000.000"
              />
            </div>
          </div>

          {/* Tahun Range */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Tahun Minimum</span>
              </label>
              <input
                type="number"
                name="tahun_min"
                value={filters.tahun_min}
                onChange={handleInputChange}
                className="input input-bordered w-full"
                placeholder="2000"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Tahun Maximum</span>
              </label>
              <input
                type="number"
                name="tahun_max"
                value={filters.tahun_max}
                onChange={handleInputChange}
                className="input input-bordered w-full"
                placeholder="2024"
              />
            </div>
          </div>

          {/* Other Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Kapasitas Mesin</span>
              </label>
              <select
                name="kapasitas_mesin"
                value={filters.kapasitas_mesin}
                onChange={handleInputChange}
                className="select select-bordered w-full"
              >
                <option value="Semua">Semua</option>
                <option value="110">110 CC</option>
                <option value="125">125 CC</option>
                <option value="150">150 CC</option>
                <option value="250">250 CC</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand</span>
              </label>
              <select
                name="brand"
                value={filters.brand}
                onChange={handleInputChange}
                className="select select-bordered w-full"
              >
                <option value="Semua">Semua</option>
                <option value="Honda">Honda</option>
                <option value="Yamaha">Yamaha</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Kawasaki">Kawasaki</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Model</span>
              </label>
              <input
                type="text"
                name="model"
                value={filters.model}
                onChange={handleInputChange}
                className="input input-bordered w-full"
                placeholder="Model motor"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Status Pajak</span>
              </label>
              <select
                name="status_pajak"
                value={filters.status_pajak}
                onChange={handleInputChange}
                className="select select-bordered w-full"
              >
                <option value="Semua">Semua</option>
                <option value="Aktif">Aktif</option>
                <option value="Tidak">Tidak Aktif</option>
              </select>
            </div>
          </div>

          {/* Weight Inputs */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Bobot Kriteria (Skala 1-10)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Bobot Harga</span>
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  name="weight_harga"
                  value={weights.weight_harga}
                  onChange={handleWeightChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Bobot Kilometer</span>
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  name="weight_kilometer"
                  value={weights.weight_kilometer}
                  onChange={handleWeightChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Bobot Status Pajak</span>
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  name="weight_status_pajak"
                  value={weights.weight_status_pajak}
                  onChange={handleWeightChange}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Cari Motor
          </button>
        </form>

        {/* Search Results */}
        {filteredResults.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Hasil Rekomendasi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResults.map((motor) => (
                <div key={motor.id} className="card bg-base-100 shadow-xl">
                  {motor.gambar && (
                    <figure>
                      <img src={motor.gambar} alt={motor.motor} className="w-full h-48 object-cover"/>
                    </figure>
                  )}
                  <div className="card-body">
                    <h3 className="card-title">{motor.motor}</h3>
                    <div className="space-y-2">
                      <p>Tahun: {motor.tahun}</p>
                      <p>Kilometer: {motor.kilometer}</p>
                      <p className="text-primary font-bold">Rp {motor.harga.toLocaleString()}</p>
                      <div className="badge badge-outline">{motor.status_pajak}</div>
                      <p className="text-sm text-gray-600">Skor SAW: {motor.saw_score.toFixed(3)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
