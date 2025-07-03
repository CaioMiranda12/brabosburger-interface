import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 10px;
  width: max-content;

  @media (max-width: 1080px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  background-color: #333232;
  border-radius: 20px 20px 0 0;

  p {
    font-size: 16px;
    color: #fff;
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: max-content;
  padding: 10px;
  grid-gap: 10px 15px;

  @media (max-width: 1080px) {
    width: 100%;
  }

  img {
    border-radius: 15px;
    background-color: #f3f3f3;
    width: 120px;

    @media (max-width: 1080px) {
      width: 60px;
    }
  }

  p {
    font-size: 16px;
    width: 124px;
    color: #484848;

    @media (max-width: 1080px) {
      width: 100%;
    }

    @media (max-width: 720px) {
      font-size: 10px;
    }
  }

  .quantity-container {
    display: flex;
    gap: 20px;

    p {
      width: max-content;
    }

    button {
      height: 25px;
      border-radius: 5px;
      border: none;
      padding: 5px;
      background-color: darkorange;
      color: #fff;
      font-size: 20px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const EmptyCart = styled.p`
  padding: 30px;
  text-align: center;
  font-weight: bold;
`;

export const AddMoreProduct = styled(Link)`
  margin-right: 80px;
  text-decoration: underline;
  color: #5c2669;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 30px;
  font-size: 16px;
`;
