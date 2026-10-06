# Jyoti Nagesh Jadhav — Portfolio

React + Vite. No UI or animation libraries; animations are CSS plus one small canvas starfield.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Replace these files

| What | Where |
| --- | --- |
| Photograph | `public/images/profile.jpg` (square, ~800×800 px, under ~200 KB). Until it exists the hero shows a "JJ" monogram. |
| Resume | `public/resume/Jyoti-Jadhav-Resume.pdf` (keep the same name; the View/Download buttons use it). The current file is a placeholder. |

## Edit content

All text, links, skills, projects, experience, education and certifications live in
`src/data/content.js`. To add a project link, set `github` or `live` on that project; the
buttons only render when a link exists.

## After deploying

In `index.html`, replace `og:url` and `og:image` with full URLs (e.g. `https://your-site.vercel.app/images/profile.jpg`)
so link previews work on LinkedIn and other platforms.

## Deploy to Vercel

Import the folder/repository in Vercel. It detects Vite automatically
(build command `npm run build`, output directory `dist`). No extra configuration is needed.

## Hidden extras

- `Ctrl + /` (or `Cmd + /`), or click the `< / >` in the footer: opens a small terminal. Try `help`.
- `↑ ↑ ↓ ↓ ← → ← →`: a short "developer mode" star warp.
