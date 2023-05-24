import React from 'react'
import { useState } from 'react'

import BodyContent from "./BodyContent"



async function getExerciseData(muscle) {
  let data = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
    mode: 'cors',
    headers: {
      'X-Api-Key' : 'vSGrwJSUO8EvcZGf83/nYw==LtW4CWrBc0VOsk1' // put a 3 at the end
    },
  })

  let parsedData = await data.json()
  return parsedData
}

const inputValue = {
  value: ""
}


const Header = () => {

  const getInputValue = () => {
    if (document.querySelector('.header-input').value !== "" ) {
      console.log(document.querySelector('.header-input').value)
      setLogic(true)
  
      inputValue.value = document.querySelector('.header-input').value
  
      document.querySelector('.body-container').style.display = 'flex'
      document.querySelector('.header-input').value == " "
      return true
    } else {
      alert("Must type in a value!")
      return false
    }
  }

  const [logic, setLogic] = useState(false)

  return (
    <>
      <div className="header-container">

        <div className="header-title">Exercise Finder</div>
        <div className="input-items">
          <input type="text" className="header-input" placeholder="Muscle Group"/>
          <button className="submit-button"
          onClick={() => {getInputValue()}}
          >Search</button>
        </div>
        
      </div>
      <BodyContent data={getExerciseData(inputValue.value)}/>
    </>
  )
}

export default Header
export {getInputValue, inputValue}