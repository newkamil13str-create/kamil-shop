"use client";
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    // Dummy bypass untuk ngecek tampilan dashboard
    router.push('/admin/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="max-w-sm w-full bg-gray-800 rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-white">ADMIN PANEL</h2>
          <p className="text-gray-400 text-sm mt-1">Authorized Personnel Only</p>
        </div>
        <form onSubmit={handleAdminLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Username Admin</label>
            <input type="text" required className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input type="password" required className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-bold hover:bg-blue-700 transition">Masuk Dashboard</button>
        </form>
      </div>
    </div>
  );
    }
    
