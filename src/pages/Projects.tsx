import React from "react";

const projects = [
  {
    name: "Williams Sonoma Ecommerce UI",
    description: "Optimized high-traffic UI for an ecommerce giant, reducing load times by 25%.",
    tech: "Vue 2, Node.js, AWS, Docker",
  },
  {
    name: "AppleCare Portal Migration",
    description: "Migrated AppleCare Portal from Vue 2 to Vue 3 and improved test coverage.",
    tech: "Vue 3, React, Playwright, Vitest",
  },
  {
    name: "Cisco Network Monitoring Dashboard",
    description: "Built React dashboards and REST APIs for real-time fault analysis.",
    tech: "React, Node.js, MongoDB",
  },
  // Add more projects as needed
];

const Projects = () => (
  <div className="max-w-4xl mx-auto p-4 space-y-8">
    <h1 className="text-2xl font-bold mb-6">Projects</h1>
    <ul className="space-y-6">
      {projects.map((proj, idx) => (
        <li key={idx} className="border rounded p-4 shadow-sm">
          <h2 className="text-lg font-semibold">{proj.name}</h2>
          <p className="mb-2">{proj.description}</p>
          <span className="text-xs text-gray-500">Tech: {proj.tech}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Projects;