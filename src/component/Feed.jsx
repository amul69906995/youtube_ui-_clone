import React, { useEffect, useState } from 'react';
import '../css/feed.css';
import { list_of_videos } from '../constant.js';
import Video from './Video.jsx';
import { Link } from 'react-router-dom';

const Feed = () => {
  const [videoList, setVideoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    console.log("fetch data")
    // Set loading state to true when fetching data
    const result = await fetch(list_of_videos);
    const videos = await result.json();
    console.log(videos.items)
    setVideoList((prevList) => [...prevList, ...videos.items]);
    console.log(videoList)
    // Append new items to existing list
    // Set loading state to false after fetching data
    setIsLoading(false);
  };

  useEffect(() => {
  if(isLoading){
    fetchData(); 
  }
    
   // console.log("1useeffect",isLoading)
  }, [isLoading]); // Run only on component mount
  useEffect(() => {
   // console.log("2st useeffect",isLoading)
    const handleScroll = () => {
    //  console.log("inside handlescroll")
     // console.log(window.innerHeight,document.documentElement.scrollTop,document.documentElement.scrollHeight,isLoading)
      if (window.innerHeight + document.documentElement.scrollTop+1>= document.documentElement.scrollHeight ) {
        setIsLoading(true)
        console.log("inside condition")
      }

    }
    window.addEventListener("scroll", handleScroll);
    return () =>{ 
      console.log("cleanup fetch")
      window.removeEventListener("scroll", handleScroll)}
  }, [])
console.log(isLoading)
  return (
    <div className='feed'>
      {videoList.map((item, idx) => (
        <Link key={idx} to={`/watch?v=${item.id}`}>
          <Video item={item} />
        </Link>
      ))}
      {isLoading && <div>Loading more...</div>}
    </div>
  );
};

export default Feed;
