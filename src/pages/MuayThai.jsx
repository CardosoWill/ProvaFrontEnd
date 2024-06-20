import React from 'react';
import Card from 'react-bootstrap/Card';

function MuayThai() {
  return (
    <div style={containerStyle}>
      <h2 style={tituloStyle}>O que é o Muay Thai?</h2>
      <div style={menuStyle}>
        <div style={menuItemStyle}>
          <Card style={cardStyle}>
            <Card.Img variant="top" src={require("../img/ring.jpg")} style={imgStyle} />
            <Card.Body>
              <Card.Text style={cardTextStyle}>
                Nak Muay
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div style={menuItemStyle}>
          <Card style={cardStyle}>
            <Card.Img variant="top" src={require("../img/kru.jpg")} style={imgStyle} />
            <Card.Body>
              <Card.Text style={cardTextStyle}>
                Kru
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div style={menuItemStyle}>
          <Card style={cardStyle}>
            <Card.Img variant="top" src={require("../img/arjan.jpg")} style={imgStyle} />
            <Card.Body>
              <Card.Text style={cardTextStyle}>
                Arjan
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div style={textoStyle}>
        <h3 style={subTituloStyle}>A Arte das Oito Armas</h3>
        <p>
          O Muay Thai, também conhecido como a "Arte das Oito Armas", é uma arte marcial tailandesa que
           utiliza uma combinação de punhos, cotovelos, joelhos e canelas. É uma forma de combate que se
            desenvolveu ao longo dos séculos na Tailândia, e é reconhecida por sua eficiência e poder.
        </p>
        <p>
          Os praticantes de Muay Thai, conhecidos como "Nak Muay", passam anos aperfeiçoando suas 
          técnicas de golpe, defesa e movimento. A disciplina e a dedicação necessárias para dominar 
          o Muay Thai fazem dele não apenas uma forma de autodefesa, mas também um caminho para a
           melhoria pessoal e física.
        </p>
        <p>
          Existem diferentes níveis de professores e mestres no Muay Thai. "Kru" é um título 
          para instrutores que têm muitos anos de prática e experiência, enquanto "Arjan" é um 
          título para mestres que dedicaram suas vidas ao estudo e ensino do Muay Thai.
        </p>
      </div>
    </div>
  );
}

const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
  backgroundColor: '#f8f9fa',
  minHeight: '100vh'
};

const tituloStyle = {
  borderBottom: '2px solid #007bff',
  paddingBottom: '0.5rem',
  marginBottom: '1.5rem',
  textAlign: 'center',
  color: '#007bff',
  fontSize: '2rem'
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

const cardStyle = {
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  overflow: 'hidden'
};

const imgStyle = {
  width: '100%',
  height: 'auto',
  maxHeight: '200px',
  objectFit: 'contain', 
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px'
};

const cardTextStyle = {
  color: '#007bff',
  fontWeight: 'bold',
  textAlign: 'center'
};

const textoStyle = {
  marginTop: '2rem',
  textAlign: 'justify',
  lineHeight: '1.6',
  maxWidth: '800px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
};

const subTituloStyle = {
  textAlign: 'center',
  marginBottom: '1rem',
  color: '#007bff',
  fontSize: '1.5rem'
};

export default MuayThai;
