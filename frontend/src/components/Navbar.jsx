import React, { useState, useEffect } from 'react'
import logo from '../../public/assets/images/logo.webp'
import logoFallback from '../../public/assets/images/logo.png'
import logoText from '../../public/assets/images/logo-text.webp'
import logoTextFallback from '../../public/assets/images/logo-text.png'
import { Link } from 'react-router-dom'

const Navbar = ({ navbarState, toggleMenu }) => {
    const [style, setStyle] = useState('d-none')

    useEffect(() => {
        if (navbarState) {
            setStyle('')
        }
    }, [toggleMenu])

  return (
    <div id='navbar' className={style}>
        <div onClick={toggleMenu} className={`flyin-backdrop ${navbarState ? 'showBackdrop' : 'hideBackdrop'}`}></div>
        <div className={`flyin-menu ${navbarState ? 'showMenu' : 'hideMenu'}`} tabIndex="-1">
            <div className="flyin-header">
                <div className='flyin-logo-container'>
                    <picture id="flyin-logo">     
                        <source srcSet={logo} type="image/webp"/>
                        <img src={logoFallback} alt="Levi Stark with an electric guitar"/> 
                    </picture>   
                    <picture id="flyin-logo-text">     
                        <source srcSet={logoText} type="image/webp"/>
                        <img src={logoTextFallback} alt="Levi Stark with an electric guitar"/> 
                    </picture>
                </div>
                    
                <button onClick={toggleMenu} type="button" className="btn-close"></button>
            </div>
            <div className="flyin-body">
                <nav className="flyin-nav">
                    <Link to="/" aria-current="page">Home</Link>
                    <Link to="/#production">Production</Link>
                    <Link to="/#mixing">Mixing</Link>
                    <Link to="/#contact">Contact</Link>
                    <Link to="/#about">About me</Link>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar