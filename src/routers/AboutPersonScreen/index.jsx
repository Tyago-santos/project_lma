import React from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';

// =====================
// 1. Estilos Base
// =====================

const commonTextStyle = css`
    color: #fff;
    font-size: 16px;
    padding: 10px 0;
`;

// =====================
// 2. Layout da Página
// =====================

const PageWrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    background: ${(props) => props.theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
`;

const Container = styled.div`
    width: 100%;
    max-width: 900px;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(8px);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
`;

const Title = styled.h1`
    text-align: center;
    margin-bottom: 30px;
    color: ${(props) => props.theme.colors.text};
`;

// =====================
// 3. Grid e Campos
// =====================

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
`;

const DataContainer = styled.div`
    border-radius: 10px;
    background: ${(props) => props.theme.colors.surface};
    ${commonTextStyle}
`;

const DataLabel = styled.span`
    padding: 0px 0px 0px 15px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.text};
    display: block;
    font-size: 14px;
    margin-bottom: 4px;
`;

const DataValue = styled.span`
    padding: 0px 0px 0px 15px;

    font-size: 17px;
    color: ${(props) => props.theme.colors.text};

    @media (max-width: 375px) {
        font-size: 13px;
    }
`;

function DataField({ label, value, isFullWidth = false }) {
    return (
        <DataContainer
            style={{ gridColumn: isFullWidth ? 'span 2' : 'span 1' }}
        >
            <DataLabel>{label}</DataLabel>
            <DataValue>{value || 'N/A'}</DataValue>
        </DataContainer>
    );
}

// =====================
// 4. Botões
// =====================

const ButtonGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 30px;
`;

const Button = styled.button`
    padding: 15px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    background-color: ${(props) => props.theme.colors.button};
    color: #fff;

    &:hover {
        background-color: #0056b3;
    }
`;

// =====================
// 5. Utils
// =====================

const formatLabel = (key) => {
    let formatted = key.replace(/([A-Z])/g, ' $1');
    formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);
    return formatted.replace(/ De /g, ' de ');
};

// =====================
// 6. Página Principal
// =====================

export default function DataViewPage({ data }) {
    const navigate = useNavigate();

    if (!data) return null;

    const fields = Object.entries(data).filter(([key]) => key !== 'descricao');

    return (
        <PageWrapper>
            <Container>
                <Title>Visualização de Registro</Title>

                <Grid>
                    {fields.map(([key, value]) => (
                        <DataField
                            key={key}
                            label={formatLabel(key)}
                            value={String(value)}
                        />
                    ))}

                    <DataField
                        label="Descrição / Notas"
                        value={data.descricao}
                        isFullWidth
                    />
                </Grid>

                <ButtonGroup>
                    <Button onClick={() => navigate(-1)}>Voltar</Button>
                    <Button onClick={() => console.log('Marcar visita')}>
                        Marcar Visita
                    </Button>
                </ButtonGroup>
            </Container>
        </PageWrapper>
    );
}
