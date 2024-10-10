import './App.css'

// reaproveitando estrutura
import { Outlet } from 'react-router-dom'

// componentes
import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'

// images
import logo from './assets/logo-pro-vida.png'

// assets
import phone from './assets/telefone.png'
import email from './assets/email.png'
import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
import whatsapp from './assets/whatsapp.png'

function App() {
  return (
    <>
       <a href="https://wa.me/message/K7V37SCXJ72KG1" target="_blank" className="whatsapp-float" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="WhatsApp" />
      </a>
      <Header logo={logo}/>
      <Outlet/>
      <Footer 
        logo={logo} 
        phone={phone} 
        email={email}
        facebook={facebook}
        instagram={instagram}
        whatsapp={whatsapp}
        />
    </>
  )
}

export default App
