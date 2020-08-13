import React, {
  // useCallback,
  useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Container, AnimationContainer } from './styles';
// import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  // const history = useHistory();

  // const handleDashboard = useCallback(() => {
  //   history.push('/dashboard');
  // }, [history]);

  return (
    <Container>
      <AnimationContainer>
        <h1>PERMISSION</h1>

        <Form ref={formRef} onSubmit={() => {}}>
          <Input name="username" placeholderText="Username" />
          <Input name="password" type="password" placeholderText="Senha" />

          <Button type="submit">Entrar</Button>
        </Form>
      </AnimationContainer>
    </Container>
  )
}

export default SignIn;
