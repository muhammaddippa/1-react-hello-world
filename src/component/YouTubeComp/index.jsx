import React from 'react'
import './index.css'

const YouTubeComp = (props) => {
    return(
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src={props.tnail} alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

export default YouTubeComp