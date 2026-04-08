import Link from 'next/link';
import { ShoppingBag, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-blue-600 tracking-tighter">
          KAMIL SHOP
        </Link>
        <div className="hidden md:flex flex-1 mx-8 relative">
          <input type="text" placeholder="Cari produk..." className="w-full bg-gray-100 rounded-full py-2 px-10 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
        <div className="flex items-center gap-3">
          <Link href="/admin/login" className="text-sm text-gray-500 hover:text-blue-600 mr-2">Admin</Link>
          <Link href="/login" className="text-gray-600 hover:text-blue-600 font-medium">Login</Link>
          <Link href="/register" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition">Daftar</Link>
        </div>
      </div>
    </nav>
  );
    }
    
