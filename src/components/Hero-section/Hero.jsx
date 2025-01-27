import React from 'react'
import Header from './Header'
import './Hero.css'

const Hero = () => {
  return (
    <div>

      <div className="hero_bg">
          <Header/>


            <div className="hero_section">
                <div className="hero_logo">
                    <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="" />
                </div>
                <div className="hero_title">
                    <h1>Discover the best food & drinks in Pune</h1>
                </div>
                <div className="hero_search">
                      <div className="search_left">
                      <i class="fa-solid fa-location-dot"></i>
                        <input type="text" placeholder='Baner,Pune' />
                      
                      </div>
                      <div className="search_right">
                      <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder='search here' />
                      </div>
                </div>
            </div>
      </div>

      

    </div>
  )
}

export default Hero