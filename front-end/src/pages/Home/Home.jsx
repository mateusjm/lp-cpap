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
            <p className={`text-black mb-3 ${styles.text_justify}`}>A <span><a target='blank' href="https://www.providacirurgica.com.br">Pró-Vida Cirúrgica</a></span> é referência em <span>artigos hospitalares</span>, com mais de 22 anos de atuação em Ponte Nova - MG e região, sempre comprometida em atender às suas necessidades levar saúde e bem-estar diretamente até você.</p>
            <p className={`text-black mb-3 ${styles.text_justify}`}>Especializada na venda de <span>aparelhos respiratórios</span> e <span>pulmonares</span>, disponibilizamos uma equipe capacitada para fornecer atendimento técnico completo. Isso inclui assistência técnica contínua, manutenção dos equipamentos e um suporte completo para garantir que seu <span>CPAP</span> funcione da melhor forma, proporcionando uma experiência eficaz e confortável.</p>
            <p className={`text-black mb-3 ${styles.text_justify}`}>Nosso compromisso é garantir que você aproveite ao máximo a tecnologia disponível, sem preocupações, com um <span>atendimento personalizado</span> que coloca a sua saúde em primeiro lugar.</p>
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
              variant='success'><a target='_blank' href="https://api.whatsapp.com/message/K7V37SCXJ72KG1?autoload=1&app_absent=0">Entrar em Contato</a></Button>
          </Col>
        </Row>
      </Container>
    </div>
    <div className='reviews-div'>
      <Container fluid id='reviews' className='p-4'>
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
              <p className={`text-black mb-3 ${styles.text_justify}`}>O <span>CPAP</span> é um dispositivo que mantém as vias aéreas abertas durante o sono, fornecendo um fluxo constante de ar. Isso evita as obstruções que causam a apneia, permitindo que você tenha um sono mais profundo e reparador.</p>  
              <p className={`text-black mb-3 ${styles.text_justify}`}>Ao usar o CPAP, muitos usuários relatam <span>melhorias significativas</span> em sua energia, concentração e <span>qualidade de vida</span>. Investir em um aparelho CPAP não é apenas uma escolha por um sono melhor; é um passo importante para cuidar da sua saúde a longo prazo. </p> 
              <p className={`text-black ${styles.text_justify}`}>Se você sofre de apneia do sono, não deixe de considerar essa <span>solução eficaz</span> e nos consulte  para saber mais sobre como o CPAP pode se encaixar na sua rotina.</p>
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
              variant='outline-success'><a target='_blank' href="https://api.whatsapp.com/message/K7V37SCXJ72KG1?autoload=1&app_absent=0">Alugar Agora</a></Button>
          </Col>
        </Row>
      </Container>
    </div>
    <div className='apneia-do-sono-div'>
      <Container
        className={`d-flex align-items-center h-100 p-4`}
        id='apneia-do-sono'
        >
        <Row className={`d-flex align-items-center justify-content-center`}>
          <h1 className='text-center text-black mt-5 mb-4'>Apneia do Sono</h1>
          <Col xl={6} lg={12} md={12} xs={12} className='p-3'>
              <p className={`text-white mb-3 ${styles.text_justify}`}>A apneia do sono é um distúrbio comum, mas muitas vezes subdiagnosticado, que pode impactar seriamente a qualidade de vida. Este problema provoca pausas na respiração durante o sono, resultando em um sono fragmentado e de baixa qualidade.</p> 
              <p className={`text-white mb-3 ${styles.text_justify}`}>As consequências incluem fadiga diurna, dificuldades de concentração e um aumento do risco de doenças cardiovasculares, hipertensão e diabetes.</p>
              <p className={`text-white mb-3 ${styles.text_justify}`}>Tratar a apneia do sono é crucial não apenas para melhorar a qualidade do sono, mas também para promover a saúde geral e o bem-estar. Uma das soluções mais eficazes para este problema é o uso de um aparelho CPAP (pressão positiva contínua nas vias aéreas)</p>
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
              variant='light'><a target='_blank' href="https://api.whatsapp.com/message/K7V37SCXJ72KG1?autoload=1&app_absent=0">Comprar Agora</a></Button>
          </Col>
        </Row>
      </Container>
    </div>
    <div className='faq-div'>
      <Container
        className={`d-flex align-items-center h-100 p-4`}
        id='faq'
        >
        <Row className={`d-flex align-items-center justify-content-center`}>
          <h1 className='text-center mt-5 mb-4'>Perguntas frequentes</h1>
          <Col xl={9} lg={12} md={12} xs={12} className='p-3'>
              <ul>
                <h2>O CPAP faz barulho? Ele atrapalha o sono?</h2>
                  <li>
                    <p className={`text-black mb-4 ${styles.text_justify}`}>Os modelos mais modernos de CPAP são bastante silenciosos, com níveis de ruído baixos, e geralmente não interferem no sono.</p>
                  </li>
                <h2>Quanto tempo devo usar o CPAP por noite?</h2>
                  <li>
                    <p className={`text-black mb-4 ${styles.text_justify}`}>As consequências incluem fadiga diurna, dificuldades de concentração e um aumento do risco de doenças cardiovasculares, hipertensão e diabetes.</p>
                  </li>
                <h2>O CPAP cura a apneia do sono?</h2>
                  <li>
                    <p className={`text-black mb-4 ${styles.text_justify}`}>O CPAP não cura a apneia do sono, mas é um tratamento eficaz que ajuda a controlar os sintomas. O uso contínuo melhora a qualidade de vida e reduz os riscos associados ao distúrbio.
                    </p>
                  </li>
                <h2>Posso parar de usar o CPAP se me sentir melhor?</h2>
                  <li>
                    <p className={`text-black mb-4 ${styles.text_justify}`}>Não. Mesmo que os sintomas melhorem, é importante continuar o uso do CPAP, pois ele é um tratamento contínuo para manter as vias aéreas abertas durante o sono.</p>
                  </li>
                <h2>O que causa a apneia do sono?</h2>
                  <li>
                    <p className={`text-black mb-4 ${styles.text_justify}`}>A principal causa é o bloqueio parcial ou total das vias aéreas durante o sono. Fatores como obesidade, anatomia da garganta, idade avançada e histórico familiar também podem influenciar.
                    </p>
                  </li>
              </ul>
          </Col>
        </Row>
      </Container>
    </div>
    </>
    
  )
}

export default Home
