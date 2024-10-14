import styled from 'styled-components';

import CartImage from '../../assets/CartBackground.svg';
import background from '../../assets/fundo.png';

export const Container = styled.div`
  background: url(${background});
  min-height: calc(100vh - 70px);
`;

export const CartBackground = styled.div`
  background: url(${CartImage});
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    padding: 20px 0 10px 0;
    width: 200px;
    border-radius: 100px;
  }

  h2 {
    font-family: 'Road Rage', sans-serif;
    color: #fff;
    font-size: 45px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  padding-bottom: 30px;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
