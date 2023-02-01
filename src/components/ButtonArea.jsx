import React from "react"
import { MainContext } from "./context"
import { useContext } from "react"

function ButtonArea() {
  const { setValue } = useContext(MainContext)

  let handleValue
  let result
  const handleClick = (e) => {
    handleValue += e.target.innerText
    result = handleValue.substring(9, 100)
    console.log(handleValue.substring(9, 100))
  }

  const sendOperation = () => {
    let calculateResult = eval(result)
    setValue(calculateResult)
    result = ""
    handleValue = ""
  }

  const clearResult = () => {
    setValue("")
    result = ""
    handleValue = ""
  }

  return (
    <div className="component-button">
      <button
        onClick={clearResult}
        className="text-7xl px-9 py-8 border border-gray-300 bg-gray-200 w-1/4 h-44 sm:h-96 md:h-76 lg:h-36 xl:h-32 2xl:h-40"
      >
        AC
      </button>
      <button
        onClick={handleClick}
        className="text-7xl px-9 py-8 border border-gray-300 bg-gray-200 w-1/4 h-44 sm:h-96 md:h-76 lg:h-36 xl:h-32 2xl:h-40"
      >
        +/-
      </button>
      <button
        onClick={handleClick}
        className="text-7xl px-9 py-8 border border-gray-300 bg-gray-200 w-1/4 h-44 sm:h-96 md:h-76 lg:h-36 xl:h-32 2xl:h-40"
      >
        %
      </button>
      <button
        onClick={handleClick}
        className="text-7xl px-9 py-8 border border-orange-400 bg-orange-300 w-1/4 h-44 sm:h-96 md:h-76 lg:h-36 xl:h-32 2xl:h-40"
      >
        /
      </button>
      <button
        onClick={handleClick}
        className="text-7xl px-9 py-8 border border-gray-300 bg-gray-200 w-1/4 h-44 sm:h-96 md:h-76 lg:h-36 xl:h-32 2xl:h-40"
      >
        7
      </button>
      <button
        onClick={handleClick}
        className="text-7xl px-9 py-8 border border-gray-300 bg-gray-200 w-1/4 h-44 sm:h-96 md:h-76 lg:h-36 xl:h-32 2xl:h-40"
      >
        8
      </button>
      <button
        onClick={handleClick}
        className="text-7xl px-9 py-8 border border-gray-300 bg-gray-200 w-1/4 h-44 sm:h-96 md:h-76 lg:h-36 xl:h-32 2xl:h-40"
      >
        9
      </button>
      <button
        onClick={handleClick}
        className="text-7xl px-9 py-8 border border-orange-400 bg-orange-300 w-1/4 h-44 sm:h-96 md:h-76 lg:h-36 xl:h-32 2xl:h-40"
      >
        *
      </button>
      <button
        onClick={handleClick}
        className="text-7xl px-9 py-8 border border-gray-300 bg-gray-200 w-1/4 h-44 sm:h-96 md:h-76 lg:h-36 xl:h-32 2xl:h-40"
      >
        4
      </button>
      <button
        onClick={handleClick}
        className="text-7xl px-9 py-8 border border-gray-300 bg-gray-200 w-1/4 h-44 sm:h-96 md:h-76 lg:h-36 xl:h-32 2xl:h-40"
      >
        5
      </button>
      <button
        onClick={handleClick}
        className="text-7xl px-9 py-8 border border-gray-300 bg-gray-200 w-1/4 h-44 sm:h-96 md:h-76 lg:h-36 xl:h-32 2xl:h-40"
      >
        6
      </button>
      <button
        onClick={handleClick}
        className="text-7xl px-9 py-8 border border-orange-400 bg-orange-300 w-1/4 h-44 sm:h-96 md:h-76 lg:h-36 xl:h-32 2xl:h-40"
      >
        -
      </button>
      <button
        onClick={handleClick}
        className="text-7xl px-9 py-8 border border-gray-300 bg-gray-200 w-1/4 h-44 sm:h-96 md:h-76 lg:h-36 xl:h-32 2xl:h-40"
      >
        1
      </button>
      <button
        onClick={handleClick}
        className="text-7xl px-9 py-8 border border-gray-300 bg-gray-200 w-1/4 h-44 sm:h-96 md:h-76 lg:h-36 xl:h-32 2xl:h-40"
      >
        2
      </button>
      <button
        onClick={handleClick}
        className="text-7xl px-9 py-8 border border-gray-300 bg-gray-200 w-1/4 h-44 sm:h-96 md:h-76 lg:h-36 xl:h-32 2xl:h-40"
      >
        3
      </button>
      <button
        onClick={handleClick}
        className="text-7xl px-9 py-8 border border-orange-400 bg-orange-300 w-1/4 h-44 sm:h-96 md:h-76 lg:h-36 xl:h-32 2xl:h-40"
      >
        +
      </button>
      <button
        onClick={handleClick}
        className="text-7xl px-9 py-8 border border-gray-300 bg-gray-200 w-2/4 h-44 sm:h-96 md:h-76 lg:h-36 xl:h-32 2xl:h-40"
      >
        0
      </button>
      <button
        onClick={handleClick}
        className="text-7xl px-9 py-8 border border-gray-300 bg-gray-200 w-1/4 h-44 sm:h-96 md:h-76 lg:h-36 xl:h-32 2xl:h-40"
      >
        .
      </button>
      <button
        onClick={sendOperation}
        className="text-7xl px-9 py-8 border border-orange-400 bg-orange-300 w-1/4 h-44 sm:h-96 md:h-76 lg:h-36 xl:h-32 2xl:h-40"
      >
        =
      </button>
    </div>
  )
}

export default ButtonArea
