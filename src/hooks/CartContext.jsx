import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const updateLocalStorage = async (product) => {
    await localStorage.setItem('devburger:cartInfo', JSON.stringify(product));
  };

  const putProductInCart = async (product) => {
    const productIndex = cartProducts.findIndex((prd) => prd.id === product.id);

    let newCardProducts = [];
    if (productIndex >= 0) {
      newCardProducts = cartProducts;

      newCardProducts[productIndex].quantity++;
      setCartProducts(newCardProducts);
    } else {
      product.quantity = 1;
      newCardProducts = [...cartProducts, product];
      setCartProducts(newCardProducts);
    }

    await updateLocalStorage(newCardProducts);
  };

  const increaseProducts = async (productId) => {
    const newCart = cartProducts.map((product) => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product;
    });

    setCartProducts(newCart);

    await updateLocalStorage(newCart);
  };

  const deleteProducts = async (productId) => {
    const newCart = cartProducts.filter((product) => product.id != productId);

    setCartProducts(newCart);

    await updateLocalStorage(newCart);
  };

  const decreaseProducts = async (productId) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((product) => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product;
      });

      setCartProducts(newCart);

      await updateLocalStorage(newCart);
    } else {
      deleteProducts(productId);
    }
  };

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('devburger:cartInfo');

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData));
      }
    };

    loadUserData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        putProductInCart,
        cartProducts,
        increaseProducts,
        decreaseProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used with CartContext');
  }

  return context;
};

CartProvider.propTypes = {
  children: PropTypes.node,
};
