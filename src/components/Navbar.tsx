"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'

const NavBar = () => {
  const [isMain, setIsMain] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        setIsMain(false)
      } else {
        setIsMain(true)
      }
    })
  }, [])

  return (
    <div className={`sticky top-0 flex flex-row h-16 items-center align-center font-medium text-gray-100 z-20 ${!isMain && 'bg-black'}`}>
      <Link className="mr-auto" href="#">
        ACE UTM
      </Link>
      <Link className="ml-auto" href="#events">
        Events
      </Link>
      <Link className="ml-10" href="#about">
        About
      </Link>
    </div>
  )
}

export default NavBar
