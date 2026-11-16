import React from 'react';
import Button from '../../shared/components/Button';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  onRemove: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  quantity,
  imageUrl,
  onRemove,
  onIncrease,
  onDecrease
}) => {
  return (
    <li
      role="listitem"
      aria-labelledby={`item-name-${id}`}
      className="cart-item"
    >
      <div className="cart-item-image">
        <img
          src={imageUrl}
          alt={`Imagen de ${name}`}
          aria-hidden="true"
        />
      </div>
      <div className="cart-item-details" id={`item-name-${id}`}>
        <h3>{name}</h3>
        <p>${price.toFixed(2)}</p>
      </div>
      <div className="cart-item-quantity">
        <Button
          onClick={onDecrease}
          aria-label={`Disminuir cantidad de ${name}`}
          aria-keyshortcuts="ArrowDown"
        >
          -
        </Button>
        <span
          role="status"
          aria-live="polite"
        >
          {quantity}
        </span>
        <Button
          onClick={onIncrease}
          aria-label={`Aumentar cantidad de ${name}`}
          aria-keyshortcuts="ArrowUp"
        >
          +
        </Button>
      </div>
      <Button
        onClick={onRemove}
        aria-label={`Eliminar ${name} del carrito`}
        className="remove-button"
      >
        Eliminar
      </Button>
    </li>
  );
};

export default CartItem;