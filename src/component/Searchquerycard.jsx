import React from 'react'
import '../css/searchquerycard.css'
import { Link } from 'react-router-dom';

const Searchquerycard = ({searchQueryCardData}) => {
  function truncateDescription(description, maxLength) {
    if (description.length > maxLength) {
      const trimmedDescription = description.substring(0, maxLength);
      return trimmedDescription + '...';
    }
    return description;
  }
  const description=truncateDescription(searchQueryCardData.snippet.description,50)
  return (
    <Link to={`/watch?v=${searchQueryCardData.id.videoId}`}>
   <div className='search_query_card'>
   <div className='search_query_card_img'>
   <img src={searchQueryCardData.snippet.thumbnails.medium.url} alt="thumbnail" />
   </div>
   <div className="search_query_card_title">
   <span>{searchQueryCardData.snippet.title}</span>
   <span>{searchQueryCardData.snippet.channelTitle}</span>
   <span>{description}</span>

   </div>
   </div>
   </Link>
  )
}

export default Searchquerycard
