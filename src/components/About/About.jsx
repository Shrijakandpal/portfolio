import React from 'react';
import styles from './About.module.css';
import aboutImage from '../../assets/about/aboutImage.png';
import cursorIcon from '../../assets/about/cursorIcon.png';
import serverIcon from '../../assets/about/serverIcon.png';
import uiIcon from '../../assets/about/uiIcon.png';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        
        <img src={aboutImage} alt="About" className={styles.aboutImg} />
        
        <ul className={styles.aboutItems}> 
          
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
                I specialize in building responsive, scalable web applications using modern frontend frameworks and robust backend architectures.
              </p>
            </div>
          </li>
          
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>AI & Machine Learning</h3>
              <p>
                I explore data-driven solutions, from image classification to predictive modeling, using Python, TensorFlow, and related libraries. 
                I enjoy turning complex datasets into actionable insights.
              </p>
            </div>
          </li>
          
          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>Tools & DevOps</h3>
              <p>
                I leverage Git, Docker, Postman, and cloud platforms to streamline development, testing, and deployment.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
