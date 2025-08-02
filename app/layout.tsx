import type { Metadata } from 'next'
// import { GeistSans } from 'geist/font/sans'
// import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

export const metadata: Metadata = {
  title: 'Devvoltz Technology',
  description: `
Devvoltz Technology

Devvoltz is a tech-driven company built on five powerful pillars:

1. Free E-Learning Platform
We offer open access to tech and software education. This not only empowers our community but also helps us generate revenue through platforms like Google Ads — all while promoting Devvoltz globally.

2. Freelance & Digital Marketing
Our skilled members will provide freelance services and market solutions, creating value and building strong client networks worldwide.

3.  Software Solutions
From innovative new software to custom management systems, we design, develop, and deliver high-quality digital products for businesses — small and large.

4. 🎓 Bootcamps (Online & In-Person)
We’ll host intensive training sessions, both online and offline, helping learners and professionals level up with real-world skills.

5. Product Marketing Services
We partner with other businesses to promote and market their products, driving mutual growth and brand awareness.

Let’s build the future — together.
Devvoltz: Learn. Build. Grow. Lead.`,
  generator: 'Smegn Destew Molla - CEO, Developer, and Founder of Devvoltz',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}

