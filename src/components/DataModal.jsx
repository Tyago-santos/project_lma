import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setShowModaData } from '../reducer/themeReducer/themeSlice';

// --- 0. Dados de Exemplo para Visualização ---

// Use este objeto quando for chamar o modal com dados reais
// const mockDataToView = {
//     nome: 'Bruno',
//     sobrenome: 'Santos',
//     idade: 23,
//     endereco: 'Bairro Guarani, Av. Principal',
//     organizacao: 'Quórum de Elderes',
//     dataDeBatismo: '2025-11-05',
//     descricao: 'Especialista em TI com foco em desenvolvimento web React.',
// };

// --- 1. Estilos Base (Reutilizados do seu código) ---

const commonTextStyle = css`
    color: #fff;
    font-size: 16px;
    padding: 10px 0;
`;

// --- 2. Componentes Estilizados (Reutilizados do seu código) ---

// 2.1. Wrapper com BLUR de fundo (Reutilizado)
const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    /* Usa a prop 'showModal' para controlar a visibilidade */
    display: ${({ showModal }) => (showModal === false ? 'none' : 'flex')};
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 0px 20px;
`;

// 2.2. Modal (Elemento de Vidro - Reutilizado)
const Modal = styled.div`
    // Alterado de 'form' para 'div'
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

    position: relative;
    width: 800px;
    max-height: 90vh;
    overflow-y: auto;
    border-radius: 20px;
    padding: 30px;
    color: #f1f1f1;

    @media (max-width: 375px) {
        max-height: 70vh;
    }

    @media (max-width: 556px) {
        max-height: 65vh;
    }
`;

// 2.3. Ícone/Botão de Fechar (Reutilizado)
const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    line-height: 1;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    transition: background-color 0.2s ease;
    z-index: 10;
    font-weight: 300;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

const ModalTitle = styled.h2`
    text-align: center;
    margin-bottom: 30px;
    color: #fff;
    font-weight: 600;
`;

const StyledButton = styled.button`
    /* Estilo de botão reutilizado do seu código */
    width: 100%;
    padding: 15px;
    margin-top: 20px;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.button};
    color: white;
    transition:
        background-color 0.3s ease,
        transform 0.1s ease;

    &:hover {
        background-color: #0056b3;
    }
    &:active {
        transform: scale(0.99);
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 20px; /* Adiciona espaçamento após a grade */
`;

// --- 3. Componentes de Visualização de Dados (Novo) ---

const DataContainer = styled.div`
    padding: 15px;
    border-radius: 10px;
    background: rgba(
        255,
        255,
        255,
        0.05
    ); /* Um fundo sutil para o bloco de dados */
    margin-bottom: 10px;
    ${commonTextStyle}
`;

const DataLabel = styled.span`
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7); /* Rótulo mais sutil */
    display: block;
    font-size: 14px;
    margin-bottom: 2px;
    padding: 5px;
`;

const DataValue = styled.span`
    font-weight: 400;
    color: #fff; /* Valor em destaque */
    display: block;
    font-size: 17px;
    padding: 5px;
    @media (max-width: 375px) {
        font-size: 12px;
    }
`;

// Componente para exibir um único campo de dado
function DataField({ label, value, isFullWidth = false }) {
    return (
        <DataContainer
            style={{ gridColumn: isFullWidth ? 'span 2' : 'span 1' }}
        >
            <DataLabel>{label}</DataLabel>
            <DataValue>{value || 'N/A'}</DataValue>
        </DataContainer>
    );
}

// Função para formatar as chaves (camelCase para texto legível)
const formatLabel = (key) => {
    // Ex: 'dataDeBatismo' -> 'Data De Batismo' -> 'Data de Batismo'
    let formatted = key.replace(/([A-Z])/g, ' $1');
    formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);
    return formatted.replace(/ De /g, ' de '); // Ajuste a preposição, se necessário
};

// --- 4. Componente Principal do Modal de Visualização ---

export function DataViewModal({ dataToView }) {
    const dispatch = useDispatch();
    const toggleModal = useSelector(({ theme }) => theme.showModalData);
    // Controla a visibilidade via Redux

    const handleCloseModal = () => {
        dispatch(setShowModaData({ showModalData: false }));
    };

    // Filtra campos para a grade principal e deixa a descrição em largura total
    const fieldsToDisplay = Object.entries(dataToView).filter(
        ([key]) => key !== 'descricao',
    );
    const description = dataToView.descricao;

    // Verifica se os dados existem antes de renderizar
    if (!dataToView || fieldsToDisplay.length === 0) {
        return null; // ou renderiza uma mensagem de erro
    }

    return (
        <Wrapper
            onClick={(e) => {
                // Fecha o modal apenas se clicar no fundo (Wrapper)
                if (e.target === e.currentTarget) handleCloseModal();
            }}
            showModal={toggleModal}
        >
            <Modal>
                <CloseButton
                    type="button"
                    onClick={handleCloseModal}
                    aria-label="Fechar Modal de Visualização"
                >
                    &times;
                </CloseButton>

                <ModalTitle>Visualização de Registro</ModalTitle>

                {/* Grade de Campos (2 colunas) */}
                <Grid>
                    {fieldsToDisplay.map(([key, value]) => (
                        <DataField
                            key={key}
                            label={formatLabel(key)}
                            value={String(value)}
                        />
                    ))}
                </Grid>

                {/* Descrição/Notas (Largura Total) */}
                <DataField
                    label="Descrição/Notas"
                    value={description}
                    isFullWidth
                />

                <StyledButton type="button" onClick={handleCloseModal}>
                    Ok, Fechar
                </StyledButton>
            </Modal>
        </Wrapper>
    );
}

export default DataViewModal;
