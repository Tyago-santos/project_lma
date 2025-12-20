import React from 'react';

import {
    Card,
    CardDescription,
    CardInfo,
    CardsGrid,
    CardTitle,
    CardValue,
    Header,
    Icon,
    Page,
    Subtitle,
    Title,
} from './style';

import GraficoLine from '../../components/Grafic';

export default function DashboardIndicadores() {
    const indicadores = [
        {
            titulo: 'Referências',
            valor: '15/10',
            descricao: 'Total no mês',
            icon: '📖',
        },
        {
            titulo: 'Batismos',
            valor: '15/20',
            descricao: 'Realizados',
            icon: '💧',
        },
        {
            titulo: 'Lições com os Missionários',
            valor: '18/20',
            descricao: 'Agendadas / feitas',
            icon: '👥',
        },
    ];

    return (
        <Page>
            <Header>
                <Title>Painel de Indicadores</Title>
                <Subtitle>Acompanhamento do trabalho missionário</Subtitle>
            </Header>
            <CardsGrid>
                {indicadores.map((item, index) => (
                    <Card key={index}>
                        <CardInfo>
                            <CardTitle>{item.titulo}</CardTitle>
                            <CardValue>{item.valor}</CardValue>
                            <CardDescription>{item.descricao}</CardDescription>
                        </CardInfo>

                        <Icon>{item.icon}</Icon>
                    </Card>
                ))}
            </CardsGrid>
            <GraficoLine />
        </Page>
    );
}
