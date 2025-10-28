import react from 'react';
import styled from 'styled-components'; 

const Wrapper = styled.div`

    select{
        padding:8px;
        outline:none;
        border:none;
        font-family:'Roboto';
        background-color:${props => props.theme.colors.surface};
        color:${props => props.theme.colors.text};
        border: 1px solid ${props => props.theme.colors.button};
        border-radius:5px;


        &:hover{
            cursor:pointer;
            background-color:${props => props.theme.colors.button};
            color:#fff;

        
        }
    }
    

    margin-right: 10px; 

`;


const  ButtonSelected = () => {
    return (
    <Wrapper>
        <select name="" id="">
            <option value="Todos">Todos</option>
            <option value="Quórun de Elderes">Quórun de Elderes</option>
            <option value="Sociedade de Socorro">Sociedade de Socorro</option>
            <option value="Moças">Moças</option>
            <option value="Primária">Primária</option>
            <option value="Rapaz">Rapaz</option>
        </select>
        
    </Wrapper>

    );

}


export default ButtonSelected;