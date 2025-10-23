import React, {useRef, useState} from "react";
import { TfiExchangeVertical } from "react-icons/tfi";


import { Wrappper,Container,HeaderTable,Slider } from "./style";

import ButtonActions from '../../components/ButtonActions'
import ButtonSelected from "../../components/ButtonSelected";

import Table from '../../components/Table';

import { Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';


export default function Home (){

    const swiper = useSwiper();
    
    const [activePrev,setActivePrev] = useState(true);
    const [activeNext,setActiveNext] = useState(false);


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
                     <ButtonSelected/>   
                        
                    </div>

                </HeaderTable>
                <div className="container">
                    <Swiper
                        
                        style={{ height:'100%'}}
                                spaceBetween={50}
                                slidesPerView={1}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => (swiperRef.current = swiper)}

                    >
                        <Slider > 
                            <Table/>
                        </Slider>
                        <Slider> slider 2</Slider>
                
                    </Swiper> 
                </div>
            </Container>
        </Wrappper>
    )
}