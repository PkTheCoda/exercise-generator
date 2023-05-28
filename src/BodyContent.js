import React from "react"

const BodyContent = (props) => {

  return (
    <>
      <h1>{props.dataContent}</h1>

      <div className="body-container">        
        <div className="exercise-items">1</div>
        <div className="exercise-items">2</div>
        <div className="exercise-items">3</div>
      </div>
      
    </>
  )
}

export default BodyContent