import React from "react";
import styles from "./ProjectCard.module.css";

import diceGameImg from "../../assets/projects/dicegame.png";
import wellnessAppImg from "../../assets/projects/session.png";
import geminiCloneImg from "../../assets/projects/gemini.png";

const projectImages = {
  "projects/dicegame.png": diceGameImg,
  "projects/session.png": wellnessAppImg,
  "projects/gemini.png": geminiCloneImg
};

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={projectImages[imageSrc]}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        {source && (
          <a
            href={source}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        )}
        {demo && (
          <a
            href={demo}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
};
