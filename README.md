# Luca Girlando - Professional Portfolio Website

Questo repository contiene il codice sorgente per il tuo nuovo sito portfolio professionale, moderno e interattivo. È costruito per essere ospitato **gratuitamente per sempre** su **GitHub Pages**, sotto il tuo completo controllo, ed è facilmente modificabile in futuro.

## 📁 Struttura del Progetto

```
portfolio-website/
├── index.html        # Struttura della pagina principale (in Italiano)
├── styles.css        # Stile visivo, animazioni e regole per il tema chiaro/scuro
├── projects.js       # Database dei progetti (dati strutturati in JavaScript)
├── app.js            # Logica del sito (rendering, filtri, ricerca e modali)
└── public/
    ├── images/       # Screenshot e loghi di tutti i 20 progetti (scaricati da Odoo)
    └── pdfs/         # File PDF accademici e tesi (scaricati per renderli locali)
```

---

## 🚀 Come Visualizzarlo in Locale

Per testare il sito sul tuo computer, puoi procedere in due modi:

### Metodo 1: Doppioclick
Fai semplicemente doppio clic sul file `index.html` per aprirlo direttamente nel tuo browser. *(Nota: a causa delle restrizioni di sicurezza del browser sui file locali, i link PDF o le immagini potrebbero a volte non caricarsi correttamente a seconda del browser. Per una simulazione perfetta, usa il Metodo 2)*.

### Metodo 2: Server Locale (Consigliato)
Apri il terminale nella cartella `portfolio-website` ed esegui uno dei seguenti comandi per avviare un server locale temporaneo:

**Se hai Python installato:**
```bash
python -m http.server 8000
```
Quindi apri il browser su: `http://localhost:8000`

---

## 🎨 Come Modificare o Aggiungere Progetti in Futuro

Per rendere il sito estremamente facile da mantenere, tutti i progetti sono centralizzati in un unico file: **`projects.js`**. 

Se vuoi modificare un progetto esistente o aggiungerne uno nuovo, ti basta aprire `projects.js` con un editor di testo e modificare l'oggetto corrispondente. 

Ogni progetto ha questa struttura:
```javascript
{
    "id": "p20",
    "title": "Titolo del Progetto",
    "category": "Interactive App", // Scegli tra: "Interactive App", "Quantitative Analysis", "Academic Research"
    "short_description": "Breve descrizione per la scheda...",
    "image_path": "public/images/p20.svg", // Path dello screenshot
    "app_links": ["https://link-della-tua-app.streamlit.app/"], // Vuoto [] se non c'è un'app
    "github_links": ["https://github.com/tuo-username/progetto"], // Vuoto [] se non c'è codice pubblico
    "pdf_links": ["public/pdfs/nome_file.pdf"], // Vuoto [] se non c'è un PDF
    "features": [
        "Caratteristica 1...",
        "Caratteristica 2..."
    ],
    "paragraphs": [
        "Paragrafo descrittivo dettagliato 1...",
        "Paragrafo descrittivo dettagliato 2..."
    ],
    "menu_title": "Titolo nel Menu"
}
```
*Il sito si aggiornerà automaticamente applicando i filtri di ricerca, le categorie e ordinando tutto partendo dal primo elemento dell'array fino all'ultimo.*

---

## 🌍 Come Pubblicarlo Online Gratis con GitHub Pages

Puoi caricare questo sito online gratis in meno di 5 minuti usando GitHub Pages. Ecco i passaggi:

1. **Crea un repository su GitHub:**
   - Vai su [GitHub](https://github.com/) e crea un nuovo repository pubblico.
   - Per avere il sito su `https://<tuo-username>.github.io`, chiama il repository esattamente `<tuo-username>.github.io` (sostituendo `<tuo-username>` con il tuo vero nome utente GitHub).
   - In alternativa, puoi chiamarlo `portfolio` (il sito sarà su `https://<tuo-username>.github.io/portfolio/`).

2. **Carica i file del progetto:**
   - Inizializza Git nella cartella `portfolio-website` ed effettua il push dei file:
     ```bash
     git init
     git add .
     git commit -m "Inizializzazione portfolio"
     git branch -M main
     git remote add origin https://github.com/<tuo-username>/<nome-repo>.git
     git push -u origin main
     ```

3. **Attiva GitHub Pages:**
   - Sul sito di GitHub, vai nelle **Settings** (Impostazioni) del tuo repository.
   - Nella barra laterale sinistra, clicca su **Pages**.
   - Sotto **Build and deployment**, imposta la sorgente su **Deploy from a branch**.
   - Sotto **Branch**, seleziona `main` e la cartella `/ (root)`, poi clicca su **Save**.

*Dopo circa 1-2 minuti, il tuo nuovo portfolio professionale sarà online e accessibile a tutti, gratis!*
