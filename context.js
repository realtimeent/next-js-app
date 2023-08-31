import { createContext, useContext, useEffect, useState } from 'react'
import { data } from './data'

const Appcontext = createContext()

export const AppProvider = ({ children }) => {
  const [IsSideMenu, setIsSideMenu] = useState(false)
  const [dest, setDest] = useState(false)

  const [Location, setLocation] = useState({ center: '', bottom: '' })

  const [page, setPage] = useState({ page: '', Links: [] })

  const openSideMenu = (text, coordinates) => {
    const page = data.find((item) => item.page === text)
    console.log(page)
    setIsSideMenu(true)
    setLocation(coordinates)
    setPage(page)
  }
  const closeSideMenu = () => {
    setIsSideMenu(false)
  }
  const close = () => {
    closeSideMenu()
  }
  const contextValue = {
    IsSideMenu,
    setIsSideMenu,
    openSideMenu,
    closeSideMenu,
    Location,
    page,
    close,
    dest,
    setDest,
  }

  return (
    <Appcontext.Provider value={contextValue}>{children}</Appcontext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(Appcontext)
}
