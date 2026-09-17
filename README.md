# Munezero Fiale — Portfolio

Professional one-page site built with React, Vite, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

## Production build (upload this)

```bash
npm run build
```

Upload the `dist` folder to Netlify, Vercel, GitHub Pages, cPanel, or any static host.

- Relative asset paths (`base: './'`) so the site works at the domain root or in a subfolder.
- `public/_redirects` for Netlify.
- `vercel.json` for Vercel SPA routing.
- No backend required. The contact form opens email.

The site uses one portrait from the CV (`public/munezero.webp`). It does not publish the PDF.
