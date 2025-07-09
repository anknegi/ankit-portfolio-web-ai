import React from "react";

const questions = [
  {
    q: "What is a closure in JavaScript?",
    a: "A closure is a function that has access to its own scope, the outer function's scope, and the global scope.",
    video: "https://www.youtube.com/embed/1JsJx1x35c0", // Replace with your own video link
  },
  {
    q: "Explain 'this' keyword in JavaScript.",
    a: "'this' refers to the object it belongs to, depending on how a function is called.",
    video: "https://www.youtube.com/embed/PIkA60I0dKU", // Replace with your own video link
  },
  {
    q: "Difference between var, let, and const?",
    a: "'var' is function scoped, 'let' and 'const' are block scoped. 'const' cannot be reassigned.",
    video: "https://www.youtube.com/embed/sjyJBL5fkp8", // Replace with your own video link
  },
];

const PreInterview = () => (
  <div className="max-w-3xl mx-auto p-4 space-y-8">
    <h1 className="text-2xl font-bold mb-6">JavaScript Interview Questions</h1>
    {questions.map((item, idx) => (
      <div key={idx} className="mb-8 border-b pb-6">
        <h2 className="text-lg font-semibold">{item.q}</h2>
        <p className="mb-2">{item.a}</p>
        <div className="aspect-video">
          <iframe
            src={item.video}
            title={item.q}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64 rounded"
          />
        </div>
      </div>
    ))}
  </div>
);

export default PreInterview;