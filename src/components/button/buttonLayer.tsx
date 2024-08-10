interface Props {
  buttonStyle: string
  method?: () => void
  childText: string
}
export default function ButtonLayer({ buttonStyle, method, childText }: Props) {
  return (
    <button
      className={`flex h-9 w-24 items-center justify-center rounded text-base text-white hover:bg-gray-400 ${buttonStyle}`}
      onClick={method}
    >
      {childText}
    </button>
  )
}
