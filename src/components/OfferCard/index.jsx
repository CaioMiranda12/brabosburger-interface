import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import cartIcon from '../../assets/CartIcon.png';
import { useCart } from '../../hooks/CartContext';
import {
  ProductName,
  Container,
  Image,
  Price,
  Button,
  ProductInfo,
  CartBottom,
} from './styles';

export function OfferCard({ product }) {
  const navigate = useNavigate();

  const { putProductInCart } = useCart();

  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Image src={product.url} alt="imagem do produto" />
      </div>
      <CartBottom>
        <ProductName>{product.name}</ProductName>
        <ProductInfo>
          <Price>{product.formatedCurrency}</Price>
          <Button
            onClick={() => {
              putProductInCart(product);
              navigate('/carrinho');
            }}
          >
            <img src={cartIcon} alt="icone do carrinho" />
          </Button>
        </ProductInfo>
      </CartBottom>
    </Container>
  );
}

OfferCard.propTypes = {
  product: PropTypes.object,
};
