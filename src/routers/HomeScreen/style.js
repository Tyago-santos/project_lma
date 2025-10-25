import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';

export const Wrappper = styled.main`
    height:calc(100vh - 120px) ;
    width:100%;

    


`;
export const Container = styled.section`
    height:100%;
    background-color: ${props => props.theme.colors.surface};
    max-width: 1200px;
    margin: 0 auto;
    border-top-left-radius:20px;
    border-top-right-radius:20px;

    & .container {
        
        height:100%;
        background-color:#f2f2f2;
    
        }
        
        `;
export const HeaderTable = styled.div`
    width:100%;
    padding-top:20px;
    


    & .wapper{
    padding: 10px ;
    display:flex;
    justify-content: space-between;
    align-items:center;
    
    
    }

    .wrapper-change_infor{
        display:flex;
        align-items:center;
        justify-content: space-between;

        
        }

        
        & .container_mode{
            font-family:'roboto';
            font-size: 1.2rem;
            display: flex;
            align-items:center;
            gap: 1rem;


        
        & .active{
            border-bottom: ${props => props.theme.colors.button} solid 3px;
        
        }

        & button{
            border-bottom: transparent solid 3px;

             
            color:${props => props.theme.colors.text};
            padding:  .1rem 1rem;

            


            }    
        
    
        }

`;


export const Slider = styled(SwiperSlide)`
   height:100%;



`;
