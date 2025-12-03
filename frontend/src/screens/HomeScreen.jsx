import React from 'react';
import { Container, Row, Col} from 'react-bootstrap'
import Brand from '../components/Brand'
import Value from '../components/Value'
import Product from '../components/Product'
import products from '../products'
import About from '../components/About';

function HomeScreen() {
  return (
    <Container className="py-5">
    <Brand/>
    <About/>
    <Row>
        {products.map(product => (
            <Col key={product._id} sm={12} md={4}>
                <Product product={product} />
            </Col>
        ))}
    </Row>
      <br/>
      <br/>
      <br/>
      <br/>
      <Value/>
    </Container>
  );
}

export default HomeScreen;