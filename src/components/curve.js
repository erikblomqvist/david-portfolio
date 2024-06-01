'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

import { text, curve, translate } from '@/animations/curve'

const animate = variants => ({
    variants,
    initial: 'initial',
    animate: 'enter',
    exit: 'exit'
})

const caseTitles = {
    loplabbet: 'Löplabbet',
    absence: 'Absence'
}

const Curve = ({ children }) => {
    const pathname = usePathname()
    
    let pageName, pageTitle

    if(pathname === '/') {
        pageName = 'home'
    } else {
        pageName = pathname.split('/')[2]
    }

    if(pageName === 'home') {
        pageTitle = 'David Vickhoff'
    } else {
        pageTitle = caseTitles[pageName]
    }

    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0
    })

    useEffect(() => {
        const resize = () => setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        })

        resize()

        window.addEventListener('resize', resize)

        return () => window.removeEventListener('resize', resize)
    }, [])
    
    return (
        <div
            className="page curve"
            style={{
                '--background': `var(--vickhoff-color-${pageName}-background)`,
                '--background-alt': `var(--vickhoff-color-${pageName}-background-alt)`,
                '--background-fade-r': `var(--vickhoff-color-${pageName}-background-fade-r)`,
                '--background-fade-g': `var(--vickhoff-color-${pageName}-background-fade-g)`,
                '--background-fade-b': `var(--vickhoff-color-${pageName}-background-fade-b)`,
                '--background-fade-a': `var(--vickhoff-color-${pageName}-background-fade-a)`,
                '--text': `var(--vickhoff-color-${pageName}-text)`
            }}
        >
            <div
                className="background"
                style={{ opacity: !dimensions.width ? 1 : 0 }}
            />
            <motion.p
                className="page-title"
                {...animate(text)}
            >
                {pageTitle}
            </motion.p>
            {!!dimensions.width && <SVG {...dimensions} />}
            {children}
        </div>
    )
}

const SVG = ({ width, height }) => {
    const initialPath = `
        M0 300 
        Q${width/2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width/2} ${height + 600} 0 ${height + 300}
        L0 0
    `

    const targetPath = `
        M0 300
        Q${width/2} 0 ${width} 300
        L${width} ${height}
        Q${width/2} ${height} 0 ${height}
        L0 0
    `

    return (
        <motion.svg {...animate(translate)}>
            <motion.path {...animate(curve(initialPath, targetPath))} />
        </motion.svg>
    )
}

export default Curve