import { NextResponse } from 'next/server';
import { Pakasir } from '@/lib/pakasir';

export async function GET(req) {
  // Ambil ID Transaksi dari URL query: /api/checker?ref=ID_TRANSAKSI
  const { searchParams } = new URL(req.url);
  const referenceId = searchParams.get('ref');

  if (!referenceId) {
    return NextResponse.json({ status: 'error', message: 'Reference ID diperlukan' }, { status: 400 });
  }

  const result = await Pakasir.checkStatus(referenceId);

  // Logika Bisnis: Jika sukses, lu bisa tambahin fungsi kirim produk di sini
  if (result.status === 'success' && result.data.payment_status === 'PAID') {
    return NextResponse.json({
      status: 'paid',
      message: 'Pembayaran Diterima! Produk akan segera dikirim.',
      details: result.data
    });
  }

  return NextResponse.json({
    status: 'pending',
    message: 'Menunggu pembayaran...',
    details: result.data
  });
      }

