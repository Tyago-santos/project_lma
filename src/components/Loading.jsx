import React from 'react';

// Você pode importar sua imagem SVG ou PNG diretamente se estiver no seu projeto
// import loadingImage from './your-image.svg';
// Ou defina-a como uma URL, como no exemplo abaixo
const LOADING_IMAGE_URL = '/logo.png'; // Substitua pela URL da sua imagem

const LoadingSpinner = ({ darkMode = false }) => {
    // Cores para Light Mode
    const lightModeColors = {
        backgroundColor: '#fff',
        spinnerBorderColor: '#a80853',
        textColor: '#a80853',
        imageBackgroundColor: 'white',
    };

    // Cores para Dark Mode
    const darkModeColors = {
        backgroundColor: '#333333',
        spinnerBorderColor: '#ff69b4', // Um rosa mais vibrante para dark mode
        textColor: '#ff69b4',
        imageBackgroundColor: '#444444',
    };

    const colors = darkMode ? darkModeColors : lightModeColors;

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundColor: colors.backgroundColor,
                transition: 'background-color 0.3s ease',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    position: 'relative', // Para posicionar a imagem e as bordas
                    width: '180px', // Ajuste o tamanho do contêiner do spinner
                    height: '180px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* As bordas giratórias */}
                <div
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        border: `6px solid ${colors.spinnerBorderColor}`, // Primeira borda
                        outline: `6px solid ${colors.spinnerBorderColor}`, // Segunda borda
                        outlineOffset: '3px', // Espaço entre as bordas
                        animation: 'spin 2s linear infinite', // Animação de rotação para as bordas
                        boxSizing: 'border-box', // Garante que padding e border não aumentem o tamanho
                        borderColor: `${colors.spinnerBorderColor} transparent ${colors.spinnerBorderColor} transparent`, // Efeito de borda parcialmente visível para giro mais interessante
                        transition:
                            'border-color 0.3s ease, outline-color 0.3s ease',
                    }}
                ></div>

                {/* A imagem central (não gira) */}
                <div
                    style={{
                        position: 'relative', // Mantém a imagem no centro
                        width: 'calc(100% - 30px)', // Ajuste o tamanho da imagem dentro das bordas
                        height: 'calc(100% - 30px)',
                        borderRadius: '50%',
                        backgroundColor: colors.imageBackgroundColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1, // Garante que a imagem fique por cima das bordas giratórias
                        transition: 'background-color 0.3s ease',
                    }}
                >
                    <img
                        src={LOADING_IMAGE_URL}
                        alt="Loading"
                        style={{
                            width: '70%',
                            height: '70%',
                            objectFit: 'contain',
                        }}
                    />
                </div>
            </div>
            <p
                style={{
                    marginTop: '25px',
                    fontSize: '1.4em',
                    fontWeight: 'bold',
                    color: colors.textColor,
                    transition: 'color 0.3s ease',
                }}
            ></p>

            {/* Estilos para a animação de giro */}
            <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default LoadingSpinner;
