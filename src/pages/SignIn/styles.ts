import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  background-image: linear-gradient(-120deg, #054f77, #021490);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  background: #ffe;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;

  width: min(100vw, 400px);
  padding: 40px 25px;

  border-radius: 10px;

  > strong {
    font-size: 42px;
    margin-bottom: 30px;
    font-family: 'Baloo Tamma 2', cursive;
    letter-spacing: 3px;

    color: #054f75;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  > input {
    margin: 15px 0px;
    width: 100%;
    border: 0;
    outline: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    padding: 10px 10px;
    font-size: 18px;

    transition: border-bottom 0.24s ease-in-out;

    &::placeholder {
      color: #666;
    }

    color: #444;

    &:focus {
      border-bottom: 2px solid #000090;
    }
  }

  > button {
    border: 0;
    outline: 0;
    background: #054f75;
    width: 100%;
    padding: 10px;
    color: #fff;
    border-radius: 5px;
    margin-top: 24px;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;

    transition: background 0.25s ease-in-out;

    &:hover {
      background: ${darken(0.02, '#054f75')};
    }
  }
`;
