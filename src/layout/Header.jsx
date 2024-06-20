import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" style={navbarStyle}>
      <Container fluid>
        <Navbar.Brand style={brandStyle}>EA Sports</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={toggleStyle} />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ml-auto">
            <Nav.Link href="/pagina" style={linkStyle}>Início</Nav.Link>
            <Nav.Link href="/muaythai" style={linkStyle}>Muay Thai</Nav.Link>
            <Nav.Link href="/formulario" style={linkStyle}>Form</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const navbarStyle = {
  backgroundColor: 'blue',
  padding: '10px 20px',
};

const brandStyle = {
  color: '#f2f2f2',
  fontWeight: 'bold',
  fontSize: '24px',
};

const linkStyle = {
  color: '#f2f2f2',
  marginRight: '1.5rem',
  fontSize: '18px',
  textDecoration: 'none',
};

const toggleStyle = {
  borderColor: '#f2f2f2',
};

export default Header;
