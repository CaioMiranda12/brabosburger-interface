import styled from 'styled-components';

import background from '../../assets/fundo.png';

export const Container = styled.div`
  background-image: url(${background});
  min-height: calc(100vh - 70px);
`;

export const ProductImg = styled.img`
  width: 100%;
`;

export const CategoriesMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;

  @media (max-width: 720px) {
    gap: 10px;
  }
`;

export const CategoryButton = styled.button`
  border: none;
  background: transparent;
  border-bottom: ${(props) => props.isActiveCategory && '2px solid #6F357C'};
  color: ${(props) => (props.isActiveCategory ? '#6F357C' : '#9A9A9D;')};
  padding-bottom: 5px;

  font-size: 18px;
  font-weight: 800;

  @media (max-width: 720px) {
    font-size: 16px;
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 60px 120px;
  justify-items: center;

  @media (max-width: 1000px) {
    grid-template-columns: 2fr 2fr;
    padding: 30px 20px;
  }
`;
