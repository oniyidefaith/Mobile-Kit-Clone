import React from 'react'
import { useState } from 'react';
const SearchBar = (props) => {
    const search = props.search;
    const setDrop = props.setDrop;
    const closes = props.closes;
    const close = props.close;
const [isSearch , setSearch]= useState(true)

    const input = 
    <div className={isSearch} >
    {setDrop}
       {closes}
    <div className={isSearch ? "searchBox": "noSearch"}>
        <input type="text" name="txt" placeholder='Search...' className="drop-box" />
        <i class="fa fa-window-close" aria-hidden="true" onClick={() => setSearch(!isSearch )} close={close}>{search}</i>
        </div>
     </div>
    
  return (
    <div>{input}</div>
  )
}

export default SearchBar