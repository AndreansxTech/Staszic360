const BUILD_INFO = {
  env: "production",
  buildDate: "__BUILD_DATE__",
};

function showBanner(text, env) {
  document.querySelectorAll(".environment-banner").forEach((el) => el.remove());

  const banner = document.createElement("div");
  banner.className = `environment-banner ${env}-banner text-scalable`;
  banner.textContent = text;
  document.body.appendChild(banner);
}

fetch("version.json")
  .then((res) => (res.ok ? res.json() : Promise.reject()))
  .then((data) => {
    const env = data.environment || "production";
    const version = data.version || "v?";
    const buildDate = data.buildDate || "unknown";
    const label = env === "preview" ? "Preview Version" : "Wersja Produkcyjna";
    if (env === "preview" && data.runUrl) {
      // Remove any existing banners and show clickable preview banner
      document.querySelectorAll(".environment-banner").forEach((el) => el.remove());
      const banner = document.createElement("div");
      banner.className = `environment-banner ${env}-banner text-scalable`;
      banner.innerHTML = `${label} – <a href="${data.runUrl}" target="_blank" rel="noopener noreferrer">${version}</a> – Build: ${buildDate} UTC`;
      document.body.appendChild(banner);
    } else {
      showBanner(`${label} – ${version} – Build: ${buildDate} UTC`, env);
    }
  })
  .catch(() => {
    showBanner("Wersja Produkcyjna", "production");
  });
