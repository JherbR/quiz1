import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Product({product}) {
  return (
    <Card className='my-3 p-3 rounded'>
        <Card.Img src={product.image}/>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="h2">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

      <Card.Text as="h3">
          <strong>₱{product.price}</strong>
      </Card.Text>

      </Card.Body>
    </Card>
  )
}

export default Product