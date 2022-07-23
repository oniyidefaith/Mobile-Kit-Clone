import React from 'react'
import '../App.css'
import { useState } from 'react'
import SearchBox from './SearchBox'

//  useEffect(() =>{

// }, []);

// const searching = useRef(null)
const Navbar = () => {
  const flex={
    display:"flex",
    justifyContent:"space-between",
    marginTop: "10px",
  }
  

  const [inputField , setField] = useState('')

  const Click  = () => {
    setField(<SearchBox />)
  }

  return (
    <div>
      <div style={flex}>
        <div className='hamburger'> 
        <i class="fa fa-list" aria-hidden="true"></i>      
          </div>
          <p>{inputField} {setField}</p>
        <i class="fa fa-search" aria-hidden="true" onClick={Click} />
    </div>
    </div>
  )
}

export default Navbar