const viewer = pannellum.viewer("panorama", {
  default: {
    firstScene: "portiernia",
    sceneFadeDuration: 100,
    showFullscreenCtrl: false,
    autoLoad: true,
  },
  scenes: {
    portiernia: {
      title: "Portiernia",
      hfov: 180,
      pitch: 0,
      yaw: -30,
      type: "equirectangular",
      panorama: "media/lowscaled_images/0portierniawejscie-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 5,
          yaw: -10,
          type: "info",
          text: "Portiernia",
        },
        {
          pitch: 5,
          yaw: -35,
          type: "scene",
          text: "Przejdź do Korytarza Głównego",
          sceneId: "part-srod",
        },
      ],
    },
    "part-srod": {
      title: "Korytarz Główny",
      hfov: 180,
      pitch: 0,
      yaw: 180,
      type: "equirectangular",
      panorama: "media/lowscaled_images/parter-wejscie-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 180,
          yaw: -170,
          type: "scene",
          text: "Przejdź z powrotem do portierni",
          sceneId: "portiernia",
        },
        {
          pitch: 0,
          yaw: -150,
          type: "scene",
          text: "Biblioteka",
          sceneId: "biblioteka",
        },
        {
          pitch: 0,
          yaw: -268,
          type: "scene",
          text: "Nowe skrzydło",
          sceneId: "korpuch",
        },
        {
          pitch: 0,
          yaw: 155,
          type: "scene",
          text: "Biblioteka",
          sceneId: "biblioteka",
        },
        {
          pitch: 0,
          yaw: 180,
          type: "scene",
          text: "Na pierwsze piętro",
          sceneId: "part-1-schody",
        },
        {
          pitch: 0,
          yaw: -90,
          type: "scene",
          text: "Stare skrzydło",
          sceneId: "parter-stareskrzydl1",
        },
      ],
    },
    korpuch: {
      title: "Korytarz",
      hfov: 180,
      pitch: 0,
      yaw: 135,
      type: "equirectangular",
      panorama: "media/lowscaled_images/gab-pedag-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 110,
          type: "scene",
          text: "Przejdź do Niebieskiego Dywanu",
          sceneId: "niebieskiDywan",
        },
        {
          pitch: 180,
          yaw: 80,
          type: "scene",
          text: "Przejdź z powrotem do Korytarza Głównego",
          sceneId: "part-srod",
        },
        {
          pitch: 15,
          yaw: 170,
          type: "scene",
          text: "Do góry",
          sceneId: "part-noweskrzydl1",
        },
        {
          pitch: -2,
          yaw: 150,
          type: "scene",
          text: "Przejście",
          sceneId: "part-sala-gim-wejscie",
        },
      ],
    },
    "sala-gim": {
      title: "Sala gimnastyczna mała",
      hfov: 180,
      pitch: 0,
      yaw: -100,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala-gim-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 170,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "part-sala-gim-wejscie",
        },
        {
          pitch: 0,
          yaw: -70,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "salagimn1",
        },
      ],
    },
    "part-sala-gim-wejscie": {
      title: "Korytarz",
      hfov: 180,
      pitch: 0,
      yaw: -100,
      type: "equirectangular",
      panorama: "media/lowscaled_images/part-sala-gim-wejscie-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -87,
          type: "scene",
          text: "Przejdź",
          sceneId: "sala-gim",
        },
        {
          pitch: 0,
          yaw: 110,
          type: "scene",
          text: "Przejdź",
          sceneId: "korpuch",
        },
      ],
    },
    salagimn1: {
      title: "Sala gimnastyczna",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/lowscaled_images/salagimn1-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 52,
          type: "scene",
          text: "Przejdź",
          sceneId: "sala-gim",
        },
        {
          pitch: 0,
          yaw: 139,
          type: "scene",
          text: "Na łącznik",
          sceneId: "noweskrzydl-lacznik4",
        },
        {
          pitch: 0,
          yaw: -30,
          type: "scene",
          text: "Na dużą salę gimnatyczną",
          sceneId: "salagimn",
        },
      ],
    },
    salagimn: {
      title: "Sala gimnasyczna duża",
      hfov: 180,
      pitch: 0,
      yaw: 170,
      type: "equirectangular",
      panorama: "media/lowscaled_images/salagimn-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 148,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "salagimn1",
        },
      ],
    },
    niebieskiDywan: {
      title: "Niebieski Dywan",
      hfov: 180,
      pitch: 0,
      yaw: 50,
      type: "equirectangular",
      panorama: "media/lowscaled_images/nieb-dyw-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -5,
          yaw: 95,
          type: "scene",
          text: "Sklepik Szkolny",
          sceneId: "Sklepik",
        },
        {
          pitch: 180,
          yaw: 180,
          type: "scene",
          text: "Powrót do Korytarza",
          sceneId: "korpuch",
        },
        {
          pitch: -5,
          yaw: 70,
          type: "scene",
          sceneId: "sekretariat1",
          text: "Przejdź",
        },
      ],
    },
    sekretariat: {
      title: "Sekretariat",
      hfov: 180,
      pitch: 0,
      yaw: 100,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sekretariat-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -5,
          yaw: 160,
          type: "scene",
          text: "Biuro pani Dyrektor",
          sceneId: "dyrektor",
        },
        {
          pitch: -5,
          yaw: 50,
          type: "scene",
          text: "Powrót",
          sceneId: "sekretariat1",
        },
      ],
    },
    dyrektor: {
      title: "Gabinet pani Dyrektor",
      hfov: 180,
      pitch: 0,
      yaw: -70,
      type: "equirectangular",
      panorama: "media/lowscaled_images/dyrektor-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -5,
          yaw: 120,
          type: "scene",
          text: "Sekretariat",
          sceneId: "sekretariat",
        },
      ],
    },

    sekretariat1: {
      title: "Sekretariat",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sek1-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 180,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "niebieskiDywan",
        },
        {
          pitch: 0,
          yaw: -20,
          type: "scene",
          text: "Sekretariat",
          sceneId: "sekretariat",
        },
        {
          pitch: 0,
          yaw: 74,
          type: "scene",
          text: "Przejdź",
          sceneId: "sekretariat3",
        },
      ],
    },
    sekretariat3: {
      title: "Sekretariat",
      hfov: 180,
      pitch: 0,
      yaw: 100,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sekretariat3-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -72,
          type: "scene",
          text: "Przejdź",
          sceneId: "sekretariat1",
        },
        {
          pitch: -5,
          yaw: 90,
          type: "scene",
          text: "Gabinet wicedyrektora",
          sceneId: "wicedyr",
        },
        {
          pitch: -5,
          yaw: -45,
          type: "scene",
          text: "Księgowość",
          sceneId: "skarbnik",
        },
        {
          pitch: -5,
          yaw: 113,
          type: "scene",
          text: "Sala numer 1",
          sceneId: "sala1",
        },
      ],
    },
    sala1: {
      title: "Sala 1",
      hfov: 180,
      pitch: 0,
      yaw: 100,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala1-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -5,
          yaw: 160,
          type: "scene",
          text: "Powrót",
          sceneId: "sekretariat3",
        },
      ],
    },
    wicedyr: {
      title: "Wicedyrektor",
      hfov: 180,
      pitch: 0,
      yaw: 100,
      type: "equirectangular",
      panorama: "media/lowscaled_images/wicedyr-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -5,
          yaw: -90,
          type: "scene",
          text: "Na korytarz",
          sceneId: "sekretariat3",
        },
      ],
    },
    skarbnik: {
      title: "Księgowość",
      hfov: 180,
      pitch: 0,
      yaw: 120,
      type: "equirectangular",
      panorama: "media/lowscaled_images/skarbnik-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -5,
          yaw: -40,
          type: "scene",
          text: "Na korytarz",
          sceneId: "sekretariat3",
        },
      ],
    },

    Sklepik: {
      title: "Sklepik szkolny",
      hfov: 180,
      pitch: 0,
      yaw: -30,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sklepik-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -5,
          yaw: 160,
          type: "scene",
          text: "Powrót",
          sceneId: "niebieskiDywan",
        },
      ],
    },
    biblioteka: {
      title: "Biblioteka",
      hfov: 180,
      pitch: 0,
      yaw: 100,
      type: "equirectangular",
      panorama: "media/lowscaled_images/part-biblioteka-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -5,
          yaw: 217,
          type: "scene",
          text: "Biblioteka",
          sceneId: "biblioteka1",
        },
        {
          pitch: 10,
          yaw: 15,
          type: "scene",
          text: "Powrót do Korytarza Głównego",
          sceneId: "part-srod",
        },
        {
          pitch: 10,
          yaw: 70,
          type: "scene",
          text: "Powrót do Korytarza Głównego",
          sceneId: "part-srod",
        },
      ],
    },
    biblioteka1: {
      title: "Biblioteka",
      hfov: 180,
      pitch: 0,
      yaw: 100,
      type: "equirectangular",
      panorama: "media/lowscaled_images/bibl1-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 77,
          type: "scene",
          text: "Powrót",
          sceneId: "biblioteka",
        },
        {
          pitch: -5,
          yaw: 255,
          type: "scene",
          text: "Przejdź",
          sceneId: "biblioteka2",
        },
      ],
    },
    biblioteka2: {
      title: "Biblioteka",
      hfov: 180,
      pitch: 0,
      yaw: 100,
      type: "equirectangular",
      panorama: "media/lowscaled_images/biblioteka2-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -5,
          yaw: -10,
          type: "scene",
          text: "Powrót",
          sceneId: "biblioteka1",
        },
      ],
    },

    "part-noweskrzydl1": {
      title: "Nowe Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/lowscaled_images/part-noweskrzydl1-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -15,
          yaw: -140,
          type: "scene",
          text: "Na dół",
          sceneId: "korpuch",
        },
        {
          pitch: -3,
          yaw: 10,
          type: "scene",
          text: "Idź dalej",
          sceneId: "part-noweskrzydl2",
        },
        {
          pitch: 0,
          yaw: -20,
          type: "scene",
          text: "Sala numer 24",
          sceneId: "sala24",
        },
        {
          pitch: 4,
          yaw: 250,
          type: "scene",
          text: "Na górę",
          sceneId: "przejscie-noweskrzydl",
        },
      ],
    },
    sala24: {
      title: "Sala 24",
      hfov: 180,
      pitch: 0,
      yaw: 200,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala24-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -4,
          yaw: -107,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "part-noweskrzydl1",
        },
      ],
    },
    "part-noweskrzydl2": {
      title: "Nowe Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: 55,
      type: "equirectangular",
      panorama: "media/lowscaled_images/part-noweskrzydl2-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 52,
          type: "scene",
          text: "Idź dalej",
          sceneId: "part-noweskrzydl3",
        },
        {
          pitch: -5,
          yaw: -130,
          type: "scene",
          text: "Wróć",
          sceneId: "part-noweskrzydl1",
        },
        {
          pitch: 0,
          yaw: 20,
          type: "scene",
          text: "Sala numer 25",
          sceneId: "sala25",
        },
      ],
    },
    sala25: {
      title: "Sala 25",
      hfov: 180,
      pitch: 0,
      yaw: 80,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala25-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -4,
          yaw: -5,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "part-noweskrzydl2",
        },
      ],
    },
    "part-noweskrzydl3": {
      title: "Nowe Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: 60,
      type: "equirectangular",
      panorama: "media/lowscaled_images/part-noweskrzydl3-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 58,
          type: "scene",
          text: "Łącznik",
          sceneId: "noweskrzydl-lacznik1",
        },
        {
          pitch: 0,
          yaw: -120,
          type: "scene",
          text: "Wróć",
          sceneId: "part-noweskrzydl2",
        },
        {
          pitch: 0,
          yaw: -22,
          type: "scene",
          text: "Sala numer 26",
          sceneId: "sala26",
        },
      ],
    },
    sala26: {
      title: "Sala 26",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala26-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -4,
          yaw: -75,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "part-noweskrzydl3",
        },
      ],
    },
    "noweskrzydl-lacznik1": {
      title: "Łącznik",
      hfov: 180,
      pitch: 0,
      yaw: 40,
      type: "equirectangular",
      panorama: "media/lowscaled_images/noweskrzydl-lacznik1-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -6,
          yaw: -30,
          type: "scene",
          text: "Idź dalej",
          sceneId: "noweskrzydl-lacznik2",
        },
        {
          pitch: 0,
          yaw: 60,
          type: "scene",
          text: "Wróć",
          sceneId: "part-noweskrzydl3",
        },
      ],
    },
    "noweskrzydl-lacznik2": {
      title: "Łącznik",
      hfov: 180,
      pitch: -10,
      yaw: -60,
      type: "equirectangular",
      panorama: "media/lowscaled_images/noweskrzydl-lacznik2-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -20,
          yaw: -40,
          type: "scene",
          text: "Na dół",
          sceneId: "noweskrzydl-lacznik3",
        },
        {
          pitch: 5,
          yaw: -70,
          type: "scene",
          text: "Do góry",
          sceneId: "noweskrzydl-lacznik1",
        },
      ],
    },
    "noweskrzydl-lacznik3": {
      title: "Łącznik",
      hfov: 180,
      pitch: 0,
      yaw: -20,
      type: "equirectangular",
      panorama: "media/lowscaled_images/noweskrzydl-lacznik3-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -10,
          yaw: -20,
          type: "scene",
          text: "Na dół",
          sceneId: "noweskrzydl-lacznik4",
        },
        {
          pitch: 10,
          yaw: -40,
          type: "scene",
          text: "Do góry",
          sceneId: "noweskrzydl-lacznik2",
        },
      ],
    },
    "noweskrzydl-lacznik4": {
      title: "Łącznik",
      hfov: 180,
      pitch: 0,
      yaw: 100,
      type: "equirectangular",
      panorama: "media/lowscaled_images/noweskrzydl-lacznik4-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -10,
          yaw: 110,
          type: "scene",
          text: "Do szatni",
          sceneId: "noweskrzydl-szatnie",
        },
        {
          pitch: 10,
          yaw: 80,
          type: "scene",
          text: "Do góry",
          sceneId: "noweskrzydl-lacznik3",
        },
        {
          pitch: 0,
          yaw: -110,
          type: "scene",
          text: "Do sali gimnatycznej",
          sceneId: "salagimn1",
        },
      ],
    },
    "noweskrzydl-szatnie": {
      title: "Szatnie",
      hfov: 180,
      pitch: 0,
      yaw: 100,
      type: "equirectangular",
      panorama: "media/lowscaled_images/noweskrzydl-szatnie-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 5,
          yaw: -70,
          type: "scene",
          text: "Do góry",
          sceneId: "noweskrzydl-lacznik4",
        },
      ],
    },
    "part-1-schody": {
      title: "Schody na I piętro",
      hfov: 180,
      pitch: 0,
      yaw: 130,
      type: "equirectangular",
      panorama: "media/lowscaled_images/part-1-schody-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 15,
          yaw: 150,
          type: "scene",
          text: " Na I piętro",
          sceneId: "1pietr-srod",
        },
        {
          pitch: 15,
          yaw: 110,
          type: "scene",
          text: " Na I piętro",
          sceneId: "1pietr-srod",
        },
        {
          pitch: -15,
          yaw: 130,
          type: "scene",
          text: "Wróć",
          sceneId: "part-srod",
        },
      ],
    },
    "1pietr-srod": {
      //Working here (long ass code)
      title: "I piętro",
      hfov: 180,
      pitch: 0,
      yaw: 29,
      type: "equirectangular",
      panorama: "media/lowscaled_images/1pietr-srod-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 0,
          type: "scene",
          text: "Wróć na dół",
          sceneId: "part-1-schody",
        },
        {
          pitch: 0,
          yaw: 60,
          type: "scene",
          text: "Wróć na dół",
          sceneId: "part-1-schody",
        },
        {
          pitch: 5,
          yaw: 30,
          type: "scene",
          text: "Na II piętro",
          sceneId: "1-2pietr-schody",
        },
        {
          pitch: 0,
          yaw: 120,
          type: "scene",
          text: "Stare skrzydło",
          sceneId: "1pietr-stareskrzydl3",
        },
        {
          pitch: 0,
          yaw: -60,
          type: "scene",
          text: "Do nowego skrzydła",
          sceneId: "przejscie-noweskrzydl",
        },
        {
          pitch: 0,
          yaw: 145,
          type: "scene",
          text: "Sala numer 21",
          sceneId: "sala21",
        },
      ],
    },
    sala21: {
      title: "Sala 21",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala21-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -4,
          yaw: 15,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "1pietr-srod",
        },
      ],
    },
    "przejscie-noweskrzydl": {
      title: "Schody na I piętro",
      hfov: 180,
      pitch: 0,
      yaw: -140,
      type: "equirectangular",
      panorama: "media/lowscaled_images/przejscie-noweskrzydl-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -55,
          type: "scene",
          text: "Do starego skrzydła",
          sceneId: "1pietr-srod",
        },
        {
          pitch: -15,
          yaw: 200,
          type: "scene",
          text: "Na dół",
          sceneId: "part-noweskrzydl1",
        },
        {
          pitch: 20,
          yaw: 225,
          type: "scene",
          text: "Na górę",
          sceneId: "1pietr-noweskrzydl1",
        },
      ],
    },

    "1-2pietr-schody": {
      title: "Schody na II piętro",
      hfov: 180,
      pitch: 0,
      yaw: 137,
      type: "equirectangular",
      panorama: "media/lowscaled_images/1-2pietr-schody-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 15,
          yaw: 155,
          type: "scene",
          text: " Na II piętro",
          sceneId: "2pietr-srod",
        },
        {
          pitch: 15,
          yaw: 117,
          type: "scene",
          text: " Na II piętro",
          sceneId: "2pietr-srod",
        },
        {
          pitch: -15,
          yaw: 137,
          type: "scene",
          text: "Wróć",
          sceneId: "1pietr-srod",
        },
      ],
    },
    "2pietr-srod": {
      title: "II piętro",
      hfov: 180,
      pitch: 10,
      yaw: 43,
      type: "equirectangular",
      panorama: "media/lowscaled_images/2pietr-srod-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 70,
          type: "scene",
          text: "Wróć na dół",
          sceneId: "1-2pietr-schody",
        },
        {
          pitch: 0,
          yaw: 25,
          type: "scene",
          text: "Wróć na dół",
          sceneId: "1-2pietr-schody",
        },
        {
          pitch: 0,
          yaw: 157,
          type: "scene",
          text: "Sala konferencyjna",
          sceneId: "konf2pietro",
        },
        {
          pitch: 0,
          yaw: -67,
          type: "scene",
          text: "Sala konferencyjna",
          sceneId: "konf2pietro",
        },
        {
          pitch: 0,
          yaw: 135,
          type: "scene",
          text: "Korytarz",
          sceneId: "2pietrostareskrzyd1",
        },
        {
          pitch: 0,
          yaw: -40,
          type: "scene",
          text: "Do nowego skrzydła",
          sceneId: "2pietr-noweskrzydl-schod",
        },
      ],
    },
    "2pietr-noweskrzydl-schod": {
      title: "Przejście do nowego skrzydła",
      hfov: 180,
      pitch: 0,
      yaw: 145,
      type: "equirectangular",
      panorama: "media/lowscaled_images/2pietr-noweskrzydl-schod-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -5,
          yaw: -130,
          type: "scene",
          text: "Do starego skrzydła",
          sceneId: "2pietr-srod",
        },
        {
          pitch: 10,
          yaw: 143,
          type: "scene",
          text: "Na górę",
          sceneId: "2pietr-noweskrzydl1",
        },
        {
          pitch: -20,
          yaw: 120,
          type: "scene",
          text: "Na dół",
          sceneId: "1pietr-noweskrzydl1",
        },
      ],
    },
    "1pietr-noweskrzydl1": {
      //ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
      title: "I pietro Nowe Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: 180,
      type: "equirectangular",
      panorama: "media/lowscaled_images/1pietr-noweskrzydl1-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 15,
          yaw: 152,
          type: "scene",
          text: "Na górę",
          sceneId: "2pietr-noweskrzydl-schod",
        },
        {
          pitch: 0,
          yaw: 200,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietr-noweskrzydl2",
        },
        {
          pitch: -20,
          yaw: 130,
          type: "scene",
          text: "Na dół",
          sceneId: "przejscie-noweskrzydl",
        },
      ],
    },
    "1pietr-noweskrzydl2": {
      title: "I pietro Nowe Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: 180,
      type: "equirectangular",
      panorama: "media/lowscaled_images/1pietr-noweskrzydl2-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -30,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietr-noweskrzydl1",
        },
        {
          pitch: 0,
          yaw: 140,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietr-noweskrzydl3",
        },
      ],
    },
    "1pietr-noweskrzydl2,2": {
      title: "I pietro Nowe Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/lowscaled_images/1pietr-noweskrzydl2-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -30,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietr-noweskrzydl1",
        },
        {
          pitch: 0,
          yaw: 140,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietr-noweskrzydl3",
        },
      ],
    },
    "1pietr-noweskrzydl3": {
      title: "I pietro Nowe Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/lowscaled_images/1pietr-noweskrzydl3-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -160,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietr-noweskrzydl2,2",
        },
        {
          pitch: 0,
          yaw: 20,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietr-noweskrzydl4",
        },
        {
          pitch: 5,
          yaw: -6,
          type: "scene",
          text: "Sala numer 40",
          sceneId: "sala40",
        },
        {
          pitch: 0,
          yaw: 180,
          type: "scene",
          text: "Sala numer 33",
          sceneId: "sala33",
        },
      ],
    },
    "1pietr-noweskrzydl3,3": {
      title: "I pietro Nowe Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: 190,
      type: "equirectangular",
      panorama: "media/lowscaled_images/1pietr-noweskrzydl3-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -160,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietr-noweskrzydl2,2",
        },
        {
          pitch: 0,
          yaw: 20,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietr-noweskrzydl4",
        },
        {
          pitch: 5,
          yaw: -6,
          type: "scene",
          text: "Sala numer 40",
          sceneId: "sala40",
        },
        {
          pitch: 0,
          yaw: 180,
          type: "scene",
          text: "Sala numer 33",
          sceneId: "sala33",
        },
      ],
    },
    sala33: {
      title: "Sala 33",
      hfov: 180,
      pitch: 4,
      yaw: 40,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala33-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -5,
          yaw: 80,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "1pietr-noweskrzydl3,3",
        },
      ],
    },
    "1pietr-noweskrzydl4": {
      title: "I pietro Nowe Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: 90,
      type: "equirectangular",
      panorama: "media/lowscaled_images/1pietr-noweskrzydl4-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -84,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietr-noweskrzydl3,3",
        },
        {
          pitch: 0,
          yaw: 70,
          type: "scene",
          text: "Sala numer 39",
          sceneId: "sala39",
        },
      ],
    },
    sala39: {
      title: "Sala 39",
      hfov: 180,
      pitch: 0,
      yaw: 60,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala39-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -5,
          yaw: 125,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "1pietr-noweskrzydl4,4",
        },
      ],
    },
    "1pietr-noweskrzydl4,4": {
      title: "I piętro Nowe Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: -90,
      type: "equirectangular",
      panorama: "media/lowscaled_images/1pietr-noweskrzydl4-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -84,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietr-noweskrzydl3,3",
        },
        {
          pitch: 0,
          yaw: 70,
          type: "scene",
          text: "Sala numer 39",
          sceneId: "sala39",
        },
      ],
    },
    sala40: {
      title: "Sala 40",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala40-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -30,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "1pietr-noweskrzydl3",
        },
      ],
    },

    "2pietr-noweskrzydl1": {
      title: "II piętro Nowe Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/lowscaled_images/2pietr-noweskrzydl1-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -3,
          yaw: 175,
          type: "scene",
          text: "Na dół",
          sceneId: "2pietr-noweskrzydl-schod",
        },
        {
          pitch: 0,
          yaw: -65,
          type: "scene",
          text: "Sala numer 57",
          sceneId: "sala57",
        },
      ],
    },
    sala57: {
      title: "Sala 57",
      hfov: 180,
      pitch: 0,
      yaw: 180,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala57-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -170,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "2pietr-noweskrzydl1",
        },
      ],
    },
    //sss początekk kskdksk ds
    "parter-stareskrzydl1": {
      title: "Stare Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: -27,
      type: "equirectangular",
      panorama: "media/lowscaled_images/parter-stareskrzydl1-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -30,
          type: "scene",
          text: "Przejdź",
          sceneId: "parter-stareskrzydl2",
        },
        {
          pitch: -5,
          yaw: 150,
          type: "scene",
          text: "Przejdź",
          sceneId: "part-srod",
        },
        {
          pitch: 0,
          yaw: 60,
          type: "scene",
          text: "Sala numer 8",
          sceneId: "sala8",
        },
      ],
    },
    sala8: {
      title: "Sala 8",
      hfov: 180,
      pitch: 0,
      yaw: -100,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala8-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -85,
          type: "scene",
          text: "Wyjdź na korytarz",
          sceneId: "parter-stareskrzydl1",
        },
      ],
    },

    "parter-stareskrzydl2": {
      title: "Stare Skrzydło 2",
      hfov: 180,
      pitch: 0,
      yaw: -30,
      type: "equirectangular",
      panorama: "media/lowscaled_images/parter-stareskrzydl2-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -35,
          type: "scene",
          text: "Przejdź",
          sceneId: "parter-stareskrzydl3",
        },
        {
          pitch: 0,
          yaw: 145,
          type: "scene",
          text: "Przejdź",
          sceneId: "parter-stareskrzydl1.1",
        },
        {
          pitch: 0,
          yaw: 66.5,
          type: "scene",
          text: "Sala numer 7",
          sceneId: "sala7",
        },
      ],
    },
    sala7: {
      title: "Sala 7",
      hfov: 180,
      pitch: 0,
      yaw: -120,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala7-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 232,
          type: "scene",
          text: "Wyjdź na korytarz",
          sceneId: "parter-stareskrzydl2",
        },
      ],
    },
    "parter-stareskrzydl3": {
      title: "Stare Skrzydło 3",
      hfov: 180,
      pitch: 0,
      yaw: 70,
      type: "equirectangular",
      panorama: "media/lowscaled_images/parter-stareskrzydl3-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -7,
          type: "scene",
          text: "Przejdź",
          sceneId: "parter-stareskrzydl4",
        },
        {
          pitch: 0,
          yaw: 260,
          type: "scene",
          text: "Przejdź",
          sceneId: "parter-stareskrzydl2.2",
        },
        {
          pitch: 0,
          yaw: 102,
          type: "scene",
          text: "Sala numer 6",
          sceneId: "sala6",
        },
      ],
    },
    sala6: {
      title: "Sala 6",
      hfov: 180,
      pitch: 0,
      yaw: -120,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala6-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -3,
          yaw: -145,
          type: "scene",
          text: "Wyjdź na korytarz",
          sceneId: "parter-stareskrzydl3",
        },
      ],
    },
    "parter-stareskrzydl4": {
      title: "Stare Skrzydło 4",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/lowscaled_images/parter-stareskrzydl4-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 20,
          yaw: -40,
          type: "scene",
          text: "Na górę",
          sceneId: "1pietr-stareskrzydl1",
        },
        {
          pitch: 0,
          yaw: 50,
          type: "scene",
          text: "Idź dalej",
          sceneId: "parter-stareskrzydl3.3",
        },
        {
          pitch: 0,
          yaw: 25,
          type: "scene",
          text: "Sala numer 4",
          sceneId: "sala4",
        },
        {
          pitch: 0,
          yaw: -115,
          type: "scene",
          text: "Sala numer 3",
          sceneId: "sala3",
        },
        {
          pitch: 0,
          yaw: -130,
          type: "scene",
          text: "Sala numer 2",
          sceneId: "sala2",
        },
      ],
    },
    sala4: {
      title: "Sala 4",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala4-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 25,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "parter-stareskrzydl4",
        },
      ],
    },
    sala2: {
      title: "Sala 2",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/lowscaled_images/Sala2-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 60,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "parter-stareskrzydl4",
        },
        {
          pitch: 0,
          yaw: -50,
          type: "scene",
          text: "Sala 2a",
          sceneId: "sala2a",
        },
        {
          pitch: 0,
          yaw: -75,
          type: "scene",
          text: "Sala 2b",
          sceneId: "sala2b",
        },
      ],
    },
    sala2a: {
      title: "Sala 2a",
      hfov: 180,
      pitch: 0,
      yaw: 180,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala2a-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -60,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "sala2",
        },
      ],
    },
    sala2b: {
      title: "Sala 2b",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala2b-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 25,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "sala2",
        },
      ],
    },
    "parter-stareskrzydl1.1": {
      title: "Stare Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: 150,
      type: "equirectangular",
      panorama: "media/lowscaled_images/parter-stareskrzydl1-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -30,
          type: "scene",
          text: "Przejdź",
          sceneId: "parter-stareskrzydl2",
        },
        {
          pitch: -5,
          yaw: 150,
          type: "scene",
          text: "Przejdź",
          sceneId: "part-srod",
        },
        {
          pitch: 0,
          yaw: 60,
          type: "scene",
          text: "Sala numer 8",
          sceneId: "sala8",
        },
      ],
    },
    sala8: {
      title: "Sala 8",
      hfov: 180,
      pitch: 0,
      yaw: -100,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala8-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -85,
          type: "scene",
          text: "Wyjdź na korytarz",
          sceneId: "parter-stareskrzydl1",
        },
      ],
    },

    "parter-stareskrzydl2.2": {
      title: "Stare Skrzydło 2",
      hfov: 180,
      pitch: 0,
      yaw: 145,
      type: "equirectangular",
      panorama: "media/lowscaled_images/parter-stareskrzydl2-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -35,
          type: "scene",
          text: "Przejdź",
          sceneId: "parter-stareskrzydl3",
        },
        {
          pitch: 0,
          yaw: 145,
          type: "scene",
          text: "Przejdź",
          sceneId: "parter-stareskrzydl1.1",
        },
        {
          pitch: 0,
          yaw: 66.5,
          type: "scene",
          text: "Sala numer 7",
          sceneId: "sala7",
        },
      ],
    },
    sala7: {
      title: "Sala 7",
      hfov: 180,
      pitch: 0,
      yaw: -120,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala7-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 232,
          type: "scene",
          text: "Wyjdź na korytarz",
          sceneId: "parter-stareskrzydl2",
        },
      ],
    },
    "parter-stareskrzydl3.3": {
      title: "Stare Skrzydło 3",
      hfov: 180,
      pitch: 0,
      yaw: 260,
      type: "equirectangular",
      panorama: "media/lowscaled_images/parter-stareskrzydl3-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -7,
          type: "scene",
          text: "Przejdź",
          sceneId: "parter-stareskrzydl4",
        },
        {
          pitch: 0,
          yaw: 260,
          type: "scene",
          text: "Przejdź",
          sceneId: "parter-stareskrzydl2.2",
        },
        {
          pitch: 0,
          yaw: 102,
          type: "scene",
          text: "Sala numer 6",
          sceneId: "sala6",
        },
      ],
    },
    sala6: {
      title: "Sala 6",
      hfov: 180,
      pitch: 0,
      yaw: -120,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala6-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -3,
          yaw: -145,
          type: "scene",
          text: "Wyjdź na korytarz",
          sceneId: "parter-stareskrzydl3",
        },
      ],
    },
    "parter-stareskrzydl4.4": {
      title: "Stare Skrzydło 4",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/lowscaled_images/parter-stareskrzydl4-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 20,
          yaw: -40,
          type: "scene",
          text: "Na górę",
          sceneId: "1pietr-stareskrzydl1",
        },
        {
          pitch: 0,
          yaw: 50,
          type: "scene",
          text: "Idź dalej",
          sceneId: "parter-stareskrzydl3",
        },
        {
          pitch: 0,
          yaw: 25,
          type: "scene",
          text: "Sala numer 4",
          sceneId: "sala4",
        },
        {
          pitch: 0,
          yaw: -115,
          type: "scene",
          text: "Sala numer 3",
          sceneId: "sala3",
        },
              ],
    },
    "1pietr-stareskrzydl1": {
      title: "1 Piętro Stare Skrzydło 1",
      hfov: 180,
      pitch: -5,
      yaw: 150,
      type: "equirectangular",
      panorama: "media/lowscaled_images/1pietr-stareskrzydl1-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -85,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietr-stareskrzydl1.5", // Changed connection
        },
        {
          pitch: -25,
          yaw: 185,
          type: "scene",
          text: "Na dół",
          sceneId: "parter-stareskrzydl4",
        },
        {
          pitch: 0,
          yaw: 102,
          type: "scene",
          text: "Sale 16A i 16B",
          sceneId: "sala16p",
        },
      ],
    },

    "1pietr-stareskrzydl1.5": {
      // New scene //fdfddfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsghu
      title: "1 Piętro Stare Skrzydło 1.5",
      hfov: 180,
      pitch: 0,
      yaw: 170,
      type: "equirectangular",
      panorama: "media/lowscaled_images/1pietr-stareskrzydl1.5-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 187,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietr-stareskrzydl2",
        },
        {
          pitch: 0,
          yaw: 20,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietr-stareskrzydl1",
        },
        {
          pitch: 0,
          yaw: 90,
          type: "scene",
          text: "Sala 17",
          sceneId: "sala17",
        },
      ],
    },
    sala17: {
      title: "Sala 17",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala17-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 124,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "1pietr-stareskrzydl1.5",
        },
      ],
    },
    sala3: {
      title: "Sala 3",
      hfov: 180,
      pitch: -5,
      yaw: -100,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala3-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -5,
          yaw: -50,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "parter-stareskrzydl4.4",
        },
      ],
    },
    sala16p: {
      title: "Sale 16A i 16B",
      hfov: 180,
      pitch: 0,
      yaw: 140,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala16p-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -110,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "1pietr-stareskrzydl1",
        },
        {
          pitch: 0,
          yaw: 170,
          type: "scene",
          text: "Sala 16A",
          sceneId: "sala16a",
        },
        {
          pitch: 0,
          yaw: 105,
          type: "scene",
          text: "Sala 16B",
          sceneId: "sala16b",
        },
      ],
    },
    sala16a: {
      title: "Sala 16A",
      hfov: 180,
      pitch: 0,
      yaw: 150,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala16a-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -5,
          yaw: -47,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "sala16p",
        },
      ],
    },
    sala16b: {
      title: "Sala 16B",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala16b-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 20,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "sala16p",
        },
      ],
    },
    "1pietr-stareskrzydl2": {
      title: "1 Piętro Stare Skrzydło 2",
      hfov: 180,
      pitch: 0,
      yaw: 170,
      type: "equirectangular",
      panorama: "media/lowscaled_images/1pietr-stareskrzydl2-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 130,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietr-stareskrzydl3",
        },
        {
          pitch: 0,
          yaw: 225,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietr-stareskrzydl1.5", // Changed connection
        },
        {
          pitch: -5,
          yaw: -47,
          type: "scene",
          text: "Sala 18",
          sceneId: "sala18",
        },
      ],
    },
    sala18: {
      title: "Sala 18",
      hfov: 180,
      pitch: -5,
      yaw: -20,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala18-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -5,
          yaw: -67,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "1pietr-stareskrzydl2",
        },
      ],
    },
    "1pietr-stareskrzydl3": {
      title: "1 Piętro Stare Skrzydło 3",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/lowscaled_images/1pietr-stareskrzydl3-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -20,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietr-stareskrzydl2",
        },
        {
          pitch: 0,
          yaw: 160,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietr-srod",
        },
        {
          pitch: 0,
          yaw: 72,
          type: "scene",
          text: "Sala numer 20",
          sceneId: "sala20",
        },
      ],
    }, //koniec
    sala19: {
      title: "Sala 19",
      hfov: 180,
      pitch: 0,
      yaw: -40,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala19-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -60,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "1pietr-stareskrzydl3",
        },
      ],
    },
    sala20: {
      title: "Sala 20",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala20-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -29,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "1pietr-stareskrzydl3",
        },
      ],
    },
    konf2pietro: {
      title: "Sala konferencyjna",
      hfov: 180,
      pitch: 0,
      yaw: 130,
      type: "equirectangular",
      panorama: "media/lowscaled_images/konf2pietro-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -15,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "2pietr-srod",
        },
        {
          pitch: 0,
          yaw: 85,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "2pietr-srod",
        },
      ],
    },
    "2pietrostareskrzyd1": {
      title: "Korytarz",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/lowscaled_images/2pietrostareskrzyd1-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -1,
          yaw: -213,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "2pietr-srod",
        },
        {
          pitch: 0,
          yaw: -30,
          type: "scene",
          text: "Korytarz",
          sceneId: "2pietrostareskrzyd2",
        },
        {
          pitch: 0,
          yaw: 70,
          type: "scene",
          text: "Sala 45",
          sceneId: "sala45",
        },
      ],
    },
    "2pietrostareskrzyd1,2": {
      title: "Korytarz",
      hfov: 180,
      pitch: 0,
      yaw: 160,
      type: "equirectangular",
      panorama: "media/lowscaled_images/2pietrostareskrzyd1-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -1,
          yaw: -213,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "2pietr-srod",
        },
        {
          pitch: 0,
          yaw: -30,
          type: "scene",
          text: "Korytarz",
          sceneId: "2pietrostareskrzyd2",
        },
        {
          pitch: 0,
          yaw: 70,
          type: "scene",
          text: "Sala 45",
          sceneId: "sala45",
        },
      ],
    },
    sala45: {
      title: "Sala 45",
      hfov: 180,
      pitch: 0,
      yaw: 100,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala45-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -1,
          yaw: 45,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "2pietrostareskrzyd1",
        },
      ],
    },
    "2pietrostareskrzyd2": {
      title: "Korytarz",
      hfov: 180,
      pitch: 0,
      yaw: 50,
      type: "equirectangular",
      panorama: "media/lowscaled_images/2pietrostareskrzyd2-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -1,
          yaw: 225,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "2pietrostareskrzyd1,2",
        },
        {
          pitch: 0,
          yaw: 30,
          type: "scene",
          text: "wyjdź na olimp",
          sceneId: "olimp1",
        },
        {
          pitch: 0,
          yaw: 133,
          type: "scene",
          text: "Sala numer 46",
          sceneId: "sala46",
        },
        {
          pitch: 0,
          yaw: 50,
          type: "scene",
          text: "Sala numer 47",
          sceneId: "sala47",
        },
      ],
    },
    "2pietrostareskrzyd2,2": {
      title: "Korytarz",
      hfov: 180,
      pitch: 0,
      yaw: -130,
      type: "equirectangular",
      panorama: "media/lowscaled_images/2pietrostareskrzyd2-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -1,
          yaw: 225,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "2pietrostareskrzyd1,2",
        },
        {
          pitch: 0,
          yaw: 30,
          type: "scene",
          text: "wyjdź na olimp",
          sceneId: "olimp1",
        },
        {
          pitch: 0,
          yaw: 133,
          type: "scene",
          text: "sala46",
          sceneId: "sala46",
        },
        {
          pitch: 0,
          yaw: 50,
          type: "scene",
          text: "sala47",
          sceneId: "sala47",
        },
      ],
    },
    sala46: {
      title: "sala46",
      hfov: 180,
      pitch: 0,
      yaw: 150,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala46-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -1,
          yaw: 65,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "2pietrostareskrzyd2",
        },
      ],
    },
    sala47: {
      title: "sala47",
      hfov: 180,
      pitch: 0,
      yaw: 50,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala47-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -1,
          yaw: 20,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "2pietrostareskrzyd2",
        },
      ],
    },
    olimp1: {
      title: "Olimp",
      hfov: 180,
      pitch: -5,
      yaw: 90,
      type: "equirectangular",
      panorama: "media/lowscaled_images/olimp1-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -20,
          yaw: 90,
          type: "scene",
          text: "Na dół",
          sceneId: "2pietrostareskrzyd2,2",
        },
        {
          pitch: 0,
          yaw: -10,
          type: "scene",
          text: "Do sali 61",
          sceneId: "olimp2",
        },
        {
          pitch: 0,
          yaw: 162,
          type: "scene",
          text: "Sala 59",
          sceneId: "sala59",
        },
        {
          pitch: 0,
          yaw: -108,
          type: "scene",
          text: "Sala 60",
          sceneId: "sala60",
        },
      ],
    },
    sala59: {
      title: "Sala 59",
      hfov: 180,
      pitch: -10,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala59-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -7,
          yaw: -83,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "olimp1",
        },
      ],
    },
    sala60: {
      title: "Sala 60",
      hfov: 180,
      pitch: -5,
      yaw: -150,
      type: "equirectangular",
      panorama: "media/lowscaled_images/sala60-lowscaled.jpg",
      hotSpots: [
        {
          pitch: -7,
          yaw: -150,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "olimp1",
        },
      ],
    },
    olimp2: {
      title: "Olimp",
      hfov: 180,
      pitch: 0,
      yaw: 130,
      type: "equirectangular",
      panorama: "media/lowscaled_images/olimp2-lowscaled.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 40,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "olimp1",
        },
      ],
    },
 //Zdjęcia testowe piętro 2
  dwapietronoweskrzydtest: {
  title: "test2",
  hfov: 180,
  pitch: 0,
  yaw: -80,
  type: "equirectangular",
  panorama: "media/experimental-14mp/2pietronowetest.jpg",
  hotSpots: [
    {
      pitch: 0,
      yaw: -100,
      type: "scene",
      text: "dalej",
      sceneId: "dwapietronoweskrzydtest2",
    },
    {
      pitch: -20,
      yaw: 190,
      type: "scene",
      text: "Na dół",
      sceneId: "2pietr-noweskrzydl-schod",
    },
  ],
},
    dwapietronoweskrzydtest2: {
      title: "test2",
      hfov: 180,
      pitch: 0,
      yaw: 130,
      type: "equirectangular",
      panorama: "media/experimental-14mp/2pietronowetest2.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 30,
          type: "scene",
          text: "do tyłu",
          sceneId: "dwapietronoweskrzydtest",
        },
        {
          pitch: 0,
          yaw: -110,
          type: "scene",
          text: "dalej",
          sceneId: "dwapietronoweskrzydtest3",
        },
      ],
    },
    dwapietronoweskrzydtest3: {
      title: "test2",
      hfov: 180,
      pitch: 0,
      yaw: 130,
      type: "equirectangular",
      panorama: "media/experimental-14mp/2pietronowetest3.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -140,
          type: "scene",
          text: "do tyłu",
          sceneId: "dwapietronoweskrzydtest2",
        },
        {
          pitch: 0,
          yaw: 35,
          type: "scene",
          text: "dalej",
          sceneId: "dwapietronoweskrzydtest4",
        },
        {
          pitch: 0,
          yaw: 120,
          type: "scene",
          text: "sala 50",
          sceneId: "klasa50test",
        },
        
      ],
    },
    dwapietronoweskrzydtest4: {
      title: "test2",
      hfov: 180,
      pitch: 0,
      yaw: 130,
      type: "equirectangular",
      panorama: "media/experimental-14mp/2pietronowetest4.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -105,
          type: "scene",
          text: "do tyłu",
          sceneId: "dwapietronoweskrzydtest3",
        },
        {
          pitch: 0,
          yaw: 75,
          type: "scene",
          text: "dalej",
          sceneId: "dwapietronoweskrzydtest5",
        },
        {
          pitch: 0,
          yaw: -20,
          type: "scene",
          text: "sala 57",
          sceneId: "klasa57test",
        },
      ],
    },
    dwapietronoweskrzydtest5: {
      title: "test2",
      hfov: 180,
      pitch: 0,
      yaw: 130,
      type: "equirectangular",
      panorama: "media/experimental-14mp/2pietronowetest5.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 10,
          type: "scene",
          text: "do tyłu",
          sceneId: "dwapietronoweskrzydtest4",
        },
        {
          pitch: 0,
          yaw: 115,
          type: "scene",
          text: "sala 55",
          sceneId: "klasa55test",
        },
      ],
    },
    klasa55test: {
      title: "test2",
      hfov: 180,
      pitch: 0,
      yaw: 130,
      type: "equirectangular",
      panorama: "media/experimental-14mp/klasa55test.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -50,
          type: "scene",
          text: "do tyłu",
          sceneId: "dwapietronoweskrzydtest5",
        },
        
      ],
    },
    klasa50test: {
      title: "test2",
      hfov: 180,
      pitch: 0,
      yaw: 130,
      type: "equirectangular",
      panorama: "media/experimental-14mp/klasa50test.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 110,
          type: "scene",
          text: "do tyłu",
          sceneId: "dwapietronoweskrzydtest3",
        },
        
      ],
    },
    klasa57test: {
      title: "test2",
      hfov: 180,
      pitch: 0,
      yaw: 130,
      type: "equirectangular",
      panorama: "media/experimental-14mp/klasa57test.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: -70,
          type: "scene",
          text: "do tyłu",
          sceneId: "dwapietronoweskrzydtest4",
        },
        
      ],


    }








  }, //wazne nawiasy nie usuwac
});

  document.getElementById("welcomeButton").addEventListener("click", function () {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("searchDiv").classList.remove("hidden");
  document.querySelector(".quick-access-menu").classList.remove("blurred");
  viewer.resize();
  // preloadImages(); Removed call to preload all images
});

