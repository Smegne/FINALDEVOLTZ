"use client"

import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
import { useEffect, useState } from "react"

const allCourses = [
  {
    id: "react-fundamentals",
    title: "React Fundamentals",
    category: "web-development",
    description: "Master React with hands-on projects.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "node-js-api",
    title: "Node.js API Development",
    category: "web-development",
    description: "Build REST APIs with Node.js.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "android-kotlin",
    title: "Android with Kotlin",
    category: "mobile-development",
    description: "Learn modern Android development.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "node-js-api-programming",
    title: "Node.js API Development",
    category: "programming",
    description: "Build REST APIs with Node.js.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "node-js-database",
    title: "Node.js API Development",
    category: "database",
    description: "Build REST APIs with Node.js.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

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
