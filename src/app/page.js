'use client'

import Image from 'next/image'
import Link from 'next/link'

import styles from './page.module.css'

import CustomCursor from '@/components/custom-cursor'

export const cases = [
    {
        id: 'loplabbet',
        img: '/images/cases/loplabbet/thumbnail.jpg',
        heading: 'A better <strong>shopping experience</strong> for runners.',
        url: '/case/loplabbet',
        tags: ['E commerce', 'UX/UI'],
        className: 'w:3/4'
    },
    {
        id: 'absence',
        img: '/images/cases/absence/thumbnail.jpg',
        heading: 'The <strong>presence</strong> of absence.',
        url: '/case/absence',
        tags: ['Product design'],
        className: 'w:1/2'
    },
    {
        id: 'design-system',
        img: '/images/cases/designsystem/thumbnail.jpg',
        heading: 'Designing for <strong>consistency</strong>.',
        url: null,
        tags: ['Product design'],
        className: 'w:1/2'
    },
    {
        id: 'mio',
        img: '/images/cases/mio/thumbnail.jpg',
        heading: 'Online furnitures at <strong>Mio möbler</strong>.',
        url: null,
        tags: ['E-commerce, UX/UI'],
        className: 'w:3/4',
    }
]

const Home = () => (
    <>
        <CustomCursor />
        <div className={styles['hero-container']}>
            <h1>
                <span>UX designer with a </span>
                <span><i>focus on </i><b>seamless</b> </span>
                <span>user experiences.</span>
            </h1>
            <div className={styles.preamble}>
                <p>My name is David, a designer originally from Gothenburg. I’ve been creating digital services and products for more than 10 years.</p>
                <p>I have a passion for interface design and experiences and my goal is to always create great stuff that solves problems.</p>
            </div>
            <div className={styles['scroll-down']}>
                <Image
                    src="/hero-arrow.svg"
                    width={20}
                    height={44}
                    alt="Scroll down" />
            </div>
        </div>
        <section
            id="cases"
            className={styles.cases}
        >
            {cases.map(({ id, img, heading, url, tags, className }) => {
                const [Wrapper, wrapperProps] = url ?
                    [Link, { href: url }]
                    : ['div', {}]

                return (
                    <Wrapper
                    key={id}
                    {...wrapperProps}
                    className={[
                        className,
                        styles.case,
                        'case',
                        !url && 'coming-soon',
                        id
                    ].join(' ')}>
                    <picture>
                        <Image
                            src={img}
                            alt={heading}
                            width={800}
                            height={600}
                        />
                        {!url && (
                            <div className={styles.comingsoonContainer}>
                                <div className={styles.comingsoon}>Coming soon</div>
                            </div>
                        )}
                    </picture>
                    <div className={styles['case-meta']}>
                        <h2 dangerouslySetInnerHTML={{ __html: heading }} />
                        <ul className={styles.tags}>
                            {tags.map(tag => (
                                <li key={`${id}:${tag}`}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                </Wrapper>
                )
            })}
        </section>
    </>
)

export default Home