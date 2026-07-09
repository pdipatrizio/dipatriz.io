# dipatriz.io

My portfolio and resume site, live at [dipatriz.io](https://dipatriz.io).

A retro 8-bit anaglyph 3D take on a developer portfolio. Pixel type, red and cyan stereo offsets, and hard square edges, built to score 100 on PageSpeed because performance is the thing I most want it to say about me.

## Stack

- [Astro](https://astro.build) static output, zero JavaScript shipped
- [Tailwind CSS](https://tailwindcss.com) v4
- Press Start 2P, self hosted via Fontsource, latin subset only
- JSON-LD Person schema as the page's only script tag
- Deployed on Cloudflare

## Commands

| Command           | Action                                    |
| ----------------- | ----------------------------------------- |
| `npm install`     | Install dependencies                      |
| `npm run dev`     | Dev server at `localhost:4321`            |
| `npm run build`   | Production build to `./dist/`             |
| `npm run preview` | Preview the production build locally      |
