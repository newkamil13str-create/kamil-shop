"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';

const PRODUCTS = [
  { id: 1, name: "Voucher Game MLBB", price: 50000, desc: "Top up kilat 24 jam" },
  { id: 2, name: "Saldo E-Wallet", price: 100000, desc: "Proses otomatis via Pakasir" },
  { id: 3, name: "Premium Account", price: 25000, desc: "Streaming tanpa gangguan" },
];

export default function Home() {
  const [loading, setLoading] = useState(false);

  const buyAction = async (product) => {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        body: JSON.stringify({ amount: product.price, customerName: "Customer Kamil Shop" }),
      });
      const resData = await res.json();
      if (resData.data?.checkout_url) window.location.href = resData.data.checkout_url;
    } catch (e) {
      alert("Gagal koneksi ke server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PRODUCTS.map(p => (
            <div key={p.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-full h-32 bg-gray-200 rounded-xl mb-4 animate-pulse"></div>
                <h3 className="font-bold text-gray-800">{p.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{p.desc}</p>
              </div>
              <div>
                <p className="text-blue-600 font-bold mb-3">Rp {p.price.toLocaleString('id-ID')}</p>
                <button 
                  onClick={() => buyAction(p)}
                  disabled={loading}
                  className="w-full bg-blue-50 text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
                >
                  {loading ? "..." : "Beli"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
    }
    
