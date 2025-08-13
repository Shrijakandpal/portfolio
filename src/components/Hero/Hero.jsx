import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css';

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I’m Shrija </h1>
        <p className={styles.description}> I’m a passionate Full-Stack Developer exploring the exciting world of AI & Machine Learning. From crafting sleek, responsive front-end designs to building robust, scalable back-end systems, I love turning ideas into real-world applications.
        Let’s collaborate, innovate, and create something amazing together! </p>
        <a href="mailto:shrija.kandpal30@gmail.com" className={styles.contactBtn}> contact me </a>
    </div>
    <img src={getImageUrl ("hero/heroImage.png")} alt="heroImage of me " className={styles.heroImg}></img>
    <div className={styles.topBlur}/>
     <div className={styles.bottomBlur}/>
  </section>
}
