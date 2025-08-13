import React from 'react'
import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return <section className={styles.container} id="about">
    <h2 className={styles.title}>About
    </h2>
    <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt="aboutImage" className={styles.aboutImg}></img>
        <ul className={styles.aboutItems}> 
            <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="cursor image"/>
            <div className={styles.aboutItemText}>
                <h3> Full-Stack Developer</h3>
                <p> I specialize in building responsive, scalable web applications using modern frontend frameworks and robust backend architectures.  </p>
            </div>
            
            </li >
            <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="cursor image"></img>
            <div  className={styles.aboutItemText}><h3>
                AI & Machine Learning
            </h3>
            <p>I explore data-driven solutions, from image classification to predictive modeling, using Python, TensorFlow, and related libraries. I enjoy turning complex datasets into actionable insights.</p>
            </div></li>
            <li className={styles.aboutItem}><img src={getImageUrl("about/uiIcon.png")} alt="cursor image"></img>
            <div  className={styles.aboutItemText}>
                <h3>
                    Tools & DevOps
                </h3>
                <p>I leverage Git, Docker, Postman, and cloud platforms to streamline development, testing, and deployment.</p>
            </div>
            
            </li>
        </ul>
    </div>
    </section>
}
