import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const Home = () => {
  return (
    <>
        <Header/>
        <main>
            <section id="showcase" className="page-section">
                <picture id="showcase-background-image">     
                    <source srcSet="./assets/images/showcase.webp" type="image/webp"/>
                    <img src="showcase.png" alt="Levi Stark with an electric guitar"/> 
                </picture>
                <div className="container">
                    <div className="left-container">
                        <picture id="showcase-image">     
                            <source srcSet="./assets/images/showcase.webp" type="image/webp"/>
                            <img src="showcase.png" alt="Levi Stark with an electric guitar"/> 
                        </picture>
                    </div>
                    <div className="right-container">
                        <h1>I want to help you release the sound of your heart</h1>
                        <div className="showcase-nav-container">
                            <nav className="showcase-nav">
                                <a href="#welcome">Welcome</a>
                                <a href="#production">What I Do</a>
                                <a href="#about">Aboue Me</a>
                                <a href="#contact">Contact</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section id="welcome" className="page-section">
                <div className="container">
                    <div className="above-content-line-orange"></div>
                    <p className="h2">
                        You've poured your heart and soul into 
                        beautiful and authentic songs
                    </p>
                    <p>
                        Now, it's time to bring them to life with music production that not only sounds professional but most importantly reflects your heart and vision. I want to help you tell your story, and release the sound of your heart to the world. Let's create something that makes you proud!
                    </p>
        
                    <a href="#production" className="btn-black-orange">What I Do</a>
                </div>
            </section>
            <section id="production" className="page-section">
                <div className="container">
                    <div className="above-content-line-blue"></div>
                    <p className="h2">
                        Full Song Production
                    </p>
                    <div className="text-content">
                        <p>
                            A full song production covers the whole process of taking your raw song into a fully professionally produced masterpiece, that's ready to be heard by the world. ​​
                        </p>
                        <br/>
                        <p>
                            Whether you want to make live and intimate worship music, indie style, or bombastic pop bangers, my goal is to capture the sounds that best communicate your vision and heart for the song to your listeners. 
                        </p>
                        <br/>
                        <p>
                            Practically, my production process includes defining the overall mood of the song, recording the instruments, etc. When the production is finished, if you wish, I'll then mix the song to professional radio quality standards. 
                        </p>
                        <br/>
                        <p>
                            Below are a few examples of some genres that I've produced and mixed.
                        </p>
                    </div>
                    <iframe className="portfolio" src="https://open.spotify.com/embed/playlist/48gqZXmbS2Ma0V8IXH9bJ6?utm_source=generator" width="100%" height="352" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <a href="mailto:levi@starkrecordings.com" className="btn-black-blue">Contact Me</a>
                </div>
            </section>
            <section id="mixing" className="page-section">
                <div className="container">
                    <div className="above-content-line-orange"></div>
                    <p className="h2">
                        Premium Song Mixing
                    </p>
                    <div className="text-content">
                        <p>
                            Are you just looking for your mixing for your tracks?
                        </p>
                        <br/>
                        <p>
                            Professional mixing can make your music sound huge! I'll  mix your song to professional radio quality standards, and make your production really shine! 
                        </p>
                        <br/>
                    </div>
                    
                    <a href="mailto:levi@starkrecordings.com" className="btn-black-orange">Contact Me</a>
                </div>
            </section>
            <section id="contact" className="page-section">
                <div className="container">
                    <div className="above-content-line-blue"></div>
                    <p className="h2">
                        Contact Me            
                    </p>
                    <div className="text-content">
                        <p>
                            What can I help you with? Reach out below so we can chat about your project!                
                        </p>
                    </div>
                    <a href="mailto:levi@starkrecordings.com" className="btn-black-blue">Email Me</a>
                </div>
            </section>
            <section id="about" className="page-section">
                <div className="container">
                    <div className="above-content-line-orange"></div>
                    <p className="h2">
                        About Me           
                    </p>
                    <div className="text-content">
                        <p>
                            My name is Levi Stark, and I live in Sweden together with I started writing and producing music about 10 years ago and found out that this was the thing that I wanted to do for a living. But as the years went on, I discovered that the true value in making music is not primarily just in the music itself, but in creating powerful, and deeply meaningful experiences for people that listen to it.
                        </p>
                        <br/>
                        <p>
                            On a deeper level, my end goal is not just to create great music, it’s to embody the sound of your heart and to help you create deep and meaningful encounters for the people that are going to listen to it.
                        </p>
                        <br/>
                        <p>
                            My faith in Jesus means everything to me and affects all that I do. In the end, all I care about making stuff that glorifies him and reveals God to people. Whether it is through music or anything else, I want to help other people get to encounter the living God.
                        </p>
                    </div>
                    <a href="mailto:levi@starkrecordings.com" className="btn-orange">Email Me</a>
                </div>
            </section>
        </main>
        <Footer/>
    </>
  )
}
