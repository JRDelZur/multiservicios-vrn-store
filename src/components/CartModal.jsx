// src/components/CartModal.jsx (CÓDIGO CORREGIDO PARA MOSTRAR TODOS LOS PRODUCTOS)
'use client';
import { useCartStore } from '../store/useCartStore';
import { useState, useEffect } from 'react'; // <-- Importar useEffect

const BACKEND_URL = 'https://backendvrn.onrender.com';

export default function CartModal({ isOpen, onClose }) {
  const { cart, removeFromCart, clearCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // <-- NUEVO ESTADO

  // Sincronización: Esto solo se ejecuta en el cliente después del primer render
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const total = cart.reduce((acc, item) => acc + item.precio, 0);

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    setIsProcessing(true);

    try {
        const response = await fetch(`${BACKEND_URL}/crear-sesion-pago`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ items: cart }) 
        });
        
        const data = await response.json();
        
        if (response.ok && data.url) {
            clearCart(); 
            window.location.href = data.url;
        } else {
            const errorMsg = data.error || "Error desconocido al crear sesión de pago.";
            alert(`Error de pago: ${errorMsg}`);
        }

    } catch (error) {
        console.error("Error de conexión:", error);
        alert("Error de conexión con el servidor. Revisa tu internet o el estado de Render.");
    } finally {
        setIsProcessing(false);
    }
  };

  if (!isOpen) return null;

  // Si no se ha montado aún (estamos en el servidor o cargando), no renderizar la lista
  if (!hasMounted) {
    return (
      <div className="fixed inset-0 z-50 flex justify-end">
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
        <div className="relative w-full max-w-md bg-white h-full shadow-xl p-6 flex flex-col">
          <p>Cargando carrito...</p>
        </div>
      </div>
    );
  }

  // Renderizado normal una vez sincronizado
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Fondo oscuro (Overlay) */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

      {/* Panel del Carrito - Usamos la nueva clase 'cart-modal-panel' */}
      <div className="relative w-full max-w-md shadow-xl flex flex-col cart-modal-panel">
        <button onClick={onClose} className="absolute top-4 right-4 modal-close-button">
            &times;
        </button>

        <h2 className="cart-header-title">Tu Carrito ({cart.length})</h2>

        <div className="flex-1 overflow-y-auto pr-3"> {/* Agregamos un poco de padding para el scrollbar */}
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">Tu carrito está vacío.</p>
          ) : (
            cart.map((item) => (
              // Usamos la clase 'cart-item-container'
              <div key={item.id} className="cart-item-container">
                <div>
                    <h4 className="cart-item-name">{item.nombre}</h4>
                    <p className="cart-item-price">${(item.precio / 100).toFixed(2)} MXN</p>
                </div>
                <button 
                    onClick={() => removeFromCart(item.id)}
                    className="cart-item-remove-btn"
                >
                    Eliminar
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer del Carrito (Total y Pagar) - Usamos 'cart-total-container' */}
        {cart.length > 0 && (
            <div className="cart-total-container"> 
                <div className="flex justify-between cart-total-text mb-4">
                    <span>Total:</span>
                    <span>${(total / 100).toFixed(2)} MXN</span>
                </div>
                <button 
                    onClick={handleCheckout}
                    disabled={isProcessing}
                    className="btn-comprar" 
                >
                    {isProcessing ? 'PROCESANDO...' : 'PAGAR AHORA'}
                </button>
            </div>
        )}
      </div>
    </div>
  );
}