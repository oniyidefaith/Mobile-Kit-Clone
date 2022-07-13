import React from 'react'

const SearchBar = (props) => {
    const search = props.search;
    const setDrop = props.setDrop;
    const closes = props.closes;
    const close = props.close;

  return (
    <div>
         <div className='searchBox' >
  {setDrop}
     {closes}
      <input type="text" name="txt" placeholder='search' className="drop-box" />
      <i class="fa fa-window-close" aria-hidden="true" onClick={close} >{search}</i>
  </div>
    </div>
  )
}

export default SearchBar