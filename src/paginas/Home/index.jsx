import React from "react";
import './style.css'
import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";

const Home = () => (
    <div>
        <Topo/>

        <main>
        <section className="banner">
            <h1>SORVETE ARTESANAL</h1>
        </section>

        <section className="sabores">
            <div>
                <img src="./img/banner-sabores.jpg" alt="sabores"/>
            </div>

            <div>
                <h2>NOSSOS SABORES</h2>
                <span>Novos e deliciosos!</span>
                <p>Sorvete bom é aquele feito com os melhores imgredientes!
                    Aqui na gelateria todos os nossos produtos são natuais, á
                    base de frutas e sem nenhum convervante! Também temos 
                    opções sem lactose e sem açucar. Venha conhecer e 
                    perceber que tem como o sorvete ser delicioso e saudável ao
                    mesmo tempo!
                </p>
            </div>
        </section>

        <section className="eventos">
            <div>
                <h2>NOSSOS EVENTOS</h2>
                <span>Delicias de sorvete!</span>
                <p>Mais so que uma sorveteria, uma extensão da sua
                    casa! Estamos aqui prontinhos para te atender e 
                    oferecer os melhores eventos com os melhores
                    sorvetes da sua vida! Venha nos conhecer e passar
                    um tempo aqui com a gente.
                </p>
            </div>

            <div>
                <img src="./img/eventos-image.jpg" alt="eventos"/>
            </div>
        </section>

        <section className="sobre">
            <div>
                <img src="./img/sobre-image.jpg" alt="sobre"/>
            </div>

            <div>
                <h2>SOBRE NÓS</h2>
                <span>Alegria em cada casquinha!</span>
                <p>Venha tomar o melhor sorvete da região aqui com a
                    gente! Nós estamos há anos no mercado produzindo
                    o que tem de melhor para o nosso cliente e você não
                    pode ficar fora dessa. Venha nos fazer uma visita e 
                    aproveite o melhor atendimento e o melhor sorveteda 
                    da cidade.
                </p>
            </div>
        </section>
        </main>

        <Rodape/>

    </div>
)

export default Home