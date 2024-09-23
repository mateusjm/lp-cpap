import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'

// CSS
import styles from '../Home/Home.module.css'

const Home = ({banner1, banner2, banner3}) => {
  return (
    <>
    <Container fluid
      className={`d-flex align-items-center ${styles.container_home}`} 
      id='home'
      style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}
      >
      <Row className={`w-auto d-flex align-items-center justify-content-center`}>
        <Col xl={6} md={6} xs={8}>
          <h2>Solução para apneia do sono ao seu alcance!</h2>
          <h1 className={`${styles.title} mb-3`}>CPAP!</h1>
          <Button className={`${styles.btn_style}`} variant='outline-success'>Compre Agora</Button>
        </Col>
      </Row>
    </Container>

    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className='d-block w-100 image-carousel-1'
          src={banner1}
          alt="banner1"
          />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className='d-block w-100 image-carousel-2'
          src={banner1}
          alt="banner2"
          />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className='d-block w-100 image-carousel-3'
          src={banner1}
          alt="banner3"
          />
      </Carousel.Item>
    </Carousel>

    <Container fluid
      className={`d-flex align-items-center ${styles.container_cpap} p-5`} 
      id='cpap'
      style={{
        height: `1000px`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}
      >
      <Row className={`d-flex align-items-center justify-content-end`}>
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
      className={`d-flex align-items-center ${styles.container_apneia}`} 
      id='apneia-do-sono'
      style={{
        height: `1000px`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}
      >
      <Row className={`d-flex align-items-center justify-content-center p-5`}>
        <Col xl={8} md={8} xs={12}>
          <h2 className='text-white text-center mb-5'>Apneia do Sono</h2>
          <p className={`text-black ${styles.text_justify}`}>A apneia do sono é um distúrbio comum, mas muitas vezes subdiagnosticado, que pode impactar seriamente a qualidade de vida. Este problema provoca pausas na respiração durante o sono, resultando em um sono fragmentado e de baixa qualidade. As consequências incluem fadiga diurna, dificuldades de concentração e um aumento do risco de doenças cardiovasculares, hipertensão e diabetes.

          Tratar a apneia do sono é crucial não apenas para melhorar a qualidade do sono, mas também para promover a saúde geral e o bem-estar. Uma das soluções mais eficazes para este problema é o uso de um aparelho CPAP (pressão positiva contínua nas vias aéreas).</p>

          <p className={`text-black mb-5 ${styles.text_justify}`}>O CPAP é um dispositivo que mantém as vias aéreas abertas durante o sono, fornecendo um fluxo constante de ar. Isso evita as obstruções que causam a apneia, permitindo que você tenha um sono mais profundo e reparador. Ao usar o CPAP, muitos usuários relatam melhorias significativas em sua energia, concentração e qualidade de vida.

          Investir em um CPAP não é apenas uma escolha por um sono melhor; é um passo importante para cuidar da sua saúde a longo prazo. Se você sofre de apneia do sono, não deixe de considerar essa solução eficaz e consulte um especialista para saber mais sobre como o CPAP pode se encaixar na sua rotina.</p>

          <Col className='d-flex align-items-end justify-content-center'><Button className={`${styles.btn_style}`} variant='dark'>Alugue Agora</Button></Col>
        </Col>
      </Row>
    </Container>
    </>
    
  )
}

export default Home
