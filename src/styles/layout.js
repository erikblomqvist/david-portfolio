import styled from 'styled-components'

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