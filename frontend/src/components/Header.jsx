import React from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Header() {
return(
    <header>
      <Navbar expand="lg" bg="primary" variant='dark' collapseOnSelect>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Navbar.Brand>iMango</Navbar.Brand>
            <Nav.Link as={Link} to="/"><i className='fas fa-home'></i>Home</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
);
}

export default Header