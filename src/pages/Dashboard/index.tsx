import React from 'react';

import Header from '../../components/Header';
import ProductItem from '../../components/ProductItem';

import { Container, Content, Title, ProductList } from './styles';
import { FaList } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <Title>
          <FaList /> PRODUTOS
        </Title>

        <ProductList>
          <ProductItem
            title="Capa da invisibilidade"
            imageUrl="https://www.shutupandtakemymoney.com/wp-content/uploads/2012/11/Invisibility-Cloak.jpg"
          />

          <ProductItem
            title="Mapa do Maroto"
            imageUrl="https://vignette.wikia.nocookie.net/harrypotter/images/4/4c/Marauders-Map-Prop-Replica-Mapa-Maroto-01.jpg/revision/latest?cb=20150115181627&path-prefix=pt-br"
          />

          <ProductItem
            title="Diario de Tom Riddle"
            imageUrl="https://ekameco.com/wp-content/uploads/2019/03/product-placeholder-300x300.jpg"
          />

          <ProductItem
            title="Pombo de ouro"
            imageUrl="https://cdn.awsli.com.br/600x700/1158/1158330/produto/43727957/12f120e64f.jpg"
          />


          <ProductItem
            title="Diario de Tom Riddle"
            imageUrl="https://lh3.googleusercontent.com/proxy/YTljdaqj_eLnH12Fum6AcoHa73Bm8qyOGihrDu0MzBy4XksvS1Tq5efezsm6JUIPYo8JaKzjAHOSKMAjYou3dPdlk_GF1wYq7LRfgwhd8gwZbxNRcw4VM7x8EWWS6Zv2df94Hxy3pA"
          />

          <ProductItem
            title="Pombo de ouro"
            imageUrl="https://cdn.awsli.com.br/600x700/1158/1158330/produto/43727957/12f120e64f.jpg"
          />
        </ProductList>
      </Content>
    </Container>
  )
}

export default Dashboard;
