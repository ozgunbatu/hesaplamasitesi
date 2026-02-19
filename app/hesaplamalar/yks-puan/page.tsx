'use client';
import { useState } from 'react';
import { hesaplaYKS, YKSNetler } from '@/lib/yks-formulas';
import Link from 'next/link';

export default function YKSHesaplamaPage() {
  const [netler, setNetler] = useState<YKSNetler>({
    tytTurkce: { dogru: 0, yanlis: 0 },
    tytSosyal: { dogru: 0, yanlis: 0 },
    tytMatematik: { dogru: 0, yanlis: 0 },
    tytFen: { dogru: 0, yanlis: 0 },
    diplomaNotu: 80
  });
  
  const [sonuc, setSonuc] = useState<any>(null);
  const [aktifSekme, setAktifSekme] = useState<'TYT' | 'SAY' | 'EA' | 'SOZ'>('TYT');

  const hesapla = () => {
    const result = hesaplaYKS(netler);
    setSonuc(result);
  };

  const InputField = ({ label, ders, field, max }: any) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <input
            type="number"
            min="0"
            max={max}
            placeholder="Doğru"
            value={(netler as any)[ders]?.[field] || ''}
            onChange={(e) => setNetler({...netler, [ders]: {...(netler as any)[ders], [field]: parseInt(e.target.value) || 0}})}
            className="hesaplama-input"
          />
        </div>
        <div>
          <input
            type="number"
            min="0"
            max={max}
            placeholder="Yanlış"
            value={(netler as any)[ders]?.yanlis || ''}
            onChange={(e) => setNetler({...netler, [ders]: {...(netler as any)[ders], yanlis: parseInt(e.target.value) || 0}})}
            className="hesaplama-input"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">🎓 YKS Puan Hesaplama 2025</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ÖSYM'nin resmi formülleriyle TYT, AYT puanlarınızı ve sıralamanızı hesaplayın. 
            2025 güncel katsayılar kullanılmaktadır.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sol: Hesaplama Formu */}
          <div className="lg:col-span-2 space-y-6">
            {/* Sekmeler */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="grid grid-cols-4 gap-3 mb-6">
                {(['TYT', 'SAY', 'EA', 'SOZ'] as const).map(sekme => (
                  <button
                    key={sekme}
                    onClick={() => setAktifSekme(sekme)}
                    className={`py-3 rounded-lg font-bold transition-all ${
                      aktifSekme === sekme
                        ? 'bg-gradient-to-r from-primary-600 to-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {sekme}
                  </button>
                ))}
              </div>

              {/* TYT */}
              {aktifSekme === 'TYT' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Temel Yeterlilik Testi</h3>
                  <InputField label="Türkçe (40 soru)" ders="tytTurkce" field="dogru" max={40} />
                  <InputField label="Sosyal Bilimler (20 soru)" ders="tytSosyal" field="dogru" max={20} />
                  <InputField label="Matematik (40 soru)" ders="tytMatematik" field="dogru" max={40} />
                  <InputField label="Fen Bilimleri (20 soru)" ders="tytFen" field="dogru" max={20} />
                </div>
              )}

              {/* AYT Sayısal */}
              {aktifSekme === 'SAY' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">AYT - Sayısal</h3>
                  <InputField label="Matematik (40 soru)" ders="aytMatematik" field="dogru" max={40} />
                  <InputField label="Fizik (14 soru)" ders="aytFizik" field="dogru" max={14} />
                  <InputField label="Kimya (13 soru)" ders="aytKimya" field="dogru" max={13} />
                  <InputField label="Biyoloji (13 soru)" ders="aytBiyoloji" field="dogru" max={13} />
                </div>
              )}

              {/* Diploma Notu */}
              <div className="mt-6 pt-6 border-t">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Diploma Notu veya OBP (50-100 veya 250-500)
                </label>
                <input
                  type="number"
                  min="50"
                  max="500"
                  value={netler.diplomaNotu}
                  onChange={(e) => setNetler({...netler, diplomaNotu: parseFloat(e.target.value)})}
                  className="hesaplama-input"
                />
                <p className="text-sm text-gray-500 mt-2">
                  50-100 arası: Diploma notu • 250-500 arası: Doğrudan OBP
                </p>
              </div>

              <button onClick={hesapla} className="w-full hesaplama-btn mt-6">
                📊 Puanı Hesapla
              </button>
            </div>
          </div>

          {/* Sağ: Sonuçlar */}
          <div className="space-y-6">
            {sonuc ? (
              <>
                <div className="bg-gradient-to-br from-primary-600 to-blue-600 text-white rounded-2xl shadow-2xl p-6">
                  <h3 className="text-2xl font-bold mb-6">🎯 Sonuçlar</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                      <div className="text-sm opacity-90 mb-1">TYT Ham Puan</div>
                      <div className="text-3xl font-bold">{sonuc.tytHam}</div>
                      <div className="text-sm opacity-75 mt-1">Toplam Net: {sonuc.netler.toplam}</div>
                    </div>

                    {sonuc.sayHam > 0 && (
                      <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                        <div className="text-sm opacity-90 mb-1">SAY Ham Puan</div>
                        <div className="text-3xl font-bold">{sonuc.sayHam}</div>
                      </div>
                    )}

                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                      <div className="text-sm opacity-90 mb-1">OBP Ek Puan</div>
                      <div className="text-2xl font-bold">{sonuc.obpEkPuan}</div>
                      <div className="text-xs opacity-75 mt-1">OBP: {sonuc.obp}</div>
                    </div>

                    {sonuc.yTyt > 0 && (
                      <div className="bg-green-500/20 rounded-lg p-4 backdrop-blur border-2 border-green-300">
                        <div className="text-sm opacity-90 mb-1">Y-TYT Yerleştirme</div>
                        <div className="text-4xl font-bold">{sonuc.yTyt}</div>
                      </div>
                    )}

                    {sonuc.ySay > 0 && (
                      <div className="bg-green-500/20 rounded-lg p-4 backdrop-blur border-2 border-green-300">
                        <div className="text-sm opacity-90 mb-1">Y-SAY Yerleştirme</div>
                        <div className="text-4xl font-bold">{sonuc.ySay}</div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h4 className="font-bold text-lg mb-4">📚 Net Detayları</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Türkçe:</span>
                      <span className="font-bold">{sonuc.netler.tytTurkce}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sosyal:</span>
                      <span className="font-bold">{sonuc.netler.tytSosyal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Matematik:</span>
                      <span className="font-bold">{sonuc.netler.tytMatematik}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fen:</span>
                      <span className="font-bold">{sonuc.netler.tytFen}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t font-bold text-primary-600">
                      <span>Toplam:</span>
                      <span>{sonuc.netler.toplam}</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center text-gray-500">
                <div className="text-6xl mb-4">📊</div>
                <p>Hesaplama yapmak için değerleri girin ve "Puanı Hesapla" butonuna tıklayın.</p>
              </div>
            )}

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h4 className="font-bold text-lg mb-3">ℹ️ Bilgi</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✅ 2025 ÖSYM katsayıları</li>
                <li>✅ Gerçek formüller</li>
                <li>✅ OBP dahil hesaplama</li>
                <li>✅ Net bazlı detay</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bilgilendirme */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-4">❓ YKS Puan Hesaplama Hakkında</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-bold mb-2">Net Nasıl Hesaplanır?</h3>
              <p className="text-sm">Her testte: <span className="font-mono">Net = Doğru - (Yanlış × 0.25)</span></p>
              <p className="text-sm mt-2">4 yanlış 1 doğruyu götürür. Net negatif olamaz.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">OBP Nedir?</h3>
              <p className="text-sm">Ortaöğretim Başarı Puanı. Diploma notunuzun %60'ı alınır ve 0-500 arasına ölçeklendirilir.</p>
              <p className="text-sm mt-2 font-mono">OBP = Diploma Notu × 0.6 × 10</p>
            </div>
          </div>
        </div>

        {/* İlgili Hesaplamalar */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">🔗 İlgili Hesaplamalar</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { href: '/hesaplamalar/lgs-puan', icon: '🏫', baslik: 'LGS Puan' },
              { href: '/hesaplamalar/kpss-puan', icon: '📋', baslik: 'KPSS Puan' },
              { href: '/hesaplamalar/ales-puan', icon: '🎯', baslik: 'ALES Puan' },
              { href: '/hesaplamalar/dgs-puan', icon: '📈', baslik: 'DGS Puan' }
            ].map(h => (
              <Link key={h.href} href={h.href} className="p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all text-center">
                <div className="text-3xl mb-2">{h.icon}</div>
                <div className="font-semibold">{h.baslik}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
