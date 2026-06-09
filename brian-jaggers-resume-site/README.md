# Brian Jaggers Resume / CV Portfolio Website

Modern recruiter-focused resume website for Brian M. Jaggers. Built with React, Vite, Framer Motion, and Lucide icons.

## What's included
- Modern animated landing page
- No photo included
- Resume summary, skills, experience, education, and certifications
- Generic data analyst project portfolio section
- Recruiter-friendly contact buttons
- Responsive mobile design
- Scroll progress bar, glowing cursor effect, animated hero card, moving skills marquee, glassmorphism cards

## Run locally
```bash
npm install
npm run dev
```
Then open the local URL shown in the terminal.

## Build for production
```bash
npm run build
```
The production files will be created in the `dist` folder.

## Deploy to Vercel
1. Create a new GitHub repository.
2. Upload all files from this folder.
3. Go to Vercel and choose **Add New Project**.
4. Import the GitHub repo.
5. Vercel should detect Vite automatically.
6. Build command: `npm run build`
7. Output directory: `dist`
8. Click **Deploy**.

## Deploy to GitHub Pages
1. Upload all files to a GitHub repo.
2. In the repo terminal or GitHub Codespaces, run:
```bash
npm install
npm run build
```
3. Rename the `dist` folder to `docs`.
4. Commit and push the `docs` folder.
5. Go to **Settings → Pages**.
6. Source: **Deploy from a branch**.
7. Branch: `main`; folder: `/docs`.
8. Save and wait for GitHub Pages to publish.

## Customize
Edit `src/main.jsx` to update resume text, projects, links, phone, email, or LinkedIn.
