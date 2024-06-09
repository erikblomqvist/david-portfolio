import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
    weights: [400, 500, 700],
    subsets: ['latin']
})

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata = {
    title: "David Vickhoff - Portfolio",
    description: "David Vickhoff's portfolio",
}

const RootLayout = ({ children }) => (
    <html lang="en">
        <body className={dmSans.className}>
            <Navigation />
            {children}
            <Footer />
        </body>
    </html>
)

export default RootLayout