function showErrorModal() {
  document.getElementById("errorModal").classList.remove("hidden");
}

document
  .getElementById("closeErrorModal")
  .addEventListener("click", function () {
    document.getElementById("errorModal").classList.add("hidden");
  });

function goToScene() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  if (searchInput === "index") {
    window.location.href = window.location.href.replace(/\/[^\/]*$/, "/media/");
    return;
  }
  if (searchInput === "sig1") {
    window.location.href = window.location.href.replace(
      /\/[^\/]*$/,
      "/index.html.sig"
    );
    return;
  }
  if (searchInput === "sig2") {
    window.location.href = window.location.href.replace(
      /\/[^\/]*$/,
      "/style.css.sig"
    );
    return;
  }
  if (searchInput === "sig3") {
    window.location.href = window.location.href.replace(
      /\/[^\/]*$/,
      "/script.js.sig"
    );
    return;
  }
  const sceneMapping = {
    Sklepik: "Sklepik",
    Stołówka: "Sklepik",
    stolowka: "Sklepik",
    sekretariat: "sekretariat",
    biblioteka: "biblioteka",
    1: "sala1",
    "sala 1": "sala1",
    sala2: "sala2",
    "sala 2": "sala2",
    sala2a: "sala2a",
    "sala 2a": "sala2a",
    "2a": "sala2a",
    sala2b: "sala2b",
    "sala 2b": "sala2b",
    "2b": "sala2b",
    sala3: "sala3",
    3: "sala3",
    "sala 3": "sala3",
    sala4: "sala4",
    "sala 4": "sala4",
    6: "sala6",
    "sala 6": "sala6",
    sala6: "sala6",
    7: "sala7",
    "sala 7": "sala7",
    sala7: "sala7",
    8: "sala8",
    "sala 8": "sala8",
    sala8: "sala8",
    16: "sala16p",
    "sale 16": "sala16p",
    "16a": "sala16a",
    "16 a": "sala16a",
    "sala 16a": "sala16a",
    sala16a: "sala16a",
    "sala 16 a": "sala16a",
    "16b": "sala16b",
    "16 b": "sala16b",
    "sala 16b": "sala16b",
    sala16b: "sala16b",
    "sala 16 b": "sala16b",
    17: "sala17",
    "sala 17": "sala17",
    18: "sala18",
    "sala 18": "sala18",
    19: "sala19",
    "sala 19": "sala19",
    20: "sala20",
    "sala 20": "sala20",
    21: "sala21",
    "sala 21": "sala21",
    24: "sala24",
    "sala 24": "sala24",
    25: "sala25",
    "sala 25": "sala25",
    26: "sala26",
    "sala 26": "sala26",
    33: "sala33",
    "sala 33": "sala33",
    39: "sala39",
    "sala 39": "sala39",
    40: "sala40",
    "sala 40": "sala40",
    44: "konf2pietro",
    "sala 44": "konf2pietro",
    "sala konferencyjna": "konf2pietro",
    46: "sala46",
    "sala 46": "sala46",
    45: "sala45",
    "sala 45": "sala45",
    47: "sala47",
    sala47: "sala47",
    57: "sala57",
    "sala 57": "sala57",
    59: "sala59",
    "sala 59": "sala59",
    60: "sala60",
    "sala 60": "sala60",
    61: "olimp2",
    "sala 61": "olimp2",
    korytarz: "hallway",
    "sala gimnastyczna": "sala-gim",
    dwapietronoweskrzydtest: "test",
  };

  if (sceneMapping[searchInput]) {
    viewer.loadScene(sceneMapping[searchInput]);
    return;
  }

  const sceneIds = Object.keys(viewer.getConfig().scenes);
  const matchingScene = sceneIds.find((sceneId) =>
    sceneId.toLowerCase().includes(searchInput)
  );
  if (matchingScene) {
    viewer.loadScene(matchingScene);
  } else {
    showErrorModal();
  }
}

