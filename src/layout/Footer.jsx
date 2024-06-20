import React from "react";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h5>Nome</h5>
            <p>Academia Xtreme Fight Joinville</p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5>Redes Sociais</h5>
            <ul className="list-unstyled" >
            <li> <a href="https://www.instagram.com/academiaxtremefight/" style={linkStyle}><FaInstagram/> @academiaxtremefight</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5>Contato</h5>
            <ul className="list-unstyled">
              <li>Telefone: (47) 9 9614-3383</li>
              <li>Endereço: R. Jarivatuba, 1267 - Jarivatuba, Joinville - SC, 89230-870, Brasil</li>
              <div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}


const footerStyle = {
  backgroundColor: 'blue',
  color: '#fff',
  padding: '2rem 0',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  marginBottom: '0.5rem',
  display: 'block',
};


export default Footer;
