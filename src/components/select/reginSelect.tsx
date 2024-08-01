interface Props {
  setRegin: (vaule: string) => void
}

export default function ReginSelect({ setRegin }: Props) {
  const handler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRegin(event.target.value)
  }
  return (
    <>
      <select className='h-12 w-[300px] rounded-md border border-black px-1' onChange={handler}>
        <option value='us-east-1'>us-east-1</option>
        <option value='us-east-2'>us-east-2</option>
        <option value='us-west-1' selected>
          us-west-1
        </option>
        <option value='us-west-2'>us-west-2</option>
        <option value='sa-east-1'>sa-east-1</option>
        <option value='ca-central-1'>ca-central-1</option>
        <option value='eu-west-1'>eu-west-1</option>
        <option value='eu-west-2'>eu-west-2</option>
        <option value='eu-west-3'>eu-west-3</option>
        <option value='eu-central-1'>eu-central-1</option>
        <option value='eu-north-1'>eu-north-1</option>
        <option value='me-south-1'>me-south-1</option>
        <option value='me-central-1'>me-central-1</option>
        <option value='af-south-1'>af-south-1</option>
        <option value='ap-northeast-1'>ap-northeast-1</option>
        <option value='ap-northeast-2' selected>
          ap-northeast-2
        </option>
        <option value='ap-northeast-3'>ap-northeast-3</option>
        <option value='ap-southeast-1'>ap-southeast-1</option>
        <option value='ap-southeast-2'>ap-southeast-2</option>
        <option value='ap-south-1'>ap-south-1</option>
        <option value='ap-southeast-3'>ap-southeast-3</option>
      </select>
    </>
  )
}
