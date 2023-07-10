import React from 'react';
import Login from './login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Galeria from './galeria'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Galeria" element={<Galeria />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
