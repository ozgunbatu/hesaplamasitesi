// 2025 YKS Puan Hesaplama - ÖSYM Katsayıları (Gerçek Veriler)

export interface YKSFormulas {
  tyt: {
    basePuan: number;
    katsayilar: {
      turkce: number;
      sosyal: number;
      matematik: number;
      fen: number;
    };
  };
  say: {
    basePuan: number;
    katsayilar: {
      turkce: number;
      sosyal: number;
      temelMat: number;
      fen: number;
      matematik: number;
      fizik: number;
      kimya: number;
      biyoloji: number;
    };
  };
  ea: {
    basePuan: number;
    katsayilar: {
      turkce: number;
      sosyal: number;
      temelMat: number;
      fen: number;
      matematik: number;
      edebiyat: number;
      tarih1: number;
      cografya1: number;
    };
  };
  soz: {
    basePuan: number;
    katsayilar: {
      turkce: number;
      sosyal: number;
      temelMat: number;
      fen: number;
      edebiyat: number;
      tarih1: number;
      cografya1: number;
      tarih2: number;
      cografya2: number;
      felsefe: number;
      dkab: number;
    };
  };
  dil: {
    basePuan: number;
    katsayilar: {
      turkce: number;
      sosyal: number;
      matematik: number;
      fen: number;
      yabancidil: number;
    };
  };
}

// 2025 Gerçek Katsayılar (ertansinansahin.com'dan alındı)
export const YKS_2025: YKSFormulas = {
  tyt: {
    basePuan: 145.47,
    katsayilar: {
      turkce: 2.83,
      sosyal: 2.99,
      matematik: 3.28,
      fen: 2.53
    }
  },
  say: {
    basePuan: 132.87,
    katsayilar: {
      turkce: 1.20,
      sosyal: 1.27,
      temelMat: 1.39,
      fen: 1.07,
      matematik: 2.89,
      fizik: 2.46,
      kimya: 2.53,
      biyoloji: 2.61
    }
  },
  ea: {
    basePuan: 129.34,
    katsayilar: {
      turkce: 1.19,
      sosyal: 1.26,
      temelMat: 1.38,
      fen: 1.07,
      matematik: 2.88,
      edebiyat: 2.94,
      tarih1: 2.53,
      cografya1: 2.85
    }
  },
  soz: {
    basePuan: 129.61,
    katsayilar: {
      turkce: 1.13,
      sosyal: 1.19,
      temelMat: 1.31,
      fen: 1.01,
      edebiyat: 2.79,
      tarih1: 2.39,
      cografya1: 2.70,
      tarih2: 3.80,
      cografya2: 2.47,
      felsefe: 3.76,
      dkab: 2.36
    }
  },
  dil: {
    basePuan: 105.92,
    katsayilar: {
      turkce: 1.53,
      sosyal: 1.62,
      matematik: 1.77,
      fen: 1.37,
      yabancidil: 2.60
    }
  }
};

export interface YKSNetler {
  // TYT
  tytTurkce: { dogru: number; yanlis: number };
  tytSosyal: { dogru: number; yanlis: number };
  tytMatematik: { dogru: number; yanlis: number };
  tytFen: { dogru: number; yanlis: number };
  // AYT Sayısal
  aytMatematik?: { dogru: number; yanlis: number };
  aytFizik?: { dogru: number; yanlis: number };
  aytKimya?: { dogru: number; yanlis: number };
  aytBiyoloji?: { dogru: number; yanlis: number };
  // AYT Sözel
  aytEdebiyat?: { dogru: number; yanlis: number };
  aytTarih1?: { dogru: number; yanlis: number };
  aytCografya1?: { dogru: number; yanlis: number };
  aytTarih2?: { dogru: number; yanlis: number };
  aytCografya2?: { dogru: number; yanlis: number };
  aytFelsefe?: { dogru: number; yanlis: number };
  aytDKAB?: { dogru: number; yanlis: number };
  // Yabancı Dil
  ydt?: { dogru: number; yanlis: number };
  // OBP
  diplomaNotu?: number;
}

// Net hesaplama
export const hesaplaNet = (dogru: number, yanlis: number): number => {
  return Math.max(0, dogru - (yanlis * 0.25));
};

