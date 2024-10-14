import styled from 'styled-components';

import BackgroundLogin from '../../assets/background-login.svg';
import Background from '../../assets/background.svg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  background: url('${BackgroundLogin}');
  background-size: cover;
  background-position: center;

  height: 100%;
  width: 100%;
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
  }

  @media (max-width: 720px) {
    max-width: 100%;
    max-height: 40%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  max-width: 50%;

  background: url('${Background}');
  background-color: #1e1e1e;

  p {
    color: #fff;
    font-size: 18px;
    font-weight: 600;

    a {
      text-decoration: underline;
    }
  }

  @media (max-width: 720px) {
    max-width: 100%;
  }
`;

export const Title = styled.h2`
  font-family: 'Road Rage', sans-serif;
  font-size: 40px;
  color: #fff;

  span {
    color: darkorange;
    font-family: 'Road Rage', sans-serif;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: ${(props) => (props.error ? '10px solid #cf3057' : 'none')};
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;

    @media (max-width: 720px) {
      height: 45px;
    }
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: #fff;

    @media (max-width: 720px) {
      font-size: 15px;
    }
  }

  p {
    font-size: 14px;
    line-height: 80%;
    color: #cf3057;
    font-weight: 600;
    height: 10px;
  }
`;
