import React from 'react'
import { Row, Col, Card} from 'react-bootstrap'

function Value() {
  return (
    <div> 
      <h2 className="text-center mb-4 text-primary">Why Choose Our Shakes?</h2>
      <Row className="g-4 text-center">
        
        <Col sm={12} md={4}>
          <Card className="border-dark">
            <Card.Body>
              <i className="fas fa-lemon display-4 text-success mb-3"></i>
              <Card.Title as="h4"><strong>Fresh</strong></Card.Title>
              <Card.Text>
                We use only the ripest, in-season mangoes, ensuring every sip is packed with flavor.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={4}>
          <Card className="border-dark">
            <Card.Body>
              <i className="fas fa-clock display-4 text-info mb-3"></i>
              <Card.Title as="h4"><strong>Fast</strong></Card.Title>
              <Card.Text>
                Quick service guaranteed. Get your shake and get back to your day with a smile.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={4}>
          <Card className="border-dark">
            <Card.Body>
              <i className="fas fa-star display-4 text-warning mb-3"></i>
              <Card.Title as="h4"><strong>Tasty</strong></Card.Title>
              <Card.Text>
                Our unique blending technique creates a smooth, creamy texture that sets us apart.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Value