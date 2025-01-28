/* Locale Language */
var language = localStorage.getItem("language");

if (!language) {
  if (navigator.language !== "en" && navigator.language !== "id") {
    localStorage.setItem("language", "en");
  } else {
    localStorage.setItem("language", navigator.language);
  }

  language = localStorage.getItem("language");
}

const isFileOnCache = (src) => {
  return THREE.Cache.get(src) !== undefined;
};

const loader = new THREE.FileLoader();

const toggleProgress = (action) => {
  if (action === "show") {
    document.querySelector(".anim-contain.leaf-anim").classList.add("show");
  } else {
    document.querySelector(".anim-contain.leaf-anim").classList.remove("show");
  }
};

const languages = {
  en: {
    lab: "Laboratory Facilities",
    prod: "Production Room",
    mart: "Gallery and Sales",
    kett: "Distillation Unit",
    mol: "Molecular Distillation and Fractionation Unit",
    gar: "Garden",
  },
  id: {
    lab: "Ruang Laboratorium",
    prod: "Ruang Produksi",
    mart: "Ruang Pameran",
    kett: "Unit Distilasi",
    mol: "Unit Distilasi Molekuler dan Fraksinasi",
    gar: "Kebun",
  },
};

const detail = {
  j_1: {
    head: {
      en: "Distillation Unit",
      id: "Unit Distilasi",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Steam distillation is used to purify water-insoluble compounds. The medium used in this distillation is water vapor which is flowed into the mixture in the tank so that it will evaporate the mixture (Walangare et al, 2013).",
          id: "Distilasi uap digunakan untuk memurnikan senyawa yang tidak larut dalam air. Media yang digunakan pada distilasi ini adalah uap air yang dialirkan ke dalam campuran di dalam tangki sehingga akan menguapkan campuran tersebut (Walangare dkk, 2013).",
        },
      },
      {
        type: "video",
        src: "assets/videos/unit-distilasi.mp4",
      },
    ],
  },
  m_1: {
    head: {
      en: "Molecular Distillation and Fractionation Unit",
      id: "Unit Distilasi Molekuler dan Fraksinasi",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Fractionation is one method that is often used to increase patchouli alcohol content in patchouli oil. Fractionation or distillation of fractions is a process that is very useful for separating essential oils into several parts based on differences in smell and boiling point.",
          id: "Fraksinasi merupakan salah satu cara yang sering digunakan untuk meningkatkan kadar patchouli alcohol pada minyak nilam. Fraksinasi atau penyulingan fraksi merupakan salah satu proses yang sangat bermanfaat untuk memisahkan minyak atsiri menjadi beberapa bagian berdasarkan perbedaan bau dan titik didihnya. ",
        },
      },
      {
        type: "p",
        text: {
          en: "Fractional distillation is a process of separating or taking steam from different levels contained in a distillation column. Lighter products or results will come out first from the top of the column while heavy products are obtained at the bottom of the column.",
          id: "Distilasi fraksinasi adalah proses pemisahan atau proses pengambilan uap dari tingkatan yang berbeda yang terdapat dalam kolom distilasi. Produk atau hasil yang lebih ringan akan keluar lebih dulu dari bagian atas kolom sedangkan produk berat diperoleh di bagian bawah kolom.",
        },
      },
      {
        type: "video",
        src: "assets/videos/ruangan-molekuler.mp4",
      },
    ],
  },
  p_1: {
    head: {
      en: "Mini Garden",
      id: "Kebun Kecil",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Patchouli plant is one of the essential oil-producing plants which is quite important as an Indonesian export commodity and contributes around 60% of foreign exchange to the total national essential oil exports. Indonesia is the world's largest patchouli oil supplier with a contribution of 90%. Patchouli oil is used as a fixative in the perfume industry which cannot be replaced by synthetic substances because it plays a very important role in determining the strength, properties and durability of the fragrance. In Indonesia, patchouli is the main producer of essential oil which is exported to various countries such as France, Singapore, the United States, Britain, Germany, India, Spain and the Netherlands (Novita, 2012).",
          id: "Tanaman nilam merupakan salah satu tanaman penghasil minyak atsiri yang cukup penting sebagai komoditi ekspor Indonesia dan menyumbang devisa sekitar 60% dari total ekspor minyakatsiri nasional. Indonesia merupakan pemasok minyak nilam terbesar dunia dengan kontribusi 90%. Minyak nilam digunakan sebagai zat pengikat (fixative) dalam industri parfum yang tidak dapat diganti oleh zat sintetik karena sangat berperan dalam menentukan kekuatan, sifat dan ketahanan aroma. Di Indonesia, nilam menjadi penghasil utama minyak atsiri yang diekspor ke berbagai negara seperti Perancis, Singapura, Amerika Serikat, Inggris, Jerman, India, Spanyol dan Belanda (Novita, 2012).",
        },
      },
      {
        type: "p",
        text: {
          en: "Fractional distillation is a process of separating or taking steam from different levels contained in a distillation column. Lighter products or results will come out first from the top of the column while heavy products are obtained at the bottom of the column.",
          id: "Aceh patchouli is the second best patchouli in the world which can produce patchouli oil with a patchouli alcohol (PA) content above 30%.",
        },
      },
      {
        type: "video",
        src: "assets/videos/garden.mp4",
      },
    ],
  },
  r_1: {
    head: {
      en: "Production Room",
      id: "Ruang Produksi",
    },
    body: [
      {
        type: "p",
        text: {
          en: "The room used to produce products derived from patchouli oil. This production room is designed to follow Food and Drug Supervisory Agency standards so that it supports the requirements for BPOM-certified products. Production activities carried out refer to Good Cosmetics Making Methods.",
          id: "Ruangan yang digunakan untuk memproduksi produk-produk turunan dari minyak nilam. Ruangan produksi ini didesain mengikuti standar BPOM (Badan Pengawas Obat dan Makanan) sehingga mendukung syarat produk bersertifikasi BPOM. Kegiatan produksi yang dilakukan merujuk pada aturan CPKB (Cara Pembuatan Kosmetika yang Baik).",
        },
      },
      {
        type: "p",
        text: {
          en: "The production room consists of changing rooms (lab coats), formulation work stations, filling stations, hand sanitizer and disinfectant mixing machines, packaging work stations, and logistics rooms.",
          id: "Ruangan produksi terdiri dari ruang ganti (jas lab), stasiun kerja formulasi, filling, mesin pengaduk hand sanitizer dan disinfectant, stasiun kerja packaging, dan ruang logistik.",
        },
      },
      {
        type: "video",
        src: "assets/videos/ruang-produksi.mp4",
      },
    ],
  },
  s1_1: {
    head: {
      en: "Essential Oil Collection",
      id: "Koleksi Minyak Esensial",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Collection of patchouli oil and other essential oils obtained from the distillation by the community in Aceh Province.",
          id: "Koleksi minyak nilam dan minyak atsiri lainnya yang diperoleh dari hasil penyulingan oleh masyarakat di Provinsi Aceh.",
        },
      },
      {
        type: "p",
        text: {
          en: "Patchouli oil comes from the patchouli plant. Aceh patchouli is the best variety because it contains higher levels and quality of oil, namely the level of patchouli alcohol (PA) in oil above 30% with an oil content of between 2.5% -5.0% and has a strong aroma with characteristics of dry, woody, sweet, and soft. Such characteristics make Aceh patchouli oil a world favorite because of its long lasting aroma and meeting Indonesia National Standard and export quality.",
          id: "Minyak nilam berasal dari tanaman nilam. Nilam Aceh merupakan varietas terbaik karena mengandung kadar dan kualitas minyak yang lebih tinggi yaitu tingkat alkohol nilam (patchouly alcohol-PA) dalam minyak di atas 30% dengan kandungan minyak antara 2.5%-5.0% dan memiliki aroma yang kuat dengan karateristik kering, berkayu, manis, dan lembut. Karakteristik yang demikian menjadikan minyak nilam Aceh menjadi favorit dunia karena aroma yang tahan lama dan memenuhi kulitas SNI dan ekspor.",
        },
      },
      {
        type: "p",
        text: {
          en: "The uniqueness of Aceh patchouli has received Geographical Indication protection in 2013 from the Ministry of Law and Human Rights of the Republic of Indonesia Number ID-G-000000021.",
          id: "Keunikan nilam Aceh telah mendapatkan perlindungan Indikasi Geografis (IG) pada tahun 2013 dari Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia Nomor ID-G-000000021.",
        },
      },
      {
        type: "video",
        src: "assets/videos/koleksi-minyak-nilam.mp4",
      },
    ],
  },
  s2_1: {
    head: {
      en: "Rotary Vacuum Evaporator",
      id: "Penguap Vakum Putar",
    },
    body: [
      {
        type: "p",
        text: {
          en: "The apparatus used in the vacuum distillation process of patchouli oil, in order to obtain high-grade patchouli oil which consists of a heavy fraction (PA > 50%) and a light fraction (PA < 30%).",
          id: "Alat yang digunakan pada proses distilasi vakum minyak nilam, sehingga diperoleh high-grade patchouli oil yang terdiri dari fraksi berat (PA > 50%) dan fraksi ringan (PA < 30%).",
        },
      },
      {
        type: "p",
        text: {
          en: "Vacuum distillation is used to separate two components that have very high boiling points. Vacuum distillation is very useful for separating compounds whose constituents are easily damaged when boiled at their normal boiling point.",
          id: "Distilasi vakum digunakan untuk memisahkan dua komponen yang memiliki titik didih sangat tinggi. Distilasi vakum ini sangat berguna untuk pemisahan senyawa yang penyusunnya mudah rusak apabila dididihkan pada titik didih normalnya.",
        },
      },
      {
        type: "video",
        src: "assets/videos/mesin-purifikasi.mp4",
      },
    ],
  },
};

