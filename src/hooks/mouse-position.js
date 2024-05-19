import { useEffect, useState } from 'react'

export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const mouseMoveHandler = event => {
            const { clientX, clientY } = event

            setMousePosition({ x: clientX, y: clientY })
        }

        window.addEventListener('mousemove', mouseMoveHandler)

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])

    return mousePosition
}