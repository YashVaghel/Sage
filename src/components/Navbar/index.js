import React,{useState,useEffect} from 'react';
import { FaBars } from "react-icons/fa";

import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavLinks,NavItem,NavBtn,NavBtnLink} from "./NavbarElements";
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll/modules';



const Navbar = ({toggle}) => {
    const [scrollNav,setScrollNav] = useState(false);
    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }
    useEffect(() => {
window.addEventListener("scroll",changeNav)
    }, [])
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
        <IconContext.Provider value = {{color:"#fff"}}>
        <Nav scrollNav ={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>
                    sage-Intacct
                </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                    <NavItem>
                            <NavLinks to="products"
                            smooth={true} duration={500} spy={true} exact="true" offset={-80}
                            
                            
                            >
                            Products
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="industries" 
                             smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                            Industries
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services"
                              smooth={true} duration={500} spy={true}exact="true" offset={-80}
                              >
                            Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about" 
                              smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                            About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="oursales" 
                              smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                            Our-Sales
                            </NavLinks>
                        </NavItem>

                        
                      
                    </NavMenu>
                    <NavBtn>
                <NavBtnLink to="/">Sign In</NavBtnLink>
                    </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;