/* Modal */
class Modal {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.closeButton = parentEl.querySelector("button.close");
    this.headEl = this.parentEl.querySelector(".head");
    this.bodyEl = this.parentEl.querySelector(".body");

    this.closeButton.onclick = this.hideModal;
  }

  showModal = () => {
    this.parentEl.classList.add("show");
    this.parentEl.classList.remove("hide");
  };

  hideModal = () => {
    this.parentEl.classList.add("hide");
    this.parentEl.classList.remove("show");
  };

  setHead = (text) => {
    this.headEl.innerHTML = "";
    const heading = document.createElement("h2");
    heading.innerText = text;

    this.headEl.appendChild(heading);
  };

  insertBody = (children) => {
    this.bodyEl.innerHTML = "";
    children.forEach((child) => {
      const el = document.createElement(child.type);

      if (child.type === "p") {
        el.innerText = child.text[language];
      } else if (child.type === "video") {
        el.src = child.src;
        el.setAttribute("controls", "");
      }

      this.bodyEl.appendChild(el);
    });
  };
}

var modal = new Modal(document.querySelector("#modal"));

/* Mobile Check */
var isMobile = navigator.userAgent.match(
  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
);
if (isMobile) {
  const cameraEl = document.getElementById("camera");
  const cursorEl = document.createElement("a-cursor");

  cameraEl.appendChild(cursorEl);
}

