import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <footer>
        <Container>
          <Row>
            <Col className='text-center py-3'>Visit us @ Jenra Grand Mall Angeles </Col>
            <Col className='text-center py-3'>Visit our Facebook page @ https://www.facebook.com/imangojenra </Col>
            <Col className='text-center py-3'>Copyright &copy; iMango</Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer