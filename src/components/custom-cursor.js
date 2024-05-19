'use client'

import styled from 'styled-components'

import { useMousePosition } from '@/hooks/mouse-position'

const Cursor = styled.div`
    pointer-events: none;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    width: 64px;
    height: 64px;
    background-image: url('/images/pointer.svg');

    translate: -38px -32px;
    scale: 0.2;
    opacity: 0;
    transition:
        /* cubic bezier pop */
        opacity 0.45s cubic-bezier(0.2, 1, 0.3, 1),
        scale 0.45s cubic-bezier(0.2, 1, 0.3, 1);
`

const CustomCursor = () => {
    const { x, y } = useMousePosition()

    return (
        <Cursor
            className="custom-cursor"
            style={{ left: x, top: y }} />
    )
}

export default CustomCursor