import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import Container from '../components/Container';

const Products = () => {
  const { url } = useRouteMatch();
  
  return (
    <Container>
      <h1>Hello [Products] Page</h1>
      <ul>
        <li>
          <Link to={`${url}/12345`}>Product 12345</Link>
        </li>
        <li>
          <Link to={`${url}/24680`}>Product 24680</Link>
        </li>
        <li>
          <Link to={`${url}/13579`}>Product 13579</Link>
        </li>
      </ul>
    </Container>
  );
}

export default Products;