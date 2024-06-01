import Image from 'next/image'

import styles from '../page.module.css'

const DesignSystem = () => (
    <>
        <div className={styles['case-hero']}>
            <div className={styles['case-hero-content']}>
                <h1>
                    <span>Designing for</span>
                    <span><strong>consistency</strong>.</span>
                </h1>
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