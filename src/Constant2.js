import React from 'react'
import searchQuery from "./context/searchquery.context";
const api_key=import.meta.env.VITE_YOUTUBE_API_KEY;
const  baseURL = "https://www.googleapis.com/youtube/v3";
import { useContext } from 'react';
const Constant2 = () => {
    const {query}=useContext(searchQuery)
     const search_suggestion_list=`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`;
     
     return {search_suggestion_list};
}

export default Constant2
