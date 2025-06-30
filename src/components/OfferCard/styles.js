import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 32px;

  padding: 15px 10px;
  width: 270px;
  height: 258px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 720px) {
    width: 150px;
    height: 100%;
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 100px;
`;

export const ProductName = styled.p`
  color: #ff8c05;
  font-weight: 700;
  font-size: 18px;
`;

export const Price = styled.p`
  color: #363636;
  font-weight: 700;
  font-size: 18px;
`;

export const Button = styled.button`
  border: none;
  background-color: #9758a6;
  padding: 8px 10px;
  border-radius: 8px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
