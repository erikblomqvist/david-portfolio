'use client'

import { usePathname } from 'next/navigation'

const CaseLayout = ({ children }) => {
    const pathname = usePathname()
    
    const caseName = pathname.split('/')[2]
    
    return (
        <section
            className="case-layout"
            style={{
                '--background': `var(--vickhoff-color-${caseName}-background)`,
                '--background-alt': `var(--vickhoff-color-${caseName}-background-alt)`,
                '--background-fade-r': `var(--vickhoff-color-${caseName}-background-fade-r)`,
                '--background-fade-g': `var(--vickhoff-color-${caseName}-background-fade-g)`,
                '--background-fade-b': `var(--vickhoff-color-${caseName}-background-fade-b)`,
                '--background-fade-a': `var(--vickhoff-color-${caseName}-background-fade-a)`,
                '--text': `var(--vickhoff-color-${caseName}-text)`
            }}
        >
            {children}
        </section>
    )
}

export default CaseLayout