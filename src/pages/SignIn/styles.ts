import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background-image: linear-gradient(-120deg, #054170, #000);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  animation: ${appearFromLeft} 1s;

  width: 430px;
  max-width: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px 30px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

  > h1 {
    color: #054f77;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 20px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
