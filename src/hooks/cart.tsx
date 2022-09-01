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
  setCart: (_item: Product[]) => void;
  addProduct: (_cart: Product[], _item: Product) => void;
  removeProduct: (_cart: Product[], _item: Product) => void;
  updateProduct: (_item: Product, _supply: number) => number;
}

interface PropsProvider {
  children: ReactNode;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: PropsProvider) {
  const [cart, setCart] = useState<Product[]>([]);

  const addProduct = useCallback((productCart: Product[], product: Product) => {
    const productIndex = productCart.findIndex((item) => item.id === product.id);
    if (productIndex < 0) setCart([...productCart, { ...product }]);
  }, []);

  const updateProduct = useCallback(
    (product: Product, supply: number) => {
      const productIndex = cart.findIndex((item) => item.id === product.id);
      cart[productIndex].supply = supply;
      return supply;
    },
    [cart]
  );

  const removeProduct = useCallback((productCart: Product[], product: Product) => {
    const filterProduct = productCart.filter((item) => item.id !== product.id);
    setCart(filterProduct);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addProduct,
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
