import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
export const metadata: Metadata = {
  title: "NetHesap - 100+ Ücretsiz Hesaplama Aracı | YKS, KPSS, Kredi",
  description: "YKS, KPSS, LGS puan hesaplama, kredi, faiz, vergi ve 100+ ücretsiz hesaplama aracı."
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="tr"><body><header className="bg-white border-b sticky top-0 z-50 shadow-sm"><div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center"><Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">NetHesap</Link><nav className="hidden md:flex space-x-8"><Link href="/" className="text-gray-700 hover:text-primary-600">Ana Sayfa</Link><Link href="/hesaplamalar" className="text-gray-700 hover:text-primary-600">Tüm Hesaplamalar</Link><Link href="/hesaplamalar/yks-puan" className="text-gray-700 hover:text-primary-600">YKS</Link></nav></div></header><main>{children}</main><footer className="bg-gray-900 text-white py-12 mt-20"><div className="max-w-7xl mx-auto px-4"><div className="text-center"><div className="text-2xl font-bold mb-4">NetHesap</div><p className="text-gray-400">© 2025 NetHesap • 100+ Ücretsiz Hesaplama</p></div></div></footer></body></html>);
}
