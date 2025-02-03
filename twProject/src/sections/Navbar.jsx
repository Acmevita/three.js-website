import React, { useState } from 'react'
import { navLinks } from '../constants';

const NavItems = ({direction = 'row'}) => {
  const layoutClass = direction === 'row' ? 'flex-row space-x-4' : 'flex-col space-y-4';
  return (
    <ul className={`flex ${layoutClass}`}>
      {navLinks.map(({id, name, href}) => (
        <li key={id}>
          <a href={href} className='text-neutral-400 hover:text-white transition-colors'>{name}</a>
        </li>
      ))}
    </ul>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center py-5 mx-auto px-4'>
          <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
            hover
          </a>
          <button onClick={toggleMenu} className='text-neutral-400 hover:text-white transition-colors focus:outline-none sm:hidden flex items-center justify-center'>
            <img src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"} alt="menu" className='w-6 h-6' />
          </button>

          {/* Desktop Navigation */}
          <nav className='hidden sm:block'>
            <NavItems direction='row' />
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-black`}>
        <nav className='px-4 py-5'>
          <NavItems direction='col' />
        </nav>
      </div>
    </header>
  )
}

export default Navbar
