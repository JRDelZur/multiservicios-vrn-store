// src/components/Header.jsx (REEMPLAZAR TODO)
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useCartStore } from '../store/useCartStore';
import CartModal from './CartModal'; 

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cart = useCartStore((state) => state.cart); 

  return (
    <>
      <header className="bg-gray-800 text-white p-4 shadow-md sticky top-0 z-40">
        {/* Usamos el container para centrar y flex-justify para separar extremos */}
        <div className="container mx-auto header-content-container"> 
          
          {/* 1. LOGO A LA IZQUIERDA */}
          <Link href="/">
            <div className="text-xl font-bold hover:text-red-400 transition duration-300 cursor-pointer">
              VRN | Multiservicios
            </div>
          </Link>

          {/* 2. NAVEGACIÓN Y CARRITO */}
          <nav className="main-nav-links">
            
            {/* Links de navegación */}
            <Link href="/"><span className="nav-link">Inicio</span></Link>
            <Link href="/store"><span className="nav-link">Tienda</span></Link>
            <Link href="/contact"><span className="nav-link">Contacto</span></Link>
            
            {/* Separador */}
            <span className="nav-separator">|</span> 

            {/* Ícono de Carrito */}
            <button 
                onClick={() => setIsCartOpen(true)}
                className="cart-button-icon"
            >
                🛒
                {cart.length > 0 && (
                    <span className="cart-count">{cart.length}</span>
                )}
            </button>
          </nav>
        </div>
      </header>
      
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}