// lib/pakasir.js
const API_KEY = process.env.PAKASIR_API_KEY;
const SLUG = process.env.PAKASIR_SLUG;

export const Pakasir = {
  // Fungsi Cek Status Transaksi
  checkStatus: async (referenceId) => {
    try {
      const response = await fetch(`https://app.pakasir.com/api/v1/check-transaction/${referenceId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Accept': 'application/json'
        }
      });
      return await response.json();
    } catch (error) {
      console.error("Pakasir Check Error:", error);
      return { status: 'error', message: error.message };
    }
  },

  // Fungsi List Transaksi (Untuk Admin Dashboard)
  getTransactionList: async () => {
    try {
      const response = await fetch(`https://app.pakasir.com/api/v1/transactions?slug=${SLUG}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Accept': 'application/json'
        }
      });
      return await response.json();
    } catch (error) {
      return { status: 'error', message: error.message };
    }
  }
};
      
