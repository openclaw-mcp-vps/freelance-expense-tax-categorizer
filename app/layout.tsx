import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TaxSort — Auto-Categorize Freelance Expenses',
  description: 'Connect your bank accounts and let AI automatically categorize business expenses into tax-deductible categories. Built for freelancers and independent contractors.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b0332ce1-4498-4cd5-9c82-a72ae1e92327"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
