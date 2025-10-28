import React from "react";

import styled from "styled-components";


const Button = styled.button`
    background-color:${props => props.theme.colors.button};
    border:none;
    outline:none;
    padding:.5em 1rem;
    border-radius:5px;
    color: #fff;
    display: ${props => props.Icone ? 'flex': 'block'};
    justify-content:space-between;
    align-items:center;
    border: 1px solid transparent ;
    font-weight:bold;
    trasition .3s all;

    &:hover{
        background-color:${props => props.theme.colors.surface};     
        border: 1px solid ${props => props.theme.colors.button} ;       
        color:${props => props.theme.colors.button} ;      
        
        trasition .3s all;
        
    }

    

    
`;

const ButtonActions = ({children, Onclick, })=>{
    return <Button Onclick={Onclick}  >
        {children }
    </Button>


}


export default ButtonActions;