import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  background: #eee;

  padding-bottom: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  width: 100%;
`;

export const Title = styled.strong`
  font-size: 28px;
  margin-left: 80px;
  margin-bottom: 30px;
  text-transform: uppercase;
  display: flex;
  width: 230px;
  padding-bottom: 5px;
  align-items: center;
  color: #054784;

  border-bottom: 1px solid rgba(50, 34, 123, 0.4);

  > svg {
    margin-right: 10px;
  }
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 10px;
  row-gap: 40px;
  justify-items: center;

  @media(min-width: 700px) { /** min-width: 700px -> Acima de 700px, faça... | max-width: 700px -> Abaixo de 700px, faça... */
    grid-template-columns: repeat(2, 1fr);
  }

  @media(min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media(min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }

  width: 100%;
`;

