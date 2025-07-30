// lib/topics.ts

export const courseTopics = {
  "react-fundamentals": [
    {
      id: "intro",
      title: "Introduction to React",
      content: `
## What is React?

React is a JavaScript library for building user interfaces.

- Component-based
- Virtual DOM
- One-way data binding
`,
      code: `function Hello() {
  return <h1>Hello React!</h1>
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
      content: `JSX lets you write HTML in JavaScript.`,
      code: `const element = <h1>Hello JSX</h1>`,
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
}
