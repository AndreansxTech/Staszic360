const BUILDINFO = {
  env: "production",
  buildDate: "BUILDDATE",
};
// This is modified by `sed` command in the Cloudflare build environment
// It is left undefined purposefuly


function showBanner(text, env) {
  document.querySelectorAll(".environmentbanner").forEach((el) => el.remove());

  const banner = document.createElement("div");
  banner.className = `environmentbanner ${env}banner textscalable`;
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
      document.querySelectorAll(".environmentbanner").forEach((el) => el.remove());
      const banner = document.createElement("div");
      banner.className = `environmentbanner ${env}banner textscalable`;
      const a = document.createElement('a');
        a.href = data.runUrl;
        a.target = 'blank';
        a.rel = 'noopener noreferrer';
        a.textContent = version;
        banner.append(` Preview Version`, a, `  Build: ${buildDate} UTC`);
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
      yaw: 30,
      type: "equirectangular",
      panorama: "media/images/0portierniawejscie.webp",
      hotSpots: [
        {
          pitch: 5,
          yaw: 10,
          type: "info",
          text: "Portiernia",
        },
        {
          pitch: 5,
          yaw: 35,
          type: "scene",
          text: "Przejdź do Korytarza Głównego",
          sceneId: "partsrod",
        },
      ],
    },
    "partsrod": {
      title: "Korytarz Główny",
      hfov: 180,
      pitch: 0,
      yaw: 180,
      type: "equirectangular",
      panorama: "media/images/parterwejscie.webp",
      hotSpots: [
        {
          pitch: 180,
          yaw: 170,
          type: "scene",
          text: "Przejdź z powrotem do portierni",
          sceneId: "portiernia",
        },
        {
          pitch: 0,
          yaw: 150,
          type: "scene",
          text: "Biblioteka",
          sceneId: "biblioteka",
        },
        {
          pitch: 0,
          yaw: 268,
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
          sceneId: "part1schody",
        },
        {
          pitch: 0,
          yaw: 90,
          type: "scene",
          text: "Stare skrzydło",
          sceneId: "parterstareskrzydl1",
        },
      ],
    },
    korpuch: {
      title: "Korytarz",
      hfov: 180,
      pitch: 0,
      yaw: 135,
      type: "equirectangular",
      panorama: "media/images/gabpedag.webp",
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
          sceneId: "partsrod",
        },
        {
          pitch: 15,
          yaw: 170,
          type: "scene",
          text: "Do góry",
          sceneId: "partnoweskrzydl1",
        },
        {
          pitch: 2,
          yaw: 150,
          type: "scene",
          text: "Przejście",
          sceneId: "partsalagimwejscie",
        },
      ],
    },
    "salagim": {
      title: "Sala gimnastyczna mała",
      hfov: 180,
      pitch: 0,
      yaw: 100,
      type: "equirectangular",
      panorama: "media/images/salagim.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 170,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "partsalagimwejscie",
        },
        {
          pitch: 0,
          yaw: 70,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "salagimn1",
        },
      ],
    },
    "partsalagimwejscie": {
      title: "Korytarz",
      hfov: 180,
      pitch: 0,
      yaw: 100,
      type: "equirectangular",
      panorama: "media/images/partsalagimwejscie.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 87,
          type: "scene",
          text: "Przejdź",
          sceneId: "salagim",
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
      panorama: "media/images/salagimn1.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 52,
          type: "scene",
          text: "Przejdź",
          sceneId: "salagim",
        },
        {
          pitch: 0,
          yaw: 139,
          type: "scene",
          text: "Na łącznik",
          sceneId: "noweskrzydllacznik4",
        },
        {
          pitch: 0,
          yaw: 30,
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
      panorama: "media/images/salagimn.webp",
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
      panorama: "media/images/niebdyw.webp",
      hotSpots: [
        {
          pitch: 5,
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
          pitch: 5,
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
      panorama: "media/images/sekretariat.webp",
      hotSpots: [
        {
          pitch: 5,
          yaw: 160,
          type: "scene",
          text: "Biuro pani Dyrektor",
          sceneId: "dyrektor",
        },
        {
          pitch: 5,
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
      yaw: 70,
      type: "equirectangular",
      panorama: "media/images/dyrektor.webp",
      hotSpots: [
        {
          pitch: 5,
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
      panorama: "media/images/sek1.webp",
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
          yaw: 20,
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
      panorama: "media/images/sekretariat3.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 72,
          type: "scene",
          text: "Przejdź",
          sceneId: "sekretariat1",
        },
        {
          pitch: 5,
          yaw: 90,
          type: "scene",
          text: "Gabinet wicedyrektora",
          sceneId: "wicedyr",
        },
        {
          pitch: 5,
          yaw: 45,
          type: "scene",
          text: "Księgowość",
          sceneId: "skarbnik",
        },
        {
          pitch: 5,
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
      panorama: "media/images/sala1.webp",
      hotSpots: [
        {
          pitch: 5,
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
      panorama: "media/images/wicedyr.webp",
      hotSpots: [
        {
          pitch: 5,
          yaw: 90,
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
      panorama: "media/images/skarbnik.webp",
      hotSpots: [
        {
          pitch: 5,
          yaw: 40,
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
      yaw: 30,
      type: "equirectangular",
      panorama: "media/images/sklepik.webp",
      hotSpots: [
        {
          pitch: 5,
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
      panorama: "media/images/partbiblioteka.webp",
      hotSpots: [
        {
          pitch: 5,
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
          sceneId: "partsrod",
        },
        {
          pitch: 10,
          yaw: 70,
          type: "scene",
          text: "Powrót do Korytarza Głównego",
          sceneId: "partsrod",
        },
      ],
    },
    biblioteka1: {
      title: "Biblioteka",
      hfov: 180,
      pitch: 0,
      yaw: 100,
      type: "equirectangular",
      panorama: "media/images/bibl1.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 77,
          type: "scene",
          text: "Powrót",
          sceneId: "biblioteka",
        },
        {
          pitch: 5,
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
      panorama: "media/images/biblioteka2.webp",
      hotSpots: [
        {
          pitch: 5,
          yaw: 10,
          type: "scene",
          text: "Powrót",
          sceneId: "biblioteka1",
        },
      ],
    },

    "partnoweskrzydl1": {
      title: "Nowe Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/images/partnoweskrzydl1.webp",
      hotSpots: [
        {
          pitch: 15,
          yaw: 140,
          type: "scene",
          text: "Na dół",
          sceneId: "korpuch",
        },
        {
          pitch: 3,
          yaw: 10,
          type: "scene",
          text: "Idź dalej",
          sceneId: "partnoweskrzydl2",
        },
        {
          pitch: 0,
          yaw: 20,
          type: "scene",
          text: "Sala numer 24",
          sceneId: "sala24",
        },
        {
          pitch: 4,
          yaw: 250,
          type: "scene",
          text: "Na górę",
          sceneId: "przejscienoweskrzydl",
        },
      ],
    },
    sala24: {
      title: "Sala 24",
      hfov: 180,
      pitch: 0,
      yaw: 200,
      type: "equirectangular",
      panorama: "media/images/sala24.webp",
      hotSpots: [
        {
          pitch: 4,
          yaw: 107,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "partnoweskrzydl1",
        },
      ],
    },
    "partnoweskrzydl2": {
      title: "Nowe Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: 55,
      type: "equirectangular",
      panorama: "media/images/partnoweskrzydl2.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 52,
          type: "scene",
          text: "Idź dalej",
          sceneId: "partnoweskrzydl3",
        },
        {
          pitch: 5,
          yaw: 130,
          type: "scene",
          text: "Wróć",
          sceneId: "partnoweskrzydl1",
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
      panorama: "media/images/sala25.webp",
      hotSpots: [
        {
          pitch: 4,
          yaw: 5,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "partnoweskrzydl2",
        },
      ],
    },
    "partnoweskrzydl3": {
      title: "Nowe Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: 60,
      type: "equirectangular",
      panorama: "media/images/partnoweskrzydl3.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 58,
          type: "scene",
          text: "Łącznik",
          sceneId: "noweskrzydllacznik1",
        },
        {
          pitch: 0,
          yaw: 120,
          type: "scene",
          text: "Wróć",
          sceneId: "partnoweskrzydl2",
        },
        {
          pitch: 0,
          yaw: 22,
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
      panorama: "media/images/sala26.webp",
      hotSpots: [
        {
          pitch: 4,
          yaw: 75,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "partnoweskrzydl3",
        },
      ],
    },
    "noweskrzydllacznik1": {
      title: "Łącznik",
      hfov: 180,
      pitch: 0,
      yaw: 40,
      type: "equirectangular",
      panorama: "media/images/noweskrzydllacznik1.webp",
      hotSpots: [
        {
          pitch: 6,
          yaw: 30,
          type: "scene",
          text: "Idź dalej",
          sceneId: "noweskrzydllacznik2",
        },
        {
          pitch: 0,
          yaw: 60,
          type: "scene",
          text: "Wróć",
          sceneId: "partnoweskrzydl3",
        },
      ],
    },
    "noweskrzydllacznik2": {
      title: "Łącznik",
      hfov: 180,
      pitch: 10,
      yaw: 60,
      type: "equirectangular",
      panorama: "media/images/noweskrzydllacznik2.webp",
      hotSpots: [
        {
          pitch: 20,
          yaw: 40,
          type: "scene",
          text: "Na dół",
          sceneId: "noweskrzydllacznik3",
        },
        {
          pitch: 5,
          yaw: 70,
          type: "scene",
          text: "Do góry",
          sceneId: "noweskrzydllacznik1",
        },
      ],
    },
    "noweskrzydllacznik3": {
      title: "Łącznik",
      hfov: 180,
      pitch: 0,
      yaw: 20,
      type: "equirectangular",
      panorama: "media/images/noweskrzydllacznik3.webp",
      hotSpots: [
        {
          pitch: 10,
          yaw: 20,
          type: "scene",
          text: "Na dół",
          sceneId: "noweskrzydllacznik4",
        },
        {
          pitch: 10,
          yaw: 40,
          type: "scene",
          text: "Do góry",
          sceneId: "noweskrzydllacznik2",
        },
      ],
    },
    "noweskrzydllacznik4": {
      title: "Łącznik",
      hfov: 180,
      pitch: 0,
      yaw: 100,
      type: "equirectangular",
      panorama: "media/images/noweskrzydllacznik4.webp",
      hotSpots: [
        {
          pitch: 10,
          yaw: 110,
          type: "scene",
          text: "Do szatni",
          sceneId: "noweskrzydlszatnie",
        },
        {
          pitch: 10,
          yaw: 80,
          type: "scene",
          text: "Do góry",
          sceneId: "noweskrzydllacznik3",
        },
        {
          pitch: 0,
          yaw: 110,
          type: "scene",
          text: "Do sali gimnatycznej",
          sceneId: "salagimn1",
        },
      ],
    },
    "noweskrzydlszatnie": {
      title: "Szatnie",
      hfov: 180,
      pitch: 0,
      yaw: 100,
      type: "equirectangular",
      panorama: "media/images/noweskrzydlszatnie.webp",
      hotSpots: [
        {
          pitch: 5,
          yaw: 70,
          type: "scene",
          text: "Do góry",
          sceneId: "noweskrzydllacznik4",
        },
      ],
    },
    "part1schody": {
      title: "Schody na I piętro",
      hfov: 180,
      pitch: 0,
      yaw: 130,
      type: "equirectangular",
      panorama: "media/images/part1schody.webp",
      hotSpots: [
        {
          pitch: 15,
          yaw: 150,
          type: "scene",
          text: " Na I piętro",
          sceneId: "1pietrsrod",
        },
        {
          pitch: 15,
          yaw: 110,
          type: "scene",
          text: " Na I piętro",
          sceneId: "1pietrsrod",
        },
        {
          pitch: 15,
          yaw: 130,
          type: "scene",
          text: "Wróć",
          sceneId: "partsrod",
        },
      ],
    },
    "1pietrsrod": {
      title: "I piętro",
      hfov: 180,
      pitch: 0,
      yaw: 29,
      type: "equirectangular",
      panorama: "media/images/1pietrsrod.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 0,
          type: "scene",
          text: "Wróć na dół",
          sceneId: "part1schody",
        },
        {
          pitch: 0,
          yaw: 60,
          type: "scene",
          text: "Wróć na dół",
          sceneId: "part1schody",
        },
        {
          pitch: 5,
          yaw: 30,
          type: "scene",
          text: "Na II piętro",
          sceneId: "12pietrschody",
        },
        {
          pitch: 0,
          yaw: 120,
          type: "scene",
          text: "Stare skrzydło",
          sceneId: "1pietrstareskrzydl3",
        },
        {
          pitch: 0,
          yaw: 60,
          type: "scene",
          text: "Do nowego skrzydła",
          sceneId: "przejscienoweskrzydl",
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
      panorama: "media/images/sala21.webp",
      hotSpots: [
        {
          pitch: 4,
          yaw: 15,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "1pietrsrod",
        },
      ],
    },
    "przejscienoweskrzydl": {
      title: "Schody na I piętro",
      hfov: 180,
      pitch: 0,
      yaw: 140,
      type: "equirectangular",
      panorama: "media/images/przejscienoweskrzydl.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 55,
          type: "scene",
          text: "Do starego skrzydła",
          sceneId: "1pietrsrod",
        },
        {
          pitch: 15,
          yaw: 200,
          type: "scene",
          text: "Na dół",
          sceneId: "partnoweskrzydl1",
        },
        {
          pitch: 20,
          yaw: 225,
          type: "scene",
          text: "Na górę",
          sceneId: "1pietrnoweskrzydl1",
        },
      ],
    },

    "12pietrschody": {
      title: "Schody na II piętro",
      hfov: 180,
      pitch: 0,
      yaw: 137,
      type: "equirectangular",
      panorama: "media/images/12pietrschody.webp",
      hotSpots: [
        {
          pitch: 15,
          yaw: 155,
          type: "scene",
          text: " Na II piętro",
          sceneId: "2pietrsrod",
        },
        {
          pitch: 15,
          yaw: 117,
          type: "scene",
          text: " Na II piętro",
          sceneId: "2pietrsrod",
        },
        {
          pitch: 15,
          yaw: 137,
          type: "scene",
          text: "Wróć",
          sceneId: "1pietrsrod",
        },
      ],
    },
    "2pietrsrod": {
      title: "II piętro",
      hfov: 180,
      pitch: 10,
      yaw: 43,
      type: "equirectangular",
      panorama: "media/images/2pietrsrod.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 70,
          type: "scene",
          text: "Wróć na dół",
          sceneId: "12pietrschody",
        },
        {
          pitch: 0,
          yaw: 25,
          type: "scene",
          text: "Wróć na dół",
          sceneId: "12pietrschody",
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
          yaw: 67,
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
          yaw: 40,
          type: "scene",
          text: "Do nowego skrzydła",
          sceneId: "2pietrnoweskrzydlschod",
        },
      ],
    },
    "2pietrnoweskrzydlschod": {
      title: "Przejście do nowego skrzydła",
      hfov: 180,
      pitch: 0,
      yaw: 145,
      type: "equirectangular",
      panorama: "media/images/2pietrnoweskrzydlschod.webp",
      hotSpots: [
        {
          pitch: 5,
          yaw: 130,
          type: "scene",
          text: "Do starego skrzydła",
          sceneId: "2pietrsrod",
        },
        {
          pitch: 10,
          yaw: 143,
          type: "scene",
          text: "Na górę",
          sceneId: "2pietrnoweskrzydl1",
        },
        {
          pitch: 20,
          yaw: 120,
          type: "scene",
          text: "Na dół",
          sceneId: "1pietrnoweskrzydl1",
        },
      ],
    },
    "1pietrnoweskrzydl1": {
      //ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
      title: "I pietro Nowe Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: 180,
      type: "equirectangular",
      panorama: "media/images/1pietrnoweskrzydl1.webp",
      hotSpots: [
        {
          pitch: 15,
          yaw: 152,
          type: "scene",
          text: "Na górę",
          sceneId: "2pietrnoweskrzydlschod",
        },
        {
          pitch: 0,
          yaw: 200,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietrnoweskrzydl2",
        },
        {
          pitch: 20,
          yaw: 130,
          type: "scene",
          text: "Na dół",
          sceneId: "przejscienoweskrzydl",
        },
      ],
    },
    "1pietrnoweskrzydl2": {
      title: "I pietro Nowe Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: 180,
      type: "equirectangular",
      panorama: "media/images/1pietrnoweskrzydl2.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 30,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietrnoweskrzydl1",
        },
        {
          pitch: 0,
          yaw: 140,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietrnoweskrzydl3",
        },
      ],
    },
    "1pietrnoweskrzydl2,2": {
      title: "I pietro Nowe Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/images/1pietrnoweskrzydl2.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 30,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietrnoweskrzydl1",
        },
        {
          pitch: 0,
          yaw: 140,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietrnoweskrzydl3",
        },
      ],
    },
    "1pietrnoweskrzydl3": {
      title: "I pietro Nowe Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/images/1pietrnoweskrzydl3.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 160,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietrnoweskrzydl2,2",
        },
        {
          pitch: 0,
          yaw: 20,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietrnoweskrzydl4",
        },
        {
          pitch: 5,
          yaw: 6,
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
    "1pietrnoweskrzydl3,3": {
      title: "I pietro Nowe Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: 190,
      type: "equirectangular",
      panorama: "media/images/1pietrnoweskrzydl3.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 160,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietrnoweskrzydl2,2",
        },
        {
          pitch: 0,
          yaw: 20,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietrnoweskrzydl4",
        },
        {
          pitch: 5,
          yaw: 6,
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
      panorama: "media/images/sala33.webp",
      hotSpots: [
        {
          pitch: 5,
          yaw: 80,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "1pietrnoweskrzydl3,3",
        },
      ],
    },
    "1pietrnoweskrzydl4": {
      title: "I pietro Nowe Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: 90,
      type: "equirectangular",
      panorama: "media/images/1pietrnoweskrzydl4.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 84,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietrnoweskrzydl3,3",
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
      panorama: "media/images/sala39.webp",
      hotSpots: [
        {
          pitch: 5,
          yaw: 125,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "1pietrnoweskrzydl4,4",
        },
      ],
    },
    "1pietrnoweskrzydl4,4": {
      title: "I piętro Nowe Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: 90,
      type: "equirectangular",
      panorama: "media/images/1pietrnoweskrzydl4.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 84,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietrnoweskrzydl3,3",
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
      panorama: "media/images/sala40.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 30,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "1pietrnoweskrzydl3",
        },
      ],
    },

    "2pietrnoweskrzydl1": {
      title: "II piętro Nowe Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/images/2pietrnoweskrzydl1.webp",
      hotSpots: [
        {
          pitch: 3,
          yaw: 175,
          type: "scene",
          text: "Na dół",
          sceneId: "2pietrnoweskrzydlschod",
        },
        {
          pitch: 0,
          yaw: 65,
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
      panorama: "media/images/sala57.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 170,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "2pietrnoweskrzydl1",
        },
      ],
    },
    //sss początekk kskdksk ds
    "parterstareskrzydl1": {
      title: "Stare Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: 27,
      type: "equirectangular",
      panorama: "media/images/parterstareskrzydl1.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 30,
          type: "scene",
          text: "Przejdź",
          sceneId: "parterstareskrzydl2",
        },
        {
          pitch: 5,
          yaw: 150,
          type: "scene",
          text: "Przejdź",
          sceneId: "partsrod",
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
      yaw: 100,
      type: "equirectangular",
      panorama: "media/images/sala8.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 85,
          type: "scene",
          text: "Wyjdź na korytarz",
          sceneId: "parterstareskrzydl1",
        },
      ],
    },

    "parterstareskrzydl2": {
      title: "Stare Skrzydło 2",
      hfov: 180,
      pitch: 0,
      yaw: 30,
      type: "equirectangular",
      panorama: "media/images/parterstareskrzydl2.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 35,
          type: "scene",
          text: "Przejdź",
          sceneId: "parterstareskrzydl3",
        },
        {
          pitch: 0,
          yaw: 145,
          type: "scene",
          text: "Przejdź",
          sceneId: "parterstareskrzydl1.1",
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
      yaw: 120,
      type: "equirectangular",
      panorama: "media/images/sala7.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 232,
          type: "scene",
          text: "Wyjdź na korytarz",
          sceneId: "parterstareskrzydl2",
        },
      ],
    },
    "parterstareskrzydl3": {
      title: "Stare Skrzydło 3",
      hfov: 180,
      pitch: 0,
      yaw: 70,
      type: "equirectangular",
      panorama: "media/images/parterstareskrzydl3.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 7,
          type: "scene",
          text: "Przejdź",
          sceneId: "parterstareskrzydl4",
        },
        {
          pitch: 0,
          yaw: 260,
          type: "scene",
          text: "Przejdź",
          sceneId: "parterstareskrzydl2.2",
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
      yaw: 120,
      type: "equirectangular",
      panorama: "media/images/sala6.webp",
      hotSpots: [
        {
          pitch: 3,
          yaw: 145,
          type: "scene",
          text: "Wyjdź na korytarz",
          sceneId: "parterstareskrzydl3",
        },
      ],
    },
    "parterstareskrzydl4": {
      title: "Stare Skrzydło 4",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/images/parterstareskrzydl4.webp",
      hotSpots: [
        {
          pitch: 20,
          yaw: 40,
          type: "scene",
          text: "Na górę",
          sceneId: "1pietrstareskrzydl1",
        },
        {
          pitch: 0,
          yaw: 50,
          type: "scene",
          text: "Idź dalej",
          sceneId: "parterstareskrzydl3.3",
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
          yaw: 115,
          type: "scene",
          text: "Sala numer 3",
          sceneId: "sala3",
        },
        {
          pitch: 0,
          yaw: 130,
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
      panorama: "media/images/sala4.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 25,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "parterstareskrzydl4",
        },
      ],
    },
    sala2: {
      title: "Sala 2",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/images/Sala2.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 60,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "parterstareskrzydl4",
        },
        {
          pitch: 0,
          yaw: 50,
          type: "scene",
          text: "Sala 2a",
          sceneId: "sala2a",
        },
        {
          pitch: 0,
          yaw: 75,
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
      panorama: "media/images/sala2a.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 60,
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
      panorama: "media/images/sala2b.webp",
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
    "parterstareskrzydl1.1": {
      title: "Stare Skrzydło",
      hfov: 180,
      pitch: 0,
      yaw: 150,
      type: "equirectangular",
      panorama: "media/images/parterstareskrzydl1.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 30,
          type: "scene",
          text: "Przejdź",
          sceneId: "parterstareskrzydl2",
        },
        {
          pitch: 5,
          yaw: 150,
          type: "scene",
          text: "Przejdź",
          sceneId: "partsrod",
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
      yaw: 100,
      type: "equirectangular",
      panorama: "media/images/sala8.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 85,
          type: "scene",
          text: "Wyjdź na korytarz",
          sceneId: "parterstareskrzydl1",
        },
      ],
    },

    "parterstareskrzydl2.2": {
      title: "Stare Skrzydło 2",
      hfov: 180,
      pitch: 0,
      yaw: 145,
      type: "equirectangular",
      panorama: "media/images/parterstareskrzydl2.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 35,
          type: "scene",
          text: "Przejdź",
          sceneId: "parterstareskrzydl3",
        },
        {
          pitch: 0,
          yaw: 145,
          type: "scene",
          text: "Przejdź",
          sceneId: "parterstareskrzydl1.1",
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
      yaw: 120,
      type: "equirectangular",
      panorama: "media/images/sala7.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 232,
          type: "scene",
          text: "Wyjdź na korytarz",
          sceneId: "parterstareskrzydl2",
        },
      ],
    },
    "parterstareskrzydl3.3": {
      title: "Stare Skrzydło 3",
      hfov: 180,
      pitch: 0,
      yaw: 260,
      type: "equirectangular",
      panorama: "media/images/parterstareskrzydl3.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 7,
          type: "scene",
          text: "Przejdź",
          sceneId: "parterstareskrzydl4",
        },
        {
          pitch: 0,
          yaw: 260,
          type: "scene",
          text: "Przejdź",
          sceneId: "parterstareskrzydl2.2",
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
      yaw: 120,
      type: "equirectangular",
      panorama: "media/images/sala6.webp",
      hotSpots: [
        {
          pitch: 3,
          yaw: 145,
          type: "scene",
          text: "Wyjdź na korytarz",
          sceneId: "parterstareskrzydl3",
        },
      ],
    },
    "parterstareskrzydl4.4": {
      title: "Stare Skrzydło 4",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/images/parterstareskrzydl4.webp",
      hotSpots: [
        {
          pitch: 20,
          yaw: 40,
          type: "scene",
          text: "Na górę",
          sceneId: "1pietrstareskrzydl1",
        },
        {
          pitch: 0,
          yaw: 50,
          type: "scene",
          text: "Idź dalej",
          sceneId: "parterstareskrzydl3",
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
          yaw: 115,
          type: "scene",
          text: "Sala numer 3",
          sceneId: "sala3",
        },
              ],
    },
    "1pietrstareskrzydl1": {
      title: "1 Piętro Stare Skrzydło 1",
      hfov: 180,
      pitch: 5,
      yaw: 150,
      type: "equirectangular",
      panorama: "media/images/1pietrstareskrzydl1.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 85,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietrstareskrzydl1.5", // Changed connection
        },
        {
          pitch: 25,
          yaw: 185,
          type: "scene",
          text: "Na dół",
          sceneId: "parterstareskrzydl4",
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

    "1pietrstareskrzydl1.5": {
      // New scene //fdfddfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsgdfsghu
      title: "1 Piętro Stare Skrzydło 1.5",
      hfov: 180,
      pitch: 0,
      yaw: 170,
      type: "equirectangular",
      panorama: "media/images/1pietrstareskrzydl1.5.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 187,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietrstareskrzydl2",
        },
        {
          pitch: 0,
          yaw: 20,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietrstareskrzydl1",
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
      panorama: "media/images/sala17.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 124,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "1pietrstareskrzydl1.5",
        },
      ],
    },
    sala3: {
      title: "Sala 3",
      hfov: 180,
      pitch: 5,
      yaw: 100,
      type: "equirectangular",
      panorama: "media/images/sala3.webp",
      hotSpots: [
        {
          pitch: 5,
          yaw: 50,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "parterstareskrzydl4.4",
        },
      ],
    },
    sala16p: {
      title: "Sale 16A i 16B",
      hfov: 180,
      pitch: 0,
      yaw: 140,
      type: "equirectangular",
      panorama: "media/images/sala16p.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 110,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "1pietrstareskrzydl1",
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
      panorama: "media/images/sala16a.webp",
      hotSpots: [
        {
          pitch: 5,
          yaw: 47,
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
      panorama: "media/images/sala16b.webp",
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
    "1pietrstareskrzydl2": {
      title: "1 Piętro Stare Skrzydło 2",
      hfov: 180,
      pitch: 0,
      yaw: 170,
      type: "equirectangular",
      panorama: "media/images/1pietrstareskrzydl2.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 130,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietrstareskrzydl3",
        },
        {
          pitch: 0,
          yaw: 225,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietrstareskrzydl1.5", // Changed connection
        },
        {
          pitch: 5,
          yaw: 47,
          type: "scene",
          text: "Sala 18",
          sceneId: "sala18",
        },
        {
          pitch: 0,
          yaw: 115,
          type: "scene",
          text: "Sala 19",
          sceneId: "sala19"
        }
      ],
    },
    sala18: {
      title: "Sala 18",
      hfov: 180,
      pitch: 5,
      yaw: 20,
      type: "equirectangular",
      panorama: "media/images/sala18.webp",
      hotSpots: [
        {
          pitch: 5,
          yaw: 67,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "1pietrstareskrzydl2",
        },
      ],
    },
    "1pietrstareskrzydl3": {
      title: "1 Piętro Stare Skrzydło 3",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/images/1pietrstareskrzydl3.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 20,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietrstareskrzydl2",
        },
        {
          pitch: 0,
          yaw: 160,
          type: "scene",
          text: "Przejdź",
          sceneId: "1pietrsrod",
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
      yaw: 40,
      type: "equirectangular",
      panorama: "media/images/sala19.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 60,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "1pietrstareskrzydl2",
        },
      ],
    },
    sala20: {
      title: "Sala 20",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/images/sala20.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 29,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "1pietrstareskrzydl3",
        },
      ],
    },
    konf2pietro: {
      title: "Sala konferencyjna",
      hfov: 180,
      pitch: 0,
      yaw: 130,
      type: "equirectangular",
      panorama: "media/images/konf2pietro.webp",
      hotSpots: [
        {
          pitch: 0,
          yaw: 15,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "2pietrsrod",
        },
        {
          pitch: 0,
          yaw: 85,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "2pietrsrod",
        },
      ],
    },
    "2pietrostareskrzyd1": {
      title: "Korytarz",
      hfov: 180,
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/images/2pietrostareskrzyd1.webp",
      hotSpots: [
        {
          pitch: 1,
          yaw: 213,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "2pietrsrod",
        },
        {
          pitch: 0,
          yaw: 30,
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
      panorama: "media/images/2pietrostareskrzyd1.webp",
      hotSpots: [
        {
          pitch: 1,
          yaw: 213,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "2pietrsrod",
        },
        {
          pitch: 0,
          yaw: 30,
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
      panorama: "media/images/sala45.webp",
      hotSpots: [
        {
          pitch: 1,
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
      panorama: "media/images/2pietrostareskrzyd2.webp",
      hotSpots: [
        {
          pitch: 1,
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
      yaw: 130,
      type: "equirectangular",
      panorama: "media/images/2pietrostareskrzyd2.webp",
      hotSpots: [
        {
          pitch: 1,
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
      panorama: "media/images/sala46.webp",
      hotSpots: [
        {
          pitch: 1,
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
      panorama: "media/images/sala47.webp",
      hotSpots: [
        {
          pitch: 1,
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
      pitch: 5,
      yaw: 90,
      type: "equirectangular",
      panorama: "media/images/olimp1.webp",
      hotSpots: [
        {
          pitch: 20,
          yaw: 90,
          type: "scene",
          text: "Na dół",
          sceneId: "2pietrostareskrzyd2,2",
        },
        {
          pitch: 0,
          yaw: 10,
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
          yaw: 108,
          type: "scene",
          text: "Sala 60",
          sceneId: "sala60",
        },
      ],
    },
    sala59: {
      title: "Sala 59",
      hfov: 180,
      pitch: 10,
      yaw: 0,
      type: "equirectangular",
      panorama: "media/images/sala59.webp",
      hotSpots: [
        {
          pitch: 7,
          yaw: 83,
          type: "scene",
          text: "Wróć na korytarz",
          sceneId: "olimp1",
        },
      ],
    },
    sala60: {
      title: "Sala 60",
      hfov: 180,
      pitch: 5,
      yaw: 150,
      type: "equirectangular",
      panorama: "media/images/sala60.webp",
      hotSpots: [
        {
          pitch: 7,
          yaw: 150,
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
      panorama: "media/images/olimp2.webp",
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
 
  }, //wazne nawiasy nie usuwac
});

  document.getElementById("welcomeButton").addEventListener("click", function () {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("searchDiv").classList.remove("hidden");
  document.querySelector(".quickaccessmenu").classList.remove("blurred");
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
    "biblioteka": "biblioteka",
    1: "sala1",
    "sala 1": "sala1",
    "sala2": "sala2",
    "sala 2": "sala2",
    "sala2a": "sala2a",
    "sala 2a": "sala2a",
    "2a": "sala2a",
    "sala2b": "sala2b",
    "sala 2b": "sala2b",
    "2b": "sala2b",
    "sala3": "sala3",
    3: "sala3",
    "sala 3": "sala3",
    "sala4": "sala4",
    "sala 4": "sala4",
    6: "sala6",
    "sala 6": "sala6",
    "sala6": "sala6",
    7: "sala7",
    "sala 7": "sala7",
    "sala7": "sala7",
    8: "sala8",
    "sala 8": "sala8",
    "sala8": "sala8",
    16: "sala16p",
    "sale 16": "sala16p",
    "16a": "sala16a",
    "16 a": "sala16a",
    "sala 16a": "sala16a",
    "sala16a": "sala16a",
    "sala 16 a": "sala16a",
    "16b": "sala16b",
    "16 b": "sala16b",
    "sala 16b": "sala16b",
    "sala16b": "sala16b",
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
    "sala47": "sala47",
    57: "sala57",
    "sala 57": "sala57",
    59: "sala59",
    "sala 59": "sala59",
    60: "sala60",
    "sala 60": "sala60",
    61: "olimp2",
    "sala 61": "olimp2",
    "korytarz": "hallway",
    "sala gimnastyczna": "salagim",
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
      document.body.classList.add("highcontrast");
      this.textContent = "Wyłącz";
      this.classList.add("bggray700");
      this.classList.remove("bgblue500");
    } else {
      document.body.classList.remove("highcontrast");
      this.textContent = "Włącz";
      this.classList.remove("bggray700");
      this.classList.add("bgblue500");
    }
  });
let currentTextSize = 100;
const MINTEXTSIZE = 80;
const MAXTEXTSIZE = 150;

document.body.setAttribute("datatextscale", currentTextSize);

document.getElementById("increaseText").addEventListener("click", function () {
  if (currentTextSize + 10 <= MAXTEXTSIZE) {
    currentTextSize += 10;
    document.body.setAttribute("datatextscale", currentTextSize);
    console.log("Zwiększono rozmiar tekstu do:", currentTextSize);
  }
});

document.getElementById("decreaseText").addEventListener("click", function () {
  if (currentTextSize  10 >= MINTEXTSIZE) {
    currentTextSize = 10;
    document.body.setAttribute("datatextscale", currentTextSize);
    console.log("Zmniejszono rozmiar tekstu do:", currentTextSize);
  }
});
let animationsEnabled = true;
document
  .getElementById("toggleAnimations")
  .addEventListener("click", function () {
    animationsEnabled = !animationsEnabled;
    if (animationsEnabled) {
      document.body.classList.remove("reducemotion");
      this.textContent = "Wyłącz";
      this.classList.add("bgblue500");
      this.classList.remove("bggray700");
      document.querySelectorAll(".pnlmhotspotbase").forEach((hotspot) => {
        hotspot.style.transition = "";
        hotspot.style.transform = "";
      });
    } else {
      document.body.classList.add("reducemotion");
      this.textContent = "Włącz";
      this.classList.remove("bgblue500");
      this.classList.add("bggray700");
      document.querySelectorAll(".pnlmhotspotbase").forEach((hotspot) => {
        hotspot.style.transition = "none";
        hotspot.style.transform = "none";
      });
    }
  });

document.getElementById("showMap").addEventListener("click", function () {
  document.getElementById("mapOverlay").style.display = "flex";
});

document.getElementById("mapOverlay").addEventListener("click", function (e) {
  if (e.target === this || e.target.classList.contains("pnlmmaphint")) {
    this.style.display = "none";
  }
});

document
  .querySelector(".pnlmmapcontainer")
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
const container = document.querySelector(".pnlmcontainer");
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
