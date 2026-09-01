# The Revolving Summerhouse Company — Website

A fast, modern marketing website for a (fictional) manufacturer of revolving
garden summerhouses. Built with React, TypeScript, Vite and Tailwind CSS.

## Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript
- [React Router](https://reactrouter.com/) for client-side routing
- [Tailwind CSS v4](https://tailwindcss.com/) for styling

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check and produce a production build in dist/
npm run preview   # preview the production build locally
```

## Structure

- `src/components/` — shared UI: app shell (`Layout`, `Header`, `Sidebar`,
  `Footer`), and reusable pieces (`Card`, `Modal`, `PageHeader`,
  `VideoShowcase`).
- `src/pages/` — one component per route (Home, Products, Gallery, Revolving
  Demo, Assembly Demo, Bolton & Paul, Going International, About, Contact).
- `src/data/nav.ts` — navigation menu labels and routes.
- `src/lib/content.ts` — loads numbered product/gallery files from `public/`.
- `public/data/products/N.txt` + `public/images/products/N.jpg` — products.
- `public/data/gallery/N.txt` + `public/images/gallery/N.jpg` — gallery.
- `public/videos/` — drop `revolving-demo.mp4` and `assembly-demo.mp4` here to
  have the Revolving Demo / Assembly Demo pages play real footage; until then
  they show a polished "coming soon" placeholder.

## Editing products & gallery (no code changes)

Items are numbered files. The app probes `1.txt`, `2.txt`, … until a number
is missing, then stops. Screen order follows those numbers.

**Swap content:** replace `3.jpg` or edit `3.txt` and refresh.

**Add an item:** create the next number (e.g. `7.txt` + `7.jpg`).

**Remove an item:** delete that number’s files, then renumber higher items
down so there is no gap (a missing `4` stops discovery at 3).

**Reorder:** rename files (e.g. swap `2` ↔ `5`).

### Product text format (`public/data/products/1.txt`)

```text
Name: The Oxford
Tagline: Our classic octagonal turner...
Price: £8,950

Body paragraphs and specification go here...
```

### Gallery text format (`public/data/gallery/1.txt`)

```text
Title: Cotswold Garden
Caption: The Oxford, turning slowly beside a honey-stone terrace.
Related: gallery:1, product:1, gallery:5, hero
```

`Related` is a comma-separated list of image refs used in the View More
popup: `gallery:N`, `product:N`, or `hero`.

## Pages

| Route | Description |
| --- | --- |
| `/` | Home / landing page |
| `/gallery` | 3x2 grid of scene photos; "View More" opens up to 4 related images |
| `/products` | 3x2 grid of product cards; "View More" opens a popup with the product image, description and price (loaded from a `.txt` file) |
| `/revolving-demo` | Video of a summerhouse rotating |
| `/assembly-demo` | Video of a summerhouse being assembled on site |
| `/bolton-and-paul` | Company history article |
| `/going-international` | Company history article |
| `/about` | About the company |
| `/contact` | Contact details + a validated contact form |
