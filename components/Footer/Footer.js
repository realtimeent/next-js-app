import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaWhatsappSquare } from 'react-icons/fa'
import { data } from '../../data'
import Link from 'next/link'

const Footer = () => {
  const date = new Date().getFullYear() - 1
  return (
    <section className='footer-container'>
      <div className='footer'>
        <div className='footer-info'>
          <h4>ontime destination from professional drivers</h4>
          <p>join us via</p>
          <div className='app-links'>
            <Link href='/'>
              {' '}
              <BsFacebook />
            </Link>
            <Link href='/'>
              {' '}
              <FaWhatsappSquare />
            </Link>
          </div>
        </div>
        <div className='footer-info'>
          <h3>services</h3>
          <ul>
            <li>
              <Link className='footer-links' href='/car-rental'>
                car rental
              </Link>
            </li>
            <li>
              <Link className='footer-links' href='/phones'>
                phones
              </Link>
            </li>
            <li>
              <Link className='footer-links' href='/plumbing'>
                plumbing
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='copy'>
        <small> &copy; {date} js-innovations</small>
      </div>
    </section>
  )
}

export default Footer
