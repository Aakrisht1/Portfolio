import React from 'react';
import './Header.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  useEffect(() => {
    // Boxicons CSS link
    const link = document.createElement('link');
    link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Menu toggle functionality
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const navbg = document.querySelector('.nav-bg');

    const toggleMenu = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
      navbg.classList.toggle('active');
    };

    menuIcon.addEventListener('click', toggleMenu);

    return () => {
      document.head.removeChild(link);
      menuIcon.removeEventListener('click', toggleMenu);
    };
  }, []);
  return(
    
    <div className='headerBody'>
      <header className="header md:pl-[50px] md:pr-[100px] pl-[5px] pr-[50px]">
        <div className='md:w-[250px] md:h-[100px] h-[40px] w-[180px] flex items-center content-center'>
        <img src="https://res.cloudinary.com/dgte5mqt7/image/upload/v1721146558/Portfolio/Aak-removebg-preview_xleonl.png" alt="" className="logo mt-5" />
        </div>
        <i className='bx bx-menu' id="menu-icon"></i>
        <nav className="navbar">
          <Link to="/" className="aLink">Home</Link>
          <Link to="/about" className="aLink">About</Link>
          <Link to="/projects" className="aLink">Projects</Link>
          <Link to="/contact" className="aLink">Contact</Link>
        </nav>
      </header>
      <div className="nav-bg"></div>
    </div>
  )
}

export default Header