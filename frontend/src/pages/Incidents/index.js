import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';
import logoimage from '../../assets/logo.svg';

export default function Incidents(){
    return(
        <div className="incidents-container">
            <div className="content">
                <section>
                    <img src={logoimage} alt="Be The Hero" />
                    <h1>Cadastrar novo Caso</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    
                    <Link className="back-link" to='/profiles'>
                        <FiArrowLeft size={16} color="#E02041" />
                       Voltar para home
                    </Link>

                </section>
                <form>  
                    <input placeholder="Título do Caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em R$" />
                                      
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
        
    );
}