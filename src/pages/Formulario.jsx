import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

function Formulario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [esporte, setEsporte] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Esporte:', esporte);
  };

  return (
    <Container style={containerStyle}>
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Title style={cardTitleStyle}>Cadastro de Esportes</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formNome" style={formGroupStyle}>
              <Form.Label column sm={3} style={formLabelStyle}>Nome</Form.Label>
              <Col sm={9}>
                <Form.Control 
                  type="text" 
                  placeholder="Digite seu nome" 
                  value={nome}
                  onChange={(e) => setNome(e.target.value)} 
                  required 
                  style={formControlStyle}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formEmail" style={formGroupStyle}>
              <Form.Label column sm={3} style={formLabelStyle}>Email</Form.Label>
              <Col sm={9}>
                <Form.Control 
                  type="email" 
                  placeholder="Digite seu email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                  style={formControlStyle}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formEsporte" style={formGroupStyle}>
              <Form.Label column sm={3} style={formLabelStyle}>Esporte</Form.Label>
              <Col sm={9}>
                <Form.Control 
                  type="text" 
                  placeholder="Digite seu esporte favorito" 
                  value={esporte}
                  onChange={(e) => setEsporte(e.target.value)} 
                  required 
                  style={formControlStyle}
                />
              </Col>
            </Form.Group>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Button variant="primary" type="submit" style={buttonStyle}>Enviar</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

const containerStyle = {
  maxWidth: '600px',
  marginTop: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#f8f9fa'
};

const cardStyle = {
  width: '100%',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  backgroundColor: '#ffffff'
};

const cardTitleStyle = {
  textAlign: 'center',
  marginBottom: '30px',
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#007bff'
};

const formGroupStyle = {
  marginBottom: '15px'
};

const formLabelStyle = {
  fontWeight: 'bold',
  color: '#333'
};

const formControlStyle = {
  borderRadius: '5px'
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px'
};

export default Formulario;
