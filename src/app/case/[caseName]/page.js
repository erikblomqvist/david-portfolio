import dynamic from 'next/dynamic'

const CasePage = ({ params }) => {
    const { caseName } = params

    const CaseComponent = dynamic(() => import(`./${caseName}`))

    return (
        <section className="case-layout">
            <CaseComponent />
        </section>
    )
}

export default CasePage