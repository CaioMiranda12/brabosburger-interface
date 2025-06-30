import styled from 'styled-components';

export const NormalCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 32px;
  padding: 15px 10px;
  width: 100%;
  max-width: 300px;
  height: 258px;
  position: relative;
  overflow: hidden;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 720px) {
    width: 100%;
    height: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
  border-radius: 12px;
`;

export const OfferCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff5f5;
  border: 2px solid #ff4d4f;
  border-radius: 32px;
  padding: 15px 10px;
  width: 100%;
  max-width: 300px;
  height: 258px;
  position: relative;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: 'Oferta';
    position: absolute;
    top: -10px;
    left: -10px;
    background-color: #ff4d4f;
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 5px 8px;
    border-radius: 8px;
  }

  @media (max-width: 720px) {
    width: 100%;
    height: 100%;
  }
`;

export const ProductName = styled.p`
  color: #ff8c05;
  font-weight: 700;
  font-size: 18px;

  @media (max-width: 720px) {
    font-size: 14px;
  }
`;

export const Price = styled.p`
  color: #363636;
  font-weight: 700;
  font-size: 18px;

  @media (max-width: 720px) {
    font-size: 14px;
  }
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
  flex-direction: column;

  @media (max-width: 720px) {
    text-align: center;
  }
`;

export const CartBottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
