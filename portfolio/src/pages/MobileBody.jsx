import React from 'react'
import List from '../components/List'
const MobileBody = () => {
  return (
    <div className='MobileHeader'>
      <h1 className='title'>Discover</h1>
      <h4 className='subTitle'>Welcome to Mobile Toolkit</h4>
      <div className='cardList'>
        <List/>
      </div>
    </div>
  )
}

export default MobileBody