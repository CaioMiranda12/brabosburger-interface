import { Link } from 'react-router-dom';
import styled from 'styled-components';

import background from '../../assets/fundo.png';

export const Container = styled.div`
  background-image: url(${background});

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    border: none;
    color: #9758a6;
    background: none;
    box-shadow: none;
    font-size: 45px;
    font-weight: bold;
  }

  .rec.rec-arrow:hover {
    opacity: 0.8;
  }

  .rec.rec-arrow:disabled {
    color: #bebebf;
  }
`;

export const CategoryTitle = styled.h2`
  width: 100%;
  text-align: center;
  color: #9758a6;
  font-weight: bold;
  font-size: 35px;
`;

export const ContainerItems = styled.div`
  width: 300px;
  height: 250px;

  background: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: end;
  padding: 40px 25px;
  border-radius: 10px;
`;

export const Button = styled(Link)`
  height: 40px;
  padding: 0 15px;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  background: #00000075;
  color: #fff;
  font-weight: 700;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;
