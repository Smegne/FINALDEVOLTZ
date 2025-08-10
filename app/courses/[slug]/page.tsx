"use client"

import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
import { useEffect, useState } from "react"

const allCourses = [
  // Web Development - Frontend
  {
    id: "html",
    title: "HTML Basics",
    category: "web-development",
    description: "Structure web content using HTML.",
    image: "/TOP_ModLearnTech.jpg?height=200&width=300",
  },
  {
    id: "css",
    title: "CSS Styling",
    category: "web-development",
    description: "Style websites with CSS.",
    image: "/TOP_ModLearnTech.jpg?height=200&width=300",
  },
  {
    id: "javascript",
    title: "JavaScript Essentials",
    category: "web-development",
    description: "Make web pages interactive using JavaScript.",
    image: "/TOP_ModLearnTech.jpg?height=200&width=300",
  },
  {
    id: "typescript",
    title: "TypeScript",
    category: "web-development",
    description: "Enhance JavaScript with static typing.",
    image: "/TOP_ModLearnTech.jpg?height=200&width=300",
  },
  {
    id: "react",
    title: "React.js",
    category: "web-development",
    description: "Build user interfaces with React.",
    image: "/TOP_ModLearnTech.jpg?height=200&width=300",
  },
  {
    id: "vue",
    title: "Vue.js",
    category: "web-development",
    description: "Progressive JavaScript framework for building UI.",
    image: "/TOP_ModLearnTech.jpg?height=200&width=300",
  },
  {
    id: "angular",
    title: "Angular",
    category: "web-development",
    description: "TypeScript-based web app framework.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "svelte",
    title: "Svelte",
    category: "web-development",
    description: "Cybernetically enhanced web apps.",
    image: "/placeholder.svg?height=200&width=300",
  },

  // Web Development - Backend
  {
    id: "nodejs",
    title: "Node.js",
    category: "web-development",
    description: "Run JavaScript on the server-side.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "php",
    title: "PHP",
    category: "web-development",
    description: "Server-side scripting for dynamic web content.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "python-django",
    title: "Python (Django)",
    category: "web-development",
    description: "High-level Python web framework.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "ruby",
    title: "Ruby on Rails",
    category: "web-development",
    description: "Web development with Ruby framework.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "java-spring",
    title: "Java (Spring)",
    category: "web-development",
    description: "Java-based framework for backend development.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "csharp-dotnet",
    title: "C# (.NET)",
    category: "web-development",
    description: "Microsoft framework for web apps.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "go-web",
    title: "Go for Web",
    category: "web-development",
    description: "Fast backend services with Golang.",
    image: "/placeholder.svg?height=200&width=300",
  },

  // Mobile App - Native
  {
    id: "java-android",
    title: "Java for Android",
    category: "mobile-development",
    description: "Build Android apps using Java.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "kotlin-android",
    title: "Kotlin for Android",
    category: "mobile-development",
    description: "Modern Android development with Kotlin.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "swift-ios",
    title: "Swift for iOS",
    category: "mobile-development",
    description: "Develop iOS apps with Swift.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "objectivec-ios",
    title: "Objective-C",
    category: "mobile-development",
    description: "Legacy language for iOS apps.",
    image: "/placeholder.svg?height=200&width=300",
  },

  // Mobile App - Cross Platform
  {
    id: "react-native",
    title: "React Native",
    category: "mobile-development",
    description: "Build cross-platform apps with React Native.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "flutter",
    title: "Flutter & Dart",
    category: "mobile-development",
    description: "Fast mobile apps using Flutter.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "ionic",
    title: "Ionic Framework",
    category: "mobile-development",
    description: "Cross-platform hybrid apps with web tech.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "xamarin",
    title: "Xamarin",
    category: "mobile-development",
    description: "Mobile apps with C# and .NET.",
    image: "/placeholder.svg?height=200&width=300",
  },

  // Database - SQL
  {
    id: "mysql",
    title: "MySQL",
    category: "database",
    description: "Popular open-source SQL database.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "postgresql",
    title: "PostgreSQL",
    category: "database",
    description: "Advanced open-source relational DB.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "sqlite",
    title: "SQLite",
    category: "database",
    description: "Lightweight embedded SQL DB.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "sqlserver",
    title: "MS SQL Server",
    category: "database",
    description: "Microsoft’s relational database.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "oracle",
    title: "Oracle DB",
    category: "database",
    description: "Enterprise-grade relational DB.",
    image: "/placeholder.svg?height=200&width=300",
  },

  // Database - NoSQL
  {
    id: "mongodb",
    title: "MongoDB",
    category: "database",
    description: "Document-based NoSQL database.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "cassandra",
    title: "Cassandra",
    category: "database",
    description: "Scalable NoSQL wide-column DB.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "firebase",
    title: "Firebase",
    category: "database",
    description: "Realtime database & backend platform.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "redis",
    title: "Redis",
    category: "database",
    description: "In-memory data store, used as DB or cache.",
    image: "/placeholder.svg?height=200&width=300",
  },

  // General Programming
  {
    id: "python",
    title: "Python Programming",
    category: "programming",
    description: "Versatile language for AI, scripting, web & more.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "java",
    title: "Java Programming",
    category: "programming",
    description: "Widely-used, portable OOP language.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "c",
    title: "C Language",
    category: "programming",
    description: "Low-level programming for systems and embedded devices.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "cpp",
    title: "C++ Programming",
    category: "programming",
    description: "High-performance programming with OOP and low-level features.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "csharp",
    title: "C# Programming",
    category: "programming",
    description: "Powerful OOP language for games and apps.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "rust",
    title: "Rust Language",
    category: "programming",
    description: "Memory-safe system-level programming.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "golang",
    title: "Go (Golang)",
    category: "programming",
    description: "Efficient programming for backend services.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "r-lang",
    title: "R Language",
    category: "programming",
    description: "Used for data science and statistical computing.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "matlab",
    title: "MATLAB",
    category: "programming",
    description: "Engineering and scientific computations.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "scala",
    title: "Scala",
    category: "programming",
    description: "Functional + OOP language running on JVM.",
    image: "/placeholder.svg?height=200&width=300",
  }
];


export default function CategoryPage() {
  const router = useRouter()
  const { slug } = useParams()
  const [filteredCourses, setFilteredCourses] = useState<typeof allCourses>([])

  useEffect(() => {
    const results = allCourses.filter((course) => course.category === slug)
    setFilteredCourses(results)
  }, [slug])

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-10 text-slate-800 capitalize">
          {slug?.toString().replace("-", " ")} Courses
        </h1>

        {filteredCourses.length === 0 ? (
          <p className="text-lg text-slate-500">No courses found in this category.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-slate-900 mb-2">{course.title}</h2>
                  <p className="text-sm text-slate-600 line-clamp-2">{course.description}</p>
                  <button
                    onClick={() => router.push(`/elearning/course/${course.id}`)}
                    className="mt-4 w-full bg-gradient-to-r from-blue-700 to-orange-500 text-white py-2 rounded-lg text-sm font-medium hover:shadow-lg transition"
                  >
                    View Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
