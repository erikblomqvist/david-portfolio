import { memo } from 'react'
import { SplitText } from '@cyriacbr/react-split-text'
import { motion } from 'framer-motion'
import { useSplitText } from '@/hooks/split-text'

const LineWrapper = ({ children, lineIndex }) => (
    <motion.span
        transition={{
            // cubic-bezier(0.250, 0.460, 0.450, 0.940)
            ease: [0.25, 0.46, 0.45, 0.94],
            duration: 0.6,
            delay: 0.6 + (0.2 * lineIndex),
        }}
        initial={{
            lineHeight: 3.3,
            skew: '6deg'
        }}
        animate={{
            lineHeight: 0.8,
            skew: '0deg'
        }}
        style={{
            display: 'block',
            whiteSpace: 'pre',
            overflow: 'hidden',
            height: 'calc(var(--size) * 1.125)'
        }}
    >
        {children}
    </motion.span>
)

const MemoizedLineWrapper = memo(LineWrapper)

const calculateSplitText = element => {
    if(!element) return

    const { children } = element

    if(children) {
        for(let i = 0; i < children.length; i++) {
            const child = children[i]

            if(child.nodeName === 'SPAN') {
                const text = child.innerText
                const start = text.indexOf('[')
                const end = text.indexOf(']')
                const hasBracket = start > -1 || end > -1

                if(hasBracket) {
                    // The text has brackets, but we need to check if the brackets are in the same span
                    // If they are not, we need to add the opening bracket to this span and the closing bracket to the next span
                    // If they are, we can just wrap the text in a <strong> element

                    if(start > -1 && end > -1) {
                        // The brackets are in the same span
                        const before = text.slice(0, start)
                        const inside = text.slice(start + 1, end)
                        const after = text.slice(end + 1)

                        child.innerHTML = `${before}<strong>${inside}</strong>${after}`
                    } else if(start > -1) {
                        // The opening bracket is in this span
                        const before = text.slice(0, start)
                        const inside = text.slice(start + 1)

                        child.innerHTML = `${before}<strong>${inside}`
                    } else if(end > -1) {
                        // The closing bracket is in this span
                        const inside = text.slice(0, end)
                        const after = text.slice(end + 1)

                        child.innerHTML = `<strong>${inside}</strong>${after}`
                    }
                }
            }
        }
    }
}

const H1Lines = ({ text }) => {
    const split = useSplitText(calculateSplitText)

    return (
        <h1>
            <SplitText
                LineWrapper={MemoizedLineWrapper}
                WordWrapper={({ children }) => children}
                LetterWrapper={({ children }) => children}
                ref={split}
            >
                {text}
            </SplitText>
        </h1>
    )
}

export default H1Lines