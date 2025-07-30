"use client"

import { useState } from "react"
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  Shield,
  Zap,
  CheckCircle,
  Star,
  Play,
  ArrowRight,
  Users,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SoftwarePage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const router = useRouter()

  const handleRequestCustom = () => {
    router.push("/contact")
  }

  const handlePurchase = (productId: string) => {
    router.push(`/software/purchase/${productId}`)
  }

  const handleDemo = (productId: string) => {
    router.push(`/software/demo/${productId}`)
  }

  const categories = [
    { id: "all", name: "All Products", count: 12 },
    { id: "web", name: "Web Applications", count: 5 },
    { id: "mobile", name: "Mobile Apps", count: 3 },
    { id: "desktop", name: "Desktop Software", count: 2 },
    { id: "saas", name: "SaaS Solutions", count: 2 },
  ]

  const products = [
    {
      id: "inventory-management",
      name: "SmartInventory Pro",
      category: "web",
      description:
        "Complete inventory management system with real-time tracking, automated alerts, and comprehensive reporting.",
      price: "$299",
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=300&width=400",
      features: ["Real-time Tracking", "Automated Alerts", "Multi-location Support", "Advanced Reports"],
      technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
      demoAvailable: true,
      type: "Ready Solution",
    },
    {
      id: "pos-system",
      name: "EthioPOS",
      category: "web",
      description:
        "Point of sale system designed for Ethiopian businesses with local payment integration and multi-language support.",
      price: "$199",
      rating: 4.9,
      reviews: 89,
      image: "/placeholder.svg?height=300&width=400",
      features: ["Local Payment Integration", "Multi-language", "Offline Mode", "Receipt Printing"],
      technologies: ["Vue.js", "Express", "MongoDB", "Electron"],
      demoAvailable: true,
      type: "Ready Solution",
    },
    {
      id: "school-management",
      name: "EduManage System",
      category: "web",
      description:
        "Comprehensive school management system with student records, grade tracking, and parent communication.",
      price: "$499",
      rating: 4.7,
      reviews: 67,
      image: "/placeholder.svg?height=300&width=400",
      features: ["Student Records", "Grade Management", "Parent Portal", "Attendance Tracking"],
      technologies: ["Angular", "Django", "MySQL", "Docker"],
      demoAvailable: true,
      type: "Ready Solution",
    },
    {
      id: "delivery-app",
      name: "QuickDeliver Mobile",
      category: "mobile",
      description:
        "Food delivery mobile application with real-time tracking, payment integration, and driver management.",
      price: "$799",
      rating: 4.6,
      reviews: 45,
      image: "/placeholder.svg?height=300&width=400",
      features: ["Real-time Tracking", "Payment Gateway", "Driver App", "Admin Dashboard"],
      technologies: ["React Native", "Firebase", "Stripe", "Google Maps"],
      demoAvailable: true,
      type: "Ready Solution",
    },
    {
      id: "accounting-software",
      name: "BizAccounting Pro",
      category: "desktop",
      description:
        "Professional accounting software with invoicing, expense tracking, and financial reporting for small businesses.",
      price: "$399",
      rating: 4.8,
      reviews: 156,
      image: "/placeholder.svg?height=300&width=400",
      features: ["Invoicing", "Expense Tracking", "Financial Reports", "Tax Calculations"],
      technologies: ["Electron", "React", "SQLite", "Chart.js"],
      demoAvailable: true,
      type: "Ready Solution",
    },
    {
      id: "crm-saas",
      name: "CustomerFlow CRM",
      category: "saas",
      description: "Cloud-based CRM solution with lead management, sales pipeline, and customer communication tools.",
      price: "$49/month",
      rating: 4.9,
      reviews: 203,
      image: "/placeholder.svg?height=300&width=400",
      features: ["Lead Management", "Sales Pipeline", "Email Integration", "Analytics Dashboard"],
      technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
      demoAvailable: true,
      type: "SaaS Solution",
    },
  ]

  const services = [
    {
      icon: Code,
      title: "Custom Web Development",
      description: "Tailored web applications built with modern technologies to meet your specific business needs.",
      features: ["Responsive Design", "API Integration", "Database Design", "Performance Optimization"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experience.",
      features: ["Cross-platform", "Native Performance", "App Store Deployment", "Push Notifications"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to modernize your business operations.",
      features: ["AWS/Azure Setup", "Migration Services", "Auto-scaling", "Security Implementation"],
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Database design, optimization, and management services for improved performance and reliability.",
      features: ["Database Design", "Performance Tuning", "Backup Solutions", "Data Migration"],
    },
  ]

  const stats = [
    { number: "50+", label: "Software Products", icon: Code },
    { number: "200+", label: "Happy Clients", icon: Users },
    { number: "99%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Clock },
  ]

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

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
              <Link href="/software" className="text-blue-700 font-medium">
                Software
              </Link>
              <Link href="/bootcamp" className="text-slate-600 hover:text-coral-500 transition-colors">
                Bootcamp
              </Link>
              <Link href="/about" className="text-slate-600 hover:text-coral-500 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-coral-500 transition-colors">
                Contact
              </Link>
              <button
                onClick={handleRequestCustom}
                className="bg-gradient-to-r from-blue-700 to-coral-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all"
              >
                Request Custom Software
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Software
              <span className="bg-gradient-to-r from-blue-700 to-coral-500 bg-clip-text text-transparent block">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Ready-made software solutions and custom development services to accelerate your business growth. Built by
              Ethiopian developers for global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-700 to-coral-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all">
                Browse Products
              </button>
              <button
                onClick={handleRequestCustom}
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-coral-500 hover:text-blue-700 transition-all"
              >
                Request Custom Software
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-coral-500 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all text-sm sm:text-base ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-700 to-coral-500 text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <span className="hidden sm:inline">
                  {category.name} ({category.count})
                </span>
                <span className="sm:hidden">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-700 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {product.type}
                    </span>
                  </div>
                  {product.demoAvailable && (
                    <button
                      onClick={() => handleDemo(product.id)}
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-white transition-all flex items-center"
                    >
                      <Play className="w-3 h-3 mr-1" />
                      Demo
                    </button>
                  )}
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">{product.name}</h3>
                    <span className="text-xl sm:text-2xl font-bold text-blue-700 w-fit">{product.price}</span>
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-4">
                      <Star className="w-4 h-4 text-amber-400 fill-current" />
                      <span className="ml-1 text-sm text-slate-600">{product.rating}</span>
                    </div>
                    <span className="text-sm text-slate-600">({product.reviews} reviews)</span>
                  </div>

                  <p className="text-slate-600 mb-4 text-sm sm:text-base line-clamp-3">{product.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs sm:text-sm text-slate-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-6">
                    {product.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                    <button
                      onClick={() => handlePurchase(product.id)}
                      className="flex-1 bg-gradient-to-r from-blue-700 to-coral-500 text-white py-2 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
                    >
                      Purchase
                    </button>
                    {product.demoAvailable && (
                      <button
                        onClick={() => handleDemo(product.id)}
                        className="px-4 py-2 sm:py-3 border border-slate-300 rounded-lg hover:border-coral-500 hover:text-blue-700 transition-all text-sm sm:text-base"
                      >
                        Demo
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Development Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Custom Development Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Need something unique? Our expert developers create tailored solutions for your specific requirements.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-700 to-coral-500 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 text-sm sm:text-base">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-600 text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={handleRequestCustom}
              className="bg-gradient-to-r from-blue-700 to-coral-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all flex items-center mx-auto"
            >
              Request Custom Development
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Development Process</h2>
            <p className="text-xl text-slate-600">
              From concept to deployment, we follow a proven process to deliver exceptional software
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We analyze your requirements and create a detailed project roadmap.",
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description: "Create user-friendly designs and interactive prototypes for validation.",
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Build your software with clean code and comprehensive testing.",
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "Launch your software and provide ongoing maintenance and support.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-coral-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{process.title}</h3>
                <p className="text-slate-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-coral-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-coral-100 mb-8">
            Whether you need a ready-made solution or custom development, we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all">
              Browse Products
            </button>
            <button
              onClick={handleRequestCustom}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-700 transition-all"
            >
              Get Custom Quote
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
                Innovative software solutions built by Ethiopian developers for global success.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Web Applications
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Desktop Software
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    SaaS Solutions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Custom Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Technical Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Maintenance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Consulting
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status Page
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
