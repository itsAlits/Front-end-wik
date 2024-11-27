import React from "react";

export default function Card({ brand, gambar, harga, model, tahun }) {
  return (
    <div className="card-motor">
      <div className="wraper-card h-52 overflow-hidden">
        <img
          src={gambar}
          alt={model}
          className="object-cover w-full h-full object-top"
        />
      </div>
      <div className="mt-3 flex justify-between">
        <div>
          <p>{model}</p>
          <p>Rp.{harga.toLocaleString()}</p>
        </div>
        <div className="text-end">
          <p>{brand}</p>
          <p>{tahun}</p>
        </div>
      </div>
    </div>
  );
}
