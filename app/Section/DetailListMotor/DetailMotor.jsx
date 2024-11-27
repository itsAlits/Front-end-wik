"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DetailMotor({ searchQuery }) {
  const [motors, setMotors] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [selectedMotor, setSelectedMotor] = useState(null);

  useEffect(() => {
    const fetchMotors = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/motors");
        setMotors(response.data);
        const latestMotors = response.data
          .filter(motor => motor.tahun === 2024)
          .slice(0, 5);
        setNewReleases(latestMotors);
      } catch (error) {
        console.error("Error fetching motors:", error);
      }
    };

    fetchMotors();
  }, []);

  const handleMotorClick = (motor) => {
    setSelectedMotor(motor);
  };

  const closeModal = () => {
    setSelectedMotor(null);
  };

  const filteredMotors = motors.filter((motor) => {
    if (!searchQuery) return true;
    
    const search = searchQuery.toLowerCase();
    return (
      motor.brand.toLowerCase().includes(search) ||
      motor.model.toLowerCase().includes(search)
    );
  });

  const filteredNewReleases = newReleases.filter((motor) => {
    if (!searchQuery) return true;
    
    const search = searchQuery.toLowerCase();
    return (
      motor.brand.toLowerCase().includes(search) ||
      motor.model.toLowerCase().includes(search)
    );
  });

  return (
    <div className="relative">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-9 h-screen">
          <div className="grid grid-cols-4 gap-3">
            {filteredMotors.map((motor) => (
              <div 
                key={motor.id} 
                className="rounded-lg relative overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => handleMotorClick(motor)}
              >
                <div>
                  <img
                    src={motor.gambar}
                    alt={`${motor.brand} ${motor.model}`}
                    className="opacity-90 w-full h-48 object-cover"
                  />
                </div>
                <div className="absolute bottom-6 left-4  text-white bg-black bg-opacity-50 p-2 rounded">
                  <h1 className="text-sm mt-2">{`${motor.brand} ${motor.model}`}</h1>
                  <p className="text-xs mt-1">Rp.{motor.harga.toLocaleString()}</p>
                  <p className="text-xs mt-1">{motor.tahun} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3 px-3 pt-4 pb-6  h-fit bg-gray-700/40 rounded">
          <h1 className="text-lg text-center mb-4">New Release Motorcycle</h1>
          <div className="wraper-list flex flex-col gap-3 overflow-y-auto h-[calc(100%-4rem)]">
            {filteredNewReleases.map((motor) => (
              <div 
                key={motor.id} 
                className="bg-indigo-500 text-white p-3 rounded hover:bg-indigo-600 transition-colors cursor-pointer"
                onClick={() => handleMotorClick(motor)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-sm font-semibold">{`${motor.brand} ${motor.model}`}</h1>
                    <p className="text-sm">{motor.tahun}</p>
                  </div>
                  <div className="text-end ">
                    <p className="text-sm">{motor.kapasitas_mesin}</p>
                    <p className="text-sm">Rp.{motor.harga.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay Modal */}
      {selectedMotor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full mx-4  relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img
                  src={selectedMotor.gambar}
                  alt={`${selectedMotor.brand} ${selectedMotor.model}`}
                  className="w-full h-96 object-cover "
                />
              </div>
              <div className="md:w-1/2 p-6 bg-gray-900">
                <h2 className="text-2xl font-bold mb-8">{`${selectedMotor.brand} ${selectedMotor.model}`}</h2>
                <div className="space-y-3">
                  <div className="flex justify-between pb-2">
                    <span className="font-semibold">Harga:</span>
                    <span>Rp.{selectedMotor.harga.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="font-semibold">Tahun:</span>
                    <span>{selectedMotor.tahun}</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="font-semibold">Kilometer:</span>
                    <span>{selectedMotor.kilometer.toLocaleString()} km</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="font-semibold">Kapasitas Mesin:</span>
                    <span>{selectedMotor.kapasitas_mesin}</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="font-semibold">Status Pajak:</span>
                    <span className={`${
                      selectedMotor.status_pajak.includes("Aktif")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}>
                      {selectedMotor.status_pajak}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
