import SelectIAMBox from '@/components/select/iAMSelectBox'
import SelectGroupBox from '@/components/select/groupSelectBox'
import StartScanButton from '@/components/button/startScanButton'
import ResourceSelectBox from '@/components/select/resourceSelectBox'
import ServiceSelectBox from '@/components/select/serviceSelectbox'

export default function ResourceScanMultiFilterMenuBar() {
  return (
    <div className='grid w-full grid-cols-3'>
      <SelectIAMBox />
      <SelectGroupBox />
      <StartScanButton />
      <ResourceSelectBox />
      <ServiceSelectBox />
    </div>
  )
}
