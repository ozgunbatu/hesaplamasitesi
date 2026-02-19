export interface Hesaplama {
  id: string;
  baslik: string;
  aciklama: string;
  kategori: string;
  icon: string;
  populer?: boolean;
}

export const kategoriler = [
  { id: 'sinav', baslik: 'Sınav Hesaplamaları', icon: '📚', renk: 'blue' },
  { id: 'finansal', baslik: 'Finansal Hesaplamalar', icon: '💰', renk: 'green' },
  { id: 'saglik', baslik: 'Sağlık Hesaplamaları', icon: '❤️', renk: 'red' },
  { id: 'matematik', baslik: 'Matematik', icon: '🔢', renk: 'purple' },
  { id: 'zaman', baslik: 'Tarih & Zaman', icon: '⏰', renk: 'orange' },
  { id: 'vergi', baslik: 'Vergi', icon: '📊', renk: 'yellow' },
  { id: 'muhasebe', baslik: 'Muhasebe & Maaş', icon: '💼', renk: 'indigo' },
  { id: 'seyahat', baslik: 'Seyahat', icon: '✈️', renk: 'cyan' },
  { id: 'ticari', baslik: 'Ticari', icon: '🏪', renk: 'pink' },
  { id: 'diger', baslik: 'Diğer', icon: '⚡', renk: 'gray' }
];

