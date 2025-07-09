import React from "react";

const blogs = [
  {
    title: "Optimizing React Apps for Performance",
    summary: "Tips and tricks to make your React apps faster and more efficient.",
    link: "#",
  },
  {
    title: "Migrating from Vue 2 to Vue 3",
    summary: "A step-by-step guide to upgrade your Vue applications.",
    link: "#",
  },
  // Add more blogs as needed
];

const Blog = () => (
  <div className="max-w-3xl mx-auto p-4 space-y-8">
    <h1 className="text-2xl font-bold mb-6">Blog</h1>
    <ul className="space-y-6">
      {blogs.map((blog, idx) => (
        <li key={idx} className="border rounded p-4 shadow-sm">
          <h2 className="text-lg font-semibold">{blog.title}</h2>
          <p className="mb-2">{blog.summary}</p>
          <a href={blog.link} className="text-blue-600 underline">
            Read more
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Blog;