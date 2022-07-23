import React from 'react'
import Notification from '../components/Notification'
import Navbar from '../components/Navbar'
import 'animate.css';
import MobileBody from './MobileBody'

const Case = {
  // marginTop:"5%",
  borderRadius:"10px",
  border:"#8292A6 3px solid",
  backgroundColor:"#8292A6",
  width:"400px",
  height:"639px",
  marginLeft:"-30%",
  marginRight:"-20%",
}
const container ={
  borderRadius:"10px",
  backgroundColor:"black",
  width:"392px",
  height:"632px",
  position:"relative",
  alignContent:"center",
}
const content = {
  border:"solid black 10px",
  borderRadius:"20px",
  backgroundColor:"#F9F9F9",
  color:"#8292A6",
  width:"380px",
  height:"630px",
  position:"absolute",
  marginLeft:"-5px",
}
const Mobile = () => {
  return (
    <div>
      <div style={Case} className="case">
        <div style={container} className="container">
          <div style={content} className='content-mobile'>
            <Notification/>
            <Navbar />
            <MobileBody/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mobile