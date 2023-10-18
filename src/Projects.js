import React from "react";

function Projects() {
  const projectLinks = [
    { name: "Project 1", url: "https://github.com/ruthwik5000/Intern-Tasks" },
    { name: "Project 2", url: "https://github.com/ruthwik5000/Intern-Tasks2" },
  ];

  return (
    <section id="projects" className="full-screen">
      <h2>My Projects</h2>
      <ul>
        {projectLinks.map((project) => (
          <li key={project.name}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
