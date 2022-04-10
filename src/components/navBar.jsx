import React from 'react';
import { Link } from 'react-router-dom';
import est from './navBar.module.css'

const NavBAr = () => {
    return (
        <div>
            <nav className={est.borde}>
                <div className={est.margen}>
                    <Link className={est.linke} to='/' ><button className={est.myBoton} >Inicio</button></Link>
                </div>
                <div className={est.margen}>
                    <Link className={est.linke} to='/characters'><button className={est.myBoton} >Personajes</button></Link>
                </div>
                <div className={est.margen}>
                    <Link className={est.linke} to='/favs'><button className={est.myBoton} >Mis Personajes Favoritos</button></Link>
                </div>
            </nav>
        </div>
    );
}
export default NavBAr;