import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import My_Resume from '../../assets/Resume.pdf'

const Hero = () => {
  return (
    <div id="home" className='hero'>
        <img src={profile_img} alt="" className="profile_img"/>
        <h1><span>Hii , I'm Gaurav Singh</span></h1>
        <p>A passionate Full-Stack Developer , dedicated to creating meaningful and innovative solutions.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor' offset={50} href='#contact'>Connect with me</AnchorLink></div>

             <a href={My_Resume} className="hero-resume" target='_blank' >My resume</a>

        </div>
    </div>
  )
}

export default Hero