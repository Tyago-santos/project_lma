import React from "react";
import styled from "styled-components";

import ButtonActions from "./ButtonActions";

import { IoIosAdd } from "react-icons/io";

import Switch from "react-switch";

const Wrapper = styled.header`
    height:120px;
    width:100%;




`;
const Container = styled.div`
    max-width:1200px;
    margin:0px auto;
    height:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;

`;
const Logo = styled.a`

    height:100px;
    width:100px;
    display:block;
    
    
    & img{
        border-radius:20px;
        max-height:100%;
        max-width:100%;
        display:block;
        bacground-color: #fff;
    }

`;
const Nav = styled.nav`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:1.2rem;



`;




const Header = ()=>{
    return(
        <Wrapper>
            <Container>
                <Logo>   
                    <img src="/logo.png" alt="logo"/>
                </Logo>
                <Nav>
                    <Switch
                        height={20}
                        width={60}
                        onChange={()=> {}}
                        checked={true}
                        draggable={false}

                    />
                    <ButtonActions Icone={true}>Criar nova tabela</ButtonActions>
                </Nav>
            </Container>
        </Wrapper>
    );

}



export default Header;
