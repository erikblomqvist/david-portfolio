import styled from 'styled-components'

export const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    background-color: #f3f3f3;

    h1 {
        display: flex;
        flex-direction: column;

        margin-block-start: 8rem;
        margin-inline-start: 5.25rem;
        
        font-size: 5.5rem;
        font-weight: 900;
        line-height: 1.1;
        color: #3c3c3c;
    }

    padding: 2rem 2.5rem 7rem;
`

export const Menu = styled.nav`
    position: fixed;
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

export const Preamble = styled.div`
    align-self: end;

    margin-inline-end: 6rem;
    max-width: 70ch;

    p {
        font-size: 1.75rem;
        font-weight: 400;
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

    img {
        max-width: 100%;
        height: auto;
    }

    h2 {
        align-self: end;
        
        font-size: 1.75rem;
        font-weight: 400;
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
            scale: 1.05;
        }
    }
`

export const CaseMeta = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`