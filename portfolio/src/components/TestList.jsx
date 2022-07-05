import React from 'react'
const head = {
  width:"50%",
  fontWeight: "700",
  fontSize:"40pt",
  marginTop:"10px"
}
const list ={
  fontSize: "20pt",
  marginTop: "15px"
}
const TestList = () => {
  return (
    <div>
        <h1 style={head}>Bootstrap 5 Based Mobile UI Kit  HTML Template</h1>
        <p style={list}><i className="fa fa-check" aria-hidden="true"></i> PWA Ready</p>
    </div>
  )
}

export default TestList