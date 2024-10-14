import HomeImage from '../../assets/homeImg.svg';
import { CategoryCarousel, OfferCarousel } from '../../components';
import { Container, HomeImg } from './styles';

export function Home() {
  return (
    <Container>
      <HomeImg src={HomeImage} alt="imagem-da-home" />
      <CategoryCarousel />
      <OfferCarousel />
    </Container>
  );
}
