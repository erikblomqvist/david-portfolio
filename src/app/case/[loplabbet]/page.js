import Image from 'next/image'

import styles from '../page.module.css'

const Loplabbet = () => (
    <>
        <div className={styles['case-hero']}>
            <div className={styles['case-hero-content']}>
                <h1>
                    <span>A platform</span>
                    <span>for runners</span>
                </h1>
                <dl className={styles['case-meta']}>
                    <dt>Agency</dt>
                    <dd>Our Studio</dd>
                    <dt>Client</dt>
                    <dd>Löplabbet</dd>
                    <dt>Role</dt>
                    <dd>UX/UI/Research</dd>
                </dl>
                <div className={styles.preamble}>
                    <p>Löplabbet, with its wide spectrum of running equipment and expertise, is one of the most popular running stores in the Nordics. They approached us with the need for an e-commerce platform that could not only sell their products but also effectively share their expert content.</p>
                </div>
            </div>
        </div>
        <picture>
            <Image
                src="/images/loplabbet-thumb.png"
                alt="Running and doing cool stuff"
                width={800}
                height={600}
            />
        </picture>
        <div className="case-text-content">
            <h3>The challenge</h3>
            <p>Our objective was to revitalize Löplabbet’s e-commerce platform by integrating their vibrant brand aesthetics with product offerings. We converted existing tests and guides from static PDFs into interactive, digital formats that are directly incorporated into the website. This approach not only facilitates a seamless shopping experience but also elevates user interaction with valuable content, driving engagement and conversion.</p>
        </div>
    </>
)

export default Loplabbet