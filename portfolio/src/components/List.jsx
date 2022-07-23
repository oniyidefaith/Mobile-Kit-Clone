import React from 'react'

const PwaImg = 'https://mobilekit.bragherstudio.com/view29/assets/img/sample/photo/d1.jpg'
const list = () => {
  return (
    <div className='lists'>
        <ul>
            <li>
                <div className='card firstCard'>
                    <img src={PwaImg} alt="Pwa" className='listImg' />
                    <h4 className='listHead'>Progressive web app ready</h4>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default list