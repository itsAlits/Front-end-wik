"use client";

import React, { useState, useEffect } from "react";
import axiosInstance from "@/app/api/axios";
import Card from "@/app/Components/Card/Card";

export default function MotorList() {
  const [motorbikes, setMotorbikes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 28; // Show 8 items per page

  useEffect(() => {
    axiosInstance
      .get("/motors")
      .then((response) => {
        setMotorbikes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching motorbikes:", error);
        console.log(response.data);
      });
  }, []);

  // Calculate pagination values
  const totalPages = Math.ceil(motorbikes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMotorbikes = motorbikes.slice(startIndex, endIndex);

  // Generate page numbers array
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className=" mt-8">
      <div className="motor-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {currentMotorbikes.map((motorbike) => (
          <Card
            key={motorbike.id}
            brand={motorbike.brand}
            gambar={motorbike.gambar}
            harga={motorbike.harga}
            model={motorbike.model}
            tahun={motorbike.tahun}
          />
        ))}
      </div>

        <div className="mt-10 flex justify-end">
      {totalPages > 1 && (
        <div className="join">
          <button
            className="join-item btn"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            >
            «
          </button>
          {getPageNumbers().map((pageNum) => (
            <button
              key={pageNum}
              className={`join-item btn ${pageNum === currentPage ? 'btn-active' : ''}`}
              onClick={() => setCurrentPage(pageNum)}
              >
              {pageNum}
            </button>
          ))}
          <button
            className="join-item btn"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            >
            »
          </button>
        </div>
      )}
      </div>
    </div>
  );
}
