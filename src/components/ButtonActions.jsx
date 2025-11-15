import React from 'react';
import styled from 'styled-components';

// --- Componente Estilizado Refatorado ---

// Nota: Renomeei a prop Icone para hasIcon para clareza
const StyledButton = styled.button`
    /* Cores e Aparência Base */
    background-color: ${(props) => props.theme.colors.button};
    color: ${(props) =>
        props.theme.colors.textInverted ||
        '#fff'}; /* Usa cor de texto invertida ou branco */
    border: 1px solid
        ${({ $active, theme }) => ($active ? '#fff' : theme.colors.button)}; /* Borda sólida primária */

    @media (max-width: 375px) {
        font-size: 5px;
        padding: 0.5em 0.5em;
    }

    @media (max-width: 320px) {
        font-size: 40px;
        padding: 1em 1em;
    }

    @media (max-width: 556px) {
        font-size: 8px;
        padding: 1em 1rem;
    }

    /* Layout */
    outline: none;
    padding: 0.6em 1.5rem; /* Aumenta o padding para melhor toque/clique */
    border-radius: 8px; /* Borda mais arredondada e moderna */
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600; /* Levemente mais ousado */
    text-transform: uppercase; /* Adiciona um toque de design */

    /* Suaviza as mudanças de estado */
    transition: all 0.3s ease-in-out;

    /* Estilo quando houver ícone (hasIcon) */
    display: ${(props) => (props.hasIcon ? 'inline-flex' : 'block')};
    gap: 0.5rem; /* Espaçamento entre texto e ícone */
    justify-content: center;
    align-items: center;

    /* Efeito Hover Aprimorado */
    &:hover {
        /* Inverte as cores para um efeito "fantasma" */
        background-color: white;
        border: 1px solid ${(props) => props.theme.colors.button};
        color: ${(props) => props.theme.colors.button};
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra sutil ao hover */
    }

    &.active {
        /* Inverte as cores para um efeito "fantasma" */
        background-color: white;
        border: 1px solid ${(props) => props.theme.colors.button};
        color: ${(props) => props.theme.colors.button};
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra sutil ao hover */
    }

    /* Estilo do ícone dentro do botão (se for um SVG) */
    & svg {
        transition: color 0.3s;
    }
`;

// --- Componente Funcional Refatorado ---

/**
 * Componente reutilizável para ações.
 * @param {React.ReactNode} children - Conteúdo do botão (texto e/ou ícone).
 * @param {function} onClick - Função a ser executada ao clicar.
 * @param {boolean} hasIcon - Indica se o botão contém um ícone para ajustar o layout.
 */
const ButtonActions = ({ children, onClick, Icone }) => {
    // Melhor forma de passar a prop Icone para o styled-component
    const hasIcon = Icone === true;

    return (
        <StyledButton onClick={onClick} hasIcon={hasIcon}>
            {children}
        </StyledButton>
    );
};

export default ButtonActions;
