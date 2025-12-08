import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import './globalStyle.scss'
import Home from './pages/home/Home'
import Vonluntario from './pages/voluntario/Voluntario'

function App() {


  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/voluntario' element={<Vonluntario/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App