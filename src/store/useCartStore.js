import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [], 

      addToCart: (product) => {
        const { cart } = get();
        const exists = cart.find((item) => item.id === product.id);
        
        if (!exists) {
          set({ cart: [...cart, product] });
          // Puedes reemplazar este alert con un Toast más elegante en producción
          alert("¡Producto agregado al carrito!"); 
        } else {
          alert("Este producto ya está en tu carrito.");
        }
      },

      removeFromCart: (productId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        }));
      },

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'shopping-cart-storage',
    }
  )
);