import React from 'react'
import '../App.css'
import { useState } from 'react'
import SearchBox from './SearchBox'


const Navbar = () => {
  const flex={
    display:"flex",
    justifyContent:"space-between",
    marginTop: "10px",
  }
  
const btnSearch = {
   color: "blue",
   cursor:"pointer",
   marginRight:"10px",
   position:"relative",
   zIndex:"2",
}
  const [inputField , setField] = useState('')

  const Click  = () => {
    setField(<SearchBox />)
  }

  return (
    <div>
      <div style={flex}>
        <div className='hamburger'>       
          <span className='bar' >-</span>
          <span className='bar' >-</span>
          <span className='bar' >-</span>
          </div>
          <p>{inputField} {setField}</p>
        <i class="fa fa-search" aria-hidden="true"style={btnSearch} onClick={Click} />
    </div>
    </div>
  )
}

export default Navbar