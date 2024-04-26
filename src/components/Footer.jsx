import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'

const Footer = () => {
  return (
    <footer className='bg-neutral-400 py-0 fixed bottom-0 w-full text-center decoration-8 font-serif'>
      <div className="/">
        <h1>Contact Us On:</h1>
        <div className="/">
          <ul className="/">
            <li><Link to="/about">Email: roygacheru01@gmail.com</Link></li>
            <li><Link to="/services">Telephone: +254708855315</Link></li>

          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;