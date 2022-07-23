import React from 'react'
import { useState } from 'react'
import 'animate.css'
const Notification = () => {
    const [isNotifying , setNotify] = useState(true);
    const notify =   <div className={isNotifying}>
    <p className={isNotifying ? "notify" : "unNotify"}>
    <i className="fa fa-window-close animate__backInDown"  onClick={() =>setNotify(!isNotifying)} aria-hidden="true"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum distinctio praesentium reiciendis, natus iusto pariatur repellendus inventore illum modi, obcaecati quis expedita. 
    </p>
    </div>
  return (
  <div>
    {notify}
  </div>
  )
}

export default Notification