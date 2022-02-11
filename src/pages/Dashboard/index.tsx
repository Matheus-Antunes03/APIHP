import React, { useState, FormEvent } from 'react';
import api from '../../services/api';
                
import { Container, Title, Form, Personagens } from './styles';

interface NomePe {
    name: string;
    house: string;
    species: string;
    gender: string;
    wand: string;
} 

const Dashboard: React.FC = () => {
    const [newName, setNewName] = useState('');
    const [personagens, setName] = useState<NomePe[]>([]);

    const pesquisarPe = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
             const response = await api.get(`${newName}/json/`);
             const nameData = response.data;

             setName([...personagens, nameData]);

             console.log(personagens);
        } catch(err){

        }
    };

    return (
        <Container>
            <Title>Harry Potter API</Title>

            <Form onSubmit={pesquisarPe}>
                <input type = "text" placeholder = "Escreva o nome de um personagem..."
                onChange={e => setNewName(e.target.value)}/>
                <button type = "submit">Pesquisar</button>
            </Form>

            <Personagens>
                {personagens.map(name => (
                    <a href = '#'>
                        <p className = 'Nome'>{name.name}</p>
                        <div>
                            <strong>{name.house}</strong>
                            <p>{name.species}</p>
                            <p>{name.gender}</p>
                            <p>{name.wand}</p>
                        </div>
                    </a>
                ))}
            </Personagens>
        </Container>
    );
};

export default Dashboard;