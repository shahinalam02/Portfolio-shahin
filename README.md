<div align="center">
  <h1>Shahin Alam — Portfolio (Vite + React + TypeScript)</h1>
</div>

This repository contains a Vite-powered React + TypeScript portfolio site with Tailwind-style utilities. The project is designed for local development with fast HMR and straightforward production builds.

**Quicklinks:**

- **Local dev:** `npm run dev`
- **Build:** `npm run build`
- **Preview production build:** `npm run preview`

**Tech:** Vite, React, TypeScript, Tailwind-like utilities, Framer Motion

**Project structure (important files):**

- `index.html`: App entry
- `index.tsx` / `App.tsx`: React entry and root component
- `components/`: UI components (e.g. `Hero.tsx`, `Navbar.tsx`)
- `assets/images/`: Project image assets (kept in repo for import)
- `public/`: Static files served as-is at root (`/`)
- `global.d.ts`: image module declarations for TypeScript

**Setup — Local development**

1. Install dependencies:

```powershell
npm install
```

2. Start the dev server (Vite):

```powershell
npm run dev
```

3. Open `http://localhost:3000/` in your browser.

Notes:

- Dev server includes HMR; changes to `components/` or `assets/` are reflected immediately.
- If you add new image module types and see TypeScript errors, ensure `global.d.ts` contains the appropriate `declare module '*.png'` entries.

**Using images (how to change the Hero image)**

There are two recommended approaches:

- Bundled import (recommended): place images in `assets/images/` and import them from components:

```tsx
import hero from "../assets/images/shahin.png";
<img src={hero} alt="Hero" />;
```

- Static public URL: place assets in `public/assets/images/` and reference directly:

```tsx
<img src="/assets/images/shahin.png" alt="Hero" />
```

Why import? Importing lets Vite process assets (hashing, optimization) so paths work in dev and production. Using `public/` serves files unchanged at fixed URLs.

**Build & Preview**

```powershell
npm run build
npm run preview
```

`npm run build` outputs to `dist/`. `npm run preview` serves the production build locally so you can verify routes and assets.

**Troubleshooting**

- If an image import shows as text or undefined, confirm you used `import img from '...';` and then `src={img}` (not `src={path/to/file.png}` directly).
- If TypeScript complains about importing images, ensure `global.d.ts` exists and includes declarations for `*.png`, `*.jpg`, etc.
- If HMR doesn't pick up changes, stop and restart the dev server:

```powershell
npm run dev
```

**Next steps & tips**

- To change the hero image to `shahin.png`, either import it in `components/Hero.tsx` (bundled) or copy it to `public/assets/images/` and update the `src` to `/assets/images/shahin.png`.
- Keep production-only static files in `public/` and development assets you want processed in `assets/`.

If you'd like, I can:

- Update `components/Hero.tsx` to import and use `shahin.png` instead of `shahin1.png`.
- Move selected images into `public/assets/images/` for static URLs.

---

If anything else should be added to this README (deployment steps for Netlify/Vercel, environment variables, or screenshots), tell me and I'll update it.
