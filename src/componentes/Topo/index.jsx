import React from "react";
import './style.css'
import { Link } from "react-router-dom";

const Topo = () => (
    <header>    
        <img src="./img/logo.png" alt="logo"/>

        <section className="icones-menu">
           <Link to='/'>Home</Link>
           <Link to='/sabores'>Sabores</Link>
           <Link to='/sobre'>Sobre</Link>
        </section>
        
    </header>
)

export default Topo