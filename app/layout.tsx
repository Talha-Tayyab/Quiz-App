import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Quiz Master",
  description: "Test your knowledge with our interactive quiz app",
  keywords: ["quiz", "education", "learning", "interactive"],
  authors: [{ name: "Talha Tayyab" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main className="flex-1 flex flex-col bg-gradient-to-b from-background to-background/95">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'