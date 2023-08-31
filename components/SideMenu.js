import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'
import Link from 'next/link'
export default function SideMenu() {
  const { IsSideMenu, Location, page } = useGlobalContext()
  const { Links } = page

  const { type } = Links
  console.log(Links)
  const container = useRef(null)
  // console.log(Location)
  // console.log(page)
  useEffect(() => {
    const menu = container.current
    menu.style.left = `${Location.center}px`
    menu.style.top = `${Location.bottom}px`
  }, [Location, page])
  return (
    <div
      className={`${IsSideMenu ? 'sidemenu' : 'close-menu'}`}
      ref={container}
    >
      <h4>{type}</h4>
      <div className='links-container'>
        {Links && (
          <div>
            {Links.map((page, index) => {
              return (
                <div className='sidelink-container'>
                  <Link key={index} href={`/${page.path}`}>
                    <span className='icon-container'>
                      {page.icon} {page.type}
                    </span>
                    <div>
                      <small> {page.sub}</small>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
