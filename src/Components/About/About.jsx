import React from 'react'
import './About.css'
import theme_pattern from '../../assets/logo.svg.webp'
import profile from '../../assets/profile_img.jpg'

const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <img src={theme_pattern} alt="" className="logoo"/>
            <h1>About me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile} alt="" className="profile" />
            </div>
            <div className="about-right">
                <div className='about-para'>
                    <p>I am a web developer passionate about creating responsive and user-friendly applications using ReactJS and Node.js.</p>
                    <p>My passion for web development lies in creating seamless, interactive, and user-friendly websites that bring ideas to life.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"40%"}}/></div>
                    <div className="about-skill"><p>Node JS</p><hr style={{width:"35%"}}/></div>
                    <div className="about-skill"><p>MySQL & MongoDB</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Data Structures Algorithms</p><hr style={{width:"30%"}}/></div>
                </div>
            </div>
        </div>
        { <div className="about-achievments">
            <div className="achi">
                <a href="https://github.com/Gaurav-singh101" className="git-hub" target="_blank">Git Hub Profile</a>
                <a href="https://www.linkedin.com/in/gaurav-singh-0191a028a/" className="Linked-in" target="_blank">Linkedin Profile</a>
            </div>
        </div> }
    </div>
  )
}

export default About
