import React from 'react'

import "./main-btn.css"

const MainBtn = ({children, ...otherProps}) => {
  return (
    <button className={`main-btn`} {...otherProps}>{children}</button>
  )
}

export default MainBtn