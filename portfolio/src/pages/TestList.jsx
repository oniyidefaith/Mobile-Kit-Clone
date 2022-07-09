import React from 'react'

const logo = {
  borderRadius:"10px",
  width:"86px",
  Height:"86px"
}
const flex = {
  display:"flex",
}
const head = {
  width:"560px",
  Height:"187px",
  fontWeight: "700",
  fontSize:"40pt",
  marginTop:"10px"
}
const list ={
  fontSize: "18pt",
  marginTop: "15px",
  listStyle: "none",
  textAlign:"left",
  marginLeft:"-5%"
}
const arrow = {
  width:"306px",
  height:"59px",
  color: "rgba(130, 146, 166, 0.5)",
  fontSize: "10pt",
  textAlign:"center",
  marginTop:"20%",
  marginLeft:"-15%",
}
const link = {
  wordSpacing:"5px",
  display:"flex",
  gap:"10px",
  textAlign:"center",
  padding: " 15px",
  color:"#fffff",
}
const btn = {
  backgroundColor:"#1DCC70",
  wordSpacing:"5px",
  display:"flex",
  gap:"10px",
  textAlign:"center",
  padding: " 15px",
  color:"#fffff",
  border:"none",
}
const img1 = 'https://mobilekit.bragherstudio.com/assets/img/logo.png' 
const TestList = () => {
  return (
    <div>
    <div style={flex}>
      <div>
         <img src={img1} style={logo} alt="logo" width="100px"/>
        <h1 style={head}>Bootstrap 5 Based Mobile UI Kit  HTML Template</h1>
      <ul style={list}>
        <li><ion-icon name="checkmark-outline" role="img" class="md hydrated" aria-label="checkmark outline"></ion-icon>PWA Ready</li>
        <li><ion-icon name="checkmark-outline" role="img" class="md hydrated" aria-label="checkmark outline"></ion-icon>Bootstrap 5 Based</li>
        <li><ion-icon name="checkmark-outline" role="img" class="md hydrated" aria-label="checkmark outline"></ion-icon>Dark/Light Mood</li>
        <li><ion-icon name="checkmark-outline" role="img" class="md hydrated" aria-label="checkmark outline"></ion-icon>Reusable Component</li>
      </ul>
      </div>
      <div style={arrow}>
        <img style={arrow} src="https://mobilekit.bragherstudio.com/assets/img/item/demo-arrow.png" alt="arrow" /><br />
        use your mouse wheel to scroll
      </div>
    </div>
    <div style={link}>
      <a style={btn} href="https://themeforest.net/item/mobilekit-bootstrap-4-based-mobile-ui-kit-template/25384264" target={""} className="btn btn-success">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i> 
        Buy Now
      </a>
      <a style={link} href="https://mobilekit.bragherstudio.com/#qr" target={""} className="btn btn-secondary">
        <i class="fa fa-qrcode" aria-hidden="true"></i>
        Try On Your Phone 
      </a>
    </div>
    </div>
  )
}

export default TestList