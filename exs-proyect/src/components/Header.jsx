import React from 'react'
import { Fragment } from 'react'

export const Header = () => {
    return (
    <Fragment>
            <header className="Encabezado">
                <div className="contenedor">
                    <div className="contenedor-titulo">
                    <h2 className="titulo-personalizado">
                        Detalles <span>Unicos</span>
                    </h2>
                    </div>
                    <nav className="navegacion">
                    <a href="index.html">Inicio</a>
                    <a href="#nosotros">Sobre Nosotros</a>
                    <a href="contacto.html">Contacto</a>
                    <a href="ofertas.html">Productos</a>
                    <a href="servicios.html">Servicios</a>
                    <a href="festividades.html">Festividades</a>
                    </nav>
                </div>
            </header>
    </Fragment>
    );
}
