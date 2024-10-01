import React from 'react'

// CSS
import styles from './Footer.module.css'

// bootstrap
import { Container, Row, Col, Stack } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

import { Link } from 'react-router-dom';

const Footer = ({logo, phone, email, facebook, instagram, whatsapp}) => {

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <Container fluid expand='xxl' className={`footer-fixed p-3 bg-dark text-white ${styles.height_custom}`}>
          <Row className='mt-5 mb-5 p-3'>
            <Col xxl={3} className='text-center'>
                <Link onClick={() => scrollToElement('nav')}>
                  <img width={200} src={logo} alt="Logo da Pró-Vida Cirúrgica" />
                </Link>
            </Col>
            <Col xxl={3} md={4} className='p-3'>
            <h6>Links Úteis</h6>
              <Stack gap>
                  <Link className={styles.footerLink}
                    to='https://providacirurgica.com.br/'
                    target='blank'>Página Oficial</Link>
              </Stack>
            </Col>
            <Col xxl={3} md={4} className='p-3'>
              <h6>Redes Sociais</h6>
              <Stack>
                <Link 
                  className={styles.footerLink}
                  to='https://www.instagram.com/provida.cirurgica'
                  target='blank'>
                  <img className='p-1' width={25} src={instagram} alt="Instagram da Pró-Vida Cirúrgica"/>Instagram</Link>
                <Link 
                  className={styles.footerLink}>
                  <img className='p-1' width={25} src={facebook} alt="Facebook da Pró-Vida Cirúrgica"/>Facebook</Link>
                <Link 
                  className={styles.footerLink} 
                  to='https://wa.me/message/K7V37SCXJ72KG1' 
                  target='blank'>
                  <img className='p-1' width={25} src={whatsapp} alt="WhatsApp da Pró-Vida Cirúrgica"/>WhatsApp</Link>
              </Stack>
            </Col>
            <Col xxl={3} md={4} className='p-3'>
              <h6>Contato</h6>
              <Stack>
                <Link 
                  className={styles.footerLink}>
                  <img className='p-1' width={25} src={phone} alt="Telefone da Pró-Vida Cirúrgica"/>
                  (31) 98976-7045</Link>
                <Link 
                  className={styles.footerLink}>
                  <img className='p-1' width={25} src={phone} alt="Contato da Pró-Vida Cirúrgica"/>
                  (31) 3881-7565</Link>
                <Link 
                  className={styles.footerLink}
                  to='mailto:contato@providacirurgica.com.br'
                >
                <img className='p-1' width={25} src={email} alt="E-mail da Pró-Vida Cirúrgica"/>E-mail</Link>
              </Stack>
            </Col>
          </Row>
      </Container>

  )
}

export default Footer