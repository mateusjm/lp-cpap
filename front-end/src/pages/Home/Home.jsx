import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'

// CSS
import styles from '../Home/Home.module.css'

const Home = ({banner1, banner2, banner3, banner1sm, banner2sm, banner3sm, provida}) => {

  const [telaMenor, setTelaMenor] = useState(false);

  useEffect(() => {
    const verificarTamanhoTela = () => {
      setTelaMenor(window.innerWidth < 576);
    };

    verificarTamanhoTela();
    window.addEventListener('resize', verificarTamanhoTela);

    return () => window.removeEventListener('resize', verificarTamanhoTela);
  }, []);

  return (
    <>
    <Carousel indicators={false}>
      <Carousel.Item interval={3000}>
        <a target='blank' href="https://api.whatsapp.com/message/K7V37SCXJ72KG1?autoload=1&app_absent=0">
            {telaMenor ? (
              <img
                className="d-block w-100 image-carousel-1"
                src={banner1sm}
                alt="Banner pequeno"
                style={{
                  cursor: 'pointer'
                }}
              />
            ) : (
              <img
                className="d-block w-100"
                src={banner1}
                alt="Banner grande"
              />
            )}    
        </a>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
            {telaMenor ? (
              <img
                className="d-block w-100 image-carousel-2"
                src={banner2sm}
                alt="Banner pequeno"
                style={{
                  cursor: 'pointer'
                }}
              />
            ) : (
              <img
                className="d-block w-100"
                src={banner2}
                alt="Banner grande"
              />
            )}    
      </Carousel.Item>
      <Carousel.Item interval={3000}>
            {telaMenor ? (
              <img
                className="d-block w-100 image-carousel-3"
                src={banner3sm}
                alt="Banner pequeno"
                style={{
                  cursor: 'pointer'
                }}
              />
            ) : (
              <img
                className="d-block w-100"
                src={banner3}
                alt="Banner grande"
              />
            )}    
      </Carousel.Item>
    </Carousel>

    <Container fluid
      className={`d-flex align-items-center bg-white h-100 p-5`} 
      id='home'
      >
      <Row className={`d-flex align-items-center justify-content-center`}>
      <Col xl={6} md={6} xs={12}>
          <h2 className={`text-center mb-4`}>
            Pró-Vida Cirúrgica:
          </h2>
          <h3 className='text-black text-center mb-5'>
            Há mais de 22 anos cuidando da sua saúde
          </h3>
            <p className={`text-black mb-3 ${styles.text_justify}`}>A <span style={{color: '#00bf63'}}><a target='blank' href="https://providacirurgica.com.br/">Pró-Vida Cirúrgica</a></span> é referência em artigos hospitalares, com mais de 22 anos de atuação em Ponte Nova - MG e região. Seu objetivo é atender às necessidades da população local, proporcionando <span style={{color: '#00bf63'}}>saúde</span> e <span style={{color: '#00bf63'}}>bem-estar</span> diretamente em sua casa.</p>

            <p className={`text-black mb-3 ${styles.text_justify}`}>Com <span style={{color: '#00bf63'}}>atendimento especializado</span> na venda de aparelhos respiratórios e pulmonares, oferecendo também <span style={{color: '#00bf63'}}>assistência técnica</span> e serviços de manutenção. Nossa prioridade é garantir que você tire todas as suas dúvidas e utilize seu <span style={{color: '#00bf63'}}>CPAP</span> da melhor maneira possível.</p>

            <p className={`text-black mb-5 ${styles.text_justify}`}>Nos responsabilizamos por todo o processo de instalação do seu aparelho, incluindo a configuração do aplicativo e o acompanhamento inicial da sua compra. Tudo para que você tenha uma experiência tranquila e sem complicações.</p>
        </Col>
        <Col xl={6} md={6} xs={12} className='text-center'>
          <img className='img-fluid' src={provida} width={450} alt="" />
        </Col>   
        <Col className='d-flex align-items-end justify-content-center mt-3'>
          <Button 
            className={`${styles.btn_style}`}
            style={{
              width: '300px'
            }}
            variant='success'>Alugue Agora</Button>
        </Col>
      </Row>
    </Container>

    <Container fluid
      className={`d-flex align-items-center bg-black`} 
      id='cpap'
      >
      <Row className={`d-flex align-items-center justify-content-center h-100 p-5`}>
        <Col xl={6} md={6} xs={12}>
          <h2 className='text-success text-center mb-5'>CPAP</h2>
          <p className={`text-white ${styles.text_justify}`}>A apneia do sono é um distúrbio comum, mas muitas vezes subdiagnosticado, que pode impactar seriamente a qualidade de vida. Este problema provoca pausas na respiração durante o sono, resultando em um sono fragmentado e de baixa qualidade. As consequências incluem fadiga diurna, dificuldades de concentração e um aumento do risco de doenças cardiovasculares, hipertensão e diabetes.

          Tratar a apneia do sono é crucial não apenas para melhorar a qualidade do sono, mas também para promover a saúde geral e o bem-estar. Uma das soluções mais eficazes para este problema é o uso de um aparelho CPAP (pressão positiva contínua nas vias aéreas).</p>

          <p className={`text-white mb-5 ${styles.text_justify}`}>O CPAP é um dispositivo que mantém as vias aéreas abertas durante o sono, fornecendo um fluxo constante de ar. Isso evita as obstruções que causam a apneia, permitindo que você tenha um sono mais profundo e reparador. Ao usar o CPAP, muitos usuários relatam melhorias significativas em sua energia, concentração e qualidade de vida.

          Investir em um CPAP não é apenas uma escolha por um sono melhor; é um passo importante para cuidar da sua saúde a longo prazo. Se você sofre de apneia do sono, não deixe de considerar essa solução eficaz e consulte um especialista para saber mais sobre como o CPAP pode se encaixar na sua rotina.</p>

          <Col className='d-flex align-items-end justify-content-center'><Button className={`${styles.btn_style}`} variant='success'>Alugue Agora</Button></Col>
        </Col>
        <Col xl={6} md={6} xs={12}>
          <img src="" alt="" />
        </Col>
      </Row>
    </Container>

    <Container></Container>

    <Container fluid
      className={`d-flex align-items-center bg-success`} 
      id='apneia-do-sono'
      >
      <Row className={`d-flex align-items-center justify-content-center h-100 p-5`}>
        <Col xl={8} md={8} xs={12}>
          <h2 className='text-white text-center mb-5'>Apneia do Sono</h2>
          <p className={`text-black ${styles.text_justify}`}>A apneia do sono é um distúrbio comum, mas muitas vezes subdiagnosticado, que pode impactar seriamente a qualidade de vida. Este problema provoca pausas na respiração durante o sono, resultando em um sono fragmentado e de baixa qualidade. As consequências incluem fadiga diurna, dificuldades de concentração e um aumento do risco de doenças cardiovasculares, hipertensão e diabetes.

          Tratar a apneia do sono é crucial não apenas para melhorar a qualidade do sono, mas também para promover a saúde geral e o bem-estar. Uma das soluções mais eficazes para este problema é o uso de um aparelho CPAP (pressão positiva contínua nas vias aéreas).</p>

          <p className={`text-black mb-5 ${styles.text_justify}`}>O CPAP é um dispositivo que mantém as vias aéreas abertas durante o sono, fornecendo um fluxo constante de ar. Isso evita as obstruções que causam a apneia, permitindo que você tenha um sono mais profundo e reparador. Ao usar o CPAP, muitos usuários relatam melhorias significativas em sua energia, concentração e qualidade de vida.

          Investir em um CPAP não é apenas uma escolha por um sono melhor; é um passo importante para cuidar da sua saúde a longo prazo. Se você sofre de apneia do sono, não deixe de considerar essa solução eficaz e consulte um especialista para saber mais sobre como o CPAP pode se encaixar na sua rotina.</p>

          <Col className='d-flex align-items-end justify-content-center'><Button className={`${styles.btn_style}`} variant='outline-dark'>Alugue Agora</Button></Col>
        </Col>
      </Row>
    </Container>
    </>
    
  )
}

export default Home
