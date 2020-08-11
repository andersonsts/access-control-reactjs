import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  background: #eee;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  width: 100%;
  height: 100%;
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
  display: flex;
  padding: 0px 20px;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  & > div + div {
    margin-left: 20px;
  }
`;

