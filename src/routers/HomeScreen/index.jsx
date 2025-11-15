import React, { useRef, useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import ButtonActions from '../../components/ButtonActions';
import ButtonSelected from '../../components/ButtonSelected';
import LessonPlan from '../../components/LessonPlan';

import Table from '../../components/Table';
//import api from '../../api'; //
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import DataViewModal from '../../components/DataModal';
//import realData, { db } from '../../fiebaseConfig';
import { db } from '../../fiebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const PageWrapper = styled.div`
    // Alterado de Wrappper para PageWrapper
    background-color: ${({ theme }) => theme.colors.background};
    min-height: calc(100vh - 80px); /* Ajusta à altura do header */
    padding: 30px 0;

    @media (max-width: 375px) {
        padding: 0;
        min-height: 100vw;
    }
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

    @media (max-width: 320px) {
        font-size: 0.2rem;
    }

    @media (max-width: 556px) {
        font-size: 0.5rem;
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

const SwiperStyle = styled(SwiperSlide)`
    @media (max-width: 375px) {
        max-width: 320px;
    }
`;

export default function Home() {
    // Usando apenas um estado para o índice do Swiper
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentFilter, setCurrentFilter] = useState('Todos');
    const [listPerson, setListPersons] = useState([]);
    const [objectModalView, setObjectModalView] = useState({});

    const swiperRef = useRef(null);

    useEffect(() => {
        async function getList() {
            const querySnapshot = await getDocs(collection(db, 'semana 1'));
            const dados = await querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setListPersons(dados);
        }

        getList();
    }, []);

    const separedArray = useMemo(() => {
        return listPerson.map((item) => item.planoDeAla).flat();
    }, [listPerson]);

    // 1. Inicializa o estado 'person' com todos os dados da API ao montar

    // 2. Lógica de Filtragem (Simplificada e usando useMemo para otimizar)

    // 3. Filtra os dados sempre que 'currentFilter' muda
    const filteredPerson = useMemo(() => {
        if (currentFilter === 'Todos') {
            return listPerson;
        }
        return listPerson.filter((item) => item.organizacao === currentFilter);
    }, [currentFilter, listPerson]);

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

    const handleGetPersonData = (val) => {
        const { planoDeAla, id, ...rest } = val;
        const newArr = {
            ...rest,
            dataDeBatismo: rest.dataDeBatismo
                .toDate()
                .toLocaleDateString('pt-br'),
        };
        setObjectModalView(newArr);
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

    const buttonsActios = [
        { classList: 'semana 1', id: 0 },
        { classList: 'semana 2', id: 1 },
        { classList: 'semana 3', id: 2 },
        { classList: 'semana 4', id: 3 },
    ];

    const handleClickGetAll = async (id) => {
        const elButton = document.querySelectorAll('.dates-wrapper button');
        elButton.forEach((item) => item.classList.remove('active'));
        elButton[id].classList.add('active');

        const querySnapshot = await getDocs(
            collection(db, 'semana ' + (id + 1)),
        );
        const dados = await querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        setListPersons(dados);
    };

    return (
        <PageWrapper>
            <ContentContainer>
                <HeaderContainer>
                    <div className="dates-wrapper">
                        {buttonsActios.map((item) => (
                            <ButtonActions
                                onClick={() => handleClickGetAll(item.id)}
                                key={item.id}
                            >
                                {item.classList}
                            </ButtonActions>
                        ))}
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
                    // style={{ height: '100%' }} // Altura mínima definida
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={handleChangeSpaceActive}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    initialSlide={0}
                >
                    <SwiperStyle>
                        <Table
                            onSend={handleGetPersonData}
                            Person={filteredPerson}
                        />
                    </SwiperStyle>

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
                            {separedArray.map((item, index) => (
                                <LessonPlan key={index} data={item} />
                            ))}
                        </div>
                    </SwiperSlide>
                </StyledSwiper>
            </ContentContainer>
            <DataViewModal dataToView={objectModalView} />
        </PageWrapper>
    );
}
