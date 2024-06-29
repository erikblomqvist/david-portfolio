'use client'

import styles from './navigation.module.css'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Navigation = () => {
    const pathname = usePathname()
    const [isCaseRoute, setIsCaseRoute] = useState(false)
    const [isBeyondCases, setIsBeyondCases] = useState(false)

    useEffect(() => {
        const caseRoutePattern = /^\/case\/.+$/
        
        setIsCaseRoute(caseRoutePattern.test(pathname))

        const checkScrollPosition = () => {
            const casesDiv = document.getElementById('cases')

            if (casesDiv) {
                const rect = casesDiv.getBoundingClientRect()
                setIsBeyondCases(rect.top <= 10)
            }
        }

        window.addEventListener('scroll', checkScrollPosition)

        checkScrollPosition()

        window.addEventListener('hashchange', checkScrollPosition)

        return () => {
            window.removeEventListener('scroll', checkScrollPosition)
            window.removeEventListener('hashchange', checkScrollPosition)
        };
    }, [pathname])

    const isRootActive = (pathname === '/' && !isBeyondCases)

    return (
        <nav className={styles.menu}>
            <ul>
                <li>
                    <Link
                        className={isRootActive ? styles.active : ''}
                        href="/#top">david vickhoff</Link>
                </li>
                <li>
                    <Link
                        className={!isRootActive ? styles.active : ''}
                        href="/#cases">My work</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation