import React, { Children } from 'react'
import './Header.css'

const Header = ({children}) => {
  //console.log(Children.count(children))
  return (

    <div className="header-section">
        <ul className="navigation">
            <li>Home</li>
            <li>Usage</li>
            <li>Settings</li>
        </ul>
    </div>
  )}

export default Header