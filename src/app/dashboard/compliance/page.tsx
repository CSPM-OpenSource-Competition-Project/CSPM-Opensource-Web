import ComplianceMultiFilterMenuBar from '../../../components/complianceField/ComplianceMultiFilterMenuBar'
import ComplianceTableComponent from '../../../components/complianceField/ComplianceTableComponent'
export default function Compliance() {
  return (
    <div className='flex h-full w-full gap-4 rounded p-4'>
      <ComplianceMultiFilterMenuBar />

      <ComplianceTableComponent />
    </div>
  )
}
