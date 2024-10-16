import React from 'react'
import { useState, useEffect} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
import {  NavLink, useLocation } from 'react-router-dom';

// CSS
import styles from '../Home/Home.module.css'

// mascaras cpap
const mascarasCpap =[
  {id: 1, name: 'Máscara Dream Wisp', src: 'https://live.staticflickr.com/65535/54073745575_29e42bba64_n.jpg',
    text: 'A DreamWisp é uma máscara para CPAP que combina as máscaras Wisp e DreamWear, oferecendo leveza e conforto, ideal tanto para iniciantes quanto para usuários experientes. Seu design minimalista adapta-se a diferentes formatos de rosto, com almofadas macias e múltiplos tamanhos na mesma embalagem.'
  },
  {id: 2, name: 'Máscara Dream Ware', src: 'https://live.staticflickr.com/65535/54073545398_f28c3fc2a2_n.jpg',
    text: 'A máscara nasal DreamWear destaca-se por seu design leve, confortável e estável, proporcionando uma experiência simples e silenciosa. Ela combina o conforto de uma máscara nasal com a leveza das almofadas nasais, apoiando-se abaixo do nariz sem cobri-lo ou adentrar nas narinas, o que evita marcas e irritação. '
  },
  {id: 3, name: 'Máscara Yuwell', src: 'https://live.staticflickr.com/65535/54073178247_d44097b626_n.jpg',
    text: 'A máscara Yuwell é equipada com uma almofada de silicone leve, macia e hermética, projetada para reduzir a pressão facial e proporcionar maior conforto e ajuste. Seu arnês é feito de tecidos suaves e leves, com quatro pontos de apoio para garantir estabilidade e adaptação ao tratamento. A estrutura acrílica com apoio de testa oferece vedação eficiente para pacientes que precisam de mais estabilidade. '
  },
  {id: 4, name: 'Máscara Amara View', src: 'https://live.staticflickr.com/65535/54073292341_659041016b_n.jpg',
    text: 'A máscara Amara View é ideal para usuários de CPAP que buscam conforto sem irritação na ponte nasal. Com um design inovador, ela proporciona um campo de visão livre, perfeita para quem usa óculos, gosta de assistir TV ou ler antes de dormir. Suas presilhas magnéticas facilitam o ajuste, e o conector 360º permite rápida liberação.'
  },
  {id: 5, name: 'Máscara Dreamwer Full', src: 'https://live.staticflickr.com/65535/54072405747_282928c6b6_n.jpg',
    text: 'A máscara DreamWear Full Face é uma versão facial completa da máscara nasal DreamWear, cobrindo a boca e a parte inferior do nariz, ideal para quem precisa de terapia pelo nariz e boca. Ela inclui armações de tamanhos pequeno e médio na mesma embalagem, mas com uma única almofada, que deve ser adquirida no tamanho adequado conforme as instruções.'
  }
]

