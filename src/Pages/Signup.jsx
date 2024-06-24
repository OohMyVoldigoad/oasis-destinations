import React, { useState } from 'react';
import rio from '../Assets/rio.png';
import { useNavigate } from 'react-router-dom';
import rio1 from '../Assets/rio1.png';

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        nik: '',
        no: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Signup successful:', data); // handle success response
                navigate('/Login');
            } else {
                console.error('Error:', response.statusText); // handle error response
            }
        } catch (error) {
            console.error('Error signing up', error); // handle error response
        }
    };

    return (
        <div className=''>
            <img src={rio} alt="" className='w-[100%] h-[1026px]' />
            <div className='absolute -translate-y-[880px] translate-x-[300px] flex'>
                <div className='w-[539px] h-[715px]'>
                    <img src={rio1} alt="" className='rounded-r-xl' />
                    <a href="/Login">
                        <button className="w-[120px] py-2 text-E font-bold border-2 -translate-y-[300px] border-E rounded-[20px] mt-3 ml-52">Masuk</button>
                    </a>
                    <h1 className='text-E text-[40px] font-bold mt-48 mx-24 -translate-y-[740px] text-center'>Hello, Friends!</h1>
                    <p className='text-E mt-48 mx-24 -translate-y-[920px] text-center'>Silakan masukkan detail diri Anda untuk mendaftar dan menjadi bagian dari komunitas kami</p>
                    <p className='text-E mt-48 mx-24 -translate-y-[1090px] text-center font-semibold'>Sudah memiliki akun?</p>
                </div>
                <div className='w-[539px] h-[715px] bg-white rounded-l-xl'>
                    <h1 className='text-E text-[40px] font-bold mt-20 text-center'>Membuat Akun</h1>
                    <p className='text-center text-gray-400'>Gunakan akun email anda:</p>
                    <form onSubmit={handleSubmit} className='mx-16 mt-4'>
                        <input
                            type="text"
                            id='name'
                            name='name'
                            className='w-[400px] h-12 px-4 py-2 border-2 border-E rounded-md outline-none'
                            placeholder='Nama'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            id='nik'
                            name='nik'
                            className='w-[400px] h-12 px-4 py-2 border-2 border-E rounded-md outline-none mt-4'
                            placeholder='Nik'
                            value={formData.nik}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            id='no'
                            name='no'
                            className='w-[400px] h-12 px-4 py-2 border-2 border-E rounded-md outline-none mt-4'
                            placeholder='No. Telp'
                            value={formData.no}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            id='email'
                            name='email'
                            className='w-[400px] h-12 px-4 py-2 border-2 border-E rounded-md outline-none mt-4'
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            id='password'
                            name='password'
                            className='w-[400px] h-12 px-4 py-2 border-2 border-E rounded-md outline-none mt-4'
                            placeholder='Password'
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className="w-[180px] py-2 text-white border-2 border-E bg-E rounded-[20px] mt-8 ml-44">Daftar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
