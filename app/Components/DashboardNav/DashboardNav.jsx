import React from "react";

export default function DashboardNav({ onSearch }) {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className=" ms-[270px] border-b-[1px] border-gray-700 p-4">
      <div className="wraper-nav flex justify-between items-center">
        <div className=" relative w-fit">
          <input
            type="search"
            placeholder="Search Your Vehicle Here"
            className="px-4 text-sm py-3 rounded-full bg-transparent border focus:outline-none w-[500px] border-gray-600"
            onChange={handleSearchChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 absolute top-3 right-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <div className="w-fit bg-[#2b333f94] rounded-lg px-5 py-3">
          <h1 className="text-sm font-bold">Suma Gunawan</h1>
          <p className="text-sm">sumagunawan@gmai.com</p>
        </div>
      </div>
    </div>
  );
}
