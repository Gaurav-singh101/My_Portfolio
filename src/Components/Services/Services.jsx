import React from 'react'
import './Services.css'
import logi from '../../assets/logo.svg.webp'
import arrow_icon from '../../assets/arrow_icon.svg'
import Services_data from '../../assets/Services_data'


const Services = () => {
  return (
    <div id="services" className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={logi} alt="" className="logii"/>
        </div>
        <div className="services-container">
            {Services_data.map((Service , index) =>{
                return <div key={index} className='services-format'>
                    <h3>{Service.s_no}</h3>
                    <h2>{Service.s_name}</h2>
                    <p>{Service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" className="arrow"/>
                    </div>
                    </div>
            })}
        </div>
    </div>
  )
}

export default Services