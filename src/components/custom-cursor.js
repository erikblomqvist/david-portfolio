'use client'

import { useMousePosition } from '@/hooks/mouse-position'
import styles from './custom-cursor.module.css'

const CustomCursor = () => {
    const { x, y } = useMousePosition()

    return (
        <div
            className={[
                styles.cursor,
                'custom-cursor'
            ].join(' ')}
            style={{ left: x, top: y }} />
    )
}

export default CustomCursor