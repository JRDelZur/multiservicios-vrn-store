'use client';
import { useCartStore } from '../store/useCartStore';

// const BACKEND_URL = 'https://backendvrn.onrender.com';

export default function ProductCard({ id, nombre, precio, archivo, imagenUrl }) {
  const addToCart = useCartStore((state) => state.addToCart);

  const productData = { id, nombre, precio, archivo, imagenUrl };

  return (
    <article className="product-card">
      <img src={imagenUrl} alt={nombre} loading="lazy" />
      <div className="product-card-content">
        <h3>{nombre}</h3>
        <p className="product-price">${(precio / 100).toFixed(2)} MXN</p>
        
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