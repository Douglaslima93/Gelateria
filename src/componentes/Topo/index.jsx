import React from "react";
import './style.css'
import { Link } from "react-router-dom";

const Topo = () => (
    <header>    
        <section>
           <Link to='/'>Home</Link>
           <Link to='/sabores'>Sabores</Link>
           <Link to='/sobre'>Sobre</Link>
        </section>
        <section>
            <img src="./img/logo.png" alt="logo"/>
        </section>
    </header>
)

export default Topo