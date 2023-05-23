import React from 'react'

const getInputValue = () => {
  if (document.querySelector('.header-input').value !== "" ) {
    console.log(document.querySelector('.header-input').value)
    document.querySelector('.body-container').style.display = 'flex'
    document.querySelector('.header-input').value == " "
    return console.log(document.querySelector('.header-input').value)
  } else {
    alert("Must type in a value!")
    return false
  }
}


const Header = () => {

  return (
    <div className="header-container">

      <div className="header-title">Exercise Finder</div>
      <div className="input-items">
        <input type="text" className="header-input" placeholder="Muscle Group"/>
        <button className="submit-button"
        onClick={() => {getInputValue()}}
        >Search</button>
      </div>
      
    </div>
  )
}

export default Header
export {getInputValue}