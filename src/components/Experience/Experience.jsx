import React from 'react';
import styles from './Experience.module.css';
import skills from '../../data/skills.json';
import history from '../../data/history.json';

// Import all skill images
import htmlImg from '../../assets/skills/html.png';
import cssImg from '../../assets/skills/css.png';
import reactImg from '../../assets/skills/react.png';
import nodeImg from '../../assets/skills/node.png';
import jsImg from '../../assets/skills/javascript.png';
import mongoImg from '../../assets/skills/mongodb.png';
import figmaImg from '../../assets/skills/figma.png';
import powerBIImg from '../../assets/skills/powerBI.png';
import pythonImg from '../../assets/skills/python.png';
import phpImg from '../../assets/skills/PHP.png';

// Import history images
import iitImg from '../../assets/history/IIT.png';

// Map image file names to imported images
const skillImages = {
  'skills/html.png': htmlImg,
  'skills/css.png': cssImg,
  'skills/react.png': reactImg,
  'skills/node.png': nodeImg,
  'skills/javascript.png': jsImg,
  'skills/mongodb.png': mongoImg,
  'skills/figma.png': figmaImg,
  'skills/powerBI.png': powerBIImg,
  'skills/python.png': pythonImg,
  'skills/PHP.png': phpImg
};

const historyImages = {
  'history/IIT.png': iitImg
};

export const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={skillImages[skill.imageSrc]} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img src={historyImages[historyItem.imageSrc]} alt={`${historyItem.organisation} Logo`} />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experience.map((experience, idx) => (
                    <li key={idx}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};
