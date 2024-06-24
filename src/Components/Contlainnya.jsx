import React from 'react'
import tumpaksewu from '../Assets/tumpaksewu.png'
import water from '../Assets/water.png'
import right from '../Assets/right.png'

function Contlainnya() {
  return (
    <div>
    <div className='mt-[90px] bg-white h-[55px] grid justify-items-stretch border-b-4'>
      <ul className='flex justify-self-end mr-[200px]'>
        <li className='text-lg m-2'><a href="/Pantai" className="hover:text-black text-gray-500 tracking-widest relative group">Pantai<div className="absolute w-full h-[9px] my-2 rounded-t-[20px] bg-[#BFE7F7] scale-x-0 group-hover:scale-x-100"/></a></li>
        <li className='text-lg m-2 ml-10 '><a href="/Gunung" className="hover:text-black text-gray-500 tracking-widest relative group">Gunung<div className="absolute w-full h-[9px] my-2 rounded-t-[20px] bg-[#BFE7F7] scale-x-0 group-hover:scale-x-100"/></a></li>
        <li className='text-lg m-2 ml-10'><a href="/Airterjun" className="hover:text-black text-gray-500 tracking-widest relative group">AirTerjun<div className="absolute w-full h-[9px] my-2 rounded-t-[20px] bg-[#BFE7F7] scale-x-0 group-hover:scale-x-100"/></a></li>
        <li className='text-lg m-2 ml-10'><a href="/Lainnya" className="hover:text-black text-gray-500 tracking-widest relative group">Lainnya<div className="absolute w-full h-[9px] my-2 rounded-t-[20px] bg-[#BFE7F7] scale-x-0 group-hover:scale-x-100"/></a></li>
      </ul>
    </div>
    <div className='h-[1600px] bg-[#EDF5F9]'>
      <h1 className='text-[48px] font-semibold mx-[130px] py-4'>Lainnya</h1>
      <p className='text-[24px] text-gray-400 mx-[130px]'>Menampilkan hasil destinasi lainnya</p>
      <div className='py-10'>
       <div className='flex'> {/* buka box1 */}  
          <div className='w-[370px] bg-white h-[413px] ml-[130px] border-[3px] rounded-[20px] '> {/*  buka */}
            <div className='h-[205px]'>
              <img src={tumpaksewu} alt="" className='rounded-t-[20px]'/>
            </div>
            <div  className='flex h-[39px] bg-[#F1F5F9] -translate-y-[6px]'>
              <img src={water} alt="" className='w-[30px] h-[30px] my-1 ml-4'/>
              <h1 className='text-lg text-gray-500 my-2 ml-2 font-semibold'>Air Terjun</h1>
            </div>
            <div>
              <h1 className='text-[23px] mx-5 my-1 font-semibold'>Air Terjun Tumpak Sewu</h1>
              <p className='text-sm mx-5 text-gray-400'>07:00-17:00</p>
              <p className='text-sm mx-5 text-gray-400'>Lumajang</p>
              <p className='text-[#0BAE7A] font-semibold italic mx-5'>Harga Tiket Masuk</p>
              <p className='text-[#0047FF] mx-5 font-semibold'>IDR 10.000</p>
              <div className='flex -translate-y-5 ml-[220px]'>
                <p className='text-[12px] underline'>Selengkapnya</p>
                <a href="/Desctumpaksewu"><img src={right} alt="" className='mx-2 -my-1'/></a>
              </div>
            </div>
          </div> {/*  tutup */}
        </div> {/* tutup box1 */}
      </div>
    </div>
  </div>
  )
}

export default Contlainnya