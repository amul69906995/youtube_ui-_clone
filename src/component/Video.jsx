import React from 'react'
import '../css/video.css'
const Video = ({item}) => {
  return (
    <div className='video_card'>
    <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" className="thumbnail" /> 
    <br />
    <div className='title'>{item.snippet.title}</div>
    <span>{item.statistics.viewCount}</span>
    </div>
  )
}

export default Video
