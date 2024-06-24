import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import tabuan from '../Assets/tabuan.png'
import loc from '../Assets/loc.png'
import date from '../Assets/date.png'
import user from '../Assets/user.png'
import gear from '../Assets/gear.png'
import ticket from '../Assets/ticket.png'
import tips from '../Assets/tips.png'
import news from '../Assets/news.png'
import shape from '../Assets/shape.png'
import locw from '../Assets/locw.png'
import im1 from '../Assets/im1.png'
import im2 from '../Assets/im2.png'
import im3 from '../Assets/im3.png'
import im4 from '../Assets/im4.png'
import im5 from '../Assets/im5.png'

function Content() {
  return (
    <div className='-translate-y-[415px]'>
      <div className='bg-gradient-to-l from-slate-600/5 to-blue-900/70 h-[1163px] w-[808.12px] translate-y-[413px] absolute '>
    <div className='-translate-y-16 flex absolute bg-white h-[135px] left-[250px] w-[1100px] border-2 rounded-[25px]'>
      <div className='w-[199px] mx-11 flex py-5'>
        <div className='py-9'>
        <img src={loc} alt="" className='w-5 h-6 '/>
        </div>
        <div className='py-5 px-3 '>
           <h1 className='font-bold text-[20px]'>Destination</h1>
           <span className='text-[13px] text-slate-400'>Enter your destinations</span>
        </div>
      </div>
      <div className='w-[190px]  px-3 flex py-5 border-x'>
        <div className='py-9'>
        <img src={date} alt="" className='w-[25px] h-[25px] '/>
        </div>
        <div className='py-5 px-3'>
           <h1 className='font-bold text-[20px]'>Date</h1>
           <span className='text-[13px] text-slate-400'>When it will start?</span>
        </div>
      </div>
      <div className='w-[200px] px-3 flex py-5 border-x'>
        <div className='py-9'>
        <img src={user} alt="" className='w-[25px] h-[25px] '/>
        </div>
        <div className='py-5 px-3'>
           <h1 className='font-bold text-[20px]'>People</h1>
           <span className='text-[13px] text-slate-400'>How many people?</span>
        </div>
      </div>
      <div className='w-[200px]  px-3 flex py-5'>
        <div className='py-9'>
        <img src={gear} alt="" className='w-[32px] h-[25px] '/>
        </div>
        <div className='py-5 px-3 w-[200px]'>
           <h1 className='font-bold text-[20px]'>Gear</h1>
           <span className='text-[13px] text-slate-400'>Gear do you need?</span>
        </div>
      </div>
      <div className='py-8'>
        <a href="/Destination"><button className='border-2 bg-E text-white font-medium py-4 px-5 rounded-xl text-lg'>Explore Now</button></a>
      </div>
    </div>
    <div className='absolute pl-[65px] pr-[59px] py-[14px] text-gray-400 bg-white rounded-[50px] justify-end items-start gap-[227px] inline-flex top-[200px] left-[540px] w-[573px] h-[60px]'>
      <form action="" className='w-full flex'>
        <input type="text" name='search' placeholder='Search Tourist Spot' className='w-[100%]'/>
    <svg xmlns="http://www.w3.org/2000/svg" className='w-9 cursor-pointer' viewBox="0 0 101 101" id="search"><path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"></path></svg>
    </form>
    </div>
    </div>
    <div>
    <Swiper
    className='translate-y-[900px]'
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='w-[500px] h-[413px] ml-[114px]'>
          <div className='flex mb-4'>
            <img src={locw} alt="" className='w-[30px]'/>
            <h1 className='text-white ml-3'>Banyuwangi, Jawa Timur</h1>
          </div>
          <h1 className='text-white font-bold text-[60px] w-[100px]'>PULAU TABUHAN</h1>
          <p className='text-white w-[450px] mt-6'>Rasakan puncak layanan luar biasa di pulau terbaik dunia pada musim panas ini</p>
          <div className='flex'>
            <button className='w-[212px] h-[44px] bg-white text-E border-2 rounded-[40px] mt-10'>Kunjungi</button>
            <svg xmlns="http://www.w3.org/2000/svg" className='mt-8 ml-6' width="46" height="49" viewBox="0 0 46 49" fill="none">
  <circle cx="23" cy="26" r="23" fill="white"/>
  <path d="M23 36.35L21.55 35.05C19.8667 33.5333 18.475 32.225 17.375 31.125C16.275 30.025 15.4 29.0373 14.75 28.162C14.1 27.2867 13.646 26.4827 13.388 25.75C13.13 25.0173 13.0007 24.2673 13 23.5C13 21.9333 13.525 20.625 14.575 19.575C15.625 18.525 16.9333 18 18.5 18C19.3667 18 20.1917 18.1833 20.975 18.55C21.7583 18.9167 22.4333 19.4333 23 20.1C23.5667 19.4333 24.2417 18.9167 25.025 18.55C25.8083 18.1833 26.6333 18 27.5 18C29.0667 18 30.375 18.525 31.425 19.575C32.475 20.625 33 21.9333 33 23.5C33 24.2667 32.871 25.0167 32.613 25.75C32.355 26.4833 31.9007 27.2873 31.25 28.162C30.5993 29.0367 29.7243 30.0243 28.625 31.125C27.5257 32.2257 26.134 33.534 24.45 35.05L23 36.35Z" fill="#27738E"/>
</svg>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-[321px] h-[390px] ml-[130px]'>
          <a href=""><img src={im1} alt="" className='w-[100%] h-[100%] rounded-2xl'/></a>
          <div className='w-5 h-5 bg-white text-center text-E rounded-[50px] float-end -translate-y-[387px] mr-2'>1</div>
          <div className='absolute -translate-y-36 ml-8'>          
            <div className='flex mb-1'>
            <img src={locw} alt="" className='w-[15px]'/>
            <h1 className='text-white ml-2 text-[14px]'>Banyuwangi, Jawa Timur</h1>
          </div>
          <h1 className='text-white font-bold text-[29px] w-10'>PULAU MENJANGAN</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='w-[321px] h-[390px]'>
        <a href=""><img src={im2} alt="" className=' rounded-2xl'/></a>
          <div className='w-5 h-5 bg-white text-center text-E rounded-[50px] float-end -translate-y-[387px] mr-2'>2</div>
          <div className='absolute -translate-y-36 ml-8'>          
            <div className='flex mb-1'>
            <img src={locw} alt="" className='w-[15px]'/>
            <h1 className='text-white ml-2 text-[14px]'>Jember, Jawa Timur</h1>
          </div>
          <h1 className='text-white font-bold text-[29px] w-10'>PANTAI PAPUMA</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='w-[321px] h-[390px] -translate-x-[130px]'>
          <a href=""><img src={im3} alt="" className='w-[100%] h-[100%] rounded-2xl'/></a>
          <div className='w-5 h-5 bg-white text-center text-E rounded-[50px] float-end -translate-y-[387px] mr-2'>3</div>
          <div className='absolute -translate-y-36 ml-8'>          
            <div className='flex mb-1'>
            <img src={locw} alt="" className='w-[15px]'/>
            <h1 className='text-white ml-2 text-[14px]'>Pacitan, Jawa Timur</h1>
          </div>
          <h1 className='text-white font-bold text-[29px] w-10'>SUNGAI COKEL</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='w-[321px] h-[390px] -translate-x-[250px]'>
          <a href=""><img src={im4} alt="" className='w-[100%] h-[100%] rounded-2xl'/></a>
          <div className='w-5 h-5 bg-white text-center text-E rounded-[50px] float-end -translate-y-[387px] mr-2'>4</div>
          <div className='absolute -translate-y-36 ml-8'>          
            <div className='flex mb-1'>
            <img src={locw} alt="" className='w-[15px]'/>
            <h1 className='text-white ml-2 text-[14px]'>Lumajang, Jawa Timur</h1>
          </div>
          <h1 className='text-white font-bold text-[29px] w-10'>GUNUNG SEMERU</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='w-[321px] h-[390px] -translate-x-[380px]'>
          <a href=""><img src={im5} alt="" className='w-[100%] h-[100%] rounded-2xl'/></a>
          <div className='w-5 h-5 bg-white text-center text-E rounded-[50px] float-end -translate-y-[387px] mr-2'>5</div>
          <div className='absolute -translate-y-36 ml-8'>          
            <div className='flex mb-1'>
            <img src={locw} alt="" className='w-[15px]'/>
            <h1 className='text-white ml-2 text-[14px]'>Lumajang, Jawa Timur</h1>
          </div>
          <h1 className='text-white font-bold text-[29px] w-10'>GUNUNG BROMO</h1>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
        <img src={tabuan} alt="" className='w-[100%]'/>
        <div className='bg-[#3D809829] h-[300px] flex'>
          <div className=' w-[400px] h-[211px] translate-y-9 grid justify-items-stretch translate-x-[200px]'>
            <div className='justify-self-center py-[38px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 77 77" fill="none"> <circle cx="38.5" cy="38.5" r="38.5" fill="white" className=''/> </svg>
            <img src={ticket}  alt="" className='absolute -translate-y-16 px-3'/>
            </div>
            <div className='-translate-y-6 translate-x-10 w-[320px]'>
            <h1 className='text-E font-medium text-lg text-center'>Pesan Tiket dengan Mudah</h1>
            <p className='text-E text-sm text-center'>Jelajahi Petualangan Tanpa Akhir! Sewa Perlengkapan & Dapatkan Tiket Anda Disini!</p>
            </div>
          </div>
          <div className=' w-[400px] h-[211px] translate-y-9 grid justify-items-stretch translate-x-[200px]'>
            <div className='justify-self-center py-[38px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 77 77" fill="none"> <circle cx="38.5" cy="38.5" r="38.5" fill="white" className=''/> </svg>
            <img src={tips}  alt="" className='absolute -translate-y-16 px-3'/>
            </div>
            <div className='-translate-y-6 translate-x-10 w-[310px]'>
            <h1 className='text-E font-medium text-lg text-center'>Tip & Info Perjalanan</h1>
            <p className='text-E text-sm text-center'>Petualangan Menanti! Dapatkan Tips & Info Traveling Terbaru di Website Kami!</p>
            </div>
          </div>
          <div className=' w-[400px] h-[211px] translate-y-9 grid justify-items-stretch translate-x-[200px]'>
            <div className='justify-self-center py-[38px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 77 77" fill="none"> <circle cx="38.5" cy="38.5" r="38.5" fill="white" className=''/> </svg>
            <img src={news}  alt="" className='absolute -translate-y-16 px-4'/>
            </div>
            <div className='-translate-y-6 translate-x-10 w-[310px]'>
            <h1 className='text-E font-medium text-lg text-center'>Pembaruan Berita</h1>
            <p className='text-E text-sm text-center'>Rencanakan Liburan Impian Anda dengan Informasi Akurat: Baca Berita Perjalanan Kami!</p>
            </div>
          </div>
        </div>
        <div>
            <img src={shape} alt="" className='w-[100%]'/>
            <h1 className='absolute -translate-y-[650px] ml-16 text-E text-[40px] font-semibold w-[600px]'>JELAJAHI CARA BERBEDA UNTUK PERJALANAN</h1>
            <p className='absolute -translate-y-[480px] w-[600px] text-justify text-E ml-16 text-base'>Mulailah petualangan tak terlupakan di Jawa Timur dengan platform pemesanan tiket dan penyewaan perlengkapan terintegrasi kami! Jelajahi destinasi menakjubkan, benamkan diri Anda dalam pengalaman budaya yang kaya, dan ciptakan kenangan yang tak terlupakan seumur hidup.</p>
            <p className='absolute -translate-y-[380px] w-[600px] text-justify text-E ml-16 text-base'>Jelajahi pegunungan yang megah, saksikan matahari terbit di atas kaldera, dan ciptakan kenangan tak terlupakan dengan layanan pemesanan dan penyewaan kami yang lancar. Temukan Harta Karun Jawa Timur: Pemesanan Tiket Mudah, Penyewaan Perlengkapan, dan Pengalaman Tak Terlupakan!</p>
            <a href="/About"><button className='absolute -translate-y-[200px] w-[212px] bg-E text-white font-semibold ml-16 h-11 rounded-[20px]'>Tentang Kami</button></a>
        </div>
    </div>
  );
}

export default Content