import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useCart } from '../../hooks/CartContext';
import api from '../../services/api';
import formatCurrency from '../../utils/formatCurrency';
import { ButtonPoppins } from '../ButtonPoppins';
import { Container } from './styles';

export function CartResume() {
  const [finalPriceWithoutTax, setFinalPriceWithoutTax] = useState(0);
  const [deliveryTax] = useState(5);

  const { cartProducts } = useCart();

  const submitOrder = async () => {
    const order = cartProducts.map((product) => {
      return { id: product.id, quantity: product.quantity };
    });

    toast.promise(api.post('/orders', { products: order }), {
      pending: 'Realizando seu pedido...',
      success: 'Pedido realizado com sucesso!',
      error: 'Falha ao tentar realizar o seu pedido! Tente novamente',
    });
  };

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

    setFinalPriceWithoutTax(sumAllItems);
  }, [cartProducts, deliveryTax]);

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do Pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(finalPriceWithoutTax)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </div>

        <div className="container-bottom">
          <p>Total</p>
          <p className="total-price">
            {formatCurrency(finalPriceWithoutTax + deliveryTax)}
          </p>
        </div>
      </Container>

      <ButtonPoppins style={{ marginTop: 30 }} onClick={() => submitOrder()}>
        Continuar
      </ButtonPoppins>
    </div>
  );
}
