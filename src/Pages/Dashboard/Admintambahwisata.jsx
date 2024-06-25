import React, { useState, useEffect } from "react";
import axios from "axios";

const Admintambahwisata = () => {
  const [tipeWisata, setTipeWisata] = useState([]);
  const [selectedTipe, setSelectedTipe] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    kategori_wisata: "",
    jam_buka: "",
    jam_tutup: "",
    lokasi: "",
    harga: "",
    fasilitas: "",
    alamat: "",
    foto: null,
  });

  useEffect(() => {
    const fetchTipeWisata = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/get-tipe-wisata");
        setTipeWisata(response.data);
      } catch (error) {
        console.error("Error fetching tipe wisata", error);
      }
    };

    fetchTipeWisata();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      foto: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post("http://localhost:3000/api/add-wisata", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      // Reset form setelah berhasil disimpan
      setFormData({
        name: "",
        kategori_wisata: "",
        jam_buka: "",
        jam_tutup: "",
        lokasi: "",
        harga: "",
        fasilitas: "",
        alamat: "",
        foto: null,
      });
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div>
      <div className="w-full h-[60px] bg-[#27738E]">
        <h1 className="text-center text-white py-4 font-semibold">Tambah Wisata</h1>
      </div>
      <div className="flex mx-40">
        <div className="w-[500px] h-[726px] ml-10 mt-10">
          <h1>FOTO</h1>
          <div className="w-[243px] h-[203px] border-2 rounded-md mt-2">
            <input type="file" name="foto" onChange={handleFileChange} />
          </div>
        </div>
        <div className="mx-20 my-10">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-[#464E5F] mb-1">Nama Wisata</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-[650px] px-2 border-2 rounded-md"
                placeholder="Nama Wisata"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="kategori_wisata" className="block text-[#464E5F] mb-1">Kategori Wisata</label>
              <select
                id="kategori_wisata"
                name="kategori_wisata"
                className="w-[650px] px-2 border-2 rounded-md"
                value={selectedTipe}
                onChange={(e) => {
                  setSelectedTipe(e.target.value);
                  setFormData({ ...formData, kategori_wisata: e.target.value });
                }}
                required
              >
                <option value="">Pilih Kategori Wisata</option>
                {tipeWisata.map((tipe) => (
                  <option key={tipe.id} value={tipe.id}>{tipe.nama_tipe}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="jam_buka" className="block text-[#464E5F] mb-1">Jam Buka</label>
              <input
                type="text"
                id="jam_buka"
                name="jam_buka"
                className="w-[650px] px-2 border-2 rounded-md"
                placeholder="Jam Operasional"
                value={formData.jam_buka}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="jam_tutup" className="block text-[#464E5F] mb-1">Jam Tutup</label>
              <input
                type="text"
                id="jam_tutup"
                name="jam_tutup"
                className="w-[650px] px-2 border-2 rounded-md"
                placeholder="Jam Operasional"
                value={formData.jam_tutup}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="my-3">
              <label htmlFor="lokasi" className="block text-[#464E5F] mb-1">Lokasi</label>
              <input
                type="text"
                id="lokasi"
                name="lokasi"
                className="w-[650px] px-2 border-2 rounded-md"
                placeholder="Lokasi Wisata"
                value={formData.lokasi}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="my-3">
              <label htmlFor="harga" className="block text-[#464E5F] mb-1">Harga Tiket Masuk</label>
              <input
                type="text"
                id="harga"
                name="harga"
                className="w-[650px] px-2 border-2 rounded-md"
                placeholder="Harga Tiket Masuk"
                value={formData.harga}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="my-3">
              <label htmlFor="fasilitas" className="block text-[#464E5F] mb-1">Fasilitas</label>
              <input
                type="text"
                id="fasilitas"
                name="fasilitas"
                className="w-[650px] px-2 border-2 rounded-md"
                placeholder="Fasilitas"
                value={formData.fasilitas}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="my-3">
              <label htmlFor="alamat" className="block text-[#464E5F] mb-1">Alamat Lengkap</label>
              <input
                type="text"
                id="alamat"
                name="alamat"
                className="w-[650px] px-2 border-2 rounded-md"
                placeholder="Alamat Lengkap"
                value={formData.alamat}
                onChange={handleInputChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-[650px] bg-[#3699FF] text-white font-semibold py-2 rounded-md mt-4"
            >
              Simpan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admintambahwisata;
