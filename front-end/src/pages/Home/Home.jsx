import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'

// CSS
import styles from '../Home/Home.module.css'

const Home = ({banner1, banner2, banner3, banner1sm, banner2sm, banner3sm, provida, avaliacao1, avaliacao2, avaliacao3, avaliacao4, avaliacao5, avaliacao6, avaliacao7, avaliacao8, avaliacao9, apneiaPessoas}) => {

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
    <div className='carousel-div'>
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
    </div>
    <div className='provida-div'>
      <Container
        className={`d-flex align-items-center bg-white h-100 p-4`}
        id='home'
        >
        <Row className={`d-flex align-items-start justify-content-center`}>
            <h1 className={`text-center mt-5 mb-4`}>
              Pró-Vida Cirúrgica:
            </h1>
            <h2 className='text-black text-center mb-5'>
              Há mais de 22 anos cuidando da sua saúde!
            </h2>
          <Col xl={6} lg={12} md={12} xs={12} className='p-3'>
            <p className={`text-black mb-3 ${styles.text_justify}`}>A Pró-Vida Cirúrgica é referência em artigos hospitalares, com mais de 22 anos de atuação em Ponte Nova - MG e região, sempre comprometida em atender às suas necessidades levar saúde e bem-estar diretamente até você.</p>

            <p className={`text-black mb-3 ${styles.text_justify}`}>Especializada na venda de aparelhos respiratórios e pulmonares, disponibilizamos uma equipe capacitada para fornecer atendimento técnico completo. Isso inclui assistência técnica contínua, manutenção dos equipamentos e um suporte completo para garantir que seu CPAP funcione da melhor forma, proporcionando uma experiência eficaz e confortável.</p>
                  
            <p className={`text-black mb-3 ${styles.text_justify}`}>Nosso compromisso é garantir que você aproveite ao máximo a tecnologia disponível, sem preocupações, com um atendimento personalizado que coloca a sua saúde em primeiro lugar.</p>
          </Col>
          <Col xl={6} lg={12} md={12} xs={12} className='d-none d-lg-block text-center mb-5'>
            <img className={`img-fluid ${styles.images}`} src={provida} width='400px' alt=""/>
          </Col>
          <Col className='d-flex align-items-end justify-content-center mb-5'>
            <Button
              className={`${styles.btn_style}`}
              style={{
                width: '60%'
              }}
              variant='success'>Entrar em Contato</Button>
          </Col>
        </Row>
      </Container>
    </div>
    <div className='carousel-div'>
      <Container fluid className='p-4 bg-success'>
        <h2 style={{
          color: '#000'
        }} className='text-center text-light mt-5 mb-3'>Confira nossas avaliações:</h2>
          <p className='text-center'>Alguns relatos de clientes que compraram conosco</p>
          <Carousel indicators={false} className='mb-5'>
           <Carousel.Item interval={3000}>
              <Row className='align-items-center text-center justify-content-around '>
                <Col xs={12} md={4} lg={4}>
                  <img className='img-fluid m-3 reviews' src={avaliacao1} alt="" />
                </Col>
                <Col className='d-none d-md-block' xs={12} md={4} lg={4}>
                  <img className='img-fluid m-3 reviews' src={avaliacao2} alt="" />
                </Col>
                <Col className='d-none d-md-block' xs={12} md={4} lg={4}>
                  <img className='img-fluid m-3 reviews' src={avaliacao3} alt="" />
                </Col>
              </Row>
           </Carousel.Item>
           <Carousel.Item interval={3000}>
              <Row className='align-items-center text-center justify-content-around'>
                <Col xs={12} md={4} lg={4}>
                  <img className='img-fluid m-3 reviews' src={avaliacao4} alt="" />
                </Col>
                <Col className='d-none d-md-block' xs={12} md={4} lg={4}>
                  <img className='img-fluid m-3 reviews' src={avaliacao5} alt="" />
                </Col>
                <Col className='d-none d-md-block' xs={12} md={4} lg={4}>
                  <img className='img-fluid m-3 reviews' src={avaliacao6} alt="" />
                </Col>
              </Row>
           </Carousel.Item>
           <Carousel.Item interval={3000}>
              <Row className='align-items-center text-center justify-content-around '>
                <Col xs={12} md={4} lg={4}>
                  <img className='img-fluid m-3 reviews' src={avaliacao7} alt="" />
                </Col>
                <Col className='d-none d-md-block' xs={12} md={4} lg={4}>
                  <img className='img-fluid m-3 reviews' src={avaliacao8} alt="" />
                </Col>
                <Col className='d-none d-md-block' xs={12} md={4} lg={4}>
                  <img className='img-fluid m-3 reviews' src={avaliacao9} alt="" />
                </Col>
              </Row>
           </Carousel.Item>
          </Carousel>
      </Container>
    </div>
    <div className='cpap-div'>
      <Container
        className={`d-flex align-items-center bg-white h-100 p-4`}
        id='cpap'
        >
        <Row className={`d-flex align-items-center justify-content-center`}>
          <h1 className='text-center mt-5 mb-4'>Afinal, o que é CPAP?</h1>
          <Col xl={6} lg={12} md={12} xs={12} className='p-3'>
              <p className={`text-black mb-3 ${styles.text_justify}`}>O CPAP é um dispositivo que mantém as vias aéreas abertas durante o sono, fornecendo um fluxo constante de ar. Isso evita as obstruções que causam a apneia, permitindo que você tenha um sono mais profundo e reparador.</p>  
              <p className={`text-black mb-3 ${styles.text_justify}`}>Ao usar o CPAP, muitos usuários relatam melhorias significativas em sua energia, concentração e qualidade de vida. Investir em um aparelho CPAP não é apenas uma escolha por um sono melhor; é um passo importante para cuidar da sua saúde a longo prazo. </p> 
              <p className={`text-black ${styles.text_justify}`}>Se você sofre de apneia do sono, não deixe de considerar essa solução eficaz e nos consulte  para saber mais sobre como o CPAP pode se encaixar na sua rotina.</p>
          </Col>
          <Col xl={6} lg={12} md={12} xs={12} className='text-center'>
              <img className={`img-fluid ${styles.images}`} src={apneiaPessoas} width='400px' alt="" />
          </Col>
          <Col className='d-flex align-items-end justify-content-center mb-5'>
            <Button
              className={`${styles.btn_style}`}
              style={{
                width: '60%'
              }}
              variant='outline-success'>Alugar Agora</Button>
          </Col>
        </Row>
      </Container>
    </div>
    <div className='apneia-do-sono-div'>
      <Container fluid
        className={`d-flex align-items-center bg-success`}
        id='apneia-do-sono'
        >
        <Row className={`d-flex align-items-center justify-content-center h-100 p-5`}>
          <Col xl={8} md={8} xs={12}>
            <h1 className='text-white text-center mb-5'>Apneia do Sono</h1>
            <p className={`text-black ${styles.text_justify}`}>A apneia do sono é um distúrbio comum, mas muitas vezes subdiagnosticado, que pode impactar seriamente a qualidade de vida. Este problema provoca pausas na respiração durante o sono, resultando em um sono fragmentado e de baixa qualidade. As consequências incluem fadiga diurna, dificuldades de concentração e um aumento do risco de doenças cardiovasculares, hipertensão e diabetes.
            Tratar a apneia do sono é crucial não apenas para melhorar a qualidade do sono, mas também para promover a saúde geral e o bem-estar. Uma das soluções mais eficazes para este problema é o uso de um aparelho CPAP (pressão positiva contínua nas vias aéreas).</p>
            <p className={`text-black mb-5 ${styles.text_justify}`}>O CPAP é um dispositivo que mantém as vias aéreas abertas durante o sono, fornecendo um fluxo constante de ar. Isso evita as obstruções que causam a apneia, permitindo que você tenha um sono mais profundo e reparador. Ao usar o CPAP, muitos usuários relatam melhorias significativas em sua energia, concentração e qualidade de vida.
            Investir em um CPAP não é apenas uma escolha por um sono melhor; é um passo importante para cuidar da sua saúde a longo prazo. Se você sofre de apneia do sono, não deixe de considerar essa solução eficaz e consulte um especialista para saber mais sobre como o CPAP pode se encaixar na sua rotina.</p>
            <Col className='d-flex align-items-end justify-content-center'><Button className={`${styles.btn_style}`} variant='outline-dark'>Alugue Agora</Button></Col>
          </Col>
        </Row>
      </Container>
    </div>
    </>
    
  )
}

export default Home
