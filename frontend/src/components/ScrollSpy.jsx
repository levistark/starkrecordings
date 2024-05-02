import { useState, useEffect } from "react"
import React from 'react'

const ScrollSpy = () => {

    const [scrollState, setScrollState] = useState(0)
    const [lastScrollState, setLastScrollState] = useState(0)
    const body = document.body;

    useEffect(() => {
        window.addEventListener('scroll', () => { setScrollState(window.scrollY) })
        return () => {window.removeEventListener('scroll', () => {})}
    }, []);

    useEffect(() => {
        handleScrollSpy()
    }, [scrollState]);


    function handleScrollSpy() {

        if (window.screen.width > 767) {
            // if (scrollState <= 0) {
            //     body.classList.remove("scroll-up");
            //     return;
            // }
            // if (scrollState > lastScrollState && !body.classList.contains("scroll-down")) {
            //     body.classList.remove("scroll-up");
            //     body.classList.add("scroll-down");
    
            // } else if (scrollState < lastScrollState && body.classList.contains("scroll-down")) {
            //     body.classList.remove("scroll-down");
            //     body.classList.add("scroll-up");
            // }
            // setLastScrollState(scrollState)
        }
    }

  return (
    <>
        <div id="scrollSpy">
            <a className="p-1 rounded" href="#welcome">Welcome</a>
            <a className="p-1 rounded" href="#production">Production</a>
            <a className="p-1 rounded" href="#mixing">Mixing</a>
            <a className="p-1 rounded" href="#contact">Contact</a>
            <a className="p-1 rounded" href="#about">About</a>
        </div>
    </>
  )
}

export default ScrollSpy