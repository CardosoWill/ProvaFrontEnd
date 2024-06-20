import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function Pagina() {
  const [dadosFetch, setDadosFetch] = useState(null);
  const [erroFetch, setErroFetch] = useState(null);
  const [dadosAxios, setDadosAxios] = useState(null);
  const [erroAxios, setErroAxios] = useState(null);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then(data => setDadosFetch(data))
      .catch(error => setErroFetch(error));
  }, []);

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search')
      .then(response => setDadosAxios(response.data))
      .catch(error => setErroAxios(error));
  }, []);

  if (erroFetch || erroAxios) {
    return <div style={erroStyle}>Erro: {erroFetch ? erroFetch.message : erroAxios.message}</div>;
  }

  if (!dadosFetch || !dadosAxios) {
    return <div style={loadingStyle}>Carregando...</div>;
  }

  return (
    <div style={containerStyle}>
      <section id="esportes">
        <h2 style={tituloStyle}>Esportes</h2>
        <div style={esportStyle}>
          <div style={menuItemStyle}>
            <Card style={cardStyle}>
              <Card.Img variant="top" src={dadosFetch[0].url} style={imageStyle} />
              <Card.Body>
                <Card.Text>Fetch funcionando</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div style={menuItemStyle}>
            <Card style={cardStyle}>
              <Card.Img variant="top" src={dadosAxios[0].url} style={imageStyle} />
              <Card.Body>
                <Card.Text>Axios funcionando</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>

      <section id="especialidades">
        <h2 style={tituloStyle}>Especialidades</h2>
        <div style={esportStyle}>
          <div style={especialidadeItemStyle}>
            <Card style={cardStyle}>
              <Card.Img variant="top" src={require("../img/muay thai.jpg")} style={imageStyle} />
              <Card.Body>
                <Card.Text>Muay Thai</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
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
  borderBottom: '2px solid #333',
  paddingBottom: '0.5rem',
  marginBottom: '1.5rem',
  textAlign: 'center',
  color: '#007bff',
  fontSize: '2rem'
};

const esportStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap'
};

const menuItemStyle = {
  width: '200px',
  margin: '1rem',
  textAlign: 'center'
};

const especialidadeItemStyle = {
  width: '200px',
  margin: '1rem',
  textAlign: 'center'
};

const cardStyle = {
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  overflow: 'hidden'
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px'
};

const erroStyle = {
  textAlign: 'center',
  color: 'red',
  fontSize: '1.2rem',
  marginTop: '20px'
};

const loadingStyle = {
  textAlign: 'center',
  fontSize: '1.2rem',
  marginTop: '20px'
};

export default Pagina;
