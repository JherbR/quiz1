import React, { useEffect, useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap'
import Brand from '../components/Brand'
import Value from '../components/Value'
import Product from '../components/Product'
import About from '../components/About';
import axios from 'axios'

function HomeScreen() {
  const [products, setProducts] = useState([])

  useEffect(() =>{
    async function fetchProducts() {
      const {data} = await axios.get('http://127.0.0.1:8000/api/products/')
      setProducts(data)
    }
    fetchProducts()
  },[])

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