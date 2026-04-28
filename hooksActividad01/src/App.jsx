import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Perfil from './Pages/Perfil'
import Formulario from './Pages/Formulario'
import Login from './Pages/Login'

const App = () => {
  return (
  <Router> {/* Este es el que evita que la pantalla salga blanca */}
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  )
}

export default App
