'use client'

import Image from 'next/image'
import H1Lines from '@/components/h1-lines'

import styles from '../page.module.css'

const Loplabbet = () => {
    return (
        <>
            <div className={styles['case-hero']}>
                <div className={styles['case-hero-content']}>
                    <H1Lines text="A better [shopping experience] for runners." />
                    <ul className={styles['case-meta']}>
                        <li>Agency: Our Studio</li>
                        <li>Client: Löplabbet</li>
                        <li>Role: UX/UI/Research</li>
                    </ul>
                    <div className={styles.preamble}>
                        <p>Löplabbet, with its wide spectrum of running equipment and expertise, is one of the most popular running stores in the Nordics. They approached us with the need for an e-commerce platform that could not only sell their products but also effectively share their expert content.</p>
                    </div>
                </div>
            </div>
            <picture className="full">
                <Image
                    src="/images/cases/loplabbet/hero.jpg"
                    alt="Running and doing cool stuff"
                    width={2880}
                    height={1462}
                />
            </picture>
            <div className="case-text-content">
                <h3>The challenge</h3>
                <p>Our objective was to revitalize Löplabbet’s e-commerce platform by integrating their vibrant brand aesthetics with product offerings. We converted existing tests and guides from static PDFs into interactive, digital formats that are directly incorporated into the website. This approach not only facilitates a seamless shopping experience but also elevates user interaction with valuable content, driving engagement and conversion.</p>
            </div>
            <h2>The solution.</h2>
            <div className="case-text-content">
                <p>A flexible product grid designed to manage a variety of layouts and combinations.</p>
            </div>
            <div className="case-media-content">
                <video autoPlay loop muted playsInline preload="none">
                    <source src="/images/cases/loplabbet/grid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="case-text-content">
                <p>We transformed their existing shoe tests into a digital format, allowing users to easily compare all available shoes.</p>
            </div>
            <picture>
                <Image
                    src="/images/cases/loplabbet/highscore.jpg"
                    alt="Running and doing cool stuff"
                    width={2656}
                    height={1838}
                />
            </picture>
            <div className="case-images">
                <picture>
                    <Image
                        src="/images/cases/loplabbet/compare.jpg"
                        alt="Running and doing cool stuff"
                        width={1292}
                        height={1600}
                    />
                </picture>
                <picture>
                    <Image
                        src="/images/cases/loplabbet/environment.jpg"
                        alt="Running and doing cool stuff"
                        width={1288}
                        height={1200}
                    />
                </picture>
            </div>
            <picture>
                <Image
                    src="/images/cases/loplabbet/full-page.jpg"
                    alt="Running and doing cool stuff"
                    width={1600}
                    height={4060}
                />
            </picture>
        </>
    )
}

export default Loplabbet