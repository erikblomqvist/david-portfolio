import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

import Navigation from '@/components/navigation'

export const metadata = {
    title: "David Vickhoff - Portfolio",
    description: "David Vickhoff's portfolio",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navigation />
                {children}
            </body>
        </html>
    )
}
