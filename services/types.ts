export default interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  featured: boolean;
  description: string;
  thumbnail_url: string;
  gallery: string[];
}
