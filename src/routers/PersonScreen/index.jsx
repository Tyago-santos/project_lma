import React from 'react';
import { useLocation } from 'react-router-dom';
import {
    Wrapper,
    Title,
    Card,
    InforTitle,
    ContainerInforCard,
    TitlePerfil,
    IconContainer,
    DescriptionBox,
    DescriptionTitle,
} from './style';

import api from '../../api';

import {
    FaUser,
    FaIdCard,
    FaMapMarkerAlt,
    FaBuilding,
    FaTransgender,
    FaCalendarAlt,
    FaInfoCircle,
} from 'react-icons/fa';

const iconMap = {
    nome: <FaUser />,
    sobrenome: <FaIdCard />,
    idade: <FaCalendarAlt />,
    sexo: <FaTransgender />,
    endereco: <FaMapMarkerAlt />,
    organizacao: <FaBuilding />,
    dataDeBatismo: <FaCalendarAlt />,
};

const formatKey = (key) => {
    const formatted =
        key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
    return formatted.replace(/De/g, 'de'); // Corrige para 'Data de Batismo'
};

const PersonScreen = () => {
    const location = useLocation();
    const { id } = location.state || {};

    const memberData = api.find((member) => member.id === id);

    if (!memberData) {
        return (
            <Wrapper>
                <Card>
                    <TitlePerfil>Erro: Perfil Não Encontrado</TitlePerfil>
                    <p>O membro com ID {id} não foi encontrado.</p>
                </Card>
            </Wrapper>
        );
    }

    const { descricao, ...infoData } = memberData;
    const infoArr = Object.entries(infoData);

    return (
        <Wrapper>
            <Card>
                <TitlePerfil>
                    <FaUser style={{ marginRight: '10px' }} />
                    Perfil de {memberData.nome} {memberData.sobrenome}
                </TitlePerfil>

                {infoArr.map(([key, value], index) => {
                    // Ignora o campo 'id'
                    if (key === 'id') return null;

                    return (
                        <ContainerInforCard key={index}>
                            <IconContainer>{iconMap[key]}</IconContainer>
                            <Title>{formatKey(key)}</Title>
                            <InforTitle>{value}</InforTitle>
                        </ContainerInforCard>
                    );
                })}

                {descricao && (
                    <DescriptionBox>
                        <DescriptionTitle>
                            <FaInfoCircle style={{ marginRight: '8px' }} />
                            Observações
                        </DescriptionTitle>
                        <p>{descricao}</p>
                    </DescriptionBox>
                )}
            </Card>
        </Wrapper>
    );
};

export default PersonScreen;
