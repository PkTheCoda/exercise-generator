import React from 'react'

const Header = () => {
  return (
    <div className="header-container">
      
      <div className="header-title">Exercise Finder</div>
      <div className="input-items">
        <input type="text" className="header-input" placeholder="Muscle Group"/>
        <button className="submit-button">Search</button>
      </div>
      
    </div>
  )
}

export default Header