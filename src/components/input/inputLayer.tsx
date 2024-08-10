interface Props {
  setType: string
  setName: string
  setPlaceholder: string
  setCSS: string
}

export default function InputLayer({ setType, setName, setPlaceholder, setCSS }: Props) {
  return (
    <input
      className={`flex h-12 w-[300px] border border-gray-400 px-1 ${setCSS}`}
      type={setType}
      name={setName}
      placeholder={setPlaceholder}
    ></input>
  )
}
