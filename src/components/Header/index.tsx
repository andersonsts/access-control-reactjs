import React, { useCallback } from 'react';
import { FiLogOut } from 'react-icons/fi';

import { HeaderContainer, Profile, BadgeAdmin, LogoutContainer } from './styles';
import { useHistory } from 'react-router-dom';

const Header: React.FC = () => {
  const history = useHistory();

  const handleNavigateToPageSign = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <HeaderContainer>
      <h1>ACCESS</h1>

      <Profile>
        <img src="https://vignette.wikia.nocookie.net/harrypotter/images/2/20/Albus_Dumbledore.JPG/revision/latest/scale-to-width-down/340?cb=20130113191343&path-prefix=pt-br" alt="O brabo"/>
        <span>Alvo Dumbledore</span>

        <BadgeAdmin>
          ADMIN
        </BadgeAdmin>

        <LogoutContainer onClick={handleNavigateToPageSign}>
          <FiLogOut size={14} />
          SAIR
        </LogoutContainer>
      </Profile>
    </HeaderContainer>
  )
}

export default Header;
