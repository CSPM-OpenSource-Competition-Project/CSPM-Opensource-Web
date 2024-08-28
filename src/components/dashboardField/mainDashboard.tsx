import ComplianceGraph from '@/components/dashboardField/ComplianceGraph'
import GroupSetting from '@/components/dashboardField/groupField/groupSetting'
import ScanGraph from '@/components/dashboardField/ScanGraph'

export default function MainDashboard() {
  return (
    <div className='flex h-[95%] w-full flex-grow items-center justify-between'>
      <div className='flex h-full w-[49%] flex-col justify-between'>
        <div className='h-[35%] w-full'>
          <GroupSetting />
        </div>

        <div className='h-[64%] w-full'>
          <ScanGraph />
        </div>
      </div>
      <div className='flex h-full w-[49%]'>
        <ComplianceGraph />
      </div>
    </div>
  )
}
