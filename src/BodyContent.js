import React from "react"

const BodyContent = (props) => {

  const value = props.data
  console.log(value)

  return (
    <div className="body-container">
      <div className="exercise-items">1</div>
      <div className="exercise-items">2</div>
      <div className="exercise-items">3</div>
      <div className="exercise-items">3</div>
      <div className="exercise-items">3</div>
    </div>
  )
}

export default BodyContent