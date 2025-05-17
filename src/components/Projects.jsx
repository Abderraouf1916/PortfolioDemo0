import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "A responsive portfolio built with React showcasing my projects and skills.",
    link: "https://github.com/raouf/portfolio"
  },
  {
    id: 2,
    title: "React News App",
    description: "A news aggregator app using React and external APIs to fetch latest news.",
    link: "https://github.com/raouf/react-news-app"
  },
  {
    id: 3,
    title: "Kotlin Grade Calculator",
    description: "Android app built with Kotlin for calculating university grades and averages.",
    link: "https://github.com/raouf/kotlin-grade-calculator"
  }
];

const Projects = () => {
  const { likes, addLike } = useContext(PortfolioContext);

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map(({ id, title, description, link }) => (
        <div key={id} className="projects-item">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="projects-link">View on GitHub</a>
          <div>
            <button className="like-button" onClick={() => addLike(id)}>Like</button> {likes[id] || 0} likes
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
