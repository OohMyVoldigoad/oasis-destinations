import React, { useState, useEffect } from 'react';
import logo from '../Assets/logo.png';
import h from '../Assets/h.png';
import k from '../Assets/k.png';
import a from '../Assets/a.png';
import b from '../Assets/b.png';
import u from '../Assets/u.png';

const Navdash = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const dataProfile = localStorage.getItem('profile');
    
        if (dataProfile) {
            setProfile(JSON.parse(dataProfile));
        } else {
            setIsLoggedIn(false);
        }
    }, []);

return (
    <div className='w-[300px] h-[1084px] border-2 bg-white '>
    <div className='ml-16 mt-8'>
        <img src={logo} alt="Logo" className='w-[142px]' />
    </div>
    {profile.role === 'superadmin' && (
        <>
        <div className='flex ml-14 mt-14'>
            <img src={h} alt="Dashboard Icon" />
            <a href="/Admindashboard" className='text-[#252525] ml-2'>Dashboard</a>
        </div>
        <div className='flex ml-14 mt-8'>
            <img src={a} alt="Kelola Akun Icon" />
            <a href="/Adminakunpengelola" className='text-[#252525] ml-2'>Kelola Akun</a>
            <a href="#" className='mt-[10px] ml-12'>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                <path d="M1 1.58594L6.65685 7.24279L12.3137 1.58594" stroke="black" stroke-linecap="round" />
            </svg>
            </a>
        </div>
        <div className='flex ml-14 mt-8'>
            <img src={b} alt="Kelola Berita Icon" />
            <a href="/Admindashboard" className='text-[#252525] ml-2'>Kelola Berita</a>
        </div>
        <div className='flex ml-14 mt-8'>
            <img src={u} alt="Ulasa Berita Icon" />
            <a href="/Admindashboard" className='text-[#252525] ml-2'>Ulasa Berita</a>
        </div>
        </>
    )}
    {profile.role === 'adminpengelola' && (
        <>
        <div className='flex ml-14 mt-14'>
            <img src={k} alt="Kelola Wisata Icon" />
            <a href="/Adminkelolawisata" className='text-[#252525] ml-2'>Kelola Wisata</a>
        </div>
        <div className='flex ml-14 mt-8'>
            <img src={h} alt="History Pemesanan Icon" />
            <a href="/Adminhistorypemesanan" className='text-[#252525] ml-2'>History Pemesanan</a>
        </div>
        </>
    )}
    </div>
);
}

export default Navdash;
