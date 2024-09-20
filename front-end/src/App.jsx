import './App.css'

// reaproveitando estrutura
import { Outlet } from 'react-router-dom'

// componentes
import Header from '../src/components/Header/Header'

// images
import logo from './assets/logo-pro-vida.png'

function App() {
  return (
    <>
      <Header logo={logo}/>
      <Outlet/>
    </>
  )
}

export default App
