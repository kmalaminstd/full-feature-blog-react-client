import React, { lazy } from 'react'
import { homebannerImage } from '../../assets/images'

function HomeBanner() {
  return (
    <div className="homeBanner" style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.322),rgba(0,0,0,0.5)), url(${homebannerImage})`,
      height: "90vh",
      width: "100%",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      padding: "8%",
      position: "relative"
    }}>
        <div className="shortTxt">
            <p>Get Some Awesome Things!!!</p>
        </div>
        <div className="wlc">
            <h2>Welcome to <br /> K.M.'<sup>s</sup> Blog</h2>
        </div>
    </div>
  )
}

export default HomeBanner