import styled from "styled-components";

export const ServicesContainer = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;
@media screen and (max-width:768px){
    height: 800px;
}
@media screen and (max-width:480px){
    height: 800px;
}

`
export const ServicesWrapper = styled.div`
max-width: 800px;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
padding:0 50px;
@media screen and (max-width:100px){
    grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}


`
export const ServicesCard = styled.div`
background: transparent;
display: flex;

justify-content: center;
align-items: center;
border-radius: 10px;
max-height: 500px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
&:hover{
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;

}


`
export const ServicesIcon = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 500px;
width: 500px;
margin-bottom: 10px;



`
export const ServicesH1= styled.h1`
font-size: 3rem;
position: relative;
top: 14vh;
color: #fff;
@media screen and (max-width: 480px){
    font-size: 2rem;
}

`
export const ServicesH2= styled.h2`
font-size: 1rem;

margin-bottom: 10px;
`
export const ServicesP= styled.p`
font-size: 1rem;


`