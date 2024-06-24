import React, { useState, useEffect } from 'react';
import usermin from '../Assets/usermin.png';

const Navdashh = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      try {
        setProfile(JSON.parse(storedProfile));
      } catch (error) {
        console.error('Error parsing profile JSON', error);
      }
    }
  }, []);

  return (
    <div className='w-[1334px] h-[85px] float-right bg-white border-2'>
      <div className='float-right flex mt-5 mr-14'>
        <svg xmlns="http://www.w3.org/2000/svg" className='translate-x-[25px] mt-2' width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M16.2004 14.9343L15.6379 14.0624C15.5254 13.8937 15.4691 13.7249 15.4691 13.528V7.67803C15.4691 6.01865 14.766 4.47178 13.4723 3.31865C12.4316 2.39053 11.0816 1.7999 9.64727 1.6874V1.1249C9.64727 0.787402 9.36602 0.478027 9.00039 0.478027C8.66289 0.478027 8.35352 0.759277 8.35352 1.1249V1.65928C8.29727 1.65928 8.24102 1.65928 8.18477 1.6874C4.92227 2.05303 2.47539 4.66865 2.47539 7.79053V13.528C2.44727 13.8093 2.39102 13.9499 2.33477 14.0343L1.80039 14.9343C1.63164 15.2155 1.63164 15.553 1.80039 15.8343C1.96914 16.0874 2.25039 16.2562 2.55977 16.2562H8.38164V16.8749C8.38164 17.2124 8.66289 17.5218 9.02852 17.5218C9.36602 17.5218 9.67539 17.2405 9.67539 16.8749V16.2562H15.4691C15.7785 16.2562 16.0598 16.0874 16.2285 15.8343C16.3973 15.553 16.3973 15.2155 16.2004 14.9343ZM3.23477 14.9905L3.43164 14.653C3.60039 14.3718 3.68477 14.0343 3.74102 13.6405V7.79053C3.74102 5.31553 5.70977 3.23428 8.32539 2.95303C9.92852 2.78428 11.5035 3.2624 12.6566 4.2749C13.6691 5.1749 14.2316 6.38428 14.2316 7.67803V13.528C14.2316 13.9499 14.3441 14.3437 14.5973 14.7374L14.766 14.9905H3.23477Z" fill="#64748B"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className='mr-9' width="34" height="34" viewBox="0 0 34 34" fill="none">
          <circle cx="17" cy="17" r="16.75" fill="#EFF4FB" stroke="#E2E8F0" strokeWidth="0.5"/>
        </svg>
        <div className='mr-3'>
          <h1 className='text-[14px] text-[#212B36]'>{profile.name}</h1>
          <p className='text-[12px] text-[#637381] ml-[58px]'>{profile.role}</p>
        </div>
        <a href="/Profile"><img src={usermin} alt="" /></a>
      </div>
    </div>
  );
}

export default Navdashh;
