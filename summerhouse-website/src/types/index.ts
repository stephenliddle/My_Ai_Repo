export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  image: string;
  descriptionFile: string;
}

export interface GalleryItem {
  id: string;
  slug: string;
  title: string;
  caption: string;
  image: string;
  relatedImages: string[];
}

export interface NavItem {
  label: string;
  path: string;
}
