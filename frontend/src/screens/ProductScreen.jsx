import React from 'react'
import products from '../products';
import { Container, Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import { Link, useParams} from 'react-router-dom'

function ProductScreen() {

const { id } = useParams();
const product = products.find((p) => p._id === id);

  return (
    <Container className="py-5">
      <Link to="/" className="btn btn-light my-3 border border-2 border-dark">
        <i className='fas fa-arrow-left'></i> Go Back
      </Link>

      <Row>
        <Col md={6} className="mb-4 mb-md-0">
          <Card className="rounded-3 shadow-lg border border-2 border-dark h-100">
            <Card.Img 
              src={product.image} 
              alt={product.name} 
              variant="top" 
              className="rounded-t-3"
            />
            
            <Card.Body>
              <Card.Title as="h2" className="text-primary">{product.name}</Card.Title>
              <Card.Text as="h3" className="mt-3">
                Price: <strong className="text-success">${product.price.toFixed(2)}</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <ListGroup variant="flush" className="border border-2 border-dark rounded-3 shadow-sm mb-4">
            
            <ListGroup.Item>
              <h5 className='text-secondary'>Description</h5>
              <p>{product.description}</p>
            </ListGroup.Item>
            
          </ListGroup>

          <Card className='shadow-lg border border-2 border-dark'>
            <ListGroup.Item className="d-grid p-3">
              <Button 
                variant="warning" 
                className="fw-bold shadow-sm"
                type="button"
              >
                Order
              </Button>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductScreen