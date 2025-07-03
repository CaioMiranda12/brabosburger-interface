import { useCart } from '../../hooks/CartContext';
import formatCurrency from '../../utils/formatCurrency';
import { Container, Header, Body, EmptyCart, AddMoreProduct } from './styles';

export function CartItems() {
  const { cartProducts, increaseProducts, decreaseProducts } = useCart();

  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p style={{ paddingRight: 30 }}>Quantidade</p>
        <p>Total</p>
      </Header>

      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map((product) => (
          <Body key={product.url}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantity-container">
              <button onClick={() => decreaseProducts(product.id)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => increaseProducts(product.id)}>+</button>
            </div>

            <p>{formatCurrency(product.price * product.quantity)}</p>
          </Body>
        ))
      ) : (
        <EmptyCart>Carrinho vazio</EmptyCart>
      )}
      <AddMoreProduct to="/produtos">
        {'< Adicionar mais produtos'}{' '}
      </AddMoreProduct>
    </Container>
  );
}
