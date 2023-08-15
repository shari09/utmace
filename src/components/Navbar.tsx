"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import igIcon from '../../public/ig_icon.svg'
import linkedinIcon from '../../public/linkedin_icon.svg'
import logo from '../../public/logo.svg'
import { parseGDriveUrl } from '@/utils/util'

const NavBar = ({ nofade }: { nofade?: boolean }) => {
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
    <div className={`sticky top-0 flex flex-row h-16 items-center align-center font-medium text-gray-100 z-20 ${(!isMain || nofade) && 'bg-black'} lg:px-32 px-8`}>
      <Link className="mr-auto" href="/">
        <img src={logo.src} width={120} />
      </Link>
      <Link className="ml-auto" href="/#events">
        Events
      </Link>
      <Link className="ml-10" href="/#about">
        About
      </Link>
      <Link className="ml-10" href="/gallery">
        Gallery
      </Link>
      <Link href="https://www.linkedin.com/company/aceutm/" target="_blank" className="ml-10">
        <img src={parseGDriveUrl(linkedinIcon.src)} />
      </Link>
      <Link href="https://www.instagram.com/aceutm/" target="_blank" className="ml-2">
        <img src={parseGDriveUrl(igIcon.src)} />
      </Link>
    </div>
  )
}

export default NavBar