/* Quick Access */
const quickAccessLocations = [
  {
    name: languages[language].lab,
    destination: "s1",
  },
  {
    name: languages[language].prod,
    destination: "r",
  },
  {
    name: languages[language].mart,
    destination: "o",
  },
  {
    name: languages[language].kett,
    destination: "j",
  },
  {
    name: languages[language].mol,
    destination: "m",
  },
  {
    name: languages[language].gar,
    destination: "p",
  },
];
function initQuickAccess() {
  const quicAccessLocations = document.querySelector("#quick-access-locations");
  quicAccessLocations.innerHTML = "";

  const quicAccessButtonOpen = document.querySelector("#open-qa");
  const quicAccessButtonClose = document.querySelector("#close-qa");

  const openQuickAccess = () => {
    quicAccessLocations.classList.add("show");
    quicAccessLocations.classList.remove("hide");

    quicAccessButtonOpen.classList.add("hidden");
    quicAccessButtonClose.classList.remove("hidden");
  };

  const closeQuickAccess = () => {
    quicAccessLocations.classList.add("hide");
    quicAccessLocations.classList.remove("show");

    quicAccessButtonOpen.classList.remove("hidden");
    quicAccessButtonClose.classList.add("hidden");
  };

  quicAccessButtonOpen.onclick = openQuickAccess;
  quicAccessButtonClose.onclick = closeQuickAccess;

  const listEl = document.createElement("ul");

  quickAccessLocations.forEach((location) => {
    const listItemEl = document.createElement("li");
    const textEl = document.createElement("span");
    const imgEl = document.createElement("img");
    const tourEl = document.querySelector("#tour");
    const maskEl = document.querySelector("#mask");

    imgEl.setAttribute(
      "src",
      "./assets/images/map-pin.svg"
    );
    listItemEl.appendChild(imgEl);

    textEl.innerText = location.name;
    listItemEl.appendChild(textEl);

    listItemEl.onclick = () => {
      closeQuickAccess();
      maskEl.emit("fadeout");

      setTimeout(() => {
        tourEl.emit("preparescene", { location: location.destination }, false);

        setTimeout(() => {
          const checkFileOnCache = setInterval(() => {
            if (isFileOnCache(locations[location.destination].sky)) {
              toggleProgress("hide");
              maskEl.emit("fadein");
              clearInterval(checkFileOnCache);
            } else {
              toggleProgress("show");
            }
          }, 100);
        }, 50);
      }, 250);
    };

    listEl.appendChild(listItemEl);
  });

  quicAccessLocations.appendChild(listEl);
}
initQuickAccess();

