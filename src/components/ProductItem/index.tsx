import React from 'react';

import { Container, Actions, TrashIcon, EditIcon } from './styles';

interface Props {
  imageUrl: string;
  title: string;
}

const ProductItem: React.FC<Props> = ({ imageUrl, title }) => {
  return (
    <Container>
      <strong>{title}</strong>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      <img src={imageUrl} alt="Image_do_product"/>
      <Actions>
        <button>
          <TrashIcon /> Deletar
        </button>
        <button>
          <EditIcon /> Editar
        </button>
      </Actions>
    </Container>
  )
}

export default ProductItem;
