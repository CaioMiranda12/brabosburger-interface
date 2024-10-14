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

export const OfferTitle = styled.h2`
  width: 100%;
  text-align: center;
  color: #61a120;
  font-weight: bold;
  font-size: 35px;
`;
