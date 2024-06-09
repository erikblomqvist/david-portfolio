'use client'

import Image from 'next/image'
import H1Lines from '@/components/h1-lines'

import styles from '../page.module.css'

const DesignSystem = () => (
    <>
        <div className={styles['case-hero']}>
            <div className={styles['case-hero-content']}>
                <H1Lines text="Designing for [consistency]." />
                <ul className={styles['case-meta']}>
                    <li>Product: Huma</li>
                    <li>Role: UX/UI/Research</li>
                </ul>
                <div className={styles.preamble}>
                    <p>Bla bla bla</p>
                </div>
            </div>
        </div>
        <picture className="full">
            <Image
                src="/images/cases/absence/hero.png"
                alt="The presence of absence."
                width={1600}
                height={1200}
            />
        </picture>
        <div className="case-text-content">
            <h3>The challenge</h3>
            <p>Bla bla bla</p>
        </div>
        <h2>The solution.</h2>
    </>
)

export default DesignSystem