import React from "react";
import { FaArrowLeft, FaBed, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Hospital = () => {
  return (
    <div className="mx-auto my-auto flex h-screen max-w-screen-md flex-col justify-center">
      <div className="">
        <h1 className="text-center text-5xl font-bold">Daftar Rumah Sakit</h1>
        <div className="mb-2 mt-4 w-full border-t border-black/20"></div>
        <button className="mb-2 flex h-10 w-full items-center justify-center rounded-md bg-[#262FD8] text-center font-bold text-white hover:bg-[#0f1699]">
          <FaArrowLeft className="mr-2" /> Kembali Ke Pencarian
        </button>
      </div>
      <div className="mt-1 h-[172px] w-full rounded-md border border-black">
        <div className="flex">
          <div className="ml-4 mt-3 flex flex-col justify-start">
            <p className="mt-1 text-lg font-bold">
              RS Umum Daerah Al Ihsan Provinsi Jawa Barat
            </p>
            <p className="mt-1">Jl. Ki Astramanggala Bale Endah Kab. Bandung</p>
            <p className="mt-1 text-sm font-light">
              Diperbarui 1 menit yang lalu
            </p>
          </div>
          <div className="ml-auto mr-4 mt-3 flex flex-col items-center">
            <p className="mt-1 text-lg font-bold">Tersedia :</p>
            <p className="mt-1 text-xl font-bold">30</p>
            <p className="mt-1 text-sm font-light">Tanpa antrian</p>
          </div>
        </div>
        <div className="mx-auto mt-4 mb-1 w-[690px] border-t border-black/20"></div>
        <div className="mt-2 flex justify-between px-4">
          <a
            href="/a"
            className="flex h-9 w-56 items-center justify-center rounded bg-[#262FD8] text-white"
          >
            <FaPhone className="mr-2" /> 081223607505
          </a>
          <a
            href="/a"
            className="flex h-9 w-56 items-center justify-center rounded bg-[#262FD8] text-white"
          >
            <FaMapMarkerAlt className="mr-2" /> Lihat Lokasi
          </a>
          <a
            href="/a"
            className="flex h-9 w-56 items-center justify-center rounded bg-[#262FD8] text-white"
          >
            <FaBed className="mr-2" /> Lihat Detail Kasur
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hospital;
