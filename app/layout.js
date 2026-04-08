import "./globals.css";

export const metadata = {
  title: "KAMIL SHOP | Marketplace Terpercaya",
  description: "Belanja mudah dan cepat di Kamil Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="antialiased bg-gray-50">{children}</body>
    </html>
  );
}

