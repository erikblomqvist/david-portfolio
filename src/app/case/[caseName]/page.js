import dynamic from 'next/dynamic'

const CasePage = ({ params }) => {
    const { caseName } = params

    const CaseComponent = dynamic(() => import(`./${caseName}`))

    return <CaseComponent />
}

export default CasePage