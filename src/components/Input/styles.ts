import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: green;

  input {
    color: #888;
    width: 100%;
    border: 0;
    outline: 0;
    padding: 8px 12px;
    font-size: 18px;
    border-bottom: 2px solid rgba(42, 23, 233, 0.3);
    transition: all 0.2s;

    &:focus {
      border-bottom: 2px solid #054f88;
    }
  }

  & + div {
    margin-top: 30px;
  }
`;
