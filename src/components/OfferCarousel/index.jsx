import { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';

import api from '../../services/api';
import formatCurrency from '../../utils/formatCurrency';
import { ProductCard } from '../ProductCard';
import { OfferTitle, Container } from './styles';

export function OfferCarousel() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadOfferProducts() {
      const { data } = await api.get('/products');

      const onlyOffers = data
        .filter((product) => product.offer)
        .map((product) => {
          return {
            ...product,
            formatedCurrency: formatCurrency(product.price),
          };
        });

      setOffers(onlyOffers);
    }

    loadOfferProducts();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 900, itemsToShow: 3 },
    { width: 1300, itemsToShow: 4 },
  ];

  return (
    <Container>
      <OfferTitle>OFERTAS DO DIA</OfferTitle>

      <Carousel
        itemsToShow={5}
        breakPoints={breakPoints}
        style={{ width: '90%' }}
        className="carousel-ofertas"
      >
        {offers &&
          offers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Carousel>
    </Container>
  );
}
