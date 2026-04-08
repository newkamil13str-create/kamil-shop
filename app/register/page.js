"use client";
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function RegisterUser() {
  const handleRegister = (e) => {
    e.preventDefault();
    alert("Ini tampilan UI. Untuk fungsi asli, sambungkan ke Database backend!");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Buat Akun Baru</h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
              <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Kamil" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="email@contoh.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="••••••••" />
            </div>
            <button type="submit" className="w-full bg-green-600 text-white py-2.5 rounded-lg font-semibold hover:bg-green-700 transition">Daftar Akun</button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Sudah punya akun? <Link href="/login" className="text-blue-600 font-semibold hover:underline">Login di sini</Link>
          </p>
        </div>
      </div>
    </>
  );
    }
    
