import { MainContext } from "./context"
import { useContext } from "react"

function InputArea() {
  const { value } = useContext(MainContext)

  return (
    <div>
      <div
        type="text"
        className="w-full bg-gray-400 text-black text-6xl h-28 text-right pt-7 pr-3"
      >
        <h3>{value}</h3>
      </div>
    </div>
  )
}

export default InputArea
