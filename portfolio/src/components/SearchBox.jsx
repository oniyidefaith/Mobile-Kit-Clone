import React from 'react'
import { useState } from 'react'
import SearchBar from './SearchBar'

const SearchBox = () => {

  const [search , setSearch] =useState(<SearchBar/>)
  function close () {
    setSearch('')
    
   }
  
  //  function closed (){
  //   setSearch("")
  //  }
   
  return (
    <div>
      {search} {close}
    </div>
  )
}

export default SearchBox