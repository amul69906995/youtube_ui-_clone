import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { api_key, baseURL } from '../constant';
import Searchquerycard from './Searchquerycard';
const Searchquery = () => {
    const [searchResultList, setSearchResultList] = useState(null)
    const [searchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(true)
    const q = searchParams.get('q');
    const search_query_list = `${baseURL}/search?part=snippet&maxResults=25&q=${q}&key=${api_key}`
    const getSearchListData = async () => {
        const res = await fetch(search_query_list)
        const data = await res.json();
        console.log(data.items)
        setSearchResultList(data.items);
        setIsLoading(false)
    }
    useEffect(() => {
            getSearchListData()
    }, [q])
    
    return (
        <>
            {searchResultList && searchResultList.map((searchQueryCardData, idx) => <Searchquerycard searchQueryCardData={searchQueryCardData} />)}
        </>
    )
}

export default Searchquery;
