'use client'

import Image from 'next/image'

import {
    HeroContainer, Menu,
    Preamble,
    Cases, Case, CaseMeta
} from '@/styles/home'

import CustomCursor from '@/components/custom-cursor'

const cases = [
    {
        id: 'loplabbet',
        img: '/images/loplabbet-thumb.png',
        heading: 'Running and doing cool stuff',
        tags: ['E commerce', 'UX/UI']
    },
    {
        id: 'loplabbet-2',
        img: '/images/loplabbet-thumb.png',
        heading: 'Running and doing cool stuff',
        tags: ['E commerce', 'UX/UI']
    }
]

const Home = () => {
    return (
        <>
            <CustomCursor />
            <HeroContainer>
                <Menu>
                    <ul>
                        <li>
                            <a href="#">david vickhoff</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#">about me</a>
                        </li>
                        <li>
                            <a href="#">work</a>
                        </li>
                    </ul>
                </Menu>
                <h1>
                    <span>UX designer</span>
                    <span>with a focus on</span>
                    <span>bla bla bla</span>
                </h1>
                <Preamble>
                    <p>I mainly focus on user interfaces and experiences, like websites, apps and platforms. For more than nine years I’ve helped to improve products with my creative thinking and skills. I mainly focus on user interfaces and experiences, like websites, apps and platforms. For more than nine years I’ve helped to improve products with my creative thinking and skills.</p>
                    <p>I mainly focus on user interfaces and experiences, like websites, apps and platforms. For more than nine years I’ve helped to improve products with my creative thinking and skills.</p>
                </Preamble>
            </HeroContainer>
            <Cases>
                {cases.map(({ id, img, heading, tags }) => (
                    <Case
                        className="case"
                        key={id}>
                        <Image src={img} alt={heading} width={800} height={600} />
                        <CaseMeta>
                            <h2>{heading}</h2>
                            <ul className="tags">
                                {tags.map(tag => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>
                        </CaseMeta>
                    </Case>
                ))}
            </Cases>
        </>
    )
}

export default Home