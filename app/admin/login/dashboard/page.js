"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  LogOut, 
  ExternalLink,
  Plus,
  Trash2,
  CheckCircle2,
  Clock
} from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load Data dari Pakasir (Simulasi API Route yang kita buat sebelumnya)
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/checker'); // Menarik data transaksi real
        const result = await res.json();
        // Simulasi data jika API belum live
        setTransactions([
          { id: "TX-9921", customer: "Budi Santoso", item: "Diamond MLBB", total: 50000, status: "PAID", date: "2024-05-20" },
          { id: "TX-9922", customer: "Siti Aminah", item: "Premium Spotify", total: 25000, status: "PENDING", date: "2024-05-21" },
        ]);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex text-slate-800">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-72 bg-[#0f172a] text-white flex flex-col sticky top-0 h-screen shadow-2xl">
        <div className="p-8 border-b border-slate-700/50">
          <h2 className="text-2xl font-black text-blue-500 tracking-tighter">KAMIL ADMIN</h2>
          <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">Control Panel</p>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'dashboard' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <LayoutDashboard size={20} /> <span className="font-medium">Dashboard</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('produk')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'produk' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <Package size={20} /> <span className="font-medium">Kelola Produk</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('users')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'users' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <Users size={20} /> <span className="font-medium">Daftar User</span>
          </button>
        </nav>

        <div className="p-6 border-t border-slate-700/50 space-y-3">
          <Link href="/" className="flex items-center justify-center gap-2 w-full bg-slate-800 py-3 rounded-xl text-sm font-bold hover:bg-slate-700 transition">
            <ExternalLink size={16} /> Lihat Toko
          </Link>
          <Link href="/admin/login" className="flex items-center justify-center gap-2 w-full bg-red-500/10 text-red-500 py-3 rounded-xl text-sm font-bold hover:bg-red-500 hover:text-white transition">
            <LogOut size={16} /> Keluar
          </Link>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-10 overflow-y-auto">
        
        {/* Konten Dashboard */}
        {activeTab === 'dashboard' && (
          <div className="animate-in fade-in duration-500">
            <header className="mb-10">
              <h1 className="text-4xl font-extrabold tracking-tight">Overview</h1>
              <p className="text-slate-500 font-medium">Monitoring transaksi real-time dari Pakasir.</p>
            </header>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { label: 'Pendapatan (PAID)', val: 'Rp 1.250.000', color: 'text-green-600' },
                { label: 'Total Pesanan', val: '48 Transaksi', color: 'text-blue-600' },
                { label: 'User Aktif', val: '124 Orang', color: 'text-purple-600' }
              ].map((s, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/60 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:scale-110"></div>
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">{s.label}</p>
                  <h3 className={`text-3xl font-black mt-2 ${s.color}`}>{s.val}</h3>
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200/60 overflow-hidden">
              <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-lg">Transaksi Terbaru</h3>
                <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-bold">API Auto-Check Aktif</span>
              </div>
              <table className="w-full">
                <thead className="bg-slate-50/50 text-slate-400 text-xs uppercase font-bold">
                  <tr>
                    <th className="px-8 py-4">Invoice</th>
                    <th className="px-8 py-4">Customer</th>
                    <th className="px-8 py-4">Nominal</th>
                    <th className="px-8 py-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {transactions.map((t, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition">
                      <td className="px-8 py-5 font-mono text-sm text-blue-600">{t.id}</td>
                      <td className="px-8 py-5 font-bold text-slate-700">{t.customer}</td>
                      <td className="px-8 py-5 font-black">Rp {t.total.toLocaleString()}</td>
                      <td className="px-8 py-5">
                        <div className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black uppercase ${t.status === 'PAID' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                          {t.status === 'PAID' ? <CheckCircle2 size={14} /> : <Clock size={14} />}
                          {t.status}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Konten Kelola Produk */}
        {activeTab === 'produk' && (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight">Kelola Produk</h1>
                <p className="text-slate-500 font-medium">Tambah atau hapus produk dari katalog toko.</p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-700 transition shadow-lg shadow-blue-500/20">
                <Plus size={20} /> Tambah Produk
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {['Voucher MLBB 500 Diamonds', 'Premium Netflix 1 Bulan', 'Spotify Family Plan'].map((p, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center justify-between hover:border-blue-300 transition">
                   <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 font-bold">IMG</div>
                      <div>
                        <h4 className="font-bold text-lg">{p}</h4>
                        <p className="text-blue-600 font-bold text-sm">Rp 125.000</p>
                      </div>
                   </div>
                   <div className="flex gap-2">
                      <button className="p-3 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition">Edit</button>
                      <button className="p-3 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition">
                        <Trash2 size={20} />
                      </button>
                   </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Konten Daftar User */}
        {activeTab === 'users' && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 text-center py-20">
            <Users size={48} className="mx-auto text-slate-300 mb-4" />
            <h2 className="text-2xl font-bold">Manajemen User</h2>
            <p className="text-slate-500 max-w-xs mx-auto mt-2">Fitur ini memerlukan koneksi Database (Supabase/MySQL) untuk menampilkan data user terdaftar.</p>
          </div>
        )}

      </main>
    </div>
  );
    }
    
