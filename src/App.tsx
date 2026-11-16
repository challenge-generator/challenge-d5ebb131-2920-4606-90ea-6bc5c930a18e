import { Routes, Route, Navigate } from 'react-router-dom';
import { ProductList } from './features/product/ProductList';
import { Cart } from './features/cart/Cart';
import { CheckoutForm } from './features/checkout/CheckoutForm';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState<Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
  }>>([]);

  const handleAddToCart = (productId: string) => {
    console.log('Add to cart:', productId);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleIncreaseQuantity = (id: string) => {
    setCartItems(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecreaseQuantity = (id: string) => {
    setCartItems(prev => prev.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const handleCheckout = () => {
    console.log('Processing checkout...');
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              products={[]}
              onAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              items={cartItems}
              onRemove={handleRemoveFromCart}
              onIncrease={handleIncreaseQuantity}
              onDecrease={handleDecreaseQuantity}
              onCheckout={handleCheckout}
              onClose={() => window.history.back()}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <CheckoutForm
              totalAmount={cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}
              onSubmit={(data) => console.log('Checkout data:', data)}
              onCancel={() => window.history.back()}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;