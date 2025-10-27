import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';

export const Wrappper = styled.main`
    height:calc(100vh - 120px) ;
    width:100%;
    bacgroud-color:${props => props.theme.colors.background};

    

    
    `;
    export const Container = styled.section`
    height:85%;
    background-color: ${props => props.theme.colors.surface};
    max-width: 1200px;
    margin: 0 auto;
    border-radius:20px;
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.5); 
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.5);

    overflow:hidden;
    
    
    & .container {
        height:80%;

        background-color:${props => props.theme.colors.background};
        
        border-bottom-left-radius:20px;
        border-bottom-right-radius:20px;
        

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
    border-bottom-left-radius:20px;
    border-bottom-right-radius:20px;
    
    overflow:auto;
   height:100%;
    scrollbar-width: thin; /* Largura da barra: 'auto' ou 'thin' */
    scrollbar-color: ${props => props.theme.colors.button} ${props => props.theme.colors.surface}};

    & ::-webkit-scrollbar {
    width: 8px;
    }

    /* ::-webkit-scrollbar-thumb - A alça (o botão que move) */
    & ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.button}; /* Cor principal */
    border-radius: 4px;
    }

    /* ::-webkit-scrollbar-track - A trilha por onde a alça desliza */
    &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.surface};
    border-radius: 4px;
    }

    /* Estilo ao passar o mouse */
    &::-webkit-scrollbar-thumb:hover {
        background-color: ${props => props.theme.colors.button};
    }

    &::-webkit-scrollbar-button {
        display: none; 
    }




`;
