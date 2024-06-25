import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Adminkelolapengguna() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    nik: "",
    no: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/add-user", formData);
      console.log("User added:", response.data);
      navigate('/')
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div>
      <div className="w-full h-[60px] bg-[#27738E]">
        <h1 className="text-center text-white py-4 font-semibold">
          Kelola Pengguna
        </h1>
      </div>
      <div className="flex mx-40">
        <div className="w-[1137px] h-[726px] mt-10 ml-10">
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div className="w-1/2">
                <div className="flex flex-col mb-4">
                  <label className="mb-2">Nama</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border rounded px-3 py-2"
                    placeholder="Masukkan Nama"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label className="mb-2">Nik</label>
                  <input
                    type="text"
                    name="nik"
                    value={formData.nik}
                    onChange={handleChange}
                    className="border rounded px-3 py-2"
                    placeholder="Masukkan nik"
                  />
                </div>
              </div>
              <div className="w-1/2 ml-4">
                <div className="flex flex-col mb-4">
                  <label className="mb-2">No</label>
                  <input
                    type="text"
                    name="no"
                    value={formData.no}
                    onChange={handleChange}
                    className="border rounded px-3 py-2"
                    placeholder="Masukkan no"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label className="mb-2">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border rounded px-3 py-2"
                    placeholder="Masukkan Email"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label className="mb-2">Password</label>
                  <input
                    type="text"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border rounded px-3 py-2"
                    placeholder="Masukkan password"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-[#27738E] text-white rounded-lg py-3 px-3 font-semibold"
              >
                Tambahkan Pengguna
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Adminkelolapengguna;
