'use client'

import Image from 'next/image'
import Link from 'next/link'

import styles from './page.module.css'

import CustomCursor from '@/components/custom-cursor'

const cases = [
    {
        id: 'loplabbet',
        img: '/images/loplabbet-thumb.png',
        heading: 'Running and doing cool stuff',
        url: '/case/loplabbet',
        tags: ['E commerce', 'UX/UI']
    },
    {
        id: 'loplabbet-2',
        img: '/images/loplabbet-thumb.png',
        heading: 'Running and doing cool stuff',
        url: '/case/loplabbet',
        tags: ['E commerce', 'UX/UI']
    }
]

const Home = () => {
    return (
        <>
            <CustomCursor />
            <div className={styles['hero-container']}>
                <h1>
                    <span>UX designer</span>
                    <span>with a focus on</span>
                    <span>bla bla bla</span>
                </h1>
                <div className={styles.preamble}>
                    <p>I mainly focus on user interfaces and experiences, like websites, apps and platforms. For more than nine years I’ve helped to improve products with my creative thinking and skills. I mainly focus on user interfaces and experiences, like websites, apps and platforms. For more than nine years I’ve helped to improve products with my creative thinking and skills.</p>
                    <p>I mainly focus on user interfaces and experiences, like websites, apps and platforms. For more than nine years I’ve helped to improve products with my creative thinking and skills.</p>
                </div>
            </div>
            <section className={styles.cases}>
                {cases.map(({ id, img, heading, url, tags }) => (
                    <Link
                        href={url}
                        className={[
                            styles.case,
                            'case',
                            id
                        ].join(' ')}
                        key={id}>
                        <picture>
                            <Image
                                src={img}
                                alt={heading}
                                width={800}
                                height={600}
                            />
                        </picture>
                        <div className={styles['case-meta']}>
                            <h2>{heading}</h2>
                            <ul className={styles.tags}>
                                {tags.map(tag => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </Link>
                ))}
            </section>
        </>
    )
}

export default Home