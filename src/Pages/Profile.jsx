import React, { useEffect, useState } from 'react';
import meksico from '../Assets/meksico.png'; // Pastikan path ini benar
import pr from '../Assets/pr.png'; // Pastikan path ini benar
import pro from '../Assets/pro.png'; // Pastikan path ini benar
import Modal from '../Components/ModalEditProfile';
import Header from '../Components/Header';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleSave = (updatedProfile) => {
    setProfile(updatedProfile);
    localStorage.setItem('profile', JSON.stringify(updatedProfile));
  };

  return (
    <>
    <Header></Header>
    <div>
      <img src={meksico} alt="" className='w-[100%] h-auto' />
      <div className='w-[1106px] h-[252px] -translate-y-[1020px] ml-[280px]'>
        <img src={pr} alt="" className='w-[100%] rounded-xl' />
      </div>
      <div className='w-[1106px] h-[292px] -translate-y-[1020px] ml-[280px] bg-white'>
        <img src={pro} alt="" className='rounded-[200px] w-[200px] h-[200px] border-4 -translate-y-32 ml-[470px]' />
        <h1 className='text-[35px] font-medium text-gray-500 -translate-y-32 ml-[450px]'>{profile.name || 'Nama Pengguna'}</h1>
        <p className='text-gray-600 -translate-y-32 ml-[435px]'>NIK : {profile.nik}</p>
        <p className='text-gray-600 -translate-y-32 ml-[435px]'>Nomor : {profile.no}</p>
        <h1 className='text-[40px] text-gray-500 -translate-y-28 ml-[380px]'>19,5 K</h1>
        <h1 className='text-[40px] text-gray-500 -translate-y-[170px] ml-[580px]'>5</h1>
        <h1 className='text-[40px] text-gray-500 -translate-y-[230px] ml-[700px]'>35</h1>
        <button
          className="px-[20px] py-[5px] text-white border-2 border-E bg-E rounded-md"
          onClick={() => setIsModalOpen(true)}
        >
          Edit Profile
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        profile={profile}
        onSave={handleSave}
      />
    </div>
    </>
  );
}

export default Profile;
