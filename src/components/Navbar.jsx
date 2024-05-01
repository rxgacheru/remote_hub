import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [job, setJob] = useState([]);

  return (
    <nav className='bg-yellow-900 py-6'>
      <div className="container mx-auto flex justify-between items-center font-bold text-xl">
      <Link to='/' className="text-gray-300">RemoteHub</Link>
      <ul className="flex justify-center space-x-4">
        <li>
        <Link to='/job' className="text-gray-300">Jobs</Link>
        </li>
        <li>
        <Link to='/contact' className="text-gray-300">Contact Us</Link>
        </li>
        <li>
        <Link to='/signup' className="text-gray-300">Sign Up</Link>
        </li>
      </ul>
      </div>
      
    </nav>

  )
}

export default Navbar;