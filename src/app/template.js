'use client'

import { Children, cloneElement } from 'react'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const AnimatePresenceWrapper = ({ children }) => {
    const pathname = usePathname()

    return (
        <AnimatePresence mode="wait">
            {Children.map(children, child => cloneElement(child, { key: pathname }))}
        </AnimatePresence>
    )
}

export default AnimatePresenceWrapper