import ComplianceGraph from '@/components/dashboardField/ComplianceGraph'
import GroupSetting from '@/components/dashboardField/groupSetting'
import ScanGraph from '@/components/dashboardField/ScanGraph'

export default function MainDashboard() {
  return (
    <div className='flex h-full w-full justify-between gap-4'>
      <div className='flex h-full w-[49%] flex-col gap-4'>
        <div className='h-[30%] w-full'>
          <GroupSetting />
        </div>
        <div className='h-[69%] w-full'>
          <ScanGraph />
        </div>
      </div>
      <div className='flex h-full w-[49%]'>
        <ComplianceGraph />
      </div>
    </div>
  )
}
