"use client"

import { useState } from "react"
import { Users, Award, Zap, Code, Globe, GraduationCap, Briefcase } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function BootcampPage() {
  const [activeTab, setActiveTab] = useState("upcoming")
  const router = useRouter()

  const handleApplyNow = (bootcampId: string) => {
    router.push(`/bootcamp/apply/${bootcampId}`)
  }

  const handleDownloadCurriculum = (bootcampId: string) => {
    // Simulate PDF download
    const link = document.createElement("a")
    link.href = `/curriculum-${bootcampId}.pdf`
    link.download = `DevVoltz-${bootcampId}-Curriculum.pdf`
    link.click()
  }

  const handleContactInfo = () => {
    router.push("/contact")
  }

  const upcomingBootcamps = [
    {
      id: "fullstack-web-dev",
      title: "Full Stack Web Development Bootcamp",
      description:
        "Comprehensive 16-week program covering frontend, backend, and deployment. From zero to job-ready developer.",
      duration: "16 weeks",
      format: "Hybrid (Online + In-person)",
      startDate: "March 15, 2024",
      endDate: "July 8, 2024",
      schedule: "Mon-Fri, 6:00 PM - 9:00 PM",
      price: "$1,999",
      earlyBird: "$1,599",
      location: "Addis Ababa & Online",
      instructor: "Sarah Johnson & Team",
      spots: 25,
      enrolled: 18,
      rating: 4.9,
      image: "/placeholder.svg?height=300&width=400",
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB", "AWS"],
      outcomes: [
        "Build 5+ Portfolio Projects",
        "Job Placement Assistance",
        "Industry Mentorship",
        "Certificate of Completion",
      ],
    },
    {
      id: "mobile-app-dev",
      title: "Mobile App Development Bootcamp",
      description:
        "Learn to build native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
      duration: "12 weeks",
      format: "Online",
      startDate: "April 1, 2024",
      endDate: "June 24, 2024",
      schedule: "Tue/Thu/Sat, 7:00 PM - 10:00 PM",
      price: "$1,499",
      earlyBird: "$1,199",
      location: "Online",
      instructor: "Ahmed Hassan",
      spots: 20,
      enrolled: 12,
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=400",
      skills: ["React Native", "Flutter", "Firebase", "App Store Deployment", "UI/UX Design"],
      outcomes: ["Build 3 Mobile Apps", "App Store Publishing", "Freelance Opportunities", "Industry Connections"],
    },
    {
      id: "data-science",
      title: "Data Science & Analytics Bootcamp",
      description:
        "Master data analysis, machine learning, and visualization tools to become a data-driven professional.",
      duration: "14 weeks",
      format: "Hybrid (Online + In-person)",
      startDate: "May 6, 2024",
      endDate: "August 12, 2024",
      schedule: "Mon/Wed/Fri, 6:30 PM - 9:30 PM",
      price: "$1,799",
      earlyBird: "$1,399",
      location: "Dubai & Online",
      instructor: "Dr. Meron Tadesse",
      spots: 15,
      enrolled: 8,
      rating: 4.9,
      image: "/placeholder.svg?height=300&width=400",
      skills: ["Python", "SQL", "Machine Learning", "Tableau", "Statistics", "Big Data"],
      outcomes: ["Real-world Projects", "Industry Certification", "Job Placement Support", "Data Portfolio"],
    },
  ]

  const completedBootcamps = [
    {
      id: "web-dev-jan-2024",
      title: "Full Stack Web Development - January 2024",
      graduates: 22,
      jobPlacement: "95%",
      avgSalary: "$45,000",
      duration: "16 weeks",
      completionDate: "January 2024",
      testimonials: [
        {
          name: "Daniel Bekele",
          role: "Full Stack Developer at TechCorp",
          content: "The bootcamp transformed my career completely. Now I'm working at my dream company!",
          rating: 5,
        },
      ],
    },
    {
      id: "mobile-dev-nov-2023",
      title: "Mobile App Development - November 2023",
      graduates: 18,
      jobPlacement: "89%",
      avgSalary: "$42,000",
      duration: "12 weeks",
      completionDate: "November 2023",
      testimonials: [
        {
          name: "Hanan Ahmed",
          role: "Mobile Developer at StartupXYZ",
          content: "Excellent curriculum and supportive instructors. I built my first app during the bootcamp!",
          rating: 5,
        },
      ],
    },
  ]

  const features = [
    {
      icon: Code,
      title: "Hands-on Projects",
      description: "Build real-world applications that showcase your skills to potential employers.",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience in top tech companies.",
    },
    {
      icon: Briefcase,
      title: "Job Placement Support",
      description: "95% job placement rate with dedicated career services and industry connections.",
    },
    {
      icon: Award,
      title: "Industry Certification",
      description: "Receive recognized certificates that validate your skills to employers.",
    },
    {
      icon: Globe,
      title: "Flexible Learning",
      description: "Choose from online, in-person, or hybrid formats to fit your schedule.",
    },
    {
      icon: GraduationCap,
      title: "Lifetime Access",
      description: "Get lifetime access to course materials and alumni network for continued growth.",
    },
  ]

  const stats = [
    { number: "500+", label: "Graduates" },
    { number: "95%", label: "Job Placement Rate" },
    { number: "$48K", label: "Average Starting Salary" },
    { number: "4.9/5", label: "Student Rating" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-700 to-coral-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-coral-500 bg-clip-text text-transparent">
                DevVoltz
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/elearning" className="text-slate-600 hover:text-coral-500 transition-colors">
                E-Learning
              </Link>
              <Link href="/freelance" className="text-slate-600 hover:text-coral-500 transition-colors">
                Freelance
              </Link>
              <Link href="/software" className="text-slate-600 hover:text-coral-500 transition-colors">
                Software
              </Link>
              <Link href="/bootcamp" className="text-blue-700 font-medium">
                Bootcamp
              </Link>
              <Link href="/about" className="text-slate-600 hover:text-coral-500 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-coral-500 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Transform Your Career with
              <span className="bg-gradient-to-r from-blue-700 to-coral-500 bg-clip-text text-transparent block">
                Intensive Bootcamps
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Fast-track your tech career with our intensive, job-focused bootcamp programs. From beginner to job-ready
              in months, not years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleApplyNow("fullstack-web-dev")}
                className="bg-gradient-to-r from-blue-700 to-coral-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all"
              >
                Apply Now
              </button>
              <button
                onClick={handleContactInfo}
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-coral-500 hover:text-coral-500 transition-all"
              >
                Schedule Info Session
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why Choose Our Bootcamps?</h2>
            <p className="text-xl text-slate-600">Everything you need to launch your tech career</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-coral-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bootcamp Tabs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Bootcamp Programs</h2>
            <p className="text-xl text-slate-600">Choose from upcoming programs or see our success stories</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === "upcoming" ? "bg-white text-blue-700 shadow-sm" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Upcoming Bootcamps
              </button>
              <button
                onClick={() => setActiveTab("completed")}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === "completed" ? "bg-white text-blue-700 shadow-sm" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Success Stories
              </button>
            </div>
          </div>

          {/* Upcoming Bootcamps */}
          {activeTab === "upcoming" && (
            <div className="space-y-8">
              {upcomingBootcamps.map((bootcamp, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
                    <div className="relative">
                      <img
                        src={bootcamp.image || "/placeholder.svg"}
                        alt={bootcamp.title}
                        className="w-full h-48 lg:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {bootcamp.spots - bootcamp.enrolled} spots left
                        </span>
                      </div>
                    </div>

                    <div className="lg:col-span-2 p-4 sm:p-6">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{bootcamp.title}</h3>
                          <p className="text-slate-600 mb-4 text-sm sm:text-base">{bootcamp.description}</p>
                        </div>
                        <div className="text-left lg:text-right">
                          <div className="text-2xl font-bold text-blue-700">{bootcamp.earlyBird}</div>
                          <div className="text-sm text-slate-500 line-through">{bootcamp.price}</div>
                          <div className="text-sm text-green-600 font-medium">Early Bird Price</div>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-3">Program Details</h4>
                          <div className="space-y-2 text-sm text-slate-600">
                            <div>Duration: {bootcamp.duration}</div>
                            <div>Format: {bootcamp.format}</div>
                            <div>Schedule: {bootcamp.schedule}</div>
                            <div>Location: {bootcamp.location}</div>
                            <div>Instructor: {bootcamp.instructor}</div>
                            <div>Start Date: {bootcamp.startDate}</div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-900 mb-3">What You'll Learn</h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                            {bootcamp.skills.map((skill, idx) => (
                              <span key={idx} className="px-2 py-1 bg-coral-100 text-coral-800 text-xs rounded-full">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 mb-3">Program Outcomes</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {bootcamp.outcomes.map((outcome, idx) => (
                            <div key={idx} className="flex items-center text-sm text-slate-600">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                              {outcome}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-full bg-slate-200 rounded-full h-2 max-w-xs">
                            <div
                              className="bg-gradient-to-r from-blue-700 to-coral-500 h-2 rounded-full"
                              style={{ width: `${(bootcamp.enrolled / bootcamp.spots) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-slate-600 whitespace-nowrap">
                            {bootcamp.enrolled}/{bootcamp.spots} enrolled
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <button
                            onClick={() => handleDownloadCurriculum(bootcamp.id)}
                            className="px-4 py-2 border border-slate-300 rounded-lg hover:border-coral-500 hover:text-coral-500 transition-all text-sm sm:text-base"
                          >
                            Download Curriculum
                          </button>
                          <button
                            onClick={() => handleApplyNow(bootcamp.id)}
                            className="bg-gradient-to-r from-blue-700 to-coral-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
                          >
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Completed Bootcamps */}
          {activeTab === "completed" && (
            <div className="space-y-8">
              {completedBootcamps.map((bootcamp, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-4 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">{bootcamp.title}</h3>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">{bootcamp.graduates}</div>
                      <div className="text-slate-600 text-sm sm:text-base">Graduates</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">{bootcamp.jobPlacement}</div>
                      <div className="text-slate-600 text-sm sm:text-base">Job Placement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-2">{bootcamp.avgSalary}</div>
                      <div className="text-slate-600 text-sm sm:text-base">Avg Starting Salary</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">{bootcamp.duration}</div>
                      <div className="text-slate-600 text-sm sm:text-base">Program Length</div>
                    </div>
                  </div>

                  {bootcamp.testimonials.map((testimonial, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-lg p-4 sm:p-6">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <div key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400">
                            ★
                          </div>
                        ))}
                      </div>
                      <p className="text-slate-600 mb-4 italic text-sm sm:text-base">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm sm:text-base">{testimonial.name}</div>
                        <div className="text-xs sm:text-sm text-slate-600">{testimonial.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-coral-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Launch Your Tech Career?</h2>
          <p className="text-xl text-coral-100 mb-8">
            Join hundreds of successful graduates who transformed their careers with our intensive bootcamp programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleApplyNow("fullstack-web-dev")}
              className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all"
            >
              Apply to Bootcamp
            </button>
            <button
              onClick={handleContactInfo}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-700 transition-all"
            >
              Schedule Info Session
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-700 to-coral-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">DevVoltz</span>
              </div>
              <p className="text-slate-400">
                Transforming careers through intensive, job-focused bootcamp programs across Africa and the Middle East.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Full Stack Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Data Science
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    UI/UX Design
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Career Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Alumni Network
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Financing Options
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 DevVoltz. All rights reserved. Made with ❤️ in Addis Ababa & Dubai</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
