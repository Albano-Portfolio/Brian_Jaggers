# Brian Jaggers Resume Website

A modern static resume/CV website for Brian M. Jaggers. It uses HTML, CSS, and JavaScript only, so it can be hosted on GitHub Pages, Netlify, Vercel, or any static host.

## Files

- `index.html` — website structure and resume content
- `styles.css` — responsive design, glassmorphism, animation, and visual effects
- `script.js` — reveal animations, cursor glow, tilt cards, and particle background

## Run locally

Open `index.html` in your browser.

Optional local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `brian-jaggers-resume`.
2. Upload `index.html`, `styles.css`, `script.js`, and `README.md` to the root of the repo.
3. Go to **Settings** → **Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Set branch to **main** and folder to **/root**.
6. Click **Save**.
7. GitHub will provide a live website URL after deployment finishes.

## Publish on Vercel

1. Push these files to a GitHub repository.
2. In Vercel, click **Add New Project**.
3. Import the GitHub repo.
4. For framework preset, choose **Other** if asked.
5. Leave build command blank.
6. Leave output directory blank or use `.`.
7. Click **Deploy**.
