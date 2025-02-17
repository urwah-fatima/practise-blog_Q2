import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="p-4 border-b">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold">Mindful Tech Blog</h1>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
}