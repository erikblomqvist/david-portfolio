import Image from 'next/image'

import styles from '../page.module.css'

const Absence = () => (
    <>
        <div className={styles['case-hero']}>
            <div className={styles['case-hero-content']}>
                <h1>
                    <span>The <strong>presence</strong> of</span>
                    <span>absence.</span>
                </h1>
                <ul className={styles['case-meta']}>
                    <li>Product: Huma</li>
                    <li>Role: UX/UI/Research</li>
                </ul>
                <div className={styles.preamble}>
                    <p>One of the projects during my time at Huma was to develop something that would help our customers keep track of the company’s absence. A core feature in a HR-system. But could we do it a little more encouraging then current solutions?</p>
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
            <p>In designing the absence management feature for Huma, we faced the challenge of addressing a wide range of company policies, each with its unique approach to managing employee absences across the diverse legislative landscapes of the Nordic countries. Absence tracking is a well-established HR function, but our goal was to reimagine this critical feature to be more functional and engaging than existing solutions.</p>
            <p>And with Huma’s user base split between admins, managers, and employees, ensuring exceptional usability and functionality for all was paramount.</p>
        </div>
        <h2>The solution.</h2>
        <div className="case-text-content">
            <p>Huma have native apps for both iOS and Android and the absence feature is definitely an area within the product where a device right in your pocket enhances the user experience.</p>
        </div>
        <picture>
            <Image
                src="/images/cases/absence/app.jpg"
                alt="The presence of absence."
                width={1600}
                height={1200}
            />
        </picture>
        <div className="case-text-content">
            <p>To address varying needs regarding working hours and locations, we introduced a flexible work schedule that allows administrators to assign employees accordingly.</p>
        </div>
        <picture>
            <Image
                src="/images/cases/absence/workschedule.jpg"
                alt="The presence of absence."
                width={1600}
                height={1200}
            />
        </picture>
        <div className="case-text-content">
            <p>An adaptable system for managing various types of absences, built to support diverse legislative requirements.</p>
        </div>
        <picture>
            <Image
                src="/images/cases/absence/types.jpg"
                alt="The presence of absence."
                width={1600}
                height={1200}
            />
        </picture>
        <div className="case-images">
            <picture>
                <Image
                    src="/images/cases/absence/vacation.jpg"
                    alt="The presence of absence."
                    width={1600}
                    height={1200}
                />
            </picture>
            <picture>
                <Image
                    src="/images/cases/absence/date-picker.jpg"
                    alt="The presence of absence."
                    width={1600}
                    height={1200}
                />
            </picture>
        </div>
        <picture>
            <Image
                src="/images/cases/absence/modals.jpg"
                alt="The presence of absence."
                width={1600}
                height={1200}
            />
        </picture>
        <div className="case-text-content">
            <p>Planning is an important part of absence in the work place.</p>
        </div>
        <picture>
            <Image
                src="/images/cases/absence/calendar.jpg"
                alt="The presence of absence."
                width={1600}
                height={1200}
            />
        </picture>
    </>
)

export default Absence