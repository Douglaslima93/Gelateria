import React from "react";
import './style.css'
import { Link } from "react-router-dom";

const Topo = () => (
    <header>    
        <div className="limitar-secao">
        <img src="./img/logo.png" alt="logo"/>

        <nav className="icones-menu">
           <Link to='/'>Home</Link>
           <Link to='/sabores'>Sabores</Link>
           <Link to='/sobre'>Sobre</Link>
        </nav>
        </div>
    </header>
)

export default Topo