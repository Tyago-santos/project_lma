// style.js

import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.background}s;
    padding: 20px;
`;

export const Card = styled.div`
    border-radius: 12px;
    padding: 30px;
    width: 100%;
    max-width: 1200px;
`;

export const TitlePerfil = styled.h1`
    font-size: 2em;
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 25px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        margin-right: 10px;
        color: ${(props) => props.theme.colors.button};
    }
`;

export const ContainerInforCard = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px dashed #eee;

    &:last-child {
        border-bottom: none;
    }
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
    color: ${(props) => props.theme.colors.button}; /* Cor para os ícones */
    font-size: 1.2em;
    min-width: 25px; /* Garante que todos os ícones tenham o mesmo espaço */
    justify-content: center;
`;

export const Title = styled.span`
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};
    flex: 1;
    font-size: 1.5rem;
`;

export const InforTitle = styled.span`
    color: ${(props) => props.theme.colors.button};
    font-weight: 500;
    text-align: right;
    font-size: 1.3rem;
`;

export const DescriptionBox = styled.div`
    margin-top: 25px;
    padding-top: 15px;
    border-top: 1px solid #ddd;

    p {
        color: #666;
        line-height: 1.6;
        margin-top: 10px;
        background-color: #f8f8f8; /* Fundo leve para destaque */
        padding: 10px;
        border-radius: 6px;
    }
`;

export const DescriptionTitle = styled.h3`
    display: flex;
    align-items: center;
    font-size: 1.1em;
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 10px;

    svg {
        color: #ffa500; /* Cor de destaque para o ícone de informação */
    }
`;
