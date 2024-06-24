import React from 'react'
import desti from '../Assets/desti.png'
import kart from '../Assets/kart.png'
import pnt from '../Assets/pnt.png'
import gng from '../Assets/gng.png'
import air from '../Assets/air.png'
import lny from '../Assets/lny.png'
import next from '../Assets/next.png'

function Destiab() {
  return (
    <div className='py-20 '>
        <img src={desti} alt="" className='w-[100%]'/>
        <h1 className='absolute -translate-y-[509px] mx-16 w-[700px] text-[50px] text-white font-medium'>Kunjungi Destinasi Wisata Terbaik di Jawa Timur</h1>
        <h1 className='justify-self-end absolute -translate-y-[330px] mx-[960px] w-[600px] text-[30px] font-medium text-white'>Klik tombol dibawah untuk melihat destinasi wisata yang tersedia saat ini!</h1>
        <div>
            <a href="#y"><button className='absolute -translate-y-[200px] mx-[1150px] bg-white w-[230px] h-[60px] rounded-[51px] text-[25px] font-medium'>Wisata</button></a>
        </div>
        <div className='flex border-2  translate-y-10  ml-[180px] border-[#BFE7F7] rounded-xl w-[1280px] h-[150px]'>
            <img src={kart} alt="" className='mx-[39px]'/>
            <div className='my-8'>
                <h1 className='text-[30px] font-semibold'>Udah punya akun belum?</h1>
                <p className='text-[20px]'>Buat akun atau log in yuk, biar bisa beli tiket wisata tanpa ribet ✌️😍</p>
            </div>
            <div id='y' className='translate-x-32 my-10'>
                <button className='w-[176px] h-[62px] rounded-xl bg-[#BFE7F7] text-[#0047FF] text-[29px] font-semibold'>Masuk</button>
            </div>
        </div>
        <div  className='h-[1220px] bg-[#EDF5F9] translate-y-[80px]'>
            <h1 className='text-[48px] py-5 mx-[180px] font-semibold '>Kategori</h1>
            <p className='mx-[180px] text-gray-500 text-2xl'>Menampilkan 5 hasil kategori</p>
            <div className='ml-[180px] my-7 w-[1291px] h-[200px]'>
                <img src={pnt} alt="" className='rounded-xl'/>
                <div className='flex'>
                <div className='absolute -translate-y-[170px] ml-14'>
                <h1 className='text-white text-[64px] font-semibold'>Pantai</h1>
                <p className='text-white text-xl'>Klik tombol untuk melihat destinasi wisata pantai yang ada di berbagai kota</p>
                </div>
                <div className='-translate-y-[170px] ml-[1100px] mt-8'>
                    <a href="/Pantai"><img src={next} alt="" /></a>
                </div>
                </div>
            </div>
            <div className='mx-[180px] my-14 w-[1291px] h-[200px]'>
                <img src={gng} alt="" className='rounded-xl'/>
                <div className='flex'>
                <div className='absolute -translate-y-[170px] mx-14'>
                <h1 className='text-white text-[64px] font-semibold'>Gunung</h1>
                <p className='text-white text-xl'>Klik tombol untuk melihat destinasi wisata pantai yang ada di berbagai kota</p>
                </div>
                <div className='-translate-y-[170px] ml-[1100px] mt-8'>
                    <a href="/Gunung"><img src={next} alt="" /></a>
                </div>
                </div>
            </div>
            <div className='mx-[180px] my-7 w-[1291px] h-[200px]'>
                <img src={air} alt="" className='rounded-xl'/>
                <div className='flex'>
                <div className='absolute -translate-y-[170px] mx-14'>
                <h1 className='text-white text-[64px] font-semibold'>Air Terjun</h1>
                <p className='text-white text-xl'>Klik tombol untuk melihat destinasi wisata pantai yang ada di berbagai kota</p>
                </div>
                <div className='-translate-y-[170px] ml-[1100px] mt-8'>
                    <a href="/Airterjun"><img src={next} alt="" /></a>
                </div>
                </div>
            </div>
            <div className='mx-[180px] my-14 w-[1291px] h-[200px]'>
                <img src={lny} alt="" className='rounded-xl'/>
                <div className='flex'>
                <div className='absolute -translate-y-[170px] mx-14'>
                <h1 className='text-white text-[64px] font-semibold'>Lainnya</h1>
                <p className='text-white text-xl'>Klik tombol untuk melihat destinasi wisata pantai yang ada di berbagai kota</p>
                </div>
                <div className='-translate-y-[170px] ml-[1100px] mt-8'>
                    <a href="/Lainnya"><img src={next} alt="" /></a>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Destiab