const Home = ({banner1, banner2, banner3, banner1sm, banner2sm, banner3sm, avaliacao1, avaliacao2, avaliacao3, avaliacao4, avaliacao5, avaliacao6, avaliacao7, avaliacao8, avaliacao9, apneiaPessoas, cpapGaslive, lojaProvida}) => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
  
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 700);
      }
    }
  }, [location]);
  

  // image
  const [telaMenor, setTelaMenor] = useState(false);

  useEffect(() => {
    const verificarTamanhoTela = () => {
      setTelaMenor(window.innerWidth < 576);
    };

    verificarTamanhoTela();
    window.addEventListener('resize', verificarTamanhoTela);

    return () => window.removeEventListener('resize', verificarTamanhoTela);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index)
  };

  return (
    <>
    <div className='carousel-div'>
      <Carousel indicators={false} id='carousel'>
        <Carousel.Item interval={3000}>
          <a target='blank' href="https://wa.me/message/K7V37SCXJ72KG1">
              {telaMenor ? (
                <img
                  className="d-block w-100 image-carousel-1"
                  src={banner1sm}
                  alt="Venda de CPAP"
                  style={{
                    cursor: 'pointer'
                  }}
                />
              ) : (
                <img
                  className="d-block w-100"
                  src={banner1}
                  alt="Venda de CPAP"
                />
              )}
          </a>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          {telaMenor ? (
            <img
              className="d-block w-100 image-carousel-2"
              src={banner2sm}
              alt="Localização da Pró-Vida Cirúrgica"
              style={{
                cursor: 'pointer'
              }}
            />
          ) : (
            <img
              className="d-block w-100"
              src={banner2}
              alt="Localização da Pró-Vida Cirúrgica"
            />
          )}
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          {telaMenor ? (
            <img
              className="d-block w-100 image-carousel-3"
              src={banner3sm}
              alt="CPAPS de última geração"
              style={{
                cursor: 'pointer'
              }}
            />
          ) : (
            <img
              className="d-block w-100"
              src={banner3}
              alt="CPAPS de última geração"
            />
          )}
        </Carousel.Item>
      </Carousel>
    </div>
    <div className='provida-div'>
      <Container
        className={`d-flex align-items-center bg-light h-100 p-4`}
        id='home'
        >
        <Row className={`d-flex align-items-center justify-content-center`}>
            <h1 className={`text-center mt-5 mb-4`}>
              Pró-Vida Cirúrgica
            </h1>
            <h2 className='text-black text-center mb-5'>
              Há mais de 22 anos cuidando da sua saúde!
            </h2>
          <Col xl={6} lg={12} md={12} xs={12} className='p-3'>
            <p className={`text-black mb-3 ${styles.text_justify}`}>A <span><a target='blank' href="https://www.providacirurgica.com.br">Pró-Vida Cirúrgica</a></span> é referência em <span>artigos hospitalares</span> e <span>ortopédicos</span>, com mais de 22 anos de atuação em Ponte Nova - MG e região, sempre comprometida em atender às suas necessidades levar saúde e bem-estar diretamente até você.</p>
            <p className={`text-black mb-3 ${styles.text_justify}`}>Especializada na venda de <span>aparelhos respiratórios</span> e <span>pulmonares</span>, disponibilizamos uma equipe capacitada para fornecer um atendimento completo garantindo que seu <span>CPAP</span> funcione da melhor forma, proporcionando uma experiência eficaz e confortável.</p>
            <p className={`text-black mb-3 ${styles.text_justify}`}>Nosso compromisso é garantir que você aproveite ao máximo a tecnologia disponível, sem preocupações, com um <span>atendimento personalizado</span> que coloca a sua saúde em primeiro lugar.</p>
          </Col>
          <Col xl={6} lg={12} md={12} xs={12} className='d-none d-md-block text-center mb-5'>
            <img className={`img-fluid ${styles.images}`} src={lojaProvida} alt="Pró-Vida Cirúrgica"/>
          </Col>
          <Col className='d-flex align-items-end justify-content-center mb-5'>
            <NavLink className='wpp' target='_blank' to='https://wa.me/message/K7V37SCXJ72KG1'>
              <Button
                className={`${styles.btn_style}`}
                variant='success'>Entrar em Contato</Button>
            </NavLink>
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
                  <img className='img-fluid m-3 reviews' src={avaliacao1} alt="Avaliações Google da Pró-Vida Cirúrgica" />
                </Col>
                <Col className='d-none d-md-block' xs={12} md={4} lg={4}>
                  <img className='img-fluid m-3 reviews' src={avaliacao2} alt="Avaliações Google da Pró-Vida Cirúrgica" />
                </Col>
                <Col className='d-none d-md-block' xs={12} md={4} lg={4}>
                  <img className='img-fluid m-3 reviews' src={avaliacao3} alt="Avaliações Google da Pró-Vida Cirúrgica" />
                </Col>
              </Row>
           </Carousel.Item>
           <Carousel.Item interval={3000}>
              <Row className='align-items-center text-center justify-content-around'>
                <Col xs={12} md={4} lg={4}>
                  <img className='img-fluid m-3 reviews' src={avaliacao4} alt="Avaliações Google da Pró-Vida Cirúrgica" />
                </Col>
                <Col className='d-none d-md-block' xs={12} md={4} lg={4}>
                  <img className='img-fluid m-3 reviews' src={avaliacao5} alt="Avaliações Google da Pró-Vida Cirúrgica" />
                </Col>
                <Col className='d-none d-md-block' xs={12} md={4} lg={4}>
                  <img className='img-fluid m-3 reviews' src={avaliacao6} alt="Avaliações Google da Pró-Vida Cirúrgica" />
                </Col>
              </Row>
           </Carousel.Item>
           <Carousel.Item interval={3000}>
              <Row className='align-items-center text-center justify-content-around '>
                <Col xs={12} md={4} lg={4}>
                  <img className='img-fluid m-3 reviews' src={avaliacao7} alt="Avaliações Google da Pró-Vida Cirúrgica" />
                </Col>
                <Col className='d-none d-md-block' xs={12} md={4} lg={4}>
                  <img className='img-fluid m-3 reviews' src={avaliacao8} alt="Avaliações Google da Pró-Vida Cirúrgica" />
                </Col>
                <Col className='d-none d-md-block' xs={12} md={4} lg={4}>
                  <img className='img-fluid m-3 reviews' src={avaliacao9} alt="Avaliações Google da Pró-Vida Cirúrgica" />
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
          <Col xl={6} lg={12} md={12} xs={12} className='text-center mb-3'>
              <img className={`img-fluid ${styles.images}`} src={cpapGaslive} alt="CPAP Gaslive" />
          </Col>
          <Col className='d-flex align-items-end justify-content-center mb-5'>
            <NavLink className='wpp' target='_blank' to='https://wa.me/message/K7V37SCXJ72KG1'>
              <Button
                className={`${styles.btn_style}`}
                variant='success'>Alugar Agora</Button>
            </NavLink>
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
          <h1 className='text-center text-light mt-5 mb-4'>Apneia do Sono</h1>
          <Col xl={6} lg={12} md={12} xs={12} className='p-3'>
              <p className={`text-black mb-3 ${styles.text_justify}`}>A <span className='text-light'>apneia do sono</span> é um distúrbio comum, mas muitas vezes subdiagnosticado, que pode impactar seriamente a <span className='text-white'>qualidade de vida</span>. Este problema provoca pausas na respiração durante o sono, resultando em um sono fragmentado e de baixa qualidade.</p> 
              <p className={`text-black mb-3 ${styles.text_justify}`}>As consequências incluem <span className='text-white'>fadiga diurna</span>, dificuldades de concentração e um aumento do risco de doenças cardiovasculares, <span className='text-white'>hipertensão</span> e <span className='text-white'>diabetes</span>.</p>
              <p className={`text-black mb-3 ${styles.text_justify}`}>Tratar a apneia do sono é crucial não apenas para melhorar a qualidade do sono, mas também para promover a saúde geral e o bem-estar. Uma das soluções mais eficazes para este problema é o uso de um <span className='text-white'>aparelho CPAP</span> (pressão positiva contínua nas vias aéreas)</p>
          </Col>
          <Col xl={6} lg={12} md={12} xs={12} className='text-center'>
              <img className={`img-fluid ${styles.images}`} src={apneiaPessoas} alt="Apneia do Sono" />
          </Col>
          <Col className='d-flex align-items-end justify-content-center mb-5'>
            <NavLink className='wpp' target='_blank' to='https://wa.me/message/K7V37SCXJ72KG1'>
              <Button
                className={`${styles.btn_style}`}
                variant='light'>Comprar agora</Button>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
    <div className='mascaras-div'>
      <Container
        className={`d-flex align-items-center h-100 p-4`} 
        id='mascaras'>
          <Row className={`d-flex align-items-center`}>
            <h1 className='text-center mt-5 mb-5'>Máscaras para Apneia do Sono</h1>
            <Col xl={4} lg={6} md={12} xs={12} className='text-center mt-5'>
              <img
                className={`img-fluid ${styles.images_mascaras}`}
                src={mascarasCpap[currentIndex].src} 
                alt={mascarasCpap[currentIndex].name} />
            </Col>
            <Col xl={8} lg={6} md={12} xs={12}>
              <h2 className='justify-content-end text-center mt-5 mb-5'>{mascarasCpap[currentIndex].name}</h2>
              <p className={styles.text_justify}>{mascarasCpap[currentIndex].text}</p>
            </Col>
            <Col xs={12} className='d-flex align-items-end justify-content-center mt-5 mb-5'>
              {mascarasCpap.map((image, index) => (
                <Button
                  variant='success'
                  id='btn-mascaras'
                  className='m-3'
                  key={image.id} 
                  onClick={() => handleClick(index)}>
                    {image.id}
                </Button>
              ))} 
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
          <h1 className='text-center text-black mt-5 mb-4'>Perguntas frequentes</h1>
          <Col xl={9} lg={12} md={12} xs={12} className='p-3'>
              <ul className='questions'>
                <h2 style={{
                  color: '#00bf63'
                }}>Como identificar a apneia do sono?</h2>
                  <li>
                    <p className={`text-black mb-4 ${styles.text_justify}`}>Presença de roncos altos e frequentes, pausas na respiração durante o sono, ou se acorda com sensação de sufocamento. Outros sintomas incluem sonolência excessiva durante o dia, dores de cabeça ao despertar e dificuldade de concentração. Caso você apresente esses sintomas, é hora de procurar orientação médica.</p>
                  </li>
                  <h2 style={{
                  color: '#00bf63'
                }}>O que causa a apneia do sono?</h2>
                  <li>
                    <p className={`text-black mb-4 ${styles.text_justify}`}>A principal causa é o bloqueio parcial ou total das vias aéreas durante o sono. Fatores como obesidade, anatomia da garganta, idade avançada e histórico familiar também podem influenciar.
                    </p>
                  </li>
                  <h2 style={{
                  color: '#00bf63'
                }}>O CPAP cura a apneia do sono?</h2>
                  <li>
                    <p className={`text-black mb-4 ${styles.text_justify}`}>O CPAP não cura a apneia do sono, mas é um tratamento eficaz que ajuda a controlar os sintomas. O uso contínuo melhora a qualidade de vida e reduz os riscos associados ao distúrbio.
                    </p>
                  </li>
                  <h2 style={{
                  color: '#00bf63'
                }}>Posso parar de usar o CPAP se me sentir melhor?</h2>
                  <li>
                    <p className={`text-black mb-5 ${styles.text_justify}`}>Mesmo que os sintomas melhorem, é importante continuar o uso do CPAP, pois ele é um tratamento contínuo para manter as vias aéreas abertas durante o sono.</p>
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
