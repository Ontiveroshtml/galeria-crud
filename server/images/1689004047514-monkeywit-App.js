import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import NavbarCurriculum from './components/NavbarCurriculum';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Galeria from './components/Galeria';
import Curriculum from './components/Curriculum';
import Contacto from './components/Contacto';
import Footer from './components/Footer'

const App = () => {
  return (


    <div>
      <Router>
        <NavbarCurriculum />
        <Route exact path='/' component={Home} />
        <Route path='/Curriculum' component={Curriculum} />
      </Router>
      <Footer />
    </div>

  );
}

const Home = () => {
  return (
    <div>
      <Navbar />
      <Inicio />
      <Nosotros />
      <Galeria />
      <Contacto />
    </div>
  );
}


export default App;