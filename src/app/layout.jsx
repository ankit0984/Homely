import { Sen } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider'
import Header from './app_components/Navbar/Header'
import Footer from './app_components/Footer/Footer'

const josef = Sen({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'Homely',
  description: 'Interrior Design and Home Decor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josef.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
