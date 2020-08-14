import React, { ButtonHTMLAttributes, useEffect, useState } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import Loader from 'react-loader-spinner';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
  const [l, setL] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setL(false);
    }, 3000)
  })

  return (
  <Container type="button" {...rest}>
    {l ? (
      <Loader
        type="Oval"
        color="#fff"
        height={16}
        width={16}
        // timeout={2000} //3 secs
      />
    ) : children}
  </Container>
)}

export default Button;
