import Link from 'next/link'
import React from 'react'
import { data } from '../../data'
import { useGlobalContext } from '../../context'
const Nav = () => {
  const { openSideMenu, closeSideMenu } = useGlobalContext()
  const openMenu = (e) => {
    const page = e.target.textContent
    console.log(page)

    const tempBtn = e.target.getBoundingClientRect()

    const center = (tempBtn.left + tempBtn.right) / 2

    const bottom = tempBtn.bottom - 5

    openSideMenu(page, { center, bottom })
  }

  const closeMenu = (e) => {
    if (!e.target.classList.contains('nav-btn')) {
      closeSideMenu()
    }
  }
  return (
    <div className='nav' onMouseOver={closeMenu}>
      <Link className='logo' href='/'>
        Js innovations
      </Link>
      <div className='services'>
        <Link href='/'>Home</Link>
        <Link className='nav-btn' href='#' onMouseOver={openMenu}>
          Services
        </Link>
        <Link className='nav-btn' href='#' onMouseOver={openMenu}>
          Shop
        </Link>
        <Link href='/Contacts'>Contacts</Link>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M3.75 9h16.5m-16.5 6.75h16.5'
        />
      </svg>
      <Link className='tel-link' href='tel:'>
        call direct
      </Link>
    </div>
  )
}

export default Nav
