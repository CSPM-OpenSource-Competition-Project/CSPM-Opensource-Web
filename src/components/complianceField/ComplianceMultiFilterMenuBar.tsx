import VulnerabilityLevel from '../../components/select/vulnerabilityLevel'
import CommonButton from '../../components/ui/commonButton'
import VulnerabilityTitle from '../../components/select/vulnerabilityTitle'
import IAMSelectBox from '../../components/select/iAMSelectBox'
import GroupSelectBox from '../../components/select/groupSelectBox'
import ResourceSelectBox from '../../components/select/resourceSelectBox'

export default function MultiFilterMenuBar() {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <div className='ml-2'>
        <IAMSelectBox />
      </div>
      <GroupSelectBox />
      <CommonButton label='취약점 검출' />
      <div className='ml-2'>
        <ResourceSelectBox />
      </div>
      <VulnerabilityLevel />
      <VulnerabilityTitle />
    </div>
  )
}
