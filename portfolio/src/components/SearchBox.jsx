import React from 'react'
import { useState } from 'react'
import SearchBar from './SearchBar'


const SearchBox = () => {

  const [search , setDrop] =useState( 
    function close () {
      setDrop('')
     },
    <SearchBar search={search} setDrop={setDrop} close={close}/>
  )
  return (
    <div>

    </div>
  )
}

export default SearchBox