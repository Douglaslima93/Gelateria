import React from "react";
import './style.css'

const Rodape = () => (
    <footer>
        <div className="conteudo-footer">
        <img src="./img/logo.png"/>

        <div className="texto-endereco">
            <h3>ENDEREÇO</h3>
            <p>Av.Bernadino de Campos, 98 São Paulo, SP 12345-678</p>
        </div>

        <div className="texto-contato">
            <h3>CONTATO</h3>
            <p><a href="mailto:info@meusite.com">info@meusite.com</a></p>
            <p><a href="tel:+551134567890">(11) 3456-7890</a></p>
        </div>

        <div className="texto-horario">
            <h3>HORÁRIOS</h3>
            <p>ABERTO TODOS OS DIAS</p>
            <p>10:00 - 22:00</p>
        </div>

        </div>

        <div className="texto-rodape">
            <p>Gelateria. Orgulhosamente desenvolvido por "Douglas Lima"</p>
        </div>
    </footer>
)

export default Rodape