// import DevBurgerLogo from '../../assets/DevBurgerLogo.png';
import brabosBurgerImg from '../../assets/pitbull.avif';
import { CartItems, CartResume } from '../../components';
import { Container, CartBackground, Wrapper } from './styles';

export function Cart() {
  return (
    <Container>
      <CartBackground>
        <img src={brabosBurgerImg} alt="logo do brabos burger" />
        <h2>Brabos Burger</h2>
      </CartBackground>

      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  );
}
