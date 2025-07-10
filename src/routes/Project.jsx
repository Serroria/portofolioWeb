import React from 'react'
import Card from '../components/card'


function Project() {
  return (
    <div className="project min-h-screen font-balsamiq">
        <h1>Project</h1>

  <div className='p-5 flex flex-row'>
    <div className='cardi m-5 basis-1/3'>
      <Card 
  imgURL= "https://img.goodfon.com/wallpaper/big/c/1b/noragami-art-yato-mech-bog.webp"
  alt = "ini yato"
  title = "Yato"
  desc = "hmmm"
  />
</div>
    <div className='cardi m-5 basis-1/3'>
  <Card 
  imgURL= "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
  alt = "ini Sepatu"
  title = "Sepatu"
  desc = "hmmm"
  />
  </div>
    </div> 

    </div>


  )
}

export default Project