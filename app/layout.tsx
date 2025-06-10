import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Mukhiya Vishwakarma | MW Fitter Portfolio",
  description:
    "Professional portfolio of Mukhiya Vishwakarma, an experienced MW Fitter specializing in industrial mechanical equipment, steam turbines, boilers, and power generation machinery at SGTPS, Madhya Pradesh",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
