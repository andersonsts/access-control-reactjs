import styled from 'styled-components';
import { FaTrash, FaEdit } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  border-radius: 20px;
  width: 350px;
  height: 500px;
  background: #fff;
  padding: 40px;
  width: 340px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  align-items: center;

  &:hover {
    > img {
      transform: scale(1.01);
    }
  }

  > strong {
    font-size: 24px;
    color: #555;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  > p {
    text-align: center;
    color: #555;
    font-size: 14px;
  }

  > img {
    width: 100%;
    height: 250px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    margin: 30px 0;

    transition: all 0.2s ease-in-out;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > button {
    outline: 0;
    display: flex;
    align-items: center;

    padding: 8px 16px;
    font-size: 16px;
    text-transform: uppercase;

    > svg {
      margin-right: 6px;
      margin-bottom: 2px;
    }

    &:nth-child(1) {
      background: white;
      color: #cb0000;
      border-radius: 6px;
      border: 0;

      transition: all 0.15s ease-in-out;

      &:hover {
        transform: translateX(4px);
      }
    }

    &:nth-child(2) {
      background: white;
      color: #054f77;
      border: 0;
      border-radius: 8px;

      transition: all 0.15s ease-in-out;

      &:hover {
        transform: translateX(4px);
      }
    }
  }
`;

export const TrashIcon = styled(FaTrash)`
  font-size: 16px;
`;

export const EditIcon = styled(FaEdit)`
  font-size: 16px;
`;
