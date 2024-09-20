import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

// CSS
import styles from '../Home/Home.module.css'

const Home = ({banner1, banner2}) => {
  return (
    <>
    <Container fluid
      className={`d-flex align-items-center ${styles.container_height}`} 
      id='home'
      style={{
        width: '100%',
        backgroundImage: `url(${banner1})`, 
        height: `800px`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}
      >
      <Row className={`w-auto d-flex align-items-center justify-content-center`}>
        <Col xl={6} md={6} xs={12}>
          <h2>Solução para apneia do sono ao seu alcance!</h2>
          <h1 className={`${styles.title} mb-3`}>CPAP!</h1>
          <Button className={`${styles.btn_style}`} variant='outline-success'>Compre Agora</Button>
        </Col>
      </Row>
    </Container>

    <Container fluid
      className={`d-flex align-items-center ${styles.container_height}`} 
      id='cpap'
      style={{
        width: '100%',
        backgroundImage: `url(${banner2})`, 
        height: `1000px`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}
      >
      <Row className={`w-100 d-flex align-items-center justify-content-end`}>
        <Col xl={6} md={6} xs={12}>
          <h2 className='text-center mb-5'>Afinal, o que é CPAP?</h2>
          <p className={`text-white ${styles.text_justify}`}>O CPAP, ou Pressão Positiva Contínua nas Vias Aéreas, é um dispositivo essencial no tratamento de apneia obstrutiva do sono, uma condição caracterizada por interrupções frequentes da respiração durante o sono. O equipamento funciona fornecendo um fluxo contínuo de ar através de uma máscara, mantendo as vias aéreas abertas e prevenindo colapsos que dificultam a respiração.</p>

          <p className={`text-white ${styles.text_justify}`}>Com design compacto e fácil de usar, o CPAP ajusta automaticamente a pressão de ar necessária, proporcionando noites de sono mais tranquilas e uma qualidade de vida significativamente melhorada. Ele é indicado para pessoas que sofrem de ronco intenso, pausas respiratórias ou sonolência diurna, condições que podem aumentar o risco de problemas cardíacos e outros distúrbios graves de saúde. O uso regular do CPAP melhora a oxigenação do corpo, reduz a sensação de cansaço e garante um sono reparador, resultando em mais disposição durante o dia.</p>

          <p className={`text-white mb-5 ${styles.text_justify}`}>Além disso, a variedade de máscaras e ajustes permite um conforto personalizado para cada usuário. Com níveis baixos de ruído, o CPAP é ideal para quem busca um tratamento eficaz e discreto, sem comprometer o descanso ou o bem-estar.</p>
          <Col className='d-flex align-items-end justify-content-center'><Button className={`${styles.btn_style}`} variant='outline-success'>Alugue Agora</Button></Col>
        </Col>
      </Row>
    </Container>
    
    <Container fluid
      className={`d-flex align-items-center ${styles.container_height}`} 
      id='apneia-do-sono'
      style={{
        width: '100%',
        backgroundImage: `url(${banner1})`, 
        height: `800px`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}
      >
      <Row className={`w-auto d-flex align-items-center justify-content-center`}>
        <Col xl={6} md={6} xs={12}>
          <h2>Solução para apneia do sono ao seu alcance!</h2>
          <h1 className={`${styles.title} mb-3`}>CPAP!</h1>
          <Button className={`${styles.btn_style}`} variant='outline-success'>Compre Agora</Button>
        </Col>
      </Row>
    </Container>
    
    </>
    
  )
}

export default Home
