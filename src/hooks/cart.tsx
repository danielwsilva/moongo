import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { ImageSourcePropType } from 'react-native';

export type Product = {
  id: string;
  name: string;
  brad: string;
  price: number;
  saleNumber: string;
  stock: number;
  supply?: number;
  stockMin: number;
  stockMax: number;
  image: ImageSourcePropType;
};

interface CartContextData {
  cart: Product[];
  addCart: (_item: Product) => void;
  removeProduct: (_item: Product) => void;
  updateProduct: (_item: Product, _supply: number) => void;
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

      if (productIndex < 0) setCart([...cart, { ...product }]);
    },
    [cart]
  );

  const updateProduct = (product: Product, supply: number) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);
    cart[productIndex].supply = supply;
  };

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
        removeProduct,
        updateProduct
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
