import Image from 'next/image'

import styles from '../page.module.css'

const Absence = () => (
    <>
        <div className={styles['case-hero']}>
            <div className={styles['case-hero-content']}>
                <h1>
                    <span>The <strong>presence</strong> of</span>
                    <span><strong>absence</strong>.</span>
                </h1>
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
        <picture>
            <Image
                src="/images/loplabbet-thumb.png"
                alt="Running and doing cool stuff"
                width={1600}
                height={1200}
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
    </>
)

export default Absence