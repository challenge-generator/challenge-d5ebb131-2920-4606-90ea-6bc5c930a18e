import { useState } from 'react';
import CartItem from './CartItem';
import Button from '../../shared/components/Button';
import Modal from '../../shared/components/Modal';

export interface CartItemData {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartProps {
  items: CartItemData[];
  onRemove: (id: string) => void;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onCheckout: () => void;
  onClose: () => void;
}

export const Cart = ({
  items,
  onRemove,
  onIncrease,
  onDecrease,
  onCheckout,
  onClose,
}: CartProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckoutClick = () => {
    if (items.length === 0) {
      return;
    }
    setIsModalOpen(true);
  };

  const handleConfirmCheckout = () => {
    setIsModalOpen(false);
    onCheckout();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseCart = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 150);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleCloseCart();
    }
  };

  return (
    <div
      className={`cart-container ${isClosing ? 'closing' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-title"
      onKeyDown={handleKeyDown}
    >
      <header className="cart-header">
        <h2 id="cart-title" className="cart-title">
          Carrito de Compras
        </h2>
        <Button
          variant="secondary"
          size="small"
          onClick={handleCloseCart}
          aria-label="Cerrar carrito"
        >
          ✕
        </Button>
      </header>

      <div className="cart-summary" role="status" aria-live="polite">
        <p className="summary-text">
          <span className="sr-only">Total de productos: </span>
          <strong>{totalItems}</strong> productos
        </p>
        <p className="summary-total">
          <span className="sr-only">Precio total: </span>
          <strong>${totalPrice.toFixed(2)}</strong>
        </p>
      </div>

      <div
        className="cart-items-container"
        role="list"
        aria-label="Items en el carrito"
      >
        {items.length === 0 ? (
          <p className="empty-cart-message" role="listitem">
            Tu carrito está vacío
          </p>
        ) : (
          items.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              imageUrl={item.imageUrl}
              onRemove={() => onRemove(item.id)}
              onIncrease={() => onIncrease(item.id)}
              onDecrease={() => onDecrease(item.id)}
            />
          ))
        )}
      </div>

      <footer className="cart-footer">
        <Button
          variant="primary"
          size="large"
          onClick={handleCheckoutClick}
          disabled={items.length === 0}
          aria-label={`Proceder al pago. Total: $${totalPrice.toFixed(2)}`}
        >
          Proceder al Pago
        </Button>
      </footer>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Confirmar Compra"
        ariaLabel="Modal de confirmación de compra"
      >
        <div className="checkout-confirmation">
          <p className="confirmation-text">
            ¿Estás seguro de que deseas proceder con la compra?
          </p>
          <div className="confirmation-summary">
            <p>
              <strong>Total de items:</strong> {totalItems}
            </p>
            <p>
              <strong>Total a pagar:</strong> ${totalPrice.toFixed(2)}
            </p>
          </div>
          <div className="confirmation-actions">
            <Button
              variant="secondary"
              onClick={handleCloseModal}
              aria-label="Cancelar compra"
            >
              Cancelar
            </Button>
            <Button
              variant="primary"
              onClick={handleConfirmCheckout}
              aria-label="Confirmar compra"
            >
              Confirmar
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};