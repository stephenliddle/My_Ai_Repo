export interface Product {
  id: string;
  number: number;
  name: string;
  tagline: string;
  price: string | null;
  body: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  number: number;
  title: string;
  caption: string;
  image: string;
  relatedImages: string[];
}

export interface NavItem {
  label: string;
  path: string;
}
