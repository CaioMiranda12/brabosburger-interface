import { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';

import api from '../../services/api';
import { Button, CategoryTitle, Container, ContainerItems } from './styles';

export function CategoryCarousel() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      setCategories(data);
    }

    loadCategories();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 },
  ];

  return (
    <Container>
      <CategoryTitle>CATEGORIAS</CategoryTitle>

      <Carousel
        itemsToShow={5}
        breakPoints={breakPoints}
        style={{ width: '90%' }}
      >
        {categories &&
          categories.map((category) => (
            <ContainerItems key={category.id} image={category.url}>
              <Button to="/produtos" state={{ categoryId: category.id }}>
                {category.name}
              </Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  );
}
