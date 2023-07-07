import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Me from '../../assets/images/MyImage.png'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'



const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    
    useEffect(() => {
        setLetterClass(('text-animate-hover')
        ,3000);
    });

    return (

        <>

        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ', 'M','e']}
                        idx={15}
                    />
                </h1>
                <p>I'm a rising sophomore at Loyola University Maryland 
                majoring in Computer Science. However, I'm from Dallas, Texas. </p>

                <p> I'm a r&b and sports enthusiast. I don't care what you say Drake is a top 10 
                 rapper of all time. Also, Michael Jackson is the greatest artist of all time. Recently I 
                have gotten into my golf phase, the game is hard. However, my main sport is basketball, 
                I'm an avid Lebron fan. Michael Jordan is the GOAT. If you don't agree with me on any of 
                my takes, you can contact me through my home page. I'd love to hear your rebuttal!</p>

                <p>When it comes to coding I enjoy making side projects, where I can express myself through 
                my work. The best ways I have done this so far have been making this website and making games. As you can tell 
                I like to do my own thing with my font choices, I'm not the “norm”. I like to fit out not fit in! 
                Please enjoy yourself, press my GitHub icon(right in the middle of LinkedIn and Twitter), and 
                play a game or two! If you beat my high score in 2048, contact me from my homepage so I can beat 
                the new high score! Have a great rest of your day, thanks for visiting my website and reading if
                you did!</p>
            </div>

            <div className="David">
                <img src={Me} alt="Dave"/>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}


export default About
