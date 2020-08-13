import styled, { css } from 'styled-components';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
  isErrored?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  position: relative;
  background: green;
  height: 50px;
  overflow: hidden;

  label {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid black;

    &::after {
      content: "";
      position: absolute;
      left: 0px;
      bottom: -1px;
      height: 100%;
      width: 100%;
      border-bottom: 1px solid #054f77;
      transform: translateX(-100%);
      transition: all 0.4s ease;

      ${props => (props.isFocused || props.isFilled) && css`
        transform: translateX(0%);
      `};
    }

    span {
      position: absolute;
      bottom: 4px;
      left: 0px;
      transition: all 0.3s ease;
      color: #666;
      font-size: 18px;

      ${props => (props.isFocused || props.isFilled) && css`
        transform: translateY(-150%);
        font-size: 16px;
        color: #054f77;
      `};
    }
  }

  input {
    color: #888;
    width: 100%;
    height: 100%;
    border: 0;
    outline: 0;
    padding-top: 20px;
    padding-bottom: 4px;
    font-size: 18px;
    transition: all 0.2s;
  }

  & + div {
    margin-top: 30px;
  }
`;
