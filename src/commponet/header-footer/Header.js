import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
     <header className="bg-white shadow-md">
      <div className=" mx-auto md:flex items-center justify-between px-1 py-4 capitalize">
        <h1 className=" text-center text-lg font-bold uppercase text-gray-900 hover:text-blue-600 transition">
          <Link to="/">Simple Blog</Link>
        </h1>

        <nav>
          <ul className="flex items-center gap-2 text-xs font-medium text-gray-700 mt-4 justify-center">
            {['home', 'write-blogs', 'about', 'contact'].map((item) => (
              <li key={item}>
                <Link
                  to={item === 'home' ? '/' : `/${item}`}
                  className="border-2 border-gray-300 px-2 py-1 rounded-xl hover:border-blue-600 hover:text-blue-600 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
