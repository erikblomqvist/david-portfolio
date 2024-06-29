import { useRef, useEffect } from 'react'

export const useSplitText = (calculateSplitText) => {
    const splitRef = useRef()

    useEffect(() => {
        const handleResize = () => {
            setTimeout(() => {
                calculateSplitText(splitRef.current)
            }, 1000)
        }

        global.addEventListener('resize', handleResize)

        return () => {
            global.removeEventListener('resize', handleResize)
        }
    }, [calculateSplitText])

    useEffect(() => {
        setTimeout(() => {
            calculateSplitText(splitRef.current)
        }, 500)
    }, [calculateSplitText, splitRef])

    return splitRef
}