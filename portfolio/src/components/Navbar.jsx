import React from 'react'
import '../App.css'
const Navbar = () => {
  const flex={
    display:"flex",
    justifyContent:"space-between",
    marginTop: "10px",
  }
  
// const btnSearch = {
//    color: "blue",
//    cursor:"pointer",
//    marginRight:"10px",
// }

  return (
    <div>
      <div style={flex}>
        <div className='hamburger'>
          <ul>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
          </ul>
          </div>
          <input type="text" name="hello" id="search" placeholder='search' className='search' />
        <i class="fa fa-search" aria-hidden="true" className='search-icon'/>
        </div>
    </div>
  )
}

export default Navbar