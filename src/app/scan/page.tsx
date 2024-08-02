import SideBar from '@/app/components/sidebar/sidebar'

import SelectIAMButton from '@/app/components/scanbuttons/selectIAMButton'
import SelectGroupButton from '@/app/components/scanbuttons/selectGroupButton'
import StartScanButton from '@/app/components/scanbuttons/startScanButton'
import ResourceButton from '@/app/components/scanbuttons/resourceButton'
import ServiceButton from '@/app/components/scanbuttons/serviceButton'

export default function Scan() {
  return (
    <main className='relative flex h-full min-h-screen w-full flex-col items-center justify-start p-4'>
      스캔 페이지
      <SideBar />
      {/* 고정된 위치를 위해 relate, absolute 사용 */}
      <div className='absolute -left-16 top-10 grid grid-cols-3 gap-4'>
        <SelectIAMButton />
        <SelectGroupButton />
        <StartScanButton />
        <ResourceButton />
        <ServiceButton />
      </div>
      <div className='absolute -left-16 top-80'>Total</div>
      {/* 목록 만들기 */}
      <div className='flex flex-col overflow-x-auto'>
        <div className='sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
            {/* 테이블 */}
            <div className='absolute -left-16 top-96 overflow-x-auto'>
              <table className='w-[1000px] border-4 text-left text-sm font-light'>
                <thead className='border-b bg-gray-100 font-medium'>
                  <tr>
                    <th scope='col'>스캔 시간</th>
                    <th scope='col'>AccountID</th>
                    <th scope='col'>리소스</th>
                    <th scope='col'>리소스ID</th>
                    <th scope='col'>Service</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {/* for문으로 찾은 값을 돌리는 식으로 진행. */}
                    <td>값 넣기</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
