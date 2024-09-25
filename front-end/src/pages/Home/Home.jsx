import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'

// CSS
import styles from '../Home/Home.module.css'

const Home = ({banner1, banner2, banner3}) => {
  return (
    <>
    <Carousel indicators={false}>
      <Carousel.Item interval={3000}>
        <a target='blank' href="https://api.whatsapp.com/message/K7V37SCXJ72KG1?autoload=1&app_absent=0">
          <img
            className='d-block w-100 image-carousel-1'
            src={banner1}
            alt="banner1"
            style={{
              cursor: 'pointer'
            }}
            />
        </a>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className='d-block w-100 image-carousel-2'
          src={banner2}
          alt="banner2"
          />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className='d-block w-100 image-carousel-3'
          src={banner3}
          alt="banner3"
          />
      </Carousel.Item>
    </Carousel>

    <Container fluid
      className={`d-flex align-items-center ${styles.container_home}`} 
      id='home'
      style={{
        height: `1000px`}}
      >
      <Row className={`d-flex align-items-center justify-content-center p-5`}>
        <Col xl={8} md={8} xs={12}>
          <h2 className='text-success text-center mb-5'>Pró-Vida</h2>
          <p className={`text-black ${styles.text_justify}`}>A apneia do sono é um distúrbio comum, mas muitas vezes subdiagnosticado, que pode impactar seriamente a qualidade de vida. Este problema provoca pausas na respiração durante o sono, resultando em um sono fragmentado e de baixa qualidade. As consequências incluem fadiga diurna, dificuldades de concentração e um aumento do risco de doenças cardiovasculares, hipertensão e diabetes.

          Tratar a apneia do sono é crucial não apenas para melhorar a qualidade do sono, mas também para promover a saúde geral e o bem-estar. Uma das soluções mais eficazes para este problema é o uso de um aparelho CPAP (pressão positiva contínua nas vias aéreas).</p>

          <p className={`text-black mb-5 ${styles.text_justify}`}>O CPAP é um dispositivo que mantém as vias aéreas abertas durante o sono, fornecendo um fluxo constante de ar. Isso evita as obstruções que causam a apneia, permitindo que você tenha um sono mais profundo e reparador. Ao usar o CPAP, muitos usuários relatam melhorias significativas em sua energia, concentração e qualidade de vida.

          Investir em um CPAP não é apenas uma escolha por um sono melhor; é um passo importante para cuidar da sua saúde a longo prazo. Se você sofre de apneia do sono, não deixe de considerar essa solução eficaz e consulte um especialista para saber mais sobre como o CPAP pode se encaixar na sua rotina.</p>

          <Col className='d-flex align-items-end justify-content-center'><Button className={`${styles.btn_style}`} variant='success'>Alugue Agora</Button></Col>
        </Col>
      </Row>
    </Container>

    <Container fluid
      className={`d-flex align-items-center ${styles.container_cpap}`} 
      id='cpap'
      style={{
        height: `1000px`}}
      >
      <Row className={`d-flex align-items-center justify-content-center p-5`}>
        <Col xl={8} md={8} xs={12}>
          <h2 className='text-success text-center mb-5'>Apneia do Sono</h2>
          <p className={`text-white ${styles.text_justify}`}>A apneia do sono é um distúrbio comum, mas muitas vezes subdiagnosticado, que pode impactar seriamente a qualidade de vida. Este problema provoca pausas na respiração durante o sono, resultando em um sono fragmentado e de baixa qualidade. As consequências incluem fadiga diurna, dificuldades de concentração e um aumento do risco de doenças cardiovasculares, hipertensão e diabetes.

          Tratar a apneia do sono é crucial não apenas para melhorar a qualidade do sono, mas também para promover a saúde geral e o bem-estar. Uma das soluções mais eficazes para este problema é o uso de um aparelho CPAP (pressão positiva contínua nas vias aéreas).</p>

          <p className={`text-white mb-5 ${styles.text_justify}`}>O CPAP é um dispositivo que mantém as vias aéreas abertas durante o sono, fornecendo um fluxo constante de ar. Isso evita as obstruções que causam a apneia, permitindo que você tenha um sono mais profundo e reparador. Ao usar o CPAP, muitos usuários relatam melhorias significativas em sua energia, concentração e qualidade de vida.

          Investir em um CPAP não é apenas uma escolha por um sono melhor; é um passo importante para cuidar da sua saúde a longo prazo. Se você sofre de apneia do sono, não deixe de considerar essa solução eficaz e consulte um especialista para saber mais sobre como o CPAP pode se encaixar na sua rotina.</p>

          <Col className='d-flex align-items-end justify-content-center'><Button className={`${styles.btn_style}`} variant='dark'>Compre Agora</Button></Col>
        </Col>
      </Row>
    </Container>

    <Container fluid
      className={`d-flex align-items-center ${styles.container_apneia}`} 
      id='apneia-do-sono'
      style={{
        height: `1000px`}}
      >
      <Row className={`d-flex align-items-center justify-content-center p-5`}>
        <Col xl={8} md={8} xs={12}>
          <h2 className='text-white text-center mb-5'>Apneia do Sono</h2>
          <p className={`text-black ${styles.text_justify}`}>A apneia do sono é um distúrbio comum, mas muitas vezes subdiagnosticado, que pode impactar seriamente a qualidade de vida. Este problema provoca pausas na respiração durante o sono, resultando em um sono fragmentado e de baixa qualidade. As consequências incluem fadiga diurna, dificuldades de concentração e um aumento do risco de doenças cardiovasculares, hipertensão e diabetes.

          Tratar a apneia do sono é crucial não apenas para melhorar a qualidade do sono, mas também para promover a saúde geral e o bem-estar. Uma das soluções mais eficazes para este problema é o uso de um aparelho CPAP (pressão positiva contínua nas vias aéreas).</p>

          <p className={`text-black mb-5 ${styles.text_justify}`}>O CPAP é um dispositivo que mantém as vias aéreas abertas durante o sono, fornecendo um fluxo constante de ar. Isso evita as obstruções que causam a apneia, permitindo que você tenha um sono mais profundo e reparador. Ao usar o CPAP, muitos usuários relatam melhorias significativas em sua energia, concentração e qualidade de vida.

          Investir em um CPAP não é apenas uma escolha por um sono melhor; é um passo importante para cuidar da sua saúde a longo prazo. Se você sofre de apneia do sono, não deixe de considerar essa solução eficaz e consulte um especialista para saber mais sobre como o CPAP pode se encaixar na sua rotina.</p>

          <Col className='d-flex align-items-end justify-content-center'><Button className={`${styles.btn_style}`} variant='outline-success'>Alugue Agora</Button></Col>
        </Col>
      </Row>
    </Container>
    </>
    
  )
}

export default Home