/* Language Setting */
function languageSetting() {
  const languagesEl = document.querySelector("#languages");
  const langOptEls = languagesEl.querySelectorAll("button.lang-opt");
  const showOptEl = languagesEl.querySelector("#show-opt");

  showOptEl.innerText = localStorage.getItem("language").toUpperCase();
  showOptEl.onclick = () => {
    languagesEl.classList.toggle("show");
  };

  langOptEls.forEach((langOptEl) => {
    langOptEl.onclick = () => {
      showOptEl.innerText = langOptEl.getAttribute("language").toUpperCase();
      languagesEl.classList.toggle("show");
      localStorage.setItem("language", langOptEl.getAttribute("language"));
      location.reload();
    };
  });
}
languageSetting();

/* Tour Component */
const locations = {
  a: {
    sky: "./assets/images/a.JPG",
    hotspots: [
      {
        destination: "b",
        src: "#hotspot",
        coordinate: { x: 1.7, y: -0.3, z: -2 },
        size: 0.56,
        camRotation: {
          x: 0,
          y: -1.7220000000000009,
        },
      },
      {
        destination: "c",
        src: "#hotspot",
        coordinate: { x: -1.5, y: -0.3, z: -2 },
        size: 0.54,
        camRotation: {
          x: 0,
          y: 1.9720000000000013,
        },
      },
      {
        destination: "n",
        src: "#hotspot",
        coordinate: { x: 2.4, y: -0.4, z: 0.6 },
        size: 0.51,
      },
      ,
    ],
  },
  b: {
    sky: "./assets/images/b.JPG",
    hotspots: [
      {
        destination: "a",
        src: "#hotspot",
        coordinate: { x: -2, y: -0.1, z: 0.3 },
        size: 0.42,
        camRotation: {
          x: 0,
          y: -1.8200000000000007,
        },
      },
      {
        destination: "d",
        coordinate: { x: 2, y: -0.15, z: 0.3 },
        src: "#hotspot",
        size: 0.42,
      },
      {
        destination: "n",
        src: "#hotspot",
        coordinate: { x: -1.8, y: -0.2, z: 2 },
        size: 0.55,
      },
    ],
  },
  c: {
    sky: "./assets/images/c.JPG",
    hotspots: [
      {
        destination: "a",
        coordinate: { x: 7, y: -0.5, z: -0.6 },
        src: "#hotspot",
        size: 1.45,
        camRotation: {
          x: 0,
          y: -1.8200000000000007,
        },
      },
      {
        destination: "e",
        coordinate: { x: -7, y: -0.8, z: 3 },
        src: "#hotspot",
        size: 1.5,
      },
    ],
  },
  d: {
    sky: "./assets/images/d.JPG",
    hotspots: [
      {
        destination: "b",
        coordinate: { x: -1.9, y: -0.5, z: -2.8 },
        src: "#hotspot",
        size: 0.72,
        camRotation: {
          x: 0,
          y: 1.7180000000000006,
        },
      },
      {
        destination: "h",
        coordinate: { x: 2.4, y: -0.5, z: -5 },
        src: "#hotspot",
        size: 1.12,
      },
    ],
  },
  e: {
    sky: "./assets/images/e.JPG",
    hotspots: [
      {
        destination: "c",
        coordinate: { x: 2.3, y: -0.5, z: -4 },
        src: "#hotspot",
        size: 1,
        camRotation: {
          x: 0,
          y: -1.4860000000000007,
        },
      },
      {
        destination: "h",
        coordinate: { x: -3.5, y: -0.2, z: -7 },
        src: "#hotspot",
        size: 1.54,
      },
    ],
  },
  h: {
    sky: "./assets/images/h.JPG",
    hotspots: [
      {
        destination: "d",
        coordinate: { x: 7, y: -0.1, z: 4 },
        src: "#hotspot",
        size: 1.6,
      },
      {
        destination: "e",
        coordinate: { x: -7, y: -0.1, z: 2.5 },
        src: "#hotspot",
        size: 1.5,
      },
      {
        destination: "i",
        coordinate: { x: 0.5, y: -0.5, z: -7 },
        src: "#hotspot",
        size: 1.45,
      },
    ],
  },
  i: {
    sky: "./assets/images/i.JPG",
    hotspots: [
      {
        destination: "h",
        coordinate: { x: -0.8, y: -0.2, z: 7 },
        src: "#hotspot",
        size: 1.45,
        camRotation: {
          x: 0,
          y: -3.2159999999999997,
        },
      },
      {
        destination: "j",
        displayName: {
          width: 0.8,
          height: 0.3,
          position: "-0.33 0.3 -1",
          text: {
            value: languages[language].kett,
            fontSize: 1,
            wrapCount: 15,
          },
        },
        coordinate: { x: 0, y: -0.7, z: -3 },
        src: "#enter-icon",
        size: 0.7,
      },
      {
        destination: "k",
        coordinate: { x: 4, y: -0.6, z: 0 },
        src: "#hotspot",
        size: 0.84,
        camRotation: {
          x: 0,
          y: -1.5020000000000004,
        },
      },
    ],
  },
  j: {
    sky: "./assets/images/j.JPG",
    hotspots: [
      {
        destination: "i",
        coordinate: { x: 2.7, y: -1, z: 4 },
        src: "#exit-icon",
        size: 1.08,
        camRotation: {
          x: 0,
          y: -1.5740000000000003,
        },
      },
    ],
    roomDetail: {
      id: "j_1",
    },
  },
  k: {
    sky: "./assets/images/k.JPG",
    hotspots: [
      {
        destination: "i",
        coordinate: { x: -6, y: -0.7, z: 1 },
        src: "#hotspot",
        size: 1.3,
        camRotation: {
          x: 0,
          y: -3.256,
        },
      },
      {
        destination: "l",
        coordinate: { x: 7, y: 0, z: -0.5 },
        src: "#hotspot",
        size: 1.5,
      },
    ],
  },
  l: {
    sky: "./assets/images/l.JPG",
    hotspots: [
      {
        destination: "k",
        coordinate: { x: -7, y: -0.3, z: 0 },
        src: "#hotspot",
        size: 1.5,
        camRotation: {
          x: 0,
          y: 1.7320000000000002,
        },
      },
      {
        destination: "m",
        displayName: {
          width: 1.1,
          height: 0.27,
          position: "-0.59 0.12 -1",
          text: {
            value: languages[language].mol,
            fontSize: 1,
            wrapCount: 25,
          },
        },
        coordinate: { x: 4, y: -0.7, z: -3 },
        src: "#enter-icon",
        size: 1.1,
        camRotation: {
          x: 0,
          y: -1.5520000000000007,
        },
      },
    ],
  },
  m: {
    sky: "./assets/images/m.JPG",
    hotspots: [
      {
        destination: "l",
        coordinate: { x: -3, y: -0.7, z: 3.3 },
        src: "#exit-icon",
        size: 0.9,
        camRotation: {
          x: 0,
          y: 1.5660000000000005,
        },
      },
    ],
    roomDetail: {
      id: "m_1",
    },
  },
  n: {
    sky: "./assets/images/n.JPG",
    hotspots: [
      {
        destination: "a",
        coordinate: { x: 3, y: -0.6, z: 0.9 },
        src: "#hotspot",
        size: 0.7,
      },
      {
        destination: "o",
        displayName: {
          width: 0.5,
          height: 0.2,
          position: "-0.7 0.23 -1",
          text: {
            value: languages[language].mart,
            fontSize: 1,
            wrapCount: 20,
          },
        },
        coordinate: { x: -1.2, y: -0.7, z: -2.8 },
        src: "#enter-icon",
        size: 0.7,
      },
      {
        destination: "p",
        coordinate: { x: -5, y: -0.5, z: 0.39 },
        src: "#hotspot",
        size: 1.1,
        camRotation: {
          x: 0,
          y: -1.5480000000000003,
        },
      },
    ],
  },
  o: {
    sky: "./assets/images/o.JPG",
    hotspots: [
      {
        destination: "n",
        coordinate: { x: -2, y: -0.7, z: 1.2 },
        src: "#exit-icon",
        size: 0.53,
        camRotation: {
          x: 0,
          y: 1.6480000000000006,
        },
      },
    ],
  },
  p: {
    sky: "./assets/images/p.JPG",
    hotspots: [
      {
        destination: "d",
        coordinate: { x: 5, y: -0.3, z: -7 },
        src: "#hotspot",
        size: 1.9,
      },
      {
        destination: "n",
        coordinate: { x: -3.4, y: -0.7, z: -3 },
        src: "#hotspot",
        size: 1,
        camRotation: {
          x: 0,
          y: -1.8640000000000014,
        },
      },
      {
        destination: "q",
        displayName: {
          width: 0.4,
          height: 0.15,
          position: "1 0.12 -0.23",
          rotation: "0 -90 0",
          text: {
            value: languages[language].prod,
            fontSize: 1,
            wrapCount: 20,
          },
        },
        coordinate: { x: 3, y: -0.6, z: -0.15 },
        src: "#enter-icon",
        size: 0.68,
        camRotation: {
          x: 0,
          y: 1.0480000000000007,
        },
      },
      {
        destination: "s1",
        displayName: {
          width: 0.4,
          height: 0.16,
          position: "-1 0.15 0.265",
          rotation: "0 135 0",
          text: {
            value: languages[language].lab,
            fontSize: 1,
            wrapCount: 24,
          },
        },
        coordinate: { x: -2, y: -0.4, z: 0.2 },
        src: "#enter-icon",
        size: 0.45,
      },
    ],
    details: [
      {
        size: 0.2,
        position: "0.4 -0.25 -1",
        rotation: "0 0 0",
        id: "p_1",
      },
    ],
  },
  q: {
    sky: "./assets/images/q.JPG",
    hotspots: [
      {
        destination: "p",
        coordinate: { x: 0.7, y: -0.5, z: 1.6 },
        src: "#exit-icon",
        size: 0.4,
        camRotation: {
          x: 0,
          y: 1.6480000000000001,
        },
      },
      {
        destination: "r",
        coordinate: { x: -2.64, y: -0.5, z: -1.5 },
        src: "#hotspot",
        size: 0.7,
      },
    ],
  },
  r: {
    sky: "./assets/images/r.JPG",
    hotspots: [
      {
        destination: "q",
        coordinate: { x: -3, y: -0.5, z: 0.6 },
        src: "#hotspot",
        size: 0.7,
        camRotation: {
          x: 0,
          y: -2.6980000000000115,
        },
      },
    ],
    roomDetail: {
      id: "r_1",
    },
  },
  s1: {
    sky: "./assets/images/s1.JPG",
    hotspots: [
      {
        destination: "p",
        coordinate: { x: 1, y: -0.5, z: 2 },
        src: "#exit-icon",
        size: 0.5,
      },
      {
        destination: "s2",
        coordinate: { x: -0.3, y: -0.5, z: -4 },
        src: "#hotspot",
        size: 0.9,
      },
    ],
    details: [
      {
        size: 0.3,
        position: "-0.95 -0.1 0.8",
        rotation: "0 90 0",
        id: "s1_1",
      },
    ],
  },
  s2: {
    sky: "./assets/images/s2.JPG",
    hotspots: [
      {
        destination: "s1",
        coordinate: { x: 0.2, y: -0.5, z: 4 },
        src: "#hotspot",
        size: 0.9,
        camRotation: {
          x: 0,
          y: -2.6399999999999992,
        },
      },
    ],
    details: [
      {
        size: 0.15,
        position: "-0.1 -0.5 -1",
        rotation: "0 0 0",
        id: "s2_1",
      },
    ],
  },
};

