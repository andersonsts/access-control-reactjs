import styled, { keyframes } from 'styled-components';

import backgroundImg from '../../assets/background.jpg';

export const Container = styled.div`
  height: 100%;
  background-image: linear-gradient(-120deg, #054170, #000);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 750px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  animation: ${appearFromLeft} 1s;
  width: 400px;

  background: #fff;

  padding: 50px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

  > h1 {
    color: #054f77;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 20px;

    > svg {
      margin-right: 5px;
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Background = styled.div`
  flex: 1;
  height: 100%;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  display: none;

  @media(min-width: 800px) {
    display: block;
  }
`;

export const ContentDescription = styled.div`
  margin: 70px 20px 0px;

  > h1 {
    color: #054f77;
    font-size: 52px;
  }

  > p {
    margin-top: 12px;
    font-size: 16px;
    color: #777;
    display: none;

    @media(min-width: 1250px) {
      display: block;
    }
  }
`;
