import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border: 2px dashed ${props => props.theme.colors.button};
    border-radius:10px;
    padding:10px;
    width: 100%;
    
    margin-bottom:12px;

    cursor:pointer;

    &:hover{
        background-color: ${props => props.theme.colors.surface};
    }

`;

const Title = styled.span`
    font-family:'Roboto';
    font-weight:bold;
    font-size:1.2rem;

`;

const Description = styled.p``;

const Date = styled.span`
    display:block;
`;
const Addresses =  styled.span`
    display:block;
    text-style:italic;

`;
const LinkMap = styled.a``;



const LessonPlan = () => {
    return (
    <Wrapper>

        <Title>Noite familiar na capela</Title>
        <Description>

            Noite Familiiar na casa do irmão lucas da silva, as 19:00 da noite na quarta feira
        </Description>

        <Date>12-3-2025, 19:00</Date>

         <Addresses>
            Rua sete de setembro, n 107, bairro centro
        </Addresses>

        <LinkMap href='google.com'>
            Link do Endereço
        </LinkMap>
        
      </Wrapper>
    );
  };
  
export default LessonPlan;
