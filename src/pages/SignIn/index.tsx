import React, { useCallback } from 'react';

import { Container, FormContainer } from './styles';
import { useHistory } from 'react-router-dom';

const SignIn: React.FC = () => {
    const history = useHistory();

    const handleDashboard = useCallback(() => {
      history.push('/dashboard');
    }, [history]);

    return (
      <Container>
        <FormContainer>
          <strong>ACCESS</strong>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />

          {/* <FaUser color="#5499" size={20} />
          <FaKey color="#5499" size={20} /> */}
          <button type="button" onClick={handleDashboard}>
            Login
          </button>
        </FormContainer>
      </Container>
    )
}

export default SignIn;
