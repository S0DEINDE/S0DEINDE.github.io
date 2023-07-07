import React, { useEffect } from 'react';
import './TextSphere.css';
import TagCloud from 'TagCloud';

const SkillSphere = () => {
  useEffect(() => {
    const contains = '.tagcloud';
    const skills = [
      'Python',
      'Java',
      'C',
      'C++',
      'AWS',
      'Azure',
      'HTML',
      'SQL',
      'Git',
      'pandas',
      'JSON',
      'NodeJS',
      'CSS',
      'Javascript',
      'Typescript',
      'React',
      'Github',
      'JQuery',
      'Splunk',
      'npm'

    ];

    const options = {
      radius: 300,
      maxspeed: 'fast',
      initSpeed: 'fast',
      direction: 135,
      keep: true,
    };

    const tagCloudElement = document.querySelector(contains);
    if (tagCloudElement) {
      tagCloudElement.innerHTML = ''; // Clear any existing content
      TagCloud(tagCloudElement, skills, options);
    }
  }, []);

  return (
    <div className="skill-sphere" style={{ marginLeft: '55%' }}>
      <span className="tagcloud"></span>
    </div>
  );
};

export default SkillSphere;


