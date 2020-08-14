import React, {
  // useCallback,
  useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Container, Content, AnimationContainer, Background, ContentDescription } from './styles';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FaKey, FaUser, FaSignInAlt } from 'react-icons/fa';

interface SignInFormData {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback((data: SignInFormData) => {
    console.log(data);
    history.push('/dashboard');
  }, [history]);

  return (
    <Container>
      <Background>
        <ContentDescription>
          <h1>Permission Access</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae eos minima, eaque sed delectus laboriosam ab eius, saepe dolor, ea assumenda temporibus tenetur doloremque et magnam! Error molestias porro distinctio!</p>
        </ContentDescription>
        </Background>

      <Content>
      <AnimationContainer>
        <h1>
          PERMISSION
        </h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="username" icon={FaUser} placeholderText="Username" />
          <Input name="password" type="password" icon={FaKey} placeholderText="Senha" />

          <Button type="submit">
            <FaSignInAlt /> Entrar
          </Button>
        </Form>
      </AnimationContainer>
      </Content>
    </Container>
  )
}

export default SignIn;
