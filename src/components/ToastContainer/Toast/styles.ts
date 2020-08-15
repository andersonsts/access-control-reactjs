import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  has_description?: number;
}

const toastTypeVariations = {
  info: css`
    color: #eee;
    background: #3181b7;
  `,
  success: css`
    color: #eee;
    background: #292c;
  `,
  error: css`
    color: #eee;
    background: #c53030;
  `
}

export const Container = styled(animated.div)<ContainerProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 4px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  & + div {
    margin-top: 10px;
  }

  ${(props) => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 0px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 14px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit; /** Pega a color que esta sendo usada no container */
  }

  ${(props) =>
    !props.has_description &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
`;
