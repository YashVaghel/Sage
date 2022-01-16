import React from 'react'

import '../../App.css';
import ImageSlider from '../ImageSlider';
import { SliderData } from '../SliderData';

import {ServicesH1,ServicesContainer,ServicesWrapper } from './ServicesElements'


const Services = () => {
    return (
        
<>
<ServicesContainer id="services">
    <ServicesH1> Our Customers</ServicesH1>
    <ServicesWrapper>

            <ImageSlider slides={SliderData} />


    </ServicesWrapper>
</ServicesContainer>


</>
    )
}

export default Services
