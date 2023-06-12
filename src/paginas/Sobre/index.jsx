import React from "react";
import './style.css'
import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";

const Sobre = () => (
    <div>
        <Topo/>
    <main>

    <section className="banner-sobre">
        <h1>A GELATERIA</h1>
    </section>

    <section className="conteudo-sobre">
        <h2>Sobre Nós</h2>
        <span>Nós simplesmente amamos sorvete!</span>
        <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete prosuzido. Fazemos o melhor sorvete
            para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas
            para a produção final so sorvete. Vendemos tanto para varejo como para atacado.
            <br/><br/>
            Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar
            junto com a familia. Também vendemos para estabelecimentos e criamos eventos como festa de aniversario, formaturas
            e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o
            melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
        </p>
    </section>

    <section className="imagem-gelateria">
        <img src="./img/sobre-image.jpg" alt="sobre-image"/>
        <img src="./img/sorveteria.jpg" alt="sorveteria"/>
    </section>
    </main>
    <Rodape/>
    </div>
)

export default Sobre