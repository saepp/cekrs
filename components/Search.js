import React from "react";
import { Radio } from "@material-tailwind/react";

const Search = () => {
  return (
    <div className="w-full">
      <div className="mb-1">
        <p className="mb-1 text-xl font-bold">Pilih Provinsi</p>
        <select className="h-10 w-full cursor-pointer rounded border border-black/20 bg-transparent pl-2 font-semibold">
          <option value="" disabled selected>
            Pilih Provinsi
          </option>
          <option value="">Aceh</option>
          <option value="">Jawa Barat</option>
          <option value="">Jawa Tengah</option>
        </select>
      </div>
      <div className="mb-1">
        <p className="mb-1 text-xl font-bold">Pilih Kota / Kabupaten</p>
        <select className="h-10 w-full cursor-pointer rounded border border-black/20 bg-transparent pl-2 font-semibold">
          <option value="" disabled selected>
            Pilih Kota / Kabupaten
          </option>
          <option value="">Cirebon</option>
          <option value="">Bandung</option>
          <option value="">Bogor</option>
        </select>
      </div>
      <div className="flex items-center">
        <p className="mb-1 text-xl font-bold">Pilih Tempat Tidur : </p>
        <Radio
          id="covid19"
          name="radio"
          label="Covid 19"
          ripple={true}
          defaultChecked
        />
        <Radio
          id="noncovid19"
          name="radio"
          label="Non-Covid 19"
          ripple={true}
        />
      </div>
      <div className="w-full">
        <button className="h-10 w-full cursor-pointer rounded bg-[#262FD8] font-bold text-white hover:bg-[#0f1699]">
          Cari
        </button>
      </div>
    </div>
  );
};

export default Search;
