import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ProductImage from '../../assets/productImage.svg';
import { OfferCard } from '../../components';
import api from '../../services/api';
import formatCurrency from '../../utils/formatCurrency';
import {
  Container,
  ProductImg,
  CategoryButton,
  CategoriesMenu,
  ProductsContainer,
} from './styles';

export function Products() {
  const { state } = useLocation();

  let categoryId = 0;

  if (state?.categoryId) {
    categoryId = state.categoryId;
  }

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [activeCategory, setActiveCategory] = useState(categoryId);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      const newCategories = [{ id: 0, name: 'Todos' }, ...data];
      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data } = await api.get('/products');

      const newProducts = data.map((product) => {
        return {
          ...product,
          formatedCurrency: formatCurrency(product.price),
        };
      });

      setProducts(newProducts);
    }

    loadCategories();
    loadProducts();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activeCategory,
      );

      setFilteredProducts(newFilteredProducts);
    }
  }, [activeCategory, products]);

  return (
    <Container>
      <ProductImg src={ProductImage} alt="imagem-do-produto" />
      <CategoriesMenu>
        {categories &&
          categories.map((category) => (
            <CategoryButton
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
              }}
              isActiveCategory={activeCategory === category.id}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>

      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map((product) => (
            <OfferCard key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  );
}
