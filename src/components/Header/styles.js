import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  background-color: #1f1f1f;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LeftContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const PageLink = styled.a`
  color: ${(props) => (props.isActive ? 'darkorange' : '#fff')};
  text-decoration: none;
  font-size: 14px;
  line-height: 11.3px;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ContainerText = styled.div`
  p {
    color: #fff;

    span {
      color: darkorange;
      font-weight: bold;
    }

    @media (max-width: 1000px) {
      font-size: 12px;
    }
  }
`;

export const Line = styled.div`
  height: 25px;
  border: 0.5px solid #625e5e;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const LogoutLink = styled.a`
  color: #9e1c00;
  font-weight: bold;
`;
