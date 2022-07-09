import React from 'react'
import TestList from './pages/TestList'
import Mobile from './pages/Mobile'
import '../src/index.css'


const body = {
  marginLeft: "8%",
  marginRight: "8%",
  marginTop: "2%",
  backgroundColor: "#fffaff",
  justifyContent: "space-between"
}
const flex = {
  display: "flex",
}
const App = () => {
  return (
    <div style={body}>
   <div style={flex}>
   <TestList/>
   <Mobile/>
   </div>
    </div>
  )
}

export default App