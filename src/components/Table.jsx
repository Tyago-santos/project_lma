import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wapper = styled.table`
    width: 100%;
    color: ${(props) => props.theme.colors.text};

    & th {
        background-color: ${(props) => props.theme.colors.surface};
        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.text};
    }

    & tr {
        text-align: center;
    }

    & tr:hover td {
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.surface};
    }
`;

const Table = ({ Person }) => {
    console.log(Person);
    const navigate = useNavigate();

    return (
        <Wapper>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>Idade</th>
                    <th>Endereço</th>
                    <th>Organização</th>
                    <th>Sexo</th>
                </tr>
            </thead>

            <tbody>
                {Person.map((item, index) => (
                    <tr
                        onClick={() =>
                            navigate('/person', { state: { id: index } })
                        }
                        key={index}
                    >
                        <td>{item.nome}</td>
                        <td>{item.sobrenome}</td>
                        <td>{item.idade}</td>
                        <td>{item.endereco}</td>
                        <td>{item.organizacao}</td>
                        <td>{item.sexo}</td>
                    </tr>
                ))}
            </tbody>
        </Wapper>
    );
};

export default Table;
