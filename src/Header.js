import React from 'react'
import { useState } from 'react'

import BodyContent from "./BodyContent"




const inputValue = {
  value: ""
}


const Header = () => {

  const [content, setContent] = useState(["hello1", "hello2"])
  const [inputVal, setInputVal] = useState("nothin")

  function handleInputVal(event) {
    const typedVal = event.target.value
    setInputVal(typedVal)
    console.log('Typed value:', typedVal);
  }

  async function getExerciseData() {
    let data = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=biceps`, {
      mode: 'cors',
      headers: {
        'X-Api-Key' : 'vSGrwJSUO8EvcZGf83/nYw==LtW4CWrBc0VOsk1' // put a 3 at the end
      },
    })
  
    let parsedData = await data.json()
    console.log(parsedData)
    setContent(parsedData.map(data => data.name))
    return parsedData
  }


  return (

    <>
      <div className="header-container">

        <div className="header-title">Exercise Finder</div>
        <div className="input-items">
          <input type="text" className="header-input" placeholder="Muscle Group" onChange={handleInputVal}/>
          <button className="submit-button"onClick={getExerciseData}>Search</button>
        </div>
        
      </div>
      <BodyContent dataContent={content}/>
    </>

  )
}

export default Header
export {getInputValue, inputValue}