import React, { useEffect, useState } from 'react'
import '../css/header.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";
import Avatar from 'react-avatar';
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";
import { useContext } from 'react';
import sidebarToggle from '../context/sidebar.context.js'
import { MdVoiceOverOff } from "react-icons/md";
import { MdSettingsVoice } from "react-icons/md";
import { useSpeechToText } from '../customhook/useSpeechToText';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import searchQuery from '../context/searchquery.context.js';
import { ytHeaderLogoFull } from '../constant.js';
import Constant2 from '../Constant2.js';
const Header = () => {
    const { showSidebar, setShowSidebar } = useContext(sidebarToggle);

    const handleHamburgerClick = () => {
        setShowSidebar(!showSidebar)
    }

    const { error, isListening, result, startListening, stopListening } = useSpeechToText();
    const { query, setQuery } = useContext(searchQuery)

    const handleVoiceClick = (e) => {
        if (!isListening) {
            startListening();
        }
    }
    const [suggestionList, setSuggestionList] = useState(null);
    const { search_suggestion_list } = Constant2()
    // making api calls for search 
    const searchSuggestionList = async () => {
        console.log(query)
        const res = await fetch(search_suggestion_list);
        const data = await res.json();
        setSuggestionList(data[1])
        console.log(data[1]);
    }

    useEffect(() => {
        // make api call only if difference between calling is >=200ms else donot do anything
        const timer = setTimeout(() => searchSuggestionList(), 200);
        return () => clearTimeout(timer);
    }, [query])
    return (
        <>

            {showSidebar ? <Sidebar /> : null}
            <div className="header">
                <div className="header_left">
                    <RxHamburgerMenu size="33px" className='hamburger_icon'
                        onClick={handleHamburgerClick} />
                    <Link to='/'><img src={ytHeaderLogoFull} alt="logo" /></Link>
                </div>
                <div className="header_middle">
                    <div className="header_middle_left">
                        <input type="text" placeholder='Search' value={result || query} onChange={(e) => setQuery(e.target.value)} />
                        <IoIosSearch className='header_middle_left_search_icon' size="36px" />
                    </div>
                    <div className="header_middle_right remove2">
                        {isListening ? <MdSettingsVoice size="33px" /> : <MdKeyboardVoice size="33px" onClick={handleVoiceClick} />}
                        {isListening ? <MdVoiceOverOff size="33px" onClick={() => stopListening()} /> : null}

                    </div>
                    {query && (<div className="suggestion_list">
                        <ul style={{ padding: '0' }}>
                            {suggestionList && suggestionList.map((suggestion, idx) => <Link onClick={() => setQuery('')} to={`/search?q=${suggestion}`}><li className='suggestion' key={idx}><IoIosSearch />{suggestion}</li></Link>)}
                        </ul>
                    </div>)}
                </div>
                <div className="header_right">
                    <RiVideoAddLine size="33px" className="header_right_icon remove1" />
                    <IoIosNotificationsOutline size="33px" className="header_right_icon remove1" />
                    <Avatar size="33px" className="header_right_icon avatar remove3" facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" round={true} />
                </div>
            </div>
        </>
    )
}

export default Header;
