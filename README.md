Read the README.md in English <a href="./additional-media/README-en.md">here</a>

# Wirtualny Spacer - I LO im. Stanisława Staszica w Chrzanowie
<!---
<p align="center">
  <img src="./Staszic-cropped.png" height="200"/>
</p>--->

<p align="center">
  <img src="./additional-media/IMG_0150.jpeg" height="150"/>
</p>


<!--- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Static Badge](https://img.shields.io/badge/Panellum.js-%23ffa321?style=for-the-badge)
--->
<div align="center">

  ![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Andreansxtech/Staszic360/deploy-preview.yml?branch=preview&style=for-the-badge)  
![GitHub commit activity](https://img.shields.io/github/commit-activity/t/AndreansxTech/Staszic360?style=for-the-badge&logo=github)
![GitHub last commit](https://img.shields.io/github/last-commit/Andreansxtech/Staszic360?style=for-the-badge)  
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/Licencja-CC_BY--NC--SA_4.0-%23ff2652?style=for-the-badge)](https://creativecommons.org/licenses/by-nc-sa/4.0/)  ![WCAG](https://img.shields.io/badge/WCAG-%23015A69.svg?style=for-the-badge&logo=WCAG&logoColor=white)
[![Kontakt](https://img.shields.io/badge/Kontakt-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/Andrtexh)

</div>

Interaktywny wirtualny spacer po I Liceum Ogólnokształcącym im. Stanisława Staszica w Chrzanowie.  
Cały projekt jest realizowany przez grupę trzech uczniów szkoły, w pełni bez żadnych korzyści finansowych. Wszystkie zdjęcia wykonane w szkole są dostępne w nieruszonej jakości w folderze <a href="./media/">media</a>.
<div align="center">
<h1>  🌐 Publiczne zatwierdzone instancje projektu </h1> 
</div>

### Projekt aktualnie jest dostępny na poniższych stronach:

👉 [Cloudflare Pages](https://staszic360.pages.dev) – wersja produkcyjna  

👉 [GitHub Pages](https://andreansx.github.io/Staszic360/) – wersja preview  

👉 [Spacer.1lo.pl](http://spacer.1lo.pl/) ( Brak SSL/TLS🔓 ) - Wersja finalna, rzadko aktualizowana

_(Kliknij Prawym przyciskiem myszy → otwórz w nowej karcie, GitHub nie pozwala otwierać automatycznie)_
<div align="center">
<h1> 📝 Opis </h1>

Ten projekt zapewnia immersyjne doświadczenie wirtualnego spaceru po korytarzach i salach I LO im. Stanisława Staszica w Chrzanowie. Użytkownicy mogą nawigować po różnych częściach budynku szkoły, odwiedzając sale lekcyjne, korytarze i między innymi sale gimnastyczne jak również gabinety i pomieszczenia nie dostępne typowo dla uczniów szkoły. Strona internetowa jest w pełni dostosowana do standardów dostępności W3C tak aby każdy mógł w pełni korzystać z jej funkcji niezależnie od swoich indywidualnych potrzeb lub ograniczeń.
</div>

<div align="center">

<h1> 🖼️ Podgląd </h1>

<img src="./additional-media/preview-gif3.gif">

</div>

<div align="center">
<h2> 🚀 Funkcje </h2>
</div>

- Interaktywny widok w 360 stopniach
- Płynna nawigacja między różnymi lokalizacjami
- Wysokiej jakości zdjęcia panoramiczne
- Funkcjonalność szybkiego dostępu do sal lekcyjnych
- Piękny styl glassmorphism
- Pełna dostępność zgodnie z W3C

<div align="center">
<h2> 🤝 Dostępność </h2>
</div>

Staszic360 został zaprojektowany z myślą o szerokiej dostępności i inkluzywności. Staramy się, aby projekt był możliwie najbardziej przystępny zarówno technicznie, jak i użytkowo.
- 	Urządzenia mobilne i komputery – spacer działa na większości nowoczesnych urządzeń z obsługą WebGL.
- 	Przeglądarki – rekomendujemy najnowsze wersje Chrome, Firefox, Edge lub Safari.
-   Bez logowania – dostęp do spaceru nie wymaga zakładania konta.
-   Szybkie ładowanie – zoptymalizowany kod pozwala na korzystanie także przy wolniejszym łączu.
-   Nawigacja klawiaturą – projekt wspiera poruszanie się po interfejsie za pomocą klawiatury (tabindex).
-   Wstępna obsługa czytników ekranu – dodano atrybuty aria-*, które umożliwiają czytnikom ekranu lepsze rozumienie zawartości strony.
<div align="center">
<h2> 🛠️ Użyte technologie </h2>
</div>

- HTML5
- CSS3
- JavaScript
- Panellum.js
- Python ( skrypty do zautomatyzowania zadań )

<div align="center">
<h2> Znane błędy / problemy </h2>
</div>

- Czasami przy użyciu menu szybkiego dostępu, możemy zobaczyć komunikat ```"The file %s could not be accessed."``` W takim przypadku należy poprostu kliknąć na salę w menu szybkieg dostępu jeszcze raz. Ten błąd pojawia się dosyć rzadko, a jego powodem jest trudność z załadowaniem zdjęcia przez Cloudflare w odpowiednim czasie. Zdjęcia są dosyć duże a plan, dzięki któremu ta strona jest hostowana, jest darmowy więc czas jaki CPU w hostingu może przeznaczyć na zapytanie od clienta jest ograniczony
- Przy przełączaniu funkcji dostępności "Włącz / Wyłącz animacje", hotspoty mogą przesunąć się do lewego górnego rogu zamiast być tam gdzie powinny. Ten błąd nie wpływa na funkcjonalność strony. Hotspoty odrazu wracają na swoje miejsce kiedy tylko poruszymy panoramą.
- Jeśli jakieś błedy wystąpią w wersji production, zostaną dodane tutaj. Jeśli zauważyłeś/aś jakiś błąd, możesz napisać do jednego z nas najlepiej z zrzutem ekranu albo poprostu opisem błędu.  

## Dla dociekliwych
- Pliki są podpisane cyfrowo aby można było zapewnić ich integralność i autentyczność. ( Czytaj niżej )
- Jeśli jesteś zainteresowanym rozwinięciem tego projektu albo jesteś poprostu ciekaw jak to dokładniej działa i jak postępował rozwój, sprawdź koniecznie pliki <a href="./LICENSE">LICENSE</a> oraz <a href="./additional-media/devnotes.md">devnotes</a>
- Jeśli chcesz zaproponować coś albo cokolwiek, możesz napisać na <a href="https://t.me/Andrtexh" target="_blank">Telegramie</a>.

## Weryfikacja podpisów

Pliki `index.html`, `script.js` i `style.css` są podpisane cyfrowo za pomocą GPG, aby zapewnić ich integralność i autentyczność. Oznacza to, że możesz mieć pewność, iż pliki te nie zostały zmodyfikowane przez osoby trzecie od momentu ich podpisania przez nas. Należy mieć na uwadze, że weryfikacja sygnatur nie ma tutaj takiego charakteru, jak przy zkompilowanych programach gdzie krytyczna jest zgodność z kodem źródłowym.  

Pamiętaj żeby przy weryfikacji podpisów, sprawdzać je z podpisami z odpowiedniego Release, nie z najnowszymi.

**Klucz publiczny**: [AndreansxTech_0x1A5C5CDB_public.asc](./AndreansxTech_0x1A5C5CDB_public.asc)

**Odcisk cyfrowy klucza**: `9282 DF55 1096 3273 6618  5B2E 4C80 939B 1A5C 5CDB`

**Importowanie klucza (wiersz poleceń):**

```bash
gpg --import AndreansxTech_0x1A5C5CDB_public.asc
```
**Weryfikacja podpisów**
```bash
gpg --verify index.html.sig index.html
gpg --verify style.css.sig style.css
gpg --verify script.js.sig script.js
```
### Struktura projektu
```
Staszic360/
├── additional-media/
│   └── ...                               ( dodatkowe devnotes, ikonki, diagramy )
├── media/
│   ├── lowscaled_images/
│   │   └── ...                           ( Zdjęcia w mniejszej rozdzielczości )
│   └── ...                               ( folder z panoramami )
├── AndreansxTech_0x1A5C5CDB_public.asc - Klucz publiczny do weryfikacji podpisów
├── check_images.py                     - Skrypt Python do sprawdzenia ścieżek
├── index.html                          - Główny plik HTML
├── index.html.sig                      - Podpis cyfrowy index.html
├── LICENSE                             - Plik licencji
├── pannellum.css                       - Arkusz stylów Pannellum.
├── pannellum.js                        - Biblioteka Pannellum
├── script.js                           - Główny skrypt JavaScript
├── script.js.sig                       - Podpis cyfrowy script.js
├── style.css                           - Główny plik styli CSS strony
├── style.css.sig                       - Podpis cyfrowy pliku styli CSS
├── resize_images.py                    - Skrypt Pythona użyty do zmniejszenia rozdzielczości zdjęć
├── update_paths.py                     - Skrypt Python do zaktualizowania ścieżek zdjęć
├── build.sh                            - Plik Shell zawierający komendę do Cloudflare build environment dla wersji produkcyjnej
└── README.md
```
<div align="center">
<h1>Prawa</h1>
</div>

## Stworzone z ❤️ przez <a href="https://AndreansxTech.github.io/">Michała Bańkowskiego (*AndreansxTech*)</a>, Mateusza Długaja (*Matkard1*) i Gabriela Świątka (*Simonaven265*) 2025

## Projekt używa biblioteki <a href="https://github.com/mpetroff/pannellum">Pannellum.js</a>, której autorem jest <a href="https://mpetroff.net/">Matthew Petroff</a>.

### Kopia pliku licencji Pannellum.js znajduje się w <a href="./LICENSE-PANNELLUM">LICENSE-PANNELLUM</a>

## Ten projekt jest licencjonowany na podstawie <a href="./LICENSE">**Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International**</a> (sprawdź <a href="./LICENSE">LICENSE</a>)

### Wraz z dniem 2 kwietnia 2025 roku, projekt nie jest już rozwijany na podstawach licencji MIT. Każda nowa aktualizacja jest obięta prawami autorskimi licencji **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International**
