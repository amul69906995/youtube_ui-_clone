import React, { useState } from 'react'
import { useSearchParams } from "react-router-dom";

const Watch = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const [id, setId] = useState(searchParams.get("v"));

    return (
        <div style={{
            border: "2px solid red",
            width: "100%", // Make the container width 100% to ensure it stretches to fit its parent
            position: "relative", // Set position to relative for the padding trick
            paddingBottom: "56.25%", // Aspect ratio (16:9) - Adjust this value as needed
        }}>
            <iframe
                style={{ 
                    position: "absolute", // Position the iframe absolutely within its container
                    width: "100%", // Make the iframe fill its container horizontally
                    height: "100%", // Make the iframe fill its container vertically
                    top: 0, // Position the iframe at the top of its container
                    left: 0, // Position the iframe at the left of its container
                }}
                src={`https://www.youtube.com/embed/${id}`}
                title="ENG SUB《斗罗大陆》Soul Land (DouLuo DaLu) EP95 | 腾讯视频 - 动漫"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        </div>
        
    )
}

export default Watch