AFRAME.registerComponent("tour", {
  schema: {
    location: {
      type: "string",
    },
  },

  init: function () {
    this.location = "a";
    this.maskEl = document.querySelector("#mask");

    this.el.addEventListener("preparescene", (event) => {
      this.location = event.detail.location;

      while (this.el.firstChild) {
        this.el.removeChild(this.el.firstChild);
      }

      const sky = document.createElement("a-sky");
      sky.setAttribute("src", locations[this.location].sky);
      sky.setAttribute("rotation", "0 -90 0");
      this.el.appendChild(sky);

      locations[this.location].hotspots.forEach((hotspot) => {
        let hotspotEl = undefined;

        if ("displayName" in hotspot) {
          const displayName = document.createElement("a-entity");
          if ("wrapCount" in hotspot.displayName.text) {
            displayName.setAttribute(
              "data-wrap_count",
              hotspot.displayName.text.wrapCount
            );
          } else {
            displayName.setAttribute("data-wrap_count", 10);
          }

          if ("rotation" in hotspot.displayName) {
            displayName.setAttribute(
              "data-rotation",
              hotspot.displayName.rotation
            );
          } else {
            displayName.setAttribute("data-rotation", "0 0 0");
          }

          displayName.setAttribute(
            "data-text",
            hotspot.displayName.text.value.toUpperCase()
          );
          displayName.setAttribute(
            "data-position",
            hotspot.displayName.position
          );
          displayName.setAttribute("data-width", hotspot.displayName.width);
          displayName.setAttribute("data-height", hotspot.displayName.height);
          displayName.setAttribute("template", "src: #display-name");

          this.el.appendChild(displayName);
        }

        hotspotEl = document.createElement("a-image");
        hotspotEl.setAttribute("look-at", "#camera");
        hotspotEl.setAttribute("position", hotspot.coordinate);
        hotspotEl.setAttribute("src", hotspot.src);
        hotspotEl.setAttribute("width", hotspot.size);
        hotspotEl.setAttribute("height", hotspot.size);
        hotspotEl.setAttribute("class", "clickable");
        hotspotEl.setAttribute("mixin", "scale-animation");

        hotspotEl.onclick = () => {
          this.maskEl.emit("fadeout");

          setTimeout(() => {
            this.el.emit(
              "preparescene",
              { location: hotspot.destination },
              false
            );

            const lookControls =
              document.querySelector("#camera").components["look-controls"];

            if ("camRotation" in hotspot) {
              lookControls.pitchObject.rotation.x = hotspot.camRotation.x;
              lookControls.yawObject.rotation.y = hotspot.camRotation.y;
            } else {
              lookControls.pitchObject.rotation.x = 0;
              lookControls.yawObject.rotation.y = 0;
            }

            setTimeout(() => {
              const checkFileOnCache = setInterval(() => {
                if (isFileOnCache(locations[hotspot.destination].sky)) {
                  toggleProgress("hide");
                  this.maskEl.emit("fadein");
                  clearInterval(checkFileOnCache);
                } else {
                  toggleProgress("show");
                }
              }, 100);
            }, 50);
          }, 250);
        };

        this.el.appendChild(hotspotEl);
      });

      if ("details" in locations[this.location]) {
        locations[this.location].details.forEach((detail) => {
          const el = document.createElement("a-image");
          el.setAttribute("class", "clickable");
          el.setAttribute("width", detail.size);
          el.setAttribute("height", detail.size);
          el.setAttribute("src", "#radio-button");
          el.setAttribute("position", detail.position);
          el.setAttribute("rotation", detail.rotation);
          el.setAttribute("mixin", "scale-animation");
          el.setAttribute("detail", `id: ${detail.id}`);

          this.el.appendChild(el);
        });
      }

      if ("roomDetail" in locations[this.location]) {
        const el = document.querySelector("button#open-rd");
        el.classList.remove("hide");
        el.onclick = () => {
          modal.setHead(
            detail[locations[this.location].roomDetail.id].head[language]
          );
          modal.insertBody(detail[locations[this.location].roomDetail.id].body);
          modal.showModal();
        };
      } else {
        document.querySelector("button#open-rd").classList.add("hide");
      }
    });

    this.el.emit("preparescene", { location: this.location }, false);
  },
});

