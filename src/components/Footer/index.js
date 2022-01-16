import React from 'react';
import { FooterContainer,FooterWrap,FooterLinkItems,FooterLinkTitle,FooterLink,FooterLinksWrapper,FooterLinksContainer,SocialMediaWrap,SocialIconLink,SocialIcons,SocialLogo ,WebsiteRights } from './FooterElements';
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin,FaYoutube} from "react-icons/fa";


const Footer = () => {
    return (

<FooterContainer>
    <FooterWrap>
<FooterLinksContainer>
    <FooterLinksWrapper>
        <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/">How We Work</FooterLink>
                <FooterLink to="/">Testimonials</FooterLink>
                <FooterLink to="/">Careers</FooterLink>
                <FooterLink to="/">Investors</FooterLink>
                <Footer Link to="/">Terms Of Services</Footer>
        </FooterLinkItems>
        <FooterLinkItems>
            <FooterLinkTitle>Video</FooterLinkTitle>
                <FooterLink to="/">Submit Video</FooterLink>
                <FooterLink to="/">Ambassadors</FooterLink>
                <FooterLink to="/">Agency</FooterLink>
                <FooterLink to="/">Investors</FooterLink>
        </FooterLinkItems>
    </FooterLinksWrapper>
    <FooterLinksWrapper>
        <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/">Contact</FooterLink>
                <FooterLink to="/">Support</FooterLink>
                <FooterLink to="/">Destinations</FooterLink>
                <FooterLink to="/">Sponsorships</FooterLink>

        </FooterLinkItems>
        <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Youtube</FooterLink>
                <FooterLink to="/">Twitter</FooterLink>

        </FooterLinkItems>
    </FooterLinksWrapper>
    
</FooterLinksContainer>
<SocialMediaWrap>
    <SocialLogo to="/">
sage-Inacct
    </SocialLogo>
    <WebsiteRights>
        All Rights Reserved {new Date().getFullYear()}
    </WebsiteRights>
    <SocialIcons>
        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
            <FaFacebook/>

        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
            <FaInstagram/>

        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
            <FaYoutube/>

        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
            <FaTwitter/>
            </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
            <FaLinkedin/>

        </SocialIconLink>
    </SocialIcons>
</SocialMediaWrap>
    </FooterWrap>
</FooterContainer>

    )
}

export default Footer
