import React, { useEffect, useState } from 'react'

export const ScrollToTop = () => {

    const scrollToTop = () => {
        window.scrollTo({ top, behavior: 'smooth'})
    }

    const [position, setPosition] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setPosition(window.scrollY)
        })

        return () => {
            window.removeEventListener('scroll', () => {})
        }
    }, [])

  return (
    <button onClick={scrollToTop} className={position > 1000 ? `scroll-to-top` : `scroll-to-top invisible`}>
        <i className="fa-solid fa-arrow-right fa-rotate-270"></i>
    </button>
  )
}
    