AFRAME.registerComponent("detail", {
  schema: {
    id: {
      type: "string",
    },
  },

  init: function () {
    this.el.onclick = () => {
      console.log(this.data);
      modal.setHead(detail[this.data.id].head[language]);
      modal.insertBody(detail[this.data.id].body);
      modal.showModal();
      this.el.emit("mouseleave");
    };
  },
});

AFRAME.registerComponent("look-at", {
  schema: {
    type: "selector",
  },

  init: function () {
    this.target = this.data;
  },

  tick: function () {
    this.el.object3D.lookAt(this.target.object3D.position);
  },
});

AFRAME.registerComponent("hotspot", {
  schema: {},

  init: function () {
    this.animDur = 1000;
    this.easing = "easeInOutSine";
    this.initPosY = this.el.object3D.position.y;
  },

  tick: function () {
    if (this.el.object3D.position.y >= this.initPosY + 0.2) {
      this.el.setAttribute(
        "animation",
        `property: object3D.position.y; from: ${this.initPosY + 0.2}; to: ${
          this.initPosY
        }; dur: ${this.animDur}; easing: ${this.easing}`
      );
    } else if (this.el.object3D.position.y <= this.initPosY) {
      this.el.setAttribute(
        "animation",
        `property: object3D.position.y; from: ${this.initPosY}; to: ${
          this.initPosY + 0.2
        }; dur: ${this.animDur}; easing: ${this.easing}`
      );
    }
  },
});
