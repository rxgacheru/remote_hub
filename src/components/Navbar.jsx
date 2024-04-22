import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-orange-800 py-4'>
      <div className="container mx-auto flex justify-between items-center">
      <Link to='/' className="text-gray-300">Home</Link>
      <ul className="flex justify-center space-x-4">
        <li>
        <Link to='/home' className="text-gray-300">Remote Hub</Link>
        </li>
        <li>
        <Link to='/home' className="text-gray-300">Jobs</Link>
        </li>
         <li>
        <Link to='/home' className="text-gray-300">Companies</Link>
        </li>
        <li>
        <Link to='/home' className="text-gray-300">Contact Us</Link>
        </li>
        <li>
        <Link to='/home' className="text-gray-300">Sign Up</Link>
        </li>
      </ul>
      </div>
      
    </nav>

  )
}

export default Navbar;