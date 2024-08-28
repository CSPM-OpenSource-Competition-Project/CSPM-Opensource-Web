interface CommonButtonProps {
  label: string // label은 문자열 타입으로 지정
}

export default function CommonButton({ label }: CommonButtonProps) {
  return (
    <button
      type='button'
      className='h-10 w-24 rounded-md border-2 bg-blue-900 pl-2 text-left text-sm text-white'
    >
      {label}
    </button>
  )
}
