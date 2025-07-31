// lib/topics.ts

export const courseTopics = {

 html: [
    {
      id: "intro",
      title: "Introduction to HTML",
      content: "HTML stands for HyperText Markup Language...",
      code: "<!DOCTYPE html>\n<html>\n  <head></head>\n  <body>Hello</body>\n</html>",
      quiz: {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "Home Tool Markup Language", "HyperLinks and Text Markup Language"]
      }
    },
    // More topics...
  ],
  "react-fundamentals": [
    {
      id: "intr",
      title: "Introduction to React",
      content: `
## What is React?

React is a JavaScript library for building user interfaces.

- Component-based  
- Virtual DOM  
- One-way data binding  
      `,
      code: `function Hello() {
  return <h1>Hello React!</h1>;
}`,
      quiz: {
        question: "What is React?",
        options: ["A CSS framework", "A JS library", "A backend tool", "A database"],
        answer: "A JS library",
      },
    },
    {
      id: "jsx",
      title: "JSX in Depth",
      content: `
JSX lets you write HTML in JavaScript.
      `,
      code: `const element = <h1>Hello JSX</h1>;`,
      quiz: {
        question: "JSX stands for?",
        options: [
          "JavaScript XML",
          "Java Syntax Extension",
          "JSON with XML",
          "None of the above",
        ],
        answer: "JavaScript XML",
      },
    },
  ],


   css: [
    {
      id: "intro",
      title: "Introduction to CSS",
      content: "CSS stands for Cascading stylesheets...",
      code: "body {\n  background-color: lightblue;\n}",
      quiz: {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "Home Tool Markup Language", "HyperLinks and Text Markup Language"]
      }
    },
    // More topics...
  ],
};
