import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'


  
const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()


    useEffect(() => {
        setLetterClass(('text-animate-hover')
        ,3000);
    });

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs.sendForm('gmail','dave_form',refForm.current,'dRI5nm_y1WPxnzGRm')
            .then(
                () => {
                    alert('Talk to you soon!')
                    window.location.reload(false)
                },
                () => {
                    alert('USER ERROR (Nah I am playing) please try again though!')
                }
            )
    }

    return(

        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t', ' ','m','e!']}
                        />
                    </h1>
                    <p>
                        If you would like to reach out to me, input your information!
                        (I don't bite! I promise!)
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>

                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>

                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required /> 
                                </li>

                                <li>
                                    <textarea placeholder='Message' name="message" required></textarea>
                                </li>

                                <li>
                                    <input type="submit"  className="flat-button" value="SEND"/> 
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}


export default Contact