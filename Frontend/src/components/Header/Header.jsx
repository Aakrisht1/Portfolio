import React from 'react'
import {ReactNavbar} from 'overlay-navbar';
import './Header.css';
import logo from '../../Images/Aak-removebg-preview.png';
import {FaUserAlt} from "react-icons/fa";

const Header = () => {
  return(
    <div className='headerFont'>
    <ReactNavbar
    navColor1="white"
    navColor2="hsl(219,48%,8%)"
    burgerColor="hsl(48.05, 88.98%, 50.2%)"
    burgerColorHover="hsl(48.05, 88.98%, 50.2%)"
    logo={logo}
    logoWidth="250px"
    logoHoverColor="hsl(48.05, 88.98%, 50.2%)"
    nav2justifyContent="space-around"
    nav3justifyContent="space-around"
    link1Text="Home"
    link2Text="About"
    link3Text="Projects"
    link4Text="Contact"
    link1Url="/"
    link2Url="/about"
    link3Url="/projects"
    link4Url="/contact"
    link1ColorHover="white"
    link1Color="hsl(48.05, 88.98%, 50.2%)"
    link1Size="1.5rem"
    link1Padding="3vmax"
    profileIcon={true}
    ProfileIconElement={FaUserAlt}
    profileIconColor="hsl(48.05, 88.98%, 50.2%)"
    profileIconColorHover="white"/>
    </div>
  );
}

export default Header