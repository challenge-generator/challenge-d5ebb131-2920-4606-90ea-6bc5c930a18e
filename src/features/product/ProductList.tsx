// TODO(reto): archivo stubbeado; implementa los cuerpos.
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

interface ProductListProps {
  products: Product[];
  onAddToCart: (productId: string) => void;
}

export const ProductList = ({ products, onAddToCart }: ProductListProps) => {
  throw new Error('TODO(reto): anonymous');
};