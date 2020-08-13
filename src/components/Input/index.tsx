import React, { InputHTMLAttributes, useRef, useEffect } from 'react';

import { Container } from './styles';
import { IconBaseProps } from 'react-icons/lib';
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: object;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  name,
  containerStyle = {},
  icon: Icon,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName,
    // defaultValue,
    // error,
    registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container style={containerStyle}>
      {Icon && <Icon size={20} />}
      <input
        ref={inputRef}
        {...rest}
      />
    </Container>
  )
}

export default Input;
