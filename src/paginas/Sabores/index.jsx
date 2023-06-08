import React from "react";
import './style.css'
import Topo from '../../componentes/Topo'
import Rodape from '../../componentes/Rodape'

const Sabores = () => (
    
    <div>
        <Topo/>
        <main className="conteudo-sabores">

            <section className="banner-sabores">
                <h1>NOSSOS SABORES</h1>
            </section>

            <section className="sabores-de-sorvete">

                <h2>SABORES DE SORVETE</h2>

                <div className="opcoes-de-sabores">
                <div>
                    <img src="./img/sabor-oreo.png" alt="sabor-oreo"/>
                    <span>Sorvete de Oreo</span>
                    <p>Delicioso sorvete sabor Oreo.
                        Uma explosão de sabor.
                    </p>
                </div>

                <div>
                    <img src="./img/sabor-pistache.png" alt="sabor-pistache"/>
                    <span>Sorvete Pistache</span>
                    <p>Cremoso sorvete sabor
                        pistache com pedacinhos de
                        semente.
                    </p>
                </div>

                <div>
                    <img src="./img/sabor-cookies-avela.png" alt="sabor-cookies"/>
                    <span>Sorvete Cookies & Avelã</span>
                    <p>O nosso melhor sorvete. Você
                        vai adorar o sabor.
                    </p>
                </div>

                <div>
                    <img src="./img/sorbet-kiwi.png" alt="sabor-kiwi"/>
                    <span>Sorvete de Kiwi</span>
                    <p>Delicioso e refrescante sorvete
                        sabor kiwi. Rico em vitamina C.
                    </p>
                </div>

                <div>
                    <img src="./img/sorbet-morango.png" alt="sabor-morango"/>
                    <span>Sorvete de Morango</span>
                    <p>Sorvete de morango gourmet.
                        Tradicional e saboroso.
                    </p>
                </div>

                <div>
                    <img src="./img/sorbet-limao.png" alt="sabor-limao"/>
                    <span>Sorvete de Limão Siciliano</span>
                    <p>O incrivel sorvete gourmet de
                        limão siciliano vai te encontrar.
                    </p>
                </div>

                </div>

            </section>

        </main>
        <Rodape/>
    </div>
)

export default Sabores