document
  .getElementById("accessibilityBtn")
  .addEventListener("click", function () {
    const menu = document.getElementById("accessibilityMenu");
    menu.classList.toggle("hidden");
  });
let highContrastEnabled = false;
document
  .getElementById("highContrastBtn")
  .addEventListener("click", function () {
    highContrastEnabled = !highContrastEnabled;
    if (highContrastEnabled) {
      document.body.classList.add("high-contrast");
      this.textContent = "Wyłącz";
      this.classList.add("bg-gray-700");
      this.classList.remove("bg-blue-500");
    } else {
      document.body.classList.remove("high-contrast");
      this.textContent = "Włącz";
      this.classList.remove("bg-gray-700");
      this.classList.add("bg-blue-500");
    }
  });
let currentTextSize = 100;
const MIN_TEXT_SIZE = 80;
const MAX_TEXT_SIZE = 150;

document.body.setAttribute("data-text-scale", currentTextSize);

document.getElementById("increaseText").addEventListener("click", function () {
  if (currentTextSize + 10 <= MAX_TEXT_SIZE) {
    currentTextSize += 10;
    document.body.setAttribute("data-text-scale", currentTextSize);
    console.log("Zwiększono rozmiar tekstu do:", currentTextSize);
  }
});

document.getElementById("decreaseText").addEventListener("click", function () {
  if (currentTextSize - 10 >= MIN_TEXT_SIZE) {
    currentTextSize -= 10;
    document.body.setAttribute("data-text-scale", currentTextSize);
    console.log("Zmniejszono rozmiar tekstu do:", currentTextSize);
  }
});
let animationsEnabled = true;
document
  .getElementById("toggleAnimations")
  .addEventListener("click", function () {
    animationsEnabled = !animationsEnabled;
    if (animationsEnabled) {
      document.body.classList.remove("reduce-motion");
      this.textContent = "Wyłącz";
      this.classList.add("bg-blue-500");
      this.classList.remove("bg-gray-700");
      document.querySelectorAll(".pnlm-hotspot-base").forEach((hotspot) => {
        hotspot.style.transition = "";
        hotspot.style.transform = "";
      });
    } else {
      document.body.classList.add("reduce-motion");
      this.textContent = "Włącz";
      this.classList.remove("bg-blue-500");
      this.classList.add("bg-gray-700");
      document.querySelectorAll(".pnlm-hotspot-base").forEach((hotspot) => {
        hotspot.style.transition = "none";
        hotspot.style.transform = "none";
      });
    }
  });

