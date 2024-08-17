import ComplianceMultiFilterMenuBar from '../../../components/complianceField/ComplianceMultiFilterMenuBar'
import ComplianceTableComponent from '../../../components/complianceField/ComplianceTableComponent'
export default function Compliance() {
  return (
    <main className='grid grid-cols-1 gap-4 bg-white'>
      <div>
        <ComplianceMultiFilterMenuBar />
      </div>
      <div className='mt-10'>
        <ComplianceTableComponent />
      </div>
    </main>
  )
}
