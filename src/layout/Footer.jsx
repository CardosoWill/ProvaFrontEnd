import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h5>Infos</h5>
            <p>Cantina: 7h às 13h30 - 14h às 16h30 - 17h às 21h</p>
            <p>Restaurante: 11h30 às 13h30</p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5>Links</h5>
            <ul className="list-unstyled" >
              <li><a href="#!" style={linkStyle}>Link</a></li>
              <li><a href="#!" style={linkStyle}>Link</a></li>
              <li><a href="#!" style={linkStyle}>Link</a></li>
              <li><a href="#!" style={linkStyle}>Link</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5>Contato</h5>
            <ul className="list-unstyled">
              <li>Email: Osguridochatgpt@gmail.com</li>
              <li>Telefone: (47) 4002-8922</li>
              <li>Endereço: Rua Dos Curiosos, 666</li>
              <div>
                <FaInstagram/>
                <FaFacebook/>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}


const footerStyle = {
  backgroundColor: '#ff4500',
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