// OBP hesaplama
export const hesaplaOBP = (diplomaNotu: number): number => {
  if (diplomaNotu >= 50 && diplomaNotu <= 100) {
    return Math.max(250, diplomaNotu * 0.6 * 10); // Diploma notu ise *5 yerine *0.6 sonra 500 üzerinden
  }
  if (diplomaNotu >= 250 && diplomaNotu <= 500) {
    return diplomaNotu; // Zaten OBP
  }
  return 250; // Default minimum
};

// YKS Puan Hesaplama
export const hesaplaYKS = (netler: YKSNetler) => {
  const formul = YKS_2025;
  
  // TYT Netleri
  const tytTurkceNet = hesaplaNet(netler.tytTurkce.dogru, netler.tytTurkce.yanlis);
  const tytSosyalNet = hesaplaNet(netler.tytSosyal.dogru, netler.tytSosyal.yanlis);
  const tytMatematikNet = hesaplaNet(netler.tytMatematik.dogru, netler.tytMatematik.yanlis);
  const tytFenNet = hesaplaNet(netler.tytFen.dogru, netler.tytFen.yanlis);
  
  // TYT Ham Puan
  const tytHam = formul.tyt.basePuan +
    (tytTurkceNet * formul.tyt.katsayilar.turkce) +
    (tytSosyalNet * formul.tyt.katsayilar.sosyal) +
    (tytMatematikNet * formul.tyt.katsayilar.matematik) +
    (tytFenNet * formul.tyt.katsayilar.fen);
  
  let sayHam = 0, eaHam = 0, sozHam = 0, dilHam = 0;
  
  // SAY Puan
  if (netler.aytMatematik && netler.aytFizik && netler.aytKimya && netler.aytBiyoloji) {
    const matNet = hesaplaNet(netler.aytMatematik.dogru, netler.aytMatematik.yanlis);
    const fizikNet = hesaplaNet(netler.aytFizik.dogru, netler.aytFizik.yanlis);
    const kimyaNet = hesaplaNet(netler.aytKimya.dogru, netler.aytKimya.yanlis);
    const biyoNet = hesaplaNet(netler.aytBiyoloji.dogru, netler.aytBiyoloji.yanlis);
    
    sayHam = formul.say.basePuan +
      (tytTurkceNet * formul.say.katsayilar.turkce) +
      (tytSosyalNet * formul.say.katsayilar.sosyal) +
      (tytMatematikNet * formul.say.katsayilar.temelMat) +
      (tytFenNet * formul.say.katsayilar.fen) +
      (matNet * formul.say.katsayilar.matematik) +
      (fizikNet * formul.say.katsayilar.fizik) +
      (kimyaNet * formul.say.katsayilar.kimya) +
      (biyoNet * formul.say.katsayilar.biyoloji);
  }
  
  // EA Puan
  if (netler.aytMatematik && netler.aytEdebiyat && netler.aytTarih1 && netler.aytCografya1) {
    const matNet = hesaplaNet(netler.aytMatematik.dogru, netler.aytMatematik.yanlis);
    const edeNet = hesaplaNet(netler.aytEdebiyat.dogru, netler.aytEdebiyat.yanlis);
    const tar1Net = hesaplaNet(netler.aytTarih1.dogru, netler.aytTarih1.yanlis);
    const cog1Net = hesaplaNet(netler.aytCografya1.dogru, netler.aytCografya1.yanlis);
    
    eaHam = formul.ea.basePuan +
      (tytTurkceNet * formul.ea.katsayilar.turkce) +
      (tytSosyalNet * formul.ea.katsayilar.sosyal) +
      (tytMatematikNet * formul.ea.katsayilar.temelMat) +
      (tytFenNet * formul.ea.katsayilar.fen) +
      (matNet * formul.ea.katsayilar.matematik) +
      (edeNet * formul.ea.katsayilar.edebiyat) +
      (tar1Net * formul.ea.katsayilar.tarih1) +
      (cog1Net * formul.ea.katsayilar.cografya1);
  }
  
  // SÖZ Puan - basitleştirilmiş (tüm dersler var varsayımıyla)
  if (netler.aytEdebiyat) {
    sozHam = formul.soz.basePuan +
      (tytTurkceNet * formul.soz.katsayilar.turkce) +
      (tytSosyalNet * formul.soz.katsayilar.sosyal) +
      (tytMatematikNet * formul.soz.katsayilar.temelMat) +
      (tytFenNet * formul.soz.katsayilar.fen);
    
    if (netler.aytEdebiyat) sozHam += hesaplaNet(netler.aytEdebiyat.dogru, netler.aytEdebiyat.yanlis) * formul.soz.katsayilar.edebiyat;
    if (netler.aytTarih1) sozHam += hesaplaNet(netler.aytTarih1.dogru, netler.aytTarih1.yanlis) * formul.soz.katsayilar.tarih1;
    if (netler.aytCografya1) sozHam += hesaplaNet(netler.aytCografya1.dogru, netler.aytCografya1.yanlis) * formul.soz.katsayilar.cografya1;
    if (netler.aytTarih2) sozHam += hesaplaNet(netler.aytTarih2.dogru, netler.aytTarih2.yanlis) * formul.soz.katsayilar.tarih2;
    if (netler.aytCografya2) sozHam += hesaplaNet(netler.aytCografya2.dogru, netler.aytCografya2.yanlis) * formul.soz.katsayilar.cografya2;
    if (netler.aytFelsefe) sozHam += hesaplaNet(netler.aytFelsefe.dogru, netler.aytFelsefe.yanlis) * formul.soz.katsayilar.felsefe;
    if (netler.aytDKAB) sozHam += hesaplaNet(netler.aytDKAB.dogru, netler.aytDKAB.yanlis) * formul.soz.katsayilar.dkab;
  }
  
  // DİL Puan
  if (netler.ydt) {
    const ydtNet = hesaplaNet(netler.ydt.dogru, netler.ydt.yanlis);
    dilHam = formul.dil.basePuan +
      (tytTurkceNet * formul.dil.katsayilar.turkce) +
      (tytSosyalNet * formul.dil.katsayilar.sosyal) +
      (tytMatematikNet * formul.dil.katsayilar.matematik) +
      (tytFenNet * formul.dil.katsayilar.fen) +
      (ydtNet * formul.dil.katsayilar.yabancidil);
  }
  
  // OBP Hesapla
  const obp = netler.diplomaNotu ? hesaplaOBP(netler.diplomaNotu) : 250;
  const obpEkPuan = obp * 0.12; // OBP'nin %12'si yerleştirme puanına eklenir
  
  return {
    tytHam: Number(tytHam.toFixed(3)),
    sayHam: sayHam > 0 ? Number(sayHam.toFixed(3)) : 0,
    eaHam: eaHam > 0 ? Number(eaHam.toFixed(3)) : 0,
    sozHam: sozHam > 0 ? Number(sozHam.toFixed(3)) : 0,
    dilHam: dilHam > 0 ? Number(dilHam.toFixed(3)) : 0,
    obp: Number(obp.toFixed(2)),
    obpEkPuan: Number(obpEkPuan.toFixed(3)),
    // Yerleştirme puanları (Y-)
    yTyt: Number((tytHam + obpEkPuan).toFixed(3)),
    ySay: sayHam > 0 ? Number((sayHam + obpEkPuan).toFixed(3)) : 0,
    yEa: eaHam > 0 ? Number((eaHam + obpEkPuan).toFixed(3)) : 0,
    ySoz: sozHam > 0 ? Number((sozHam + obpEkPuan).toFixed(3)) : 0,
    yDil: dilHam > 0 ? Number((dilHam + obpEkPuan).toFixed(3)) : 0,
    // Netler
    netler: {
      tytTurkce: Number(tytTurkceNet.toFixed(2)),
      tytSosyal: Number(tytSosyalNet.toFixed(2)),
      tytMatematik: Number(tytMatematikNet.toFixed(2)),
      tytFen: Number(tytFenNet.toFixed(2)),
      toplam: Number((tytTurkceNet + tytSosyalNet + tytMatematikNet + tytFenNet).toFixed(2))
    }
  };
};
