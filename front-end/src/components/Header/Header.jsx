import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

// CSS
import styles from '../Header/Header.module.css'

const Header = ({ logo }) => {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar bg='light'>
      <Container>
        <Navbar.Brand onClick={() => scrollToElement('home')} style={{ cursor: 'pointer' }}>
          <img 
            src={logo} 
            alt="Pró-Vida Cirúrgica" 
            width={150}
          />
        </Navbar.Brand>
        <Nav 
          className='ms-auto' 
          style={{
            fontFamily: "Maven Pro",
            fontWeight: 500
          }}
            >
          <Nav.Link
            onClick={() => scrollToElement('home')} 
            style={{ 
              cursor: 'pointer',
              color: '#077140'
             }} 
            className={`me-3 ${styles.active_link}`}>Ínicio</Nav.Link>
          <Nav.Link 
            active={'cpap'}
            onClick={() => scrollToElement('cpap')} 
            style={{ 
              cursor: 'pointer',
              color: '#077140'
             }} 
             className={`me-3 ${styles.active_link}`}>CPAP</Nav.Link>
          <Nav.Link 
            active={'apneia-do-sono'}
            onClick={() => scrollToElement('apneia-do-sono')} 
            style={{ 
              cursor: 'pointer',
              color: '#077140'
             }} 
             className={`me-3 ${styles.active_link}`}>Apneia do Sono</Nav.Link>
          <Button 
            variant='outline-success' 
            onClick={() => scrollToElement('contato')} 
            style={{
              cursor: 'pointer',
              fontWeight: 500 
            }}>Entrar em Contato</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
