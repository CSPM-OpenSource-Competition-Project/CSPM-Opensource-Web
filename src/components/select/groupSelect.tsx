import { useGroupFeild } from '@/stores/groupStore'

export default function GroupSelect() {
  const { groupList, setGroupIndex, setGroupName, groupName } = useGroupFeild()

  const handler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGroupName(event.target.value)

    // 선택된 값의 인덱스를 저장
    const selectedIndex = event.target.selectedIndex
    setGroupIndex(selectedIndex - 1)
  }

  return (
    <>
      <select
        className='h-8 w-[300px] rounded-md border border-gray-300 px-1 shadow-md'
        value={groupName}
        onChange={handler}
      >
        <option value='추가하기'>추가하기</option>
        {groupList?.map((group, index) => (
          <option key={index} value={group.resourceGroupName}>
            {group.resourceGroupName}
          </option>
        ))}
      </select>
    </>
  )
}
