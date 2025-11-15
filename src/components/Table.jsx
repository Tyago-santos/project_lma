import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setShowModaData } from '../reducer/themeReducer/themeSlice';

const Wapper = styled.table`
    width: 100%;
    color: ${(props) => props.theme.colors.text};
    @media (max-width: 375px) {
    }

    & th {
        background-color: ${(props) => props.theme.colors.surface};
        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.text};
        text-align: center;
        @media (max-width: 375px) {
            font-size: 0.7rem;
        }

        @media (max-width: 556px) {
            font-size: 0.7rem;
        }
    }

    & tr {
        text-align: center;
        @media (max-width: 375px) {
            font-size: 0.7em;
        }

        @media (max-width: 556px) {
            font-size: 0.7rem;
        }
    }

    & tr:hover td {
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.surface};
    }

    & th,
    & td {
        /* Largura uniforme: 
     Se houver 4 colunas, use 25% (100% / 4)
     Se houver 3 colunas, use 33.33% */
        width: calc(100% / 5);
        text-align: center;
    }
`;

const Table = ({ Person, onSend }) => {
    const dispatch = useDispatch();
    //const toggleModal = useSelector(({ theme }) => theme.showModalData); // Controla a visibilidade via Redux

    const handleOpenModalData = (value) => {
        dispatch(setShowModaData({ showModalData: true }));
        onSend(value);
    };

    return (
        <Wapper>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Data de Batismo</th>
                    <th>Idade</th>
                    <th>Organização</th>
                </tr>
            </thead>

            <tbody>
                {Person.map((item) => (
                    <tr onClick={() => handleOpenModalData(item)} key={item.id}>
                        <td>{item.nome}</td>
                        <td>
                            {item.dataDeBatismo
                                .toDate()
                                .toLocaleDateString('pt-br')}
                        </td>
                        <td>{item.idade}</td>
                        <td>{item.organizacao}</td>
                    </tr>
                ))}
            </tbody>
        </Wapper>
    );
};

export default Table;
