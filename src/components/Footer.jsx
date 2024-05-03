import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'

const Footer = () => {
  return (
    <footer className='bg-yellow-900 py-0 fixed bottom-0 w-full text-center decoration-8 font-serif 100-vh'>
      <div className="/">
        <h1 className='text-gray-300'>Contact Us On:</h1>
        <div className="/">
          <ul className="text-gray-300">
            <li><Link to="/about">Email: roygacheru01@gmail.com</Link></li>
            <li><Link to="/services">Telephone: +254708855315</Link></li>

          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;