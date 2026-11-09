# Md. Jobydul Islam Rupock: Academic Portfolio

React + TypeScript + Tailwind CSS + Framer Motion + Lucide. Light/dark theme, responsive, accessible navigation, GitHub Pages ready.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build
```

## Edit content

Everything is in **`src/content.ts`**: profile, links, interests, projects, skills, education, achievements, publications.
Fields showing *"To be confirmed"* are placeholders. Replace them only with details you can verify.

## Add your photo

Save it as **`public/images/portrait.jpg`** (portrait orientation, about 4:5, ideally 800 × 1000 px, under 300 KB).
Until it exists, the hero shows your initials.

## Add your CV

Save it as **`public/documents/CV_Md_Jobydul_Islam_Rupock.pdf`** and rebuild. If the file is missing, the CV button shows a short note instead of a broken download.

## Add posters, certificates and the NCR3/CCL4 presentation

1. Copy files into `public/documents/` (for example `ncr3-ccl4-presentation.pdf`, `bmb-symposium-2023-poster.pdf`).
2. NCR3/CCL4 project: in `src/content.ts`, set `documentUrl: "documents/ncr3-ccl4-presentation.pdf"` on the `ncr3-ccl4` project. The button appears in that project's details.
3. Poster / certificate: add a link in the `achievements` section of `App.tsx`, or replace the placeholder fields in `content.ts`.

## Add publications

Append verified entries to `publications.entries` in `src/content.ts`:

```ts
{ category: "Preprints", citation: "Authors. Title. Server. Year.", url: "https://doi.org/..." }
```

While the list is empty, the site shows: "Research publications and scientific contributions will be updated as my work progresses."

## Deploy to GitHub Pages

1. Create a GitHub repository and push this folder to the `main` branch.
2. In the repository, go to **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds and publishes on every push to `main`.
4. Your site will be at `https://<username>.github.io/<repo>/` (or `https://<username>.github.io/` if the repo is named `<username>.github.io`).

`vite.config.ts` uses `base: "./"`, so no path changes are needed for either URL style.
