import React from 'react';
import styled from 'styled-components';
            import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

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
    color:${props => props.theme.colors.text}};

`;

const Description = styled.p`
    color: ${props => props.theme.colors.text};
    opacity: 0.9;
    margin: 8px 0;
`;

const InfoWrapper = styled.div`
    margin-top: 16px;
    display: flex;
    align-items: center;
    gap: 8px; /* Espaço entre o ícone e o texto */
    color: ${props => props.theme.colors.text};
    opacity: 0.8;
`;

const InfoText = styled.span`
    font-size: 0.9rem;
`;

const LinkMap = styled.a`
    text-decoration: none; /* Remove o sublinhado padrão */
    color: inherit; /* Herda a cor do InfoWrapper */
    &:hover {
        text-decoration: underline; /* Adiciona sublinhado no hover */
    }
`;

const LessonPlan = () => {
    return (
    <Wrapper>

        <Title>Noite familiar na capela</Title>
        <Description>

            Noite Familiiar na casa do irmão lucas da silva, as 19:00 da noite na quarta feira
        </Description>

        <InfoWrapper>
            <FaRegCalendarAlt size={16} />
            <InfoText>12-3-2025, 19:00</InfoText>
        </InfoWrapper>
        
        <InfoWrapper>
            <IoLocationOutline size={18} />
            <LinkMap href="https://www.google.com/maps/search/?api=1&query=Rua+sete+de+setembro,+n+107,+bairro+centro" target="_blank" rel="noopener noreferrer">
                <InfoText>Rua sete de setembro, n 107, bairro centro</InfoText>
            </LinkMap>
        </InfoWrapper>
        
      </Wrapper>
    );
  };
  
export default LessonPlan;
