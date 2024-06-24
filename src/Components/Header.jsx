import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.png';

const Header = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('tokenOasis-Destination');
    const dataProfile = localStorage.getItem('profile');

    if (token) {
      setIsLoggedIn(true);
      setProfile(JSON.parse(dataProfile));
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('tokenOasis-Destination');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 flex bg-white z-10">
      <div className="mx-28">
        <img src={logo} alt="" className="w-28 h-[100%]" />
      </div>
      <div className="py-1 mx-36">
        <ul className="flex w-96">
          <li className="m-7 ml-10 text-xl text-gray-400">
            <a href="/" className="hover:text-E tracking-widest relative group">
              Home
              <div className="absolute w-full h-0.5 bg-E/80 scale-x-0 group-hover:scale-x-100" />
            </a>
          </li>
          <li className="m-7 ml-10 text-xl text-gray-400">
            <a href="/Destination" className="hover:text-E tracking-widest relative group">
              Destination
              <div className="absolute w-full h-0.5 bg-E/80 scale-x-0 group-hover:scale-x-100" />
            </a>
          </li>
          <li className="m-7 ml-10 text-xl text-gray-400">
            <a href="/About" className="hover:text-E tracking-widest relative group">
              About
              <div className="absolute w-full h-0.5 bg-E/80 scale-x-0 group-hover:scale-x-100" />
            </a>
          </li>
          <li className="m-7 ml-10 text-xl text-gray-400">
            <a href="/News" className="hover:text-E tracking-widest relative group">
              News
              <div className="absolute w-full h-0.5 bg-E/80 scale-x-0 group-hover:scale-x-100" />
            </a>
          </li>
        </ul>
      </div>
      <div className="py-6 ml-52">
        {isLoggedIn ? (
          <>
            <a href='/Profile' className="text-E mr-8">Hi, {profile.name}!</a>
            <button onClick={handleLogout} className="px-[20px] py-[5px] text-white border-2 border-E bg-E rounded-md">
              Logout
            </button>
            {(profile.role === 'superadmin' || profile.role === 'adminpengelola') && (
              <a href='/Admindashboard' className="ml-5 px-[20px] py-[5px] text-white border-2 border-E bg-E rounded-md">Dashboard</a>
            )}
          </>
        ) : (
          <>
            <a href="/Signup">
              <button className="text-E mr-8 px-[20px] py-[5px] border-2 border-E rounded-md">Sign Up</button>
            </a>
            <a href="/Login">
              <button className="px-[20px] py-[5px] text-white border-2 border-E bg-E rounded-md">Login</button>
            </a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
