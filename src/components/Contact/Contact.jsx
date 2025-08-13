import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Contact.module.css';

export const Contact = () => {
  return <footer id="contact" className={styles.container}>
    <div className={styles.text}><h2 >Contact</h2>
    <p >Feel free to reach out!</p></div>
    <ul className={styles.links}>
        <li className={styles.link}><img src={getImageUrl("contact/emailIcon.png")} alt="EmailIcon" />
        <a href="mailto:shrija.kandpal@gmail.com">shrija.kandpal30@gmail.com</a></li>
        <li className={styles.link}><img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedinIcon" />
        <a href="https://www.linkedin.com/in/shrija-kandpal-77410a265/"> linkedin.com/ShrijaKandpal </a></li>
        <li className={styles.link}><img src={getImageUrl("contact/githubIcon.png")} alt="githubIcon" />
        <a href="https://github.com/Shrijakandpal"> github.com/ShrijaKandpal</a></li>
    </ul>
  </footer>
}
