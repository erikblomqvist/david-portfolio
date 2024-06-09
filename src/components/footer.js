'use client'

import { cases } from '@/app/page'
import { usePathname } from 'next/navigation'
import styles from './footer.module.css'
import Link from 'next/link'

const Footer = props => {
    const pathname = usePathname()
    const slugName = pathname.split('/').at(-1)
    const isCase = !!slugName.length

    const NextCase = () => {
        if(!isCase) return null

        const currentIndex = cases.findIndex(c => c.id === slugName)
        const nextIndex = currentIndex === cases.length - 1 ? 0 : currentIndex + 1
        const nextCase = cases[nextIndex]

        return (
            <div className={nextCase.id}>
                <Link href={nextCase.url}>
                    <h3>Next case</h3>
                    <h4 dangerouslySetInnerHTML={{ __html: nextCase.heading }} />
                </Link>
            </div>
        )
    }

    return (
        <footer className={styles.footer}>
            <NextCase />
            <p>Seen enough? Contact me at <Link href="mailto:dvickhoff@gmail.com">dvickhoff@gmail.com</Link> and let’s get started :)</p>
        </footer>
    )
}

export default Footer