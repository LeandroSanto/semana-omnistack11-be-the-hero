import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImage from '../../assets/logo.svg';

export default function Incidents(){
    const history = useHistory();

    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ value, setValue ] = useState('');

    const data = {
        title,
        description,
        value,
    };

    const ongId = localStorage.getItem('ongId');


    async function handleNewIncident(e){
        e.preventDefault();

        try{
            await api.post('incidents',data,{
                headers:{
                    Authorization:ongId,
                }
            });
            history.push('/profiles');
        } catch (err){
            alert('Não foi possivel registrar o novo Incidente')
        }
    };

    return(
        <div className="incidents-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be The Hero" />
                    <h1>Cadastrar novo Caso</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    
                    <Link className="back-link" to='/profiles'>
                        <FiArrowLeft size={16} color="#E02041" />
                       Voltar para home
                    </Link>

                </section>
                <form>  
                    <input 
                    placeholder="Título do Caso" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />                    
                    <textarea 
                    placeholder="Descrição" 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                    placeholder="Valor em R$" 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    />                                      
                    <button onClick={handleNewIncident} className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
        
    );
}