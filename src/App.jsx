import React from 'react';
import { Fragment } from 'react';
import { Routes, Route } from "react-router-dom";
import { Header } from './components/Header';
import { Inicio } from './pages/Inicio';
import { Footer } from './components/Footer';
import { Productos } from "./pages/Productos"
import { Contacto } from "./pages/Contacto";
import Decoraciones from './components/Decoraciones';
import "./App.css";


function App() {

  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path="/servicios" element={<Decoraciones />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App
