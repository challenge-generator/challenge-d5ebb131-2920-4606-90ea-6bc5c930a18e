// TODO(reto): archivo stubbeado; implementa los cuerpos.
import React from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  description,
  imageUrl,
  onAddToCart
}) => {
  throw new Error('TODO(reto): anonymous');
};

export default ProductCard;