import React from 'react';

const skills = [
  "React",
  "JavaScript",
  "Kotlin",
  "HTML & CSS",
  "Node.js",
  "SQL",
  "Git",
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
