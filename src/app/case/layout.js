'use client'

import { usePathname } from 'next/navigation'

const CaseLayout = ({ children }) => {
    const pathname = usePathname()
    
    const caseName = pathname.split('/')[2]
    
    return (
        <section
            className="case-layout"
            style={{ 'backgroundColor': `var(--vickhoff-color-${caseName}-background)` }}
        >
            {children}
        </section>
    )
}

export default CaseLayout