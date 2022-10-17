import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import BedHospitals from "../components/BedHospitals";

const Hospital = () => {
  return (
    <div className="mx-auto my-auto flex h-screen max-w-screen-md flex-col justify-center">
      <div className="">
        <h1 className="text-center text-5xl font-bold">Daftar Rumah Sakit</h1>
        <div className="mb-2 mt-4 w-full border-t border-black/20"></div>
        <button
          href="/"
          className="mb-2 flex h-10 w-full items-center justify-center rounded-md bg-[#262FD8] text-center font-bold text-white hover:bg-[#0f1699]"
        >
          <FaArrowLeft className="mr-2" /> Kembali Ke Pencarian
        </button>
      </div>
      <BedHospitals />
    </div>
  );
};

export default Hospital;
