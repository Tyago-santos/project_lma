import styled from 'styled-components';

// ====== STYLES ======

export const Page = styled.div`
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.background};
    padding: 24px;
    font-family: 'Inter', sans-serif;
`;

export const Header = styled.header`
    margin-bottom: 24px;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.text};
`;

export const Subtitle = styled.p`
    color: ${(props) => props.theme.colors.text};
    margin-top: 4px;
`;

export const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
`;

export const Card = styled.div`
    background: ${(props) => props.theme.colors.surface};
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CardInfo = styled.div``;

export const CardTitle = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
    font-weight: bold;
`;

export const CardValue = styled.p`
    font-size: 32px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.button};
    margin: 4px 0;
`;

export const CardDescription = styled.span`
    font-size: 12px;
    color: ${(props) => props.theme.colors.text};
`;

export const Icon = styled.div`
    font-size: 40px;
`;
