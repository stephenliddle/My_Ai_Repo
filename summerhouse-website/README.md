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
- `src/data/` — content data for the navigation menu, products and gallery
  items.
- `public/data/products/*.txt` — plain-text description + price for each
  product, fetched client-side and shown in the "View More" popup.
- `public/images/` — generated product/gallery photography (optimized JPEGs).
- `public/videos/` — drop `revolving-demo.mp4` and `assembly-demo.mp4` here to
  have the Revolving Demo / Assembly Demo pages play real footage; until then
  they show a polished "coming soon" placeholder.

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
