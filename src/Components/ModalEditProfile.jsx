import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Modal = ({ isOpen, onClose, profile, onSave }) => {

    const [formData, setFormData] = React.useState({
        name: profile.name || '',
        no: profile.no || '',
        nik: profile.nik || '',
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userId = profile.id; // Pastikan ID pengguna ada di profil
            const response = await axios.post('http://localhost:3000/api/edit-user', { userId, ...formData });
        if (response.status === 200) {
            onSave(formData);
            console.log('kelaz')
            onClose();
        } else {
            console.error('Error updating profile:', response.data.message);
        }
        } catch (error) {
        console.error('Error updating profile:', error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg">
            <h2 className="text-2xl mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Nik</label>
                <textarea
                name="nik"
                value={formData.nik}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">No</label>
                <textarea
                name="no"
                value={formData.no}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
                />
            </div>
            <div className="flex justify-end">
                <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 text-black rounded-md mr-2"
                >
                Cancel
                </button>
                <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                Save
                </button>
            </div>
            </form>
        </div>
        </div>
    );
};

export default Modal;
