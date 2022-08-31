import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

export type Product = {
  id: string;
  name: string;
  brad: string;
  price: string;
  saleNumber: string;
  stock: number;
  stockMin: number;
  stockMax: number;
};

interface CartContextData {
  cart: Product[];
  addCart: (_item: Product) => void;
  removeProduct: (_item: Product) => void;
}

interface PropsProvider {
  children: ReactNode;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: PropsProvider) {
  const [cart, setCart] = useState<Product[]>([]);

  const addCart = useCallback(
    (product: Product) => {
      const productIndex = cart.findIndex((item) => item.id === product.id);

      if (productIndex >= 0) {
      } else {
        setCart([...cart, { ...product }]);
      }
    },
    [cart]
  );

  const removeProduct = useCallback(
    (product: Product) => {
      const filterProduct = cart.filter((item) => item.id !== product.id);
      setCart(filterProduct);
    },
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        removeProduct
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