document.getElementById("showMap").addEventListener("click", function () {
  document.getElementById("mapOverlay").style.display = "flex";
});

document.getElementById("mapOverlay").addEventListener("click", function (e) {
  if (e.target === this || e.target.classList.contains("pnlm-map-hint")) {
    this.style.display = "none";
  }
});

document
  .querySelector(".pnlm-map-container")
  .addEventListener("click", function (e) {
    e.stopPropagation();
  });

document
  .getElementById("quickAccessBtn")
  .addEventListener("click", function () {
    document.getElementById("quickAccessContent").classList.toggle("show");
  });

document.addEventListener("click", function (e) {
  const menu = document.getElementById("quickAccessContent");
  const btn = document.getElementById("quickAccessBtn");
  if (!btn.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("show");
  }
});

const brightnessToggle = document.getElementById("brightnessToggle");
const container = document.querySelector(".pnlm-container");
let isDimmed = false;

brightnessToggle.addEventListener("click", function () {
  isDimmed = !isDimmed;
  container.classList.toggle("dimmed");
  brightnessToggle.classList.toggle("active");
  brightnessToggle.textContent = isDimmed
    ? "Przywróć jasność"
    : "Przyciemnij widok";
});

const preloadedPanoramas = new Set();

function preloadAdjacentScenes(sceneId) {
  const scenes = viewer.getConfig().scenes;
  const hotspots = scenes[sceneId]?.hotSpots || [];
  hotspots.forEach((hs) => {
    if (hs.type === 'scene') {
      const target = hs.sceneId;
      if (!preloadedPanoramas.has(target) && scenes[target]?.panorama) {
        const img = new Image();
        img.src = scenes[target].panorama;
        preloadedPanoramas.add(target);
      }
    }
  });
}

viewer.on('scenechange', preloadAdjacentScenes);

preloadAdjacentScenes(viewer.getScene());
