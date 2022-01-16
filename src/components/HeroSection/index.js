import React,{useState} from 'react'
import Video from "../vidoes/video.mp4"
import { Button } from "../ButtonElement"
import { HeroContainer,HeroBg,VideoBg,HeroH1,HeroBtnWrapper,HeroP,ArrowForward,ArrowRight,HeroContent } from './HeroSectionElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const OnHover = () =>{
        setHover(!hover)
    }
    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
                </HeroBg>
                <HeroContent>
                    <HeroH1>Sage-Intacct
                        <HeroP>
                        Transforming the way people think and work, so their organizations can thrive
                        </HeroP>
                        <HeroBtnWrapper>
                            <Button to="/" onMouseEnter={OnHover} onMouseLeave={OnHover}
                            primary="true"
                            dark="true"
                            >
Get Started{hover?<ArrowForward/>:<ArrowRight/>}
                            </Button>
                        </HeroBtnWrapper>
                    </HeroH1>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection
