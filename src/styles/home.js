import styled, { keyframes } from 'styled-components'

export const Menu = styled.nav`
    position: fixed;
    inset-block-start: 2.5rem;
    inset-inline: 2.5rem;

    display: flex;
    justify-content: space-between;

    ul {
        display: flex;
        gap: 1.5rem;
        list-style: none;

        margin: 0;
    }

    li {
        font-size: 1.125rem;
    }

    a {
        position: relative;
        
        font-weight: 500;
        color: #1e1e1e;

        &::after {
            content: '';
            position: absolute;
            inset-block-end: 0;
            inset-inline: 0;

            height: 2px;
            background-color: currentColor;
        }
    }
`

const h1In = keyframes`
    from {
        transform: skew(6deg);
        line-height: 3.3;
    }

    to {
        transform: skew(0);
        line-height: 1.1;
    }
`

export const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    background-color: #f3f3f3;

    h1 {
        --size: 5.5rem;
        --line-height: 1.1;
        
        display: flex;
        flex-direction: column;

        margin-block-start: 8rem;
        margin-inline-start: 5.25rem;
        
        font-size: var(--size);
        font-weight: 900;
        letter-spacing: -0.02em;
        line-height: var(--line-height);
        color: #3c3c3c;

        span {
            height: calc(var(--size) * 1.2);
            overflow: hidden;
            
            animation: ${h1In} 600ms cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards;
            transform: skew(6deg);

            line-height: 3.3;

            &:nth-child(2) {
                animation-delay: 200ms;
            }

            &:nth-child(3) {
                animation-delay: 400ms;
            }
        }
    }

    padding: 2rem 2.5rem 7rem;
`

const preambleIn = keyframes`
    from {
        translate: 0 2rem;
        opacity: 0;
    }

    to {
        translate: 0 0;
        opacity: 1;
    }
`

export const Preamble = styled.div`
    align-self: end;

    margin-inline-end: 6rem;
    max-width: 70ch;

    animation: ${preambleIn} 800ms cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards;
    animation-delay: 1200ms;

    translate: 0 2rem;
    opacity: 0;

    p {
        font-size: 1.75rem;
        color: #3c3c3c;

        &:not(:last-of-type) {
            margin-block-end: 2rem;
        }
    }
`

export const Cases = styled.section`
    display: flex;
    flex-direction: column;
    gap: 7rem;

    padding: 10rem 2.5rem;
`

export const Case = styled.a`
    cursor: none;

    display: flex;
    align-items: center;
    row-gap: 1.5rem;
    column-gap: 4.5rem;

    picture {
        padding: 6rem;
    }

    img {
        max-width: 100%;
        height: auto;

        transition: scale .25s;
    }

    h2 {
        align-self: end;
        
        font-size: 1.75rem;
        font-weight: 300;
        letter-spacing: -0.02em;
        color: #3c3c3c;
    }

    .tags {
        align-self: start;

        display: flex;
        gap: .25rem;
        list-style: none;

        margin: 0;

        li {
            color: #6e6e6e;

            &:not(:last-of-type) {
                &::after {
                    content: ',';
                }
            }
        }
    }

    &:nth-child(even) {
        flex-direction: row-reverse;
    }

    &:hover {
        img {
            scale: 1.03;
        }
    }

    &.loplabbet {
        picture {
            background-color: var(--vickhoff-color-loplabbet-background);
        }
    }
`

export const CaseMeta = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`