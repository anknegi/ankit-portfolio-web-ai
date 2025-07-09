import React from "react";

const downloads = [
  {
    name: "Resume (PDF)",
    url: "/downloads/ankit-resume.pdf",
  },
  {
    name: "JavaScript Notes",
    url: "/downloads/js-notes.pdf",
  },
  // Add more download items as needed
];

const Downloads = () => (
  <div className="max-w-3xl mx-auto p-4 space-y-8">
    <h1 className="text-2xl font-bold mb-6">Downloads</h1>
    <ul className="space-y-4">
      {downloads.map((item, idx) => (
        <li key={idx}>
          <a
            href={item.url}
            download
            className="text-blue-600 underline font-medium"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Downloads;