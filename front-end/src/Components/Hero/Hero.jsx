import React from 'react'
import './Hero.css'
import hero_image from '../Asset/banner.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={hero_image} alt='hero-image' />
    </div>
  )
}

export default Hero;