import React from 'react'
import '../App.css'


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
}
const bar ={
  display: "block",
  gap: "2px",
  color: "blue",
  paddingLeft: "10px",
  borderRadius: "4px",
}
const hamburger={
  width: "50px",
  height: "100%",
  margin: "30px 0px 20px 20px",
  cursor: "pointer",
}
  return (
    <div>
      <div style={flex}>
        <div className='hamburger' style={hamburger}>       
          <span className='bar' style={bar}></span>
          <span className='bar' style={bar}></span>
          <span className='bar' style={bar}></span>
          </div>
          <input type="text" name="hello" id="search" placeholder='search' className='search' />
        <i class="fa fa-search" aria-hidden="true"style={btnSearch} />
        </div>
    </div>
  )
}

export default Navbar