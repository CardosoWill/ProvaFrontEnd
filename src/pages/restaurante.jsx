import React from 'react';
import Card from 'react-bootstrap/card';



function Restaurante() {
  return (
    <div style={containerStyle}>

      <section id="cardapio">
        <h2 style={TituloStyle}>Cardápio</h2>
        <div style={cardapioStyle}>
          <div style={menuItemStyle}>
            <Card>
              <Card.Img variant="top" src={require("../img/cardapio-ia.jpg")}
                style={{ Width: 100 }}
              />
            </Card>
            <p></p>

            <p></p>
          </div>
        </div>
      </section>


      <section id="chefs">
        <h2 style={TituloStyle}>Chefs</h2>
        <div style={chefsStyle}>
          <div style={chefstyle}>
            <Card>
              <Card.Img variant="top" src={require("../img/chef.png")}
                style={{ Width: 100 }}
              />
            </Card>
            <p></p>
            <b>Chef Josepi - Especialista em Camarão Careca</b>
          </div>
          <div style={chefstyle}>
            <Card>
              <Card.Img variant="top" src={require("../img/chef2.png")}
                style={{ Width: 100 }}
              />

            </Card>
            <p></p>
            <b>Chef Willye - Especialista em Macarrão à Alho e Porrada </b>
          </div>
          <div style={chefstyle}>
            <Card>
              <Card.Img variant="top" src={require("../img/chef3.png")}
                style={{ Width: 100 }}
              />
            </Card>
            <p></p>
            <b>Chef Fabitcho - Especialista em ervas</b>
          </div>
          <div style={chefstyle}>

            <Card>
              <Card.Img variant="top" src={require("../img/chef4.png")}
                style={{ Width: 100 }}
              />
            </Card>
            <p></p>
            <b>Chef Bomba - Especialista em Frango</b>
          </div>
        </div>
      </section>

      <section id="especialidades">
        <h2 style={TituloStyle}>Especialidades</h2>
        <div style={especialidadesStyle}>
          <div style={especialidadeItemStyle}>
            <Card>
              <Card.Img variant="top" src={require("../img/camarao-careca.jpg")}
                style={{ Width: 100 }}
              />
            </Card>
            <p></p>
            <p>Especialidade 1 - Camarão Careca</p>
          </div>
          <div style={especialidadeItemStyle}>
            <Card>
              <Card.Img variant="top" src={require("../img/macarrao.jpg")}
                style={{ Width: 100 }}
              />
            </Card>
            <p></p>
            <p>Especialidade 2 - Macarrão à Alho e Porrada</p>
          </div>
          <div style={especialidadeItemStyle}>
            <Card>
              <Card.Img variant="top" src={require("../img/cannabis.jpg")}
                style={{ Width: 100 }}
              />
            </Card>
            <p></p>
            <p>Especialidade 3 - Camarão com Ervas👀</p>
          </div>
          <div style={especialidadeItemStyle}>
            <Card>
              <Card.Img variant="top" src={require("../img/frango.jpg")}
                style={{ Width: 300 }}
              />
            </Card>
            <p></p>
            <p>Especialidade 4 - Frango</p>
          </div>
        </div>
      </section>


    </div>
  );
}


const containerStyle = {
  fontFamily: 'Arial, sans-serif'
};

const TituloStyle = {
  borderBottom: '2px solid #333',
  paddingBottom: '0.5rem',
  marginBottom: '1.5rem'
};

const cardapioStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap'
};

const menuItemStyle = {
  width: '300px',
  margin: '1rem',
  textAlign: 'center'
};

const chefsStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
};

const chefstyle = {
  width: '300px',
  margin: '1rem',
  textAlign: 'center'
};

const especialidadesStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap'
};

const especialidadeItemStyle = {
  width: '300px',
  margin: '1rem',
  textAlign: 'center'
};


export default Restaurante;
