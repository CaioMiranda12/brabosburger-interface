import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-top {
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tax delivery-tax-price';

    .title {
      grid-area: title;
      margin-bottom: 20px;
    }

    .items {
      grid-area: items;
    }

    .items-price {
      grid-area: items-price;
      text-align: right;
    }

    .delivery-tax {
      grid-area: delivery-tax;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
      text-align: right;
    }

    @media (max-width: 1080px) {
      width: 100%;
    }
  }

  .container-bottom {
    margin-top: 50px;

    display: flex;
    justify-content: space-between;

    .total-price {
      font-weight: bold;
    }
  }
`;
