import React, { useState, useEffect } from 'react'
import PopupImage from '../../public/assets/images/Piano2.webp'
import PopupImageFallback from '../../public/assets/images/Piano2.jpg'

const Popup = ({delayTime}) => {
    const [errorMessage, setErrorMessage] = useState('')
    const [showPopup, setShowPopup] = useState(false)
    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
        setShowPopup(true);
      }, delayTime);

   return () => clearTimeout(timer);
   }, []);
    
    function handlePopup() {
        setShowPopup(!showPopup)
    }

    function validateEmail() {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            setErrorMessage('Your email address was not valid, please try again.')
            setIsValidEmail(false)

        } else {
            setErrorMessage('')
            setIsValidEmail(true)
        }
    }

    
    async function handleSubmit(e) {
        e.preventDefault()

        // const user = {name, email, message}
        // const json = JSON.stringify(user)

        // const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        //     method: 'post',
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body: json
        // })
        // switch (result.status) {
        //     case 200: 
        //         setSubmitMessage('Thanks for your message!')
        //         console.log(result)
        //         break
        //     case !200:
        //         setSubmitMessage('Something went wrong. Please contact our IT-department.')
        //         console.log(result)
        //         break
        // }
    }

  return (
    <div id='popup' className={`${showPopup === false ? 'close-popup' : ''}`}>  
        <div className='wrapper'>
            <div className='container'>
                <button type="button" className="closeButton" aria-label="Close" onClick={handlePopup}></button>

                <picture className="popup-background-image">     
                    <source srcSet={PopupImage} type="image/webp"/>
                    <img src={PopupImageFallback} alt="A robot listening to Spotify"/> 
                </picture>
                
                <div className='popup-text-content'>
                    <p className='h2'>Hey, are you a songwriter?</p>
                    <p className='paragraph'>Me too! I would love to connect and help you with your songs, whether you need feedback, tips on how to record a demo, or just chat about your music, just fill in your email below and I'll reach out!</p>
                </div>
                
                <form className='popup-form' onSubmit={handleSubmit}>
                    <input 
                        className={`form-control ${isValidEmail === false ? 'invalid-input' : ''}`}
                        
                        id="email" 
                        placeholder="name@example.com" 
                        aria-describedby="emailHelpBlock" 
                        name='email' 
                        value={email} 
                        onKeyUp={validateEmail} 
                        onChange={(e) => setEmail(e.target.value)}
                        noValidate
                        />
                        <button type="submit" className="btn btn-primary" disabled={!isValidEmail}>Submit</button>
                        {
                            isValidEmail ? null : 
                                <div id="emailHelpBlock" className="form-text">
                                    {errorMessage}
                                </div>
                        }
                </form>
            </div>
        </div>
    </div>
    )
}
export default Popup
