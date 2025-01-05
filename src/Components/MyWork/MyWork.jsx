import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import lopi from '../../assets/logo.svg.webp'
import arro_icon from '../../assets/arrow_icon.svg'

function MyWork() {
  return (
    <div>
        <div id="work" className="mywork">
            <div className="mywork-title">
                <img className="lopi" src={lopi} alt=" "/>
                <h1>My Projects</h1>
            </div>
            <div className="mywork-container">
              {mywork_data.map ((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
              })}
            </div>
            <div className="mywork-showmore">
              <p>Show More</p>
              <img className="aroo" src={arro_icon} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default MyWork