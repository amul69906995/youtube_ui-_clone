import React from 'react'
import Header from './component/Header'
import { Outlet } from 'react-router-dom'
import sideberToggle from './context/sidebar.context.js'
import searchQuery from './context/searchquery.context.js'
import { useState } from 'react'
const Layout = () => {
  const [showSidebar,setShowSidebar]=useState(false);
  const [query,setQuery]=useState("")
  return (
    <>
    <searchQuery.Provider value={{query, setQuery}}>
    <sideberToggle.Provider value={{showSidebar, setShowSidebar}}>
        <Header/>
        <Outlet/>
        </sideberToggle.Provider>
        </searchQuery.Provider>
    </>
  )
}

export default Layout
