import styled from 'styled-components';
import { darken } from 'polished';

export const HeaderContainer = styled.header`
  height: 78px;
  z-index: 2;
  position: absolute;
  background: #054f77;
  width: 100%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0px 70px;

  > h1 {
    font-size: 38px;
    padding-left: 10px;
    color: #fff;
    letter-spacing: 3px;
    font-family: 'Baloo Tamma 2', cursive;
  }
`;

export const Profile = styled.div`
  display: flex;
  padding: 2px 0;
  display: relative;
  justify-content: flex-end;

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-right: 15px;
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.3);
  }

  > span {
    margin-top: 5px;
    font-size: 14px;
    color: #fff;
  }
  width: 250px;
`;

export const BadgeAdmin = styled.div`
  position: absolute;
  font-size: 10px;
  padding: 2px 4px;
  border: 1px solid #fff;
  background: #fff;
  font-weight: bold;
  color: #054f77;
  border-radius: 8px;
  top: 0;
  margin-top: 47px;
  margin-right: 152px;
`;

export const LogoutContainer = styled.button`
  position: absolute;
  border: 0;
  outline: 0;
  background: transparent;
  color: #eee;
  font-size: 12px;
  display: flex;
  align-items: center;

  margin-top: 30px;
  font-weight: bold;

  transition: all 0.2s ease-in-out;

  > svg {
    margin-right: 4px;
  }

  &:hover {
    color: ${darken(0.1, '#eee')};
  }
`;
