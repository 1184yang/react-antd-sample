import React from 'react';
import { useParams }  from 'react-router-dom'
import Container from '../components/Container';

const Product = () => {
  let { id } = useParams();
  return (
    <Container>
      <h1>Hello [Product] {id} </h1>
    </Container>
  );
}

export default Product;