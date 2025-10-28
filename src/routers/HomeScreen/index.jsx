import React, {useRef, useState} from "react";


import { Wrappper,Container,HeaderTable,Slider } from "./style"; 

import ButtonActions from '../../components/ButtonActions'
import ButtonSelected from "../../components/ButtonSelected";
import LessonPlan from "../../components/LessonPlan";

import Table from '../../components/Table';

import api from '../../api';


import { Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';


export default function Home (){

    const swiper = useSwiper();
    
    const [activePrev,setActivePrev] = useState(true);
    const [activeNext,setActiveNext] = useState(false);
    const [person, SetPerson]= useState([]);




    const swiperRef = useRef(null); 


    const handleClickChangeSwiperPrev = () => {
      swiperRef.current.slidePrev();
      setActiveNext(false);
      setActivePrev(true);

    }

      const handleClickChangeSwiperNext = () => {
        setActivePrev(false);
        setActiveNext(true);
        swiperRef.current.slideNext();
     
    }

    const handleChangeSpaceActive = () => {
        swiperRef.current.activeIndex === 0 ? setActivePrev(true) : setActivePrev(false);
        swiperRef.current.activeIndex === 1 ? setActiveNext(true) : setActiveNext(false);

    }

    const handleFilterPerson = (Value) => {
        console.log(Value);
        const newArr = api.filter(item => item.organizacao === Value);
        SetPerson(newArr.length > 0 ? newArr : api);
    }

    return(
        <Wrappper>
            <Container  >
                <HeaderTable>
                    <div className="wapper">
                        <ButtonActions>12-3-2025</ButtonActions>
                        <ButtonActions>12-3-2025</ButtonActions>
                        <ButtonActions>12-3-2025</ButtonActions>
                        <ButtonActions>12-3-2025</ButtonActions>
                        <ButtonActions>12-3-2025</ButtonActions>
                    </div>


                    <div className="wrapper-change_infor">
                        <div className="container_mode">
                            <button onClick={handleClickChangeSwiperPrev }  className={activePrev ? "table_button active": "table_button"}>Tabela</button>
                            <button onClick={handleClickChangeSwiperNext}    className={ activeNext?"plain_button active": "plain_button" }>Plano de ala</button>
                        </div>
                     <ButtonSelected  onSend={handleFilterPerson}/>   
                        
                    </div>

                </HeaderTable>
                <div className="container">
                    <Swiper
                        
                        style={{ height:'100%',}}

                                spaceBetween={50}
                                slidesPerView={1}
                                onSlideChange={handleChangeSpaceActive}
                                onSwiper={(swiper) => (swiperRef.current = swiper)}

                    >
                        <Slider > 
                            <Table Person={person} />
                            
                        </Slider>
                        <Slider style={{padding: 20}}> 
                            <LessonPlan />
                            <LessonPlan />
                            <LessonPlan />
                            <LessonPlan />  
                            <LessonPlan />
                            <LessonPlan /> 

                        <LessonPlan />
                            <LessonPlan />
                            <LessonPlan />
                            <LessonPlan />  
                            <LessonPlan />
                            <LessonPlan />   

                        </Slider>
                
                    </Swiper> 
                </div>
            </Container>
            
        </Wrappper>
    )
}