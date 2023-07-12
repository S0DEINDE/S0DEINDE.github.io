import React, { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import Resume from '../../assets/images/Off_Resumey.pdf';
import './index.scss';
import SkillSphere from './TextSphere.js';

const Portfolio = () => {

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setLetterClass('text-animate-hover');
  }, []);

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters 
              letterClass={letterClass} 
              strArray={['S', 'k', 'i', 'l', 'l', 's']} 
              idx={15} 
            />
          </h1>
          <p>
          I'm primarily a back-end developer, but occasionally I dabble in front-end development. 
          Recently, I have been fonding React and JavaScript as you can see. Regarding my back-end knowledge, 
          I'm proficient in a few languages. I'm also proficient in a few front-end languages regarding 
          front-end development. I'm not as efficient on the front-end yet as in the back-end, but I'm 
          always learning! I have most my skills in this cluster to the right!
          </p>
          <p>
          I plan to pursue the computer science field sometime throughout my undergraduate degree. Specifically 
          in Cybersecurity as a Security Engineer or Analyst through internships throughout undergrad. For 
          further information, you can access my resume from the link below!
          </p>
          <div className="resume-page">
            <a href={Resume} target="_blank" rel="noopener noreferrer" className="res-butt">RESUME HERE!</a>
          </div>
        </div>
        <SkillSphere />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;


