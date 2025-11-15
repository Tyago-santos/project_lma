import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }


    
    & ::-webkit-scrollbar {
    width: 8px;
    }

    /* ::-webkit-scrollbar-thumb - A alça (o botão que move) */
    & ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.button}; /* Cor principal */
    border-radius: 4px;
    }

    /* ::-webkit-scrollbar-track - A trilha por onde a alça desliza */
    &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.surface};
    border-radius: 4px;
    }

    /* Estilo ao passar o mouse */
    &::-webkit-scrollbar-thumb:hover {
        background-color: ${(props) => props.theme.colors.button};
    }

    &::-webkit-scrollbar-button {
        display: none; 
    }


    html, body {
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family:'Roboto';

    background-color:${(props) => props.theme.colors.background};

    }

    img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    }

    input, button, textarea, select {
    font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    }

    a {
    text-decoration: none;
    color: inherit;
    }

    ul, ol {
    list-style: none;
    }

    button {
    background: none;
    border: none;
    cursor: pointer;
    }



`;
