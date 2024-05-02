import React, { useState, useEffect } from 'react'
import logo from '../../public/assets/images/logo.webp'
import logoFallback from '../../public/assets/images/logo.png'

const Header = () => {
    const [scrollState, setScrollState] = useState(0)
    const [lastScrollState, setLastScrollState] = useState(0)
    const body = document.body;

    useEffect(() => {
        window.addEventListener('scroll', () => { setScrollState(window.scrollY) })

        return () => {window.removeEventListener('scroll', () => {})}
    }, []);

    useEffect(() => {
        handleHeaderOnScroll()
    }, [scrollState]);


    function handleHeaderOnScroll() {

        if (window.screen.width > 767) {
            if (scrollState <= 0) {
                body.classList.remove("scroll-up");
                return;
            }
            if (scrollState > lastScrollState && !body.classList.contains("scroll-down")) {
                body.classList.remove("scroll-up");
                body.classList.add("scroll-down");
    
            } else if (scrollState < lastScrollState && body.classList.contains("scroll-down")) {
                body.classList.remove("scroll-down");
                body.classList.add("scroll-up");
            }
            setLastScrollState(scrollState)
        }
    }

  return (
    <>
        <header id="header">
            <nav className="navbar fixed-top">
                <div className="container-fluid">
                    <picture id="header-logo">     
                        <source srcSet={logo} type="image/webp"/>
                        <img src={logoFallback} alt="Levi Stark with an electric guitar"/> 
                    </picture>       
                    <div className='header-nav'>
                        <a href="#welcome">Welcome</a>
                        <a href="#production">What I Do</a>
                        <a href="#about">Aboue Me</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <div className="custom-navbar">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Stark Recordings</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Full Song Production</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Premium Song Mixing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About Me</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact Me</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Header