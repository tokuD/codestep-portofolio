import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="flex flex-col items-center py-4 sm:flex-row  sm:justify-between sm:px-8 sm:py-20 sm:items-center">
      <h1 className="text-2xl text-center mb-2">My Work</h1>
      <nav>
        <ul className="flex items-center justify-evenly gap-6 font-light">
          <li>About</li>
          <li>Works</li>
          <li>News</li>
          <li>Contact</li>
          <li>
            <AiOutlineInstagram className="text-xl" />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
