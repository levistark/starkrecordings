import React, { useState, useEffect } from 'react'
import logo from '../../public/assets/images/logo.webp'
import logoFallback from '../../public/assets/images/logo.png'
import logoText from '../../public/assets/images/logo-text.webp'
import logoTextFallback from '../../public/assets/images/logo-text.png'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Header = ({isSticky, isVisibleOnTop}) => {
    const [scrollState, setScrollState] = useState(0)
    const [lastScrollState, setLastScrollState] = useState(0)
    const [navbarState, setNavbarState] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('');
    const [maxWidth, setMaxWidth] = useState(false)

    function toggleMenu() {
      setNavbarState(!navbarState)
    }

    useEffect(() => {

      if (window.screen.width < 768) {
        setMaxWidth(true)
      }

        function handleScroll() {
          setScrollState(window.scrollY);
        };

        function handleScreenRezise() {
          if (window.screen.width < 768) {
            setMaxWidth(true)
          }
          else {
            setMaxWidth(false)
          }
        }
    
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScreenRezise);

        return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('resize', handleScreenRezise);

        };
      }, []);

    useEffect(() => {
        handleHeaderOnScroll()
    }, [scrollState]);

    function handleHeaderOnScroll() {
        if (window.screen.width > 767 && isSticky) {
          if (scrollState <= 0) {
            setScrollDirection('');
            return;
          }
          if (scrollState > lastScrollState) {
            setScrollDirection('scroll-down');
          } else if (scrollState < lastScrollState) {
            setScrollDirection('scroll-up');
          }
          setLastScrollState(scrollState);
        }
      }

  return (
    <>
        <header id="header" className={`header ${scrollDirection} ${isVisibleOnTop ? 'isVisibleOnTop' : ''}`}>
            <div className={`top-header ${maxWidth ? '' : 'container'}`}>
                <Link to="/" className='logo'>
                  <picture id="header-logo">     
                      <source srcSet={logo} type="image/webp"/>
                      <img src={logoFallback} alt="Levi Stark with an electric guitar"/> 
                  </picture>   
                  <picture id="header-logo-text">     
                      <source srcSet={logoText} type="image/webp"/>
                      <img src={logoTextFallback} alt="Levi Stark with an electric guitar"/> 
                  </picture>   
                </Link>
                    
                <nav className='header-nav'>
                    <Link to='/#welcome'>Welcome</Link>
                    <Link to='/#production'>What I Do</Link>
                    <Link to='/#about'>About Me</Link>
                    <Link to='/#contact'>Contact</Link>
                    <Link to='/posts/playlists2023'>Blog</Link>
                </nav>

                <div className="navbar-toggle" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <Navbar navbarState={navbarState} toggleMenu={toggleMenu} />
        </header>
    </>
  )
}

export default Header