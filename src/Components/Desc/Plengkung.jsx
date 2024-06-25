import React, { useEffect, useState } from 'react';
import axios from 'axios';
import plengkung from '../../Assets/plengkung.png';
import left from '../../Assets/left.png';
import locg from '../../Assets/locg.png';
import garis from '../../Assets/garis.png';
import cus from '../../Assets/cus.png';
import tenda from '../../Assets/tenda.png';
import putus from '../../Assets/putus.png';

function Plengkung() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Replace '1' with the actual ID you want to fetch
    axios.get('http://localhost:3000/api/get-pantai-detail')
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={plengkung} alt="" className="w-[100%]" />
      <div className="ml-10 mt-3">
        <div className="ml-3 mt-1 flex">
          <a href="/Pantai">
            <img src={left} alt="" />
          </a>
          <a href="#r" className="ml-10 text-gray-400 text-[18px] font-medium hover:text-[#0047FF] tracking-widest relative group">
            Ringkasan
            <div className="absolute w-full mt-3 h-1 bg-[#0047FF] scale-x-0 group-hover:scale-x-100" />
          </a>
          <a href="#p" className="ml-10 text-gray-400 text-[18px] font-medium hover:text-[#0047FF] tracking-widest relative group">
            Persewaan
            <div className="absolute w-full mt-3 h-1 bg-[#0047FF] scale-x-0 group-hover:scale-x-100" />
          </a>
          <a href="#f" className="ml-10 text-gray-400 text-[18px] font-medium hover:text-[#0047FF] tracking-widest relative group">
            Fasilitas
            <div className="absolute w-full mt-3 h-1 bg-[#0047FF] scale-x-0 group-hover:scale-x-100" />
          </a>
          <a href="#l" className="ml-10 text-gray-400 text-[18px] font-medium hover:text-[#0047FF] tracking-widest relative group">
            Lokasi
            <div className="absolute w-full mt-3 h-1 bg-[#0047FF] scale-x-0 group-hover:scale-x-100" />
          </a>
        </div>
        <div id="r" className="mt-5 flex">
          <div className="w-[800px] ml-20 mt-3">
            <h1 className="text-[36px] font-semibold">{data.nama_wisata}</h1>
            <img src={locg} alt="" />
            <p className="-translate-y-7 translate-x-8">{data.alamat_lengkap}</p>
          </div>
          <div className="ml-[450px] mt-5">
            <p>Beli Tiket Masuk</p>
            <button className="text-[#0BAE7A] border-2 py-2 px-3 rounded-[10px] mt-2 ml-2">
              IDR {data.harga_tiket_masuk}
            </button>
          </div>
        </div>
      </div>
      <img src={garis} alt="" className="ml-16 w-[1490px] mt-10" />
      <p className="ml-28 text-[20px]">Persewaan</p>
      <div id="p" className="w-[1420px] ml-28 mt-3 h-[1800px] rounded-xl bg-[#EDF5F9]">
        {/* Repeat the rental section as needed */}
        <div className="w-[1140px] bg-white h-[302px] ml-32 translate-y-[52px] border-4 rounded-xl flex">
          <div className="ml-9 mt-7 w-[800px]">
            <h1 className="text-[26px] font-medium">Tenda Kecil</h1>
            <img src={cus} alt="" />
            <p className="text-gray-500 -translate-y-[25px] ml-7">3-4 org</p>
            <h1 className="text-E text-[23px] font-medium">Detail</h1>
            <p className="italic">Tenda ukuran kecil dapat berisi 3-4 orang</p>
          </div>
          <div className=" mt-3">
            <div className="w-[260px] h-[200px] border-4 rounded-2xl">
              <img src={tenda} alt="" />
            </div>
            <img src={putus} alt="" className="absolute -translate-x-[800px] mt-3" />
            <h1 className="text-[#0BAE7A] text-[27px] mt-6">IDR 40.000</h1>
            <button className="border-2 rounded-md py-0.5 px-2 text-white bg-E -translate-y-8 ml-40">Beli Paket</button>
            <div></div>
          </div>
        </div>
      </div>
      <img src={garis} alt="" className="ml-16 w-[1490px] mt-20" />
      <div id="f" className="w-[921px] h-[357px] bg-[#E4F6FF] ml-[360px] mt-10 mb-10 border-2 rounded-2xl border-[#83D6FE]">
        <div className="ml-16 mt-10">
          <h1 className="text-[30px] font-semibold">FASILITAS</h1>
          <p>{data.fasilitas}</p>
        </div>
      </div>
      <img src={garis} alt="" className="ml-16 w-[1490px] mt-20" />
      <div id="l" className="w-[1304px] h-[374px] border-4 rounded-2xl ml-40 mt-20 mb-10">
        <div className="w-[100%] h-[216px]">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.5946584457165!2d114.34858477456936!3d-8.729983589040996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd3938d8110b8d7%3A0xa364f95e85564443!2sPantai%20Plengkung%2FG-Land!5e0!3m2!1sid!2sid!4v1717406096102!5m2!1sid!2sid`}
            width="100%"
            height="216"
            allowFullScreen
            loading="lazy"
            className="rounded-t-2xl"
            referrerPolicy="no-referrer-when-downgrade"
            title="Responsive Google Map"
          ></iframe>
          <img src={locg} alt="" className="mt-10 ml-10" />
          <p className="-translate-y-8 translate-x-20 text-[20px] w-[1010px]">
            {data.alamat_lengkap}
          </p>
          <a href={`https://maps.app.goo.gl/8yaLi8iMii1wprvn7`}><button className="border-2 rounded-md text-white bg-[#0047FF] py-2 px-2 ml-[1150px] -translate-y-10">Lihat Peta</button></a>
        </div>
      </div>
    </div>
  );
}

export default Plengkung;
