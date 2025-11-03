import React, { useRef, useState, useMemo } from 'react';
import styled from 'styled-components';
import ButtonActions from '../../components/ButtonActions';
import ButtonSelected from '../../components/ButtonSelected';
import LessonPlan from '../../components/LessonPlan';

import Table from '../../components/Table';

import api from '../../api'; // Seus dados
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const PageWrapper = styled.div`
    // Alterado de Wrappper para PageWrapper
    background-color: ${({ theme }) => theme.colors.background};
    min-height: calc(100vh - 80px); /* Ajusta à altura do header */
    padding: 30px 0;
`;

const ContentContainer = styled.div`
    // Alterado de Container para ContentContainer
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
`;

const HeaderContainer = styled.header`
    // Alterado de HeaderTable para HeaderContainer
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    gap: 20px;
    flex-wrap: wrap;

    .dates-wrapper {
        display: flex;
        gap: 10px;
    }
`;

const ModeToggleGroup = styled.div`
    display: flex;
    background-color: ${({ theme }) =>
        theme.colors.background}; /* Fundo sutil */
    border-radius: 8px;
    overflow: hidden;

    border: 1px solid ${({ theme }) => theme.colors.button};
`;

const ToggleButton = styled.button`
    padding: 10px 20px;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 600;
    transition: all 0.2s ease;

    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme, $active }) =>
        $active ? theme.colors.button : 'transparent'};

    @media (max-width: 375px) {
        font-size: 0.5rem;
        padding: 16px 5px;
    }
`;

const ControlsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px; /* Espaçamento entre o filtro e os botões de modo */
`;

const StyledSwiper = styled(Swiper)`
    /* Estilos globais para o Swiper */
    .swiper-slide {
        height: auto;
    }
`;

export default function Home() {
    // Usando apenas um estado para o índice do Swiper
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentFilter, setCurrentFilter] = useState('Todos');

    const swiperRef = useRef(null);

    // 1. Inicializa o estado 'person' com todos os dados da API ao montar

    // 2. Lógica de Filtragem (Simplificada e usando useMemo para otimizar)

    // 3. Filtra os dados sempre que 'currentFilter' muda
    const filteredPerson = useMemo(() => {
        if (currentFilter === 'Todos') {
            return api;
        }
        return api.filter((item) => item.organizacao === currentFilter);
    }, [currentFilter]);

    // --- Lógica do Swiper (Simplificada) ---

    const handleClickChangeSwiper = (direction) => {
        if (swiperRef.current) {
            if (direction === 'prev') {
                swiperRef.current.slidePrev();
            } else {
                swiperRef.current.slideNext();
            }
        }
    };

    const handleFilterPerson = (value) => {
        setCurrentFilter(value);

        handleClickChangeSwiper('prev');

        // A filtragem real será feita no useMemo abaixo, apenas atualiza o filtro
        // setPerson é desnecessário aqui, pois filteredPerson resolve
    };

    const handleChangeSpaceActive = (swiper) => {
        setActiveIndex(swiper.activeIndex);
    };

    return (
        <PageWrapper>
            <ContentContainer>
                <HeaderContainer>
                    <div className="dates-wrapper">
                        {/* Exemplo de botões de data */}
                        <ButtonActions>12-3-2025</ButtonActions>
                        <ButtonActions>12-3-2025</ButtonActions>
                        <ButtonActions>12-3-2025</ButtonActions>
                        <ButtonActions>12-3-2025</ButtonActions>
                        {/* ... */}
                    </div>

                    <ControlsWrapper>
                        <ModeToggleGroup>
                            <ToggleButton
                                onClick={() => handleClickChangeSwiper('prev')}
                                $active={activeIndex === 0}
                                disabled={activeIndex === 0}
                            >
                                Tabela
                            </ToggleButton>
                            <ToggleButton
                                onClick={() => handleClickChangeSwiper('next')}
                                $active={activeIndex === 1}
                                disabled={activeIndex === 1}
                            >
                                Plano de ala
                            </ToggleButton>
                        </ModeToggleGroup>

                        <ButtonSelected onSend={handleFilterPerson} />
                    </ControlsWrapper>
                </HeaderContainer>

                {/* Visual do Slider/Swiper */}
                <StyledSwiper
                    style={{ height: '100%', minHeight: '600px' }} // Altura mínima definida
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={handleChangeSpaceActive}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    initialSlide={0}
                >
                    <SwiperSlide>
                        <Table Person={filteredPerson} />
                    </SwiperSlide>

                    <SwiperSlide style={{ padding: 20 }}>
                        {/* Repetição de LessonPlan */}
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns:
                                    'repeat(auto-fit, minmax(250px, 1fr))',
                                gap: '20px',
                            }}
                        >
                            <LessonPlan />
                            <LessonPlan />
                            <LessonPlan />

                            <LessonPlan />
                            <LessonPlan />
                            <LessonPlan />
                            {/* ... outros LessonPlan ... */}
                        </div>
                    </SwiperSlide>
                </StyledSwiper>
            </ContentContainer>
        </PageWrapper>
    );
}
