import {Link} from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import MyLogo from '../../assets/images/MyLogoS.png'
import Loader from 'react-loaders'

const Home = ()  => {
    const [fadeIn, setFadeIn] = useState(false);
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['D', 'a', 'v', 'i', 'd']

    useEffect(() => {
        setLetterClass(('text-animate-hover')
        , 4000);
    })

    useEffect(() => {
        setFadeIn(true);
    }, []);

    return (
        <>
        <div className="container home-page">
                <img src={MyLogo} alt="image" style={{marginTop:'-175px',marginLeft:'100px'}}
                className={fadeIn ? 'fade-in' : ''}/>
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>e</span>
                        <span className={`${letterClass} _13`}>l</span>
                        <span className={`${letterClass} _14`}>l</span>
                        <span className={`${letterClass} _15`}>o!</span>
                        <br />
                        <span className={`${letterClass} _16`}>I</span>
                        <span className={`${letterClass} _17`}>'m</span>
                        <span className={`${letterClass} _18`}> </span>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={18}
                        />
                    </h1>
                    <h2>aspiring Software Developer</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME!</Link>
                </div>
                <Loader type="pacman" />
        </div>
        </>
    )
}

export default Home