export const hesaplamalar: Hesaplama[] = [
  // Sınav Hesaplamaları (20)
  { id: 'yks-puan', baslik: 'YKS Puan Hesaplama', aciklama: 'TYT, AYT, YDT puan ve sıralama', kategori: 'sinav', icon: '🎓', populer: true },
  { id: 'tyt-puan', baslik: 'TYT Puan Hesaplama', aciklama: 'Temel Yeterlilik Testi', kategori: 'sinav', icon: '📖' },
  { id: 'ayt-puan', baslik: 'AYT Puan Hesaplama', aciklama: 'Alan Yeterlilik Testi', kategori: 'sinav', icon: '📚' },
  { id: 'lgs-puan', baslik: 'LGS Puan Hesaplama', aciklama: 'Liseye Geçiş Sınavı puanı', kategori: 'sinav', icon: '🏫', populer: true },
  { id: 'kpss-puan', baslik: 'KPSS Puan Hesaplama', aciklama: 'Kamu personel sınavı', kategori: 'sinav', icon: '📋', populer: true },
  { id: 'ales-puan', baslik: 'ALES Puan Hesaplama', aciklama: 'Akademik personel sınavı', kategori: 'sinav', icon: '🎯' },
  { id: 'dgs-puan', baslik: 'DGS Puan Hesaplama', aciklama: 'Dikey Geçiş Sınavı', kategori: 'sinav', icon: '📈' },
  { id: 'yds-puan', baslik: 'YDS Puan Hesaplama', aciklama: 'Yabancı Dil Sınavı', kategori: 'sinav', icon: '🌐' },
  { id: 'obp-hesaplama', baslik: 'OBP Hesaplama', aciklama: 'Ortaöğretim Başarı Puanı', kategori: 'sinav', icon: '📊' },
  { id: 'universite-ortalama', baslik: 'Üniversite Not Ortalaması', aciklama: 'GPA hesaplama', kategori: 'sinav', icon: '🎓' },
  { id: 'lise-ortalama', baslik: 'Lise Not Ortalaması', aciklama: 'Lise diploma notu', kategori: 'sinav', icon: '📚' },
  { id: 'e-okul-not', baslik: 'E-Okul Not Hesaplama', aciklama: 'Sınıf geçme notu', kategori: 'sinav', icon: '🏫' },
  
  // Finansal (25)
  { id: 'faiz-hesaplama', baslik: 'Faiz Hesaplama', aciklama: 'Basit ve bileşik faiz', kategori: 'finansal', icon: '💵', populer: true },
  { id: 'kredi-hesaplama', baslik: 'Kredi Hesaplama', aciklama: 'Taksit ve toplam ödeme', kategori: 'finansal', icon: '💳', populer: true },
  { id: 'ihtiyac-kredisi', baslik: 'İhtiyaç Kredisi', aciklama: 'Tüketici kredisi hesaplama', kategori: 'finansal', icon: '💰' },
  { id: 'konut-kredisi', baslik: 'Konut Kredisi', aciklama: 'Mortgage hesaplama', kategori: 'finansal', icon: '🏠', populer: true },
  { id: 'tasit-kredisi', baslik: 'Taşıt Kredisi', aciklama: 'Araç kredisi hesaplama', kategori: 'finansal', icon: '🚗' },
  { id: 'doviz-cevirici', baslik: 'Döviz Çevirici', aciklama: 'Güncel kurlarla çeviri', kategori: 'finansal', icon: '💱', populer: true },
  { id: 'altin-hesaplama', baslik: 'Altın Hesaplama', aciklama: 'Gram altın fiyatı', kategori: 'finansal', icon: '🥇' },
  { id: 'mevduat-faizi', baslik: 'Mevduat Faizi', aciklama: 'Vadeli mevduat getirisi', kategori: 'finansal', icon: '💎' },
  { id: 'enflasyon', baslik: 'Enflasyon Hesaplama', aciklama: 'Satın alma gücü', kategori: 'finansal', icon: '📉' },
  { id: 'birikim', baslik: 'Birikim Hesaplama', aciklama: 'Düzenli tasarruf', kategori: 'finansal', icon: '🏦' },
  { id: 'emeklilik', baslik: 'Emeklilik Hesaplama', aciklama: 'Emeklilik primi ve yaş', kategori: 'finansal', icon: '👴' },
  { id: 'yuzde', baslik: 'Yüzde Hesaplama', aciklama: 'Yüzdelik hesaplamalar', kategori: 'finansal', icon: '%', populer: true },
  { id: 'kar-zarar', baslik: 'Kâr/Zarar Hesaplama', aciklama: 'Kârlılık analizi', kategori: 'finansal', icon: '📊' },
  { id: 'indirim', baslik: 'İndirim Hesaplama', aciklama: 'İndirimli fiyat', kategori: 'finansal', icon: '🏷️' },
  
  // Sağlık (20)
  { id: 'bmi', baslik: 'Vücut Kitle Endeksi (BMI)', aciklama: 'Kilo-boy oranı', kategori: 'saglik', icon: '⚖️', populer: true },
  { id: 'ideal-kilo', baslik: 'İdeal Kilo Hesaplama', aciklama: 'Hedef kilo belirleme', kategori: 'saglik', icon: '🎯', populer: true },
  { id: 'kalori', baslik: 'Günlük Kalori İhtiyacı', aciklama: 'Kalori hesaplama', kategori: 'saglik', icon: '🍎', populer: true },
  { id: 'su-ihtiyaci', baslik: 'Günlük Su İhtiyacı', aciklama: 'Su tüketimi hesaplama', kategori: 'saglik', icon: '💧' },
  { id: 'protein', baslik: 'Günlük Protein İhtiyacı', aciklama: 'Protein miktarı', kategori: 'saglik', icon: '🥩' },
  { id: 'hamilelik', baslik: 'Hamilelik Hesaplama', aciklama: 'Doğum tarihi tahmini', kategori: 'saglik', icon: '🤰' },
  { id: 'dogum-tarihi', baslik: 'Doğum Tarihi Hesaplama', aciklama: 'Tahmini doğum günü', kategori: 'saglik', icon: '👶' },
  { id: 'bebek-kilo', baslik: 'Bebek Kilosu Hesaplama', aciklama: 'Bebek gelişim takibi', kategori: 'saglik', icon: '👼' },
  { id: 'adet-hesaplama', baslik: 'Adet Günü Hesaplama', aciklama: 'Menstrüasyon takvimi', kategori: 'saglik', icon: '📅' },
  { id: 'yumurtlama', baslik: 'Yumurtlama Dönemi', aciklama: 'Ovülasyon hesaplama', kategori: 'saglik', icon: '🌸' },
  
  // Matematik (20)
  { id: 'alan-hesaplama', baslik: 'Alan Hesaplama', aciklama: 'Geometrik şekil alanları', kategori: 'matematik', icon: '📐', populer: true },
  { id: 'hacim', baslik: 'Hacim Hesaplama', aciklama: 'Cisim hacimleri', kategori: 'matematik', icon: '📦' },
  { id: 'cevre', baslik: 'Çevre Hesaplama', aciklama: 'Şekil çevreleri', kategori: 'matematik', icon: '⭕' },
  { id: 'metrekare', baslik: 'Metrekare Hesaplama', aciklama: 'Alan birimi çevirme', kategori: 'matematik', icon: '📏', populer: true },
  { id: 'karekök', baslik: 'Karekök Hesaplama', aciklama: 'Köklü sayılar', kategori: 'matematik', icon: '√' },
  { id: 'üs', baslik: 'Üs Hesaplama', aciklama: 'Üslü sayılar', kategori: 'matematik', icon: 'ⁿ' },
  { id: 'faktoriyel', baslik: 'Faktöriyel Hesaplama', aciklama: 'n! hesaplama', kategori: 'matematik', icon: '!' },
  { id: 'ebob-ekok', baslik: 'EBOB-EKOK Hesaplama', aciklama: 'En büyük/küçük ortak', kategori: 'matematik', icon: '🔢' },
  { id: 'oran-orantı', baslik: 'Oran-Orantı', aciklama: 'Oran hesaplama', kategori: 'matematik', icon: ':' },
  { id: 'kombinasyon', baslik: 'Kombinasyon', aciklama: 'Seçim sayısı', kategori: 'matematik', icon: 'C' },
  { id: 'permütasyon', baslik: 'Permütasyon', aciklama: 'Sıralama sayısı', kategori: 'matematik', icon: 'P' },
  { id: 'standart-sapma', baslik: 'Standart Sapma', aciklama: 'İstatistik hesaplama', kategori: 'matematik', icon: 'σ' },
  
  // Tarih & Zaman (15)
  { id: 'yas-hesaplama', baslik: 'Yaş Hesaplama', aciklama: 'Doğum tarihinden yaş', kategori: 'zaman', icon: '🎂', populer: true },
  { id: 'tarih-farki', baslik: 'İki Tarih Arası Gün', aciklama: 'Gün farkı hesaplama', kategori: 'zaman', icon: '📆' },
  { id: 'gun-ekleme', baslik: 'Tarihe Gün Ekleme', aciklama: 'İleri tarih hesaplama', kategori: 'zaman', icon: '➕' },
  { id: 'hangi-gun', baslik: 'Hangi Gün?', aciklama: 'Tarihin günü', kategori: 'zaman', icon: '🗓️' },
  { id: 'hafta-hesaplama', baslik: 'Hafta Hesaplama', aciklama: 'Yılın kaçıncı haftası', kategori: 'zaman', icon: '📅' },
  { id: 'is-gunu', baslik: 'İş Günü Hesaplama', aciklama: 'Çalışma günü sayısı', kategori: 'zaman', icon: '💼' },
  { id: 'vade', baslik: 'Vade Hesaplama', aciklama: 'Ödeme vadesi', kategori: 'zaman', icon: '📝' },
  { id: 'saat-farki', baslik: 'Saat Farkı', aciklama: 'Zaman dilimi farkı', kategori: 'zaman', icon: '🌍' },
  
  // Vergi (12)
  { id: 'kdv', baslik: 'KDV Hesaplama', aciklama: 'KDV dahil/hariç fiyat', kategori: 'vergi', icon: '🧾', populer: true },
  { id: 'gelir-vergisi', baslik: 'Gelir Vergisi', aciklama: 'Maaş vergisi hesaplama', kategori: 'vergi', icon: '💰' },
  { id: 'mtv', baslik: 'MTV Hesaplama', aciklama: 'Motorlu taşıt vergisi', kategori: 'vergi', icon: '🚗', populer: true },
  { id: 'emlak-vergisi', baslik: 'Emlak Vergisi', aciklama: 'Gayrimenkul vergisi', kategori: 'vergi', icon: '🏠' },
  { id: 'damga-vergisi', baslik: 'Damga Vergisi', aciklama: 'Sözleşme vergisi', kategori: 'vergi', icon: '📄' },
  { id: 'gumruk-vergisi', baslik: 'Gümrük Vergisi', aciklama: 'İthalat vergisi', kategori: 'vergi', icon: '📦' },
  { id: 'stopaj', baslik: 'Kira Stopaj', aciklama: 'Kira stopaj hesaplama', kategori: 'vergi', icon: '🏢' },
  
  // Muhasebe & Maaş (15)
  { id: 'maas-hesaplama', baslik: 'Maaş Hesaplama', aciklama: 'Net-brüt maaş', kategori: 'muhasebe', icon: '💵', populer: true },
  { id: 'brut-net', baslik: 'Brüt Net Hesaplama', aciklama: 'Maaş dönüşümü', kategori: 'muhasebe', icon: '💰' },
  { id: 'asgari-ucret', baslik: 'Asgari Ücret', aciklama: 'Güncel asgari ücret', kategori: 'muhasebe', icon: '💼' },
  { id: 'fazla-mesai', baslik: 'Fazla Mesai Ücreti', aciklama: 'Ek çalışma ücreti', kategori: 'muhasebe', icon: '⏰' },
  { id: 'kidem-tazminat', baslik: 'Kıdem Tazminatı', aciklama: 'İşten ayrılma tazminatı', kategori: 'muhasebe', icon: '💸' },
  { id: 'ihbar-tazminat', baslik: 'İhbar Tazminatı', aciklama: 'Bildirim süresi tazminatı', kategori: 'muhasebe', icon: '📋' },
  { id: 'yillik-izin', baslik: 'Yıllık İzin Hesaplama', aciklama: 'İzin hakkı belirleme', kategori: 'muhasebe', icon: '🏖️' },
  { id: 'issizlik-maasi', baslik: 'İşsizlik Maaşı', aciklama: 'İşsizlik ödeneği', kategori: 'muhasebe', icon: '💼' },
  
  // Seyahat (10)
  { id: 'mesafe', baslik: 'Mesafe Hesaplama', aciklama: 'Şehirler arası mesafe', kategori: 'seyahat', icon: '🗺️', populer: true },
  { id: 'yakit-tuketim', baslik: 'Yakıt Tüketimi', aciklama: '100km tüketim', kategori: 'seyahat', icon: '⛽', populer: true },
  { id: 'yol-masrafi', baslik: 'Yol Masrafı', aciklama: 'Seyahat maliyeti', kategori: 'seyahat', icon: '💵' },
  { id: 'hiz-zaman', baslik: 'Hız-Zaman-Yol', aciklama: 'Yol süresi hesaplama', kategori: 'seyahat', icon: '🚗' },
  { id: 'taksi-ucreti', baslik: 'Taksi Ücreti', aciklama: 'Taksi ücret tahmini', kategori: 'seyahat', icon: '🚕' },
  
  // Ticari (8)
  { id: 'kar-marji', baslik: 'Kâr Marjı', aciklama: 'Kârlılık yüzdesi', kategori: 'ticari', icon: '📈' },
  { id: 'fiyat-belirleme', baslik: 'Fiyat Belirleme', aciklama: 'Satış fiyatı hesaplama', kategori: 'ticari', icon: '💲' },
  { id: 'tapu-harci', baslik: 'Tapu Harcı', aciklama: 'Emlak alım satım harcı', kategori: 'ticari', icon: '📜' },
  { id: 'kargo-ucret', baslik: 'Kargo Ücreti', aciklama: 'Kargo maliyet hesaplama', kategori: 'ticari', icon: '📦' },
  
  // Diğer (10)
  { id: 'burc', baslik: 'Burç Hesaplama', aciklama: 'Doğum tarihinden burç', kategori: 'diger', icon: '♋' },
  { id: 'sifrele', baslik: 'Şifre Oluşturucu', aciklama: 'Güvenli şifre üret', kategori: 'diger', icon: '🔐', populer: true },
  { id: 'rastgele-sayi', baslik: 'Rastgele Sayı', aciklama: 'Rasgele sayı üret', kategori: 'diger', icon: '🎲' },
  { id: 'md5', baslik: 'MD5 Hash', aciklama: 'MD5 şifreleme', kategori: 'diger', icon: '#' },
  { id: 'renk-kodu', baslik: 'HTML Renk Kodu', aciklama: 'Renk kodları tablosu', kategori: 'diger', icon: '🎨' },
  { id: 'klima-btu', baslik: 'Klima BTU', aciklama: 'Klima kapasitesi', kategori: 'diger', icon: '❄️' },
];

export const getPopulerHesaplamalar = () => hesaplamalar.filter(h => h.populer);
export const getKategoriyeGore = (kategori: string) => hesaplamalar.filter(h => h.kategori === kategori);
export const getHesaplama = (id: string) => hesaplamalar.find(h => h.id === id);
