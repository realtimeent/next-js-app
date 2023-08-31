import Link from 'next/link'
import React, { useState } from 'react'
import { useGlobalContext } from '../../context'
import DefaultLayout from '../../layout/Default'
export default function HomePage() {
  const { closeSideMenu, dest, setDest } = useGlobalContext()
  return (
    <DefaultLayout>
      <section className='home' onMouseOver={closeSideMenu}>
        <div className='car-hire-container'>
          <h1>car for hire</h1>
        </div>
        <div className='car-hire-info'>
          <small>
            Welcome to J-s innovations Car Hire – Where Every Journey Begins
            with Convenience and Comfort!
          </small>
          <div className='dest'>
            <Link href='#' onClick={() => setDest(true)}>
              destination
            </Link>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}
