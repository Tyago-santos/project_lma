import React from 'react';
import styled, { useTheme } from 'styled-components';
import Switch from 'react-switch';
import { useDispatch, useSelector } from 'react-redux';
import { FaMoon, FaSun } from 'react-icons/fa'; // Importando ícones

import ButtonActions from './ButtonActions';
import { changeTheme, setShowModal } from '../reducer/themeReducer/themeSlice';

// --- Componentes Estilizados (Refatorados) ---
const Wrapper = styled.header`
    height: 80px; /* Reduz a altura para um visual mais compacto */
    width: 100%;
    background-color: ${({ theme }) =>
        theme.colors.backgroundHeader}; /* Cor dinâmica do tema */
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.3s ease-in-out; /* Suaviza a transição de cores */
`;
const Container = styled.div`
    max-width: 1280px; /* Aumenta um pouco o container */
    margin: 0px auto;
    height: 100%;
    padding: 0 20px; /* Adiciona padding lateral */
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Logo = styled.a`
    height: 50px; /* Tamanho do logo mais compacto */
    width: auto;
    display: block;
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;

    & img {
        height: 50px;
        width: 50px;
        border-radius: 50%; /* Torna o logo circular */
        object-fit: cover;
        margin-right: 10px;
        border: 2px solid ${({ theme }) => theme.colors.button}; /* Borda de destaque */
    }
`;
const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem; /* Aumenta a distância entre os itens */
`;
const CustomSwitch = styled(Switch)`
    /* Estilos adicionais se necessário */
`;

const Header = () => {
    // theme é um booleano (true=Dark, false=Light)
    const isDarkTheme = useSelector((state) => state.theme.themeDark);
    const dispatch = useDispatch();

    // Objeto do tema atual (contém theme.colors)
    const themeContext = useTheme();

    const handleChangeTheme = () => {
        dispatch(changeTheme({ themeDark: !isDarkTheme }));
    };

    const handleOpenModal = () => {
        dispatch(setShowModal({ showModal: true }));
    };

    // Ícones customizados para o Switch
    const iconStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        color: 'white',
        fontSize: 12,
    };

    return (
        <Wrapper>
            <Container>
                <Logo href="/">
                    <img src="/logo.png" alt="Logo" />
                </Logo>
                <Nav>
                    <CustomSwitch
                        height={24}
                        width={48}
                        onChange={handleChangeTheme}
                        checked={isDarkTheme}
                        draggable={false}
                        // --- Cores e Ícones Aprimorados ---
                        onColor={themeContext.colors.text}
                        offColor={themeContext.colors.button}
                        onHandleColor={themeContext.colors.button}
                        offHandleColor={themeContext.colors.background}
                        // Ícones para clareza visual
                        checkedIcon={
                            <div style={iconStyles}>
                                <FaMoon
                                    color={themeContext.colors.background}
                                />
                            </div> // Ícone da Lua para Dark Mode (checked=true)
                        }
                        uncheckedIcon={
                            <div style={iconStyles}>
                                <FaSun />
                            </div> // Ícone do Sol para Light Mode (checked=false)
                        }
                    />
                    <ButtonActions onClick={handleOpenModal} Icone={true}>
                        Criar nova tabela
                    </ButtonActions>
                </Nav>
            </Container>
        </Wrapper>
    );
};

export default Header;
