"use client";

import "./each-course.css";

import { useParams, useRouter } from "next/navigation";
import { allCourses } from "@/lib/data";
import { courseTopics } from "@/lib/topics";
import ReactMarkdown from "react-markdown";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import dynamic from "next/dynamic";

import {
  FaBook,
  FaCode,
  FaUserCheck,
  FaSignInAlt,
  FaChartLine,
  FaRegListAlt,
  FaCopy,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

export default function CoursePage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;
  const course = allCourses.find((c) => c.id === id);
  const topics = courseTopics[id] || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTopic = topics[currentIndex];
  const [copied, setCopied] = useState(false);

  const [htmlCode, setHtmlCode] = useState(currentTopic?.code || "");
  const [cssCode, setCssCode] = useState("/* Your CSS here */");
  const [jsCode, setJsCode] = useState("// Your JS here");
  const [editorTab, setEditorTab] = useState("html");
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [showLeftSidebar, setShowLeftSidebar] = useState(false);
  const [showRightSidebar, setShowRightSidebar] = useState(false);

  const progress = Math.round(((currentIndex + 1) / topics.length) * 100);

  useEffect(() => {
    hljs.highlightAll();
    setHtmlCode(currentTopic?.code || "");
  }, [currentIndex]);

  const handleCopy = () => {
    if (currentTopic?.code) {
      navigator.clipboard.writeText(currentTopic.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getCombinedCode = () => {
    return `<!DOCTYPE html><html><head><style>${cssCode}</style></head><body>${htmlCode}<script>${jsCode}</script></body></html>`;
  };

  if (!course || !currentTopic) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 text-gray-800 font-sans">
        <div className="text-center p-6 max-w-md bg-white rounded-lg shadow">
          <h1 className="text-3xl font-bold text-red-600 mb-4">404</h1>
          <p className="text-lg mb-6">Course or topic not found.</p>
          <button
            onClick={() => router.push("/")}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Mobile header with hamburger toggles */}
      <div className="lg:hidden flex justify-between items-center p-4 bg-white border-b border-gray-200">
        <button
          onClick={() => setShowLeftSidebar(!showLeftSidebar)}
          className="text-gray-800 text-2xl"
          aria-label="Toggle left sidebar"
        >
          {showLeftSidebar ? <FaTimes /> : <FaBars />}
        </button>
        <button
          onClick={() => setShowRightSidebar(!showRightSidebar)}
          className="bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm"
          aria-label="Toggle right sidebar"
        >
          {showRightSidebar ? "Hide Tools" : "Show Tools"}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Left Sidebar */}
        <aside
          className={`bg-gray-100 border-b lg:border-b-0 lg:border-r border-gray-200 p-4 overflow-y-auto transition-all duration-300 ${
            showLeftSidebar ? "left-sidebar-expanded" : "left-sidebar-collapsed"
          } w-25 lg:w-1/6`}
        >
          <h2 className="text-xl font-bold mb-4 text-gray-800">HTML Tutorial</h2>
          <ul className="space-y-1 text-sm">
            {topics.map((topic, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    setCurrentIndex(index);
                    window.scrollTo(0, 0);
                    setShowLeftSidebar(false); // Optionally close sidebar on mobile after click
                  }}
                  className={`w-full flex items-center gap-2 text-left p-2 rounded ${
                    currentIndex === index
                      ? "bg-green-600 text-white font-semibold"
                      : "hover:bg-green-100 text-gray-700"
                  }`}
                >
                  <FaBook className="text-sm" />
                  {topic.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-4/6 p-4 sm:p-6 space-y-6 bg-white">
          {/* Header */}
          <div className="flex justify-between items-center flex-wrap gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-2">
              <FaRegListAlt className="text-green-600" /> {course.title}
            </h1>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm shadow">
              Start Quiz
            </button>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-green-600 h-3 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-right text-sm text-gray-500">{progress}% complete</p>

          {/* Lesson Content */}
          <div className="p-4 sm:p-6 bg-gray-50 border border-gray-200 rounded shadow-sm text-base">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <FaBook className="text-green-600" /> {currentTopic.title}
            </h2>

            <div className="prose max-w-none prose-sm sm:prose prose-p:leading-relaxed prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded list-decimal list-inside">
              <ReactMarkdown>{currentTopic.note}</ReactMarkdown>
            </div>

            {/* Code Example */}
            {currentTopic.code && (
              <>
                <div className="flex justify-between items-center mt-6 mb-2">
                  <h3 className="text-lg font-semibold text-gray-700">Example Code</h3>
                  <button
                    onClick={handleCopy}
                    className="text-sm text-green-600 hover:underline flex items-center gap-1"
                  >
                    <FaCopy /> {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
                <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded overflow-x-auto relative">
                  <code className="language-html whitespace-pre">{currentTopic.code}</code>
                </pre>
              </>
            )}

            {/* Editor + Preview */}
            <div
              className={`mt-6 border rounded-lg ${
                isFullScreen ? "fixed inset-0 z-50 bg-white p-4 overflow-auto" : ""
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-700">Try It Live</h3>
                <button
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  className="text-sm text-blue-600 hover:underline"
                >
                  {isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
                </button>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 mb-2">
                {["html", "css", "js"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setEditorTab(lang)}
                    className={`px-3 py-1 text-sm rounded ${
                      editorTab === lang
                        ? "bg-green-600 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Monaco Editor */}
              <MonacoEditor
                height="300px"
                defaultLanguage={editorTab}
                language={editorTab}
                value={
                  editorTab === "html"
                    ? htmlCode
                    : editorTab === "css"
                    ? cssCode
                    : jsCode
                }
                onChange={(value) => {
                  if (editorTab === "html") setHtmlCode(value);
                  else if (editorTab === "css") setCssCode(value);
                  else setJsCode(value);
                }}
                theme="vs-dark"
                className="rounded border"
              />

              {/* Live Preview */}
              <h4 className="mt-4 text-sm text-gray-600 font-semibold">Live Preview</h4>
              <iframe
                className="w-full h-64 border mt-2 rounded"
                srcDoc={getCombinedCode()}
                title="Live Preview"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between flex-wrap gap-2">
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
              disabled={currentIndex === 0}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded disabled:opacity-50"
            >
              ← Previous
            </button>
            <button
              onClick={() =>
                setCurrentIndex((prev) => Math.min(prev + 1, topics.length - 1))
              }
              disabled={currentIndex === topics.length - 1}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Next →
            </button>
          </div>
        </main>

        {/* Right Sidebar */}
        {/* <aside
          className={`bg-white border-t lg:border-t-0 lg:border-l border-gray-200 p-4 lg:p-6 transition-all duration-300 ${
            showRightSidebar ? "right-sidebar-expanded" : "right-sidebar-collapsed"
          } w-full lg:w-1/6`}
        >
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-4 shadow-sm">
            <div className="flex items-center gap-2">
              <FaUserCheck className="text-xl text-green-600" />
              <h3 className="text-lg font-semibold text-gray-700">Track Your Progress</h3>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li className="flex items-center gap-2">
                <FaChartLine className="text-green-500" /> View completed lessons
              </li>
              <li className="flex items-center gap-2">
                <FaBook className="text-green-500" /> Keep streaks
              </li>
              <li className="flex items-center gap-2">
                <FaCode className="text-green-500" /> Create paths
              </li>
            </ul>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded text-sm font-semibold flex items-center justify-center gap-2">
              <FaSignInAlt /> Sign Up Free
            </button>
            <p className="text-xs text-gray-500 italic">Note: This is a simulated feature.</p>
          </div>
        </aside> */}
      </div>
    </div>
  );
}
