"use client";

import { useParams, useRouter } from "next/navigation";
import { allCourses } from "@/lib/data";
import { courseTopics } from "@/lib/topics";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css"; // ✅ Make sure a theme is imported

export default function CoursePage() {
  const params = useParams();
  const router = useRouter();

  const id = params?.id;
  const course = allCourses.find((c) => c.id === id);
  const topics = courseTopics[id] || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTopic = topics[currentIndex];

  useEffect(() => {
    hljs.highlightAll();
  }, [currentIndex]);

  if (!course || !currentTopic) {
    return (
      <div className="flex items-center justify-center h-screen text-red-600 font-semibold">
        Course or topic not found.
      </div>
    );
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 border-r h-screen p-4 sticky top-0 overflow-y-auto bg-white">
        <h2 className="text-xl font-semibold mb-4">{course.title}</h2>
        <ul className="space-y-2">
          {topics.map((topic, index) => (
            <li
              key={topic.id}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer p-2 rounded hover:bg-blue-100 ${
                index === currentIndex ? "bg-blue-200 font-bold" : ""
              }`}
            >
              {index + 1}. {topic.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">{currentTopic.title}</h1>

        <div className="prose max-w-none">
          <ReactMarkdown>{currentTopic.content}</ReactMarkdown>
        </div>

        {currentTopic.code && (
          <pre className="mt-4 rounded overflow-auto">
            <code className="language-js">{currentTopic.code}</code>
          </pre>
        )}

        {/* Quiz Section */}
        {currentTopic.quiz && (
          <div className="mt-6 p-4 border rounded bg-gray-50">
            <p className="font-semibold mb-2">{currentTopic.quiz.question}</p>
            <ul className="space-y-1">
              {currentTopic.quiz.options.map((opt, idx) => (
                <li
                  key={idx}
                  className="bg-white border px-3 py-2 rounded cursor-pointer hover:bg-gray-100"
                >
                  {opt}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
            disabled={currentIndex === 0}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            ← Previous
          </button>
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                Math.min(prev + 1, topics.length - 1)
              )
            }
            disabled={currentIndex === topics.length - 1}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            Next →
          </button>
        </div>
      </main>
    </div>
  );
}
