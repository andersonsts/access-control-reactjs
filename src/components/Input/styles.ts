import styled, { css } from 'styled-components';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
  isErrored?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  position: relative;
  background: transparent;
  height: 50px;
  overflow: hidden;

  label {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

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

    > svg {
      position: absolute;
      right: 4px;
      bottom: 7px;
      color: rgba(0, 0, 0, 0.2);
      transition: all 0.2s ease-in-out;

      ${props => (props.isFocused || props.isFilled) && css`
        transform: translateX(-10%);
        color: #054f77;
      `};
    }

    span {
      position: absolute;
      bottom: 4px;
      left: 0px;
      transition: all 0.3s ease;
      color: #555;
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
    padding-right: 30px;
    padding-bottom: 4px;
    font-size: 18px;
    transition: all 0.2s;
    background: transparent;
  }

  & + div {
    margin-top: 30px;
  }
`;
