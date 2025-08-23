import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Fragment>
      <header className="Encabezado">
        <div className="contenedor_encabezado">
          <div className="contenedor-titulo">
            <h2 className="titulo-personalizado">
              Detalles <span>Unicos</span>
            </h2>
          </div>
          <nav className="navegacion">
            <Link to="/">Inicio</Link>
            {/* <Link to='/nosotros'>Sobre Nosotros</Link> */}
            <Link to="/contacto">Contacto</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/servicios">Servicios</Link>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};
