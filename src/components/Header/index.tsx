import React from 'react';
import { FiLogOut } from 'react-icons/fi';

import { HeaderContainer, Profile, BadgeAdmin, LogoutContainer } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <h1>ACCESS</h1>

      <Profile>
        <img src="https://vignette.wikia.nocookie.net/harrypotter/images/2/20/Albus_Dumbledore.JPG/revision/latest/scale-to-width-down/340?cb=20130113191343&path-prefix=pt-br" alt="O brabo"/>
        <span>Alvo Dumbledore</span>

        <BadgeAdmin>
          ADMIN
        </BadgeAdmin>

        <LogoutContainer>
          <FiLogOut size={14} />
          SAIR
        </LogoutContainer>
      </Profile>
    </HeaderContainer>
  )
}

export default Header;
