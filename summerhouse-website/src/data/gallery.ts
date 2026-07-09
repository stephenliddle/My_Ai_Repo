import type { GalleryItem } from "../types";

export const galleryItems: GalleryItem[] = [
  {
    id: "cotswold-garden",
    slug: "cotswold-garden",
    title: "Cotswold Garden",
    caption: "The Oxford, turning slowly beside a honey-stone terrace.",
    image: "/images/gallery/cotswold-garden.jpg",
    relatedImages: [
      "/images/gallery/cotswold-garden.jpg",
      "/images/products/oxford.jpg",
      "/images/gallery/woodland-clearing.jpg",
      "/images/hero.jpg",
    ],
  },
  {
    id: "lakeside-retreat",
    slug: "lakeside-retreat",
    title: "Lakeside Retreat",
    caption: "The Windsor overlooking still water at first light.",
    image: "/images/gallery/lakeside-retreat.jpg",
    relatedImages: [
      "/images/gallery/lakeside-retreat.jpg",
      "/images/products/windsor.jpg",
      "/images/gallery/evening-illumination.jpg",
    ],
  },
  {
    id: "winter-frost",
    slug: "winter-frost",
    title: "Winter Frost",
    caption: "The Balmoral holds warmth through the coldest mornings.",
    image: "/images/gallery/winter-frost.jpg",
    relatedImages: [
      "/images/gallery/winter-frost.jpg",
      "/images/products/balmoral.jpg",
      "/images/gallery/coastal-terrace.jpg",
      "/images/products/blenheim.jpg",
    ],
  },
  {
    id: "coastal-terrace",
    slug: "coastal-terrace",
    title: "Coastal Terrace",
    caption: "The Chatsworth catches the sea breeze on a Cornish terrace.",
    image: "/images/gallery/coastal-terrace.jpg",
    relatedImages: [
      "/images/gallery/coastal-terrace.jpg",
      "/images/products/chatsworth.jpg",
      "/images/gallery/lakeside-retreat.jpg",
    ],
  },
  {
    id: "woodland-clearing",
    slug: "woodland-clearing",
    title: "Woodland Clearing",
    caption: "The Sandringham, tucked into a private clearing.",
    image: "/images/gallery/woodland-clearing.jpg",
    relatedImages: [
      "/images/gallery/woodland-clearing.jpg",
      "/images/products/sandringham.jpg",
      "/images/gallery/cotswold-garden.jpg",
      "/images/gallery/winter-frost.jpg",
    ],
  },
  {
    id: "evening-illumination",
    slug: "evening-illumination",
    title: "Evening Illumination",
    caption: "The Blenheim, lit from within as dusk settles.",
    image: "/images/gallery/evening-illumination.jpg",
    relatedImages: [
      "/images/gallery/evening-illumination.jpg",
      "/images/products/blenheim.jpg",
      "/images/hero.jpg",
    ],
  },
];
