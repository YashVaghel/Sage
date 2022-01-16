import React from 'react';
import {SiderbarContainer,Icon,CloseIcon,SidebarMenu,SidebarLink,SidebarWrapper,SidebarRoute,SideBtnWrap} from "./SidebarElements"

function Sidebar({isOpen,toggle}) {
    return (
        <SiderbarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>

                    <SidebarLink to="products" onClick={toggle}>Products</SidebarLink>
                    <SidebarLink to="industries" onClick={toggle}>Industries</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="oursales" onClick={toggle}>Our-Sales</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>

                </SidebarMenu>
               <SideBtnWrap>
                   <SidebarRoute to="/">
Sign In
                   </SidebarRoute>
               </SideBtnWrap>
            </SidebarWrapper>
        </SiderbarContainer>
    )
}

export default Sidebar;
