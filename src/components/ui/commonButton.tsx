interface CommonButtonProps {
  label: string // label은 문자열 타입으로 지정
}

export default function CommonButton({ label }: CommonButtonProps) {
  return (
    <button
      type='button'
      className='col-span-1 mt-8 h-10 w-full border-2 bg-white pl-2 text-left text-sm text-black'
    >
      {label}
    </button>
  )
}
