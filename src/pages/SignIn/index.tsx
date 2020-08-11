import React from 'react';
// import { FaUser, FaKey } from 'react-icons/fa';

import { Container, FormContainer } from './styles';

const SignIn: React.FC = () => {
    return (
      <Container>
        <FormContainer>
          <strong>ACCESS</strong>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />

          {/* <FaUser color="#5499" size={20} />
          <FaKey color="#5499" size={20} /> */}
          <button>
            Login
          </button>
        </FormContainer>
      </Container>
    )
}

export default SignIn;
