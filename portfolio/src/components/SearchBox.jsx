import React from 'react'
import { useState } from 'react'
import SearchBar from './SearchBar'


const SearchBox = () => {

  const [search , setDrop] =useState( 
    <SearchBar search={search} setDrop={setDrop} close={close}/>
  )
   const close = () => {
    setDrop('')
   }
  return (
    <div>
 
    </div>
  )
}

export default SearchBox