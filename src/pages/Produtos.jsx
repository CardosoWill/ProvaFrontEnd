import React from 'react';
import Card from 'react-bootstrap/Card';

function Produtos() {
  return (
    <div style={containerStyle}>
      <h2 style={tituloStyle}>Menu Detalhado</h2>
      <div style={menuStyle}>
        <div style={menuItemStyle}>
          <Card>
            <Card.Img variant="top" src={require("../img/camarao-careca.jpg")} style={imgStyle} />
            <Card.Body>
              <Card.Title>Produto 1</Card.Title>
              <Card.Text>
                Descrição do Produto 1.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div style={menuItemStyle}>
          <Card>
            <Card.Img variant="top" src={require("../img/camarao-careca.jpg")} style={imgStyle} />
            <Card.Body>
              <Card.Title>Produto 2</Card.Title>
              <Card.Text>
                Descrição do Produto 2.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div style={menuItemStyle}>
          <Card>
            <Card.Img variant="top" src={require("../img/camarao-careca.jpg")} style={imgStyle} />
            <Card.Body>
              <Card.Title>Produto 3</Card.Title>
              <Card.Text>
                Descrição do Produto 3.
              </Card.Text>
            </Card.Body>
          </Card>
          
        </div>

      </div>
    </div>
  );
}

const containerStyle = {
  fontFamily: 'Arial, sans-serif',
};

const tituloStyle = {
  borderBottom: '2px solid #333',
  paddingBottom: '0.5rem',
  marginBottom: '1.5rem',
  textAlign: 'center',
};

const menuStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
};

const menuItemStyle = {
  width: '300px',
  margin: '1rem',
  textAlign: 'center',
};

const imgStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover'
};

export default Produtos;
