// src/components/ProductCard.jsx (REEMPLAZAR TODO)
'use client';
import { useCartStore } from '../store/useCartStore';

// URL del backend de Render (ASEGÚRATE DE USAR TU URL REAL)
// const BACKEND_URL = 'https://backendvrn.onrender.com'; // No es necesaria aquí, solo en el Modal

export default function ProductCard({ id, nombre, precio, archivo, imagenUrl }) {
  const addToCart = useCartStore((state) => state.addToCart);

  // Datos completos del producto necesarios para el carrito y el backend
  const productData = { id, nombre, precio, archivo, imagenUrl };

  return (
    <article className="product-card">
      <img src={imagenUrl} alt={nombre} loading="lazy" />
      <div className="product-card-content">
        <h3>{nombre}</h3>
        <p className="product-price">${(precio / 100).toFixed(2)} MXN</p>
        
        {/* Llama a la función del store para añadir el producto */}
        <button 
          onClick={() => addToCart(productData)} 
          className="btn-comprar"
        >
          AGREGAR AL CARRITO
        </button>
      </div>
    </article>
  );
}