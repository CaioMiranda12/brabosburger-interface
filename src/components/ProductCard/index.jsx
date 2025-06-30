import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import cartIcon from '../../assets/CartIcon.png';
import { useCart } from '../../hooks/CartContext';
import {
  ProductName,
  Image,
  Price,
  Button,
  ProductInfo,
  CartBottom,
  OfferCard,
  NormalCard,
} from './styles';

export function ProductCard({ product }) {
  const navigate = useNavigate();

  const { putProductInCart } = useCart();
  const Card = product.offer ? OfferCard : NormalCard;

  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Image src={product.url} alt="imagem do produto" />
      </div>
      <CartBottom>
        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <Price>{product.formatedCurrency}</Price>
        </ProductInfo>

        <Button
          onClick={() => {
            putProductInCart(product);
            navigate('/carrinho');
          }}
        >
          <img src={cartIcon} alt="icone do carrinho" />
        </Button>
      </CartBottom>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};
