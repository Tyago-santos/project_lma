import React from 'react';
import styled, { useTheme } from 'styled-components';
import Switch from 'react-switch';
import { useDispatch, useSelector } from 'react-redux';

import ButtonActions from './ButtonActions';
import { changeTheme } from '../reducer/themeReducer/themeSlice';

const Wrapper = styled.header`
    height: 120px;
    width: 100%;
`;
const Container = styled.div`
    max-width: 1200px;
    margin: 0px auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Logo = styled.a`
    height: 100px;
    width: 100px;
    display: block;

    & img {
        border-radius: 20px;
        max-height: 100%;
        max-width: 100%;
        display: block;
        bacground-color: #fff;
    }
`;
const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
`;

const Header = () => {
    const theme = useSelector((state) => state.theme.themeDark);
    const dispatch = useDispatch();
    const handleChangeTheme = () => {
        dispatch(changeTheme({ themeDark: !theme }));
    };

    const themeChecked = useTheme();

    return (
        <Wrapper>
            <Container>
                <Logo>
                    <img src="/logo.png" alt="logo" />
                </Logo>
                <Nav>
                    <Switch
                        height={20}
                        width={60}
                        onChange={handleChangeTheme}
                        checked={theme}
                        draggable={false}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        onColor={themeChecked.colors.text}
                        offColor={themeChecked.colors.button}
                        onHandleColor={themeChecked.colors.button}
                    />
                    <ButtonActions Icone={true}>
                        Criar nova tabela
                    </ButtonActions>
                </Nav>
            </Container>
        </Wrapper>
    );
};

export default Header;
