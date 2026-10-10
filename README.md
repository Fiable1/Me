# Munezero Fiable — Portfolio

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
- No backend required.

## Contact form

Messages are delivered straight to **fiablemunezero@gmail.com** using
[Formspree](https://formspree.io), so visitors do not need an email app.

1. Create a free Formspree account and a new form pointed at
   `fiablemunezero@gmail.com`.
2. Copy the form endpoint (looks like `https://formspree.io/f/abcdwxyz`).
3. Paste it into `profile.formEndpoint` in `src/data.js`, replacing
   `REPLACE_WITH_YOUR_FORM_ID`.

Until the endpoint is set, the button falls back to opening the visitor's
email app with your address pre-filled.

The site uses one portrait from the CV (`public/munezero.webp`). It does not publish the PDF.
