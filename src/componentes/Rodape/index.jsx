import React from "react";
import './style.css'

const Rodape = () => (
    <footer>
        <div>
        <img src="./img/logo.png"/>

        <div>
            <h2>ENDEREÇO</h2>
            <p>Av.Bernadino de Campos, 98 São Paulo, SP 12345-678</p>
        </div>

        <div>
            <h2>CONTATO</h2>
            <p><a href="mailto:info@meusite.com">info@meusite.com</a></p>
            <p><a href="tel:+551134567890">(11) 3456-7890</a></p>
        </div>

        <div>
            <h2>HORÁRIOS</h2>
            <p>ABERTO TODOS OS DIAS</p>
            <p>10:00 - 22:00</p>
        </div>

        </div>

        <div>
            <p>Gelateria. Orgulhosamente desenvolvido por "Douglas Lima"</p>
        </div>
    </footer>
)

export default Rodape