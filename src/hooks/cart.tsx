import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { ProductResponse } from 'services/api/home/types';

interface CartContextData {
  cart: ProductResponse[];
  setCart: (_item: ProductResponse[]) => void;
  addProduct: (_cart: ProductResponse[], _item: ProductResponse) => void;
  removeProduct: (_item: ProductResponse) => void;
  updateProduct: (_item: ProductResponse, _supply: number) => number;
}

interface PropsProvider {
  children: ReactNode;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: PropsProvider) {
  const [cart, setCart] = useState<ProductResponse[]>([]);

  const addProduct = (productCart: ProductResponse[], product: ProductResponse) => {
    const productIndex = productCart.findIndex((item) => item.id === product.id);

    if (productIndex < 0) {
      setCart([...productCart, { ...product }]);
    } else {
      removeProduct(product);
    }
  };

  const updateProduct = useCallback(
    (product: ProductResponse, supply: number) => {
      const productIndex = cart.findIndex((item) => item.id === product.id);
      cart[productIndex].quantity = supply;
      return supply;
    },
    [cart]
  );

  const removeProduct = useCallback(
    (product: ProductResponse) => {
      const filterProduct = cart.filter((item) => item.id !== product.id);
      setCart(filterProduct);
    },
    [cart]
  );

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
