import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button`
    background: #054f77;
    width: 100%;
    border-radius: 8px;
    padding: 15px 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 35px;

    border: 0;
    outline: 0;

    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;

    transition: all 0.2s;

    &:hover {
      background: ${darken(0.02, '#054f77')};
    }
`;
