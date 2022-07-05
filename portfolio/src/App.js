import React from 'react'
import Home from './pages/Home'
import TestList from './components/TestList'

const body = {
  marginLeft: "8%",
  marginTop: "2%",
  backgroundColor: "#fffaff",
}
const logo = {
  borderRadius:"10px",
}
const App = () => {
  return (
    <div style={body}>
   <img src="https://mobilekit.bragherstudio.com/assets/img/logo.png" style={logo} alt="logo" width="100px"/>
   <Home />
   <TestList/>
    </div>
  )
}

export default App