import React from "react"

function Button(props) {
  function handleClick() {
    const text = props.text
    console.log(text)
  }

  return (
    <button onClick={handleClick} className={props.font}>
      {props.text}
    </button>
  )
}

export default Button
