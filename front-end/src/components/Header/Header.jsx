import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

// CSS
import styles from '../Header/Header.module.css';

const Header = ({ logo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Navbar bg='light' expand='lg'>
      <Container id='nav'>
        <Navbar.Brand onClick={() => scrollToElement('home')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="Pró-Vida Cirúrgica" width={150} />
        </Navbar.Brand>
        <Navbar.Toggle 
          onClick={toggleMenu} 
        />
        <Navbar.Collapse in={menuOpen}>
          <Nav className='ms-auto' style={{ fontFamily: "Maven Pro", fontWeight: 500 }}>
            <Nav.Link
              onClick={() => scrollToElement('home')} 
              className={`me-3 ${styles.active_link}`}
            >
              Ínicio
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToElement('cpap')} 
              className={`me-3 ${styles.active_link}`}
            >
              CPAP
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToElement('apneia-do-sono')} 
              className={`me-3 ${styles.active_link}`}
            >
              Apneia do Sono
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToElement('faq')} 
              className={`me-3 ${styles.active_link}`}
            >
              FAQ
            </Nav.Link>
            <Button 
              variant='outline-success' 
              onClick={() => scrollToElement('contato')} 
              style={{ cursor: 'pointer', fontWeight: 500 }}
              className={`ms-auto ${styles.btn_style}`}
            >
              <a target='_blank' href="https://wa.me/message/K7V37SCXJ72KG1">Entrar em Contato</a>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
