import './globals.css'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import Navigation from '@/components/common/Navigation'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TopTutors Hub',
  description: 'Offering the best online tutoring services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Navbar />
        </nav>
        <main className="flex min-h-screen flex-col pt-16">
          {children}
        </main>
        <footer className='bg-blue-700'>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
