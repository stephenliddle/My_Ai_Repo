import type { Product } from "../types";

export const products: Product[] = [
  {
    id: "oxford",
    slug: "oxford",
    name: "The Oxford",
    tagline: "Our classic octagonal turner, built for everyday gardens.",
    image: "/images/products/oxford.jpg",
    descriptionFile: "/data/products/oxford.txt",
  },
  {
    id: "windsor",
    slug: "windsor",
    name: "The Windsor",
    tagline: "A grand, glazed pavilion for entertaining in every season.",
    image: "/images/products/windsor.jpg",
    descriptionFile: "/data/products/windsor.txt",
  },
  {
    id: "balmoral",
    slug: "balmoral",
    name: "The Balmoral",
    tagline: "Highland-inspired timber framing with a steep shingled roof.",
    image: "/images/products/balmoral.jpg",
    descriptionFile: "/data/products/balmoral.txt",
  },
  {
    id: "chatsworth",
    slug: "chatsworth",
    name: "The Chatsworth",
    tagline: "Full-height glazing and a slender cupola for stately homes.",
    image: "/images/products/chatsworth.jpg",
    descriptionFile: "/data/products/chatsworth.txt",
  },
  {
    id: "sandringham",
    slug: "sandringham",
    name: "The Sandringham",
    tagline: "A compact turning retreat, perfectly sized for smaller plots.",
    image: "/images/products/sandringham.jpg",
    descriptionFile: "/data/products/sandringham.txt",
  },
  {
    id: "blenheim",
    slug: "blenheim",
    name: "The Blenheim",
    tagline: "Our largest model - a genuine architectural statement piece.",
    image: "/images/products/blenheim.jpg",
    descriptionFile: "/data/products/blenheim.txt",
  },
];
