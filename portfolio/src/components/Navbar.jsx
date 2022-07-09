import React from 'react'

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

  return (
    <div>
      <div style={flex}>
        <div>
          <ul>
          <span>-</span>
          <span>-</span>
          <span>-</span>
          </ul>
          </div>
          <input type="text" name="hello" id="search" placeholder='search' className='search' />
        <i class="fa fa-search" aria-hidden="true"style={btnSearch} />
        </div>
    </div>
  )
}

export default Navbar