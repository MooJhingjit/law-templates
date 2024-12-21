'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Props } from './index'
import Image from 'next/image'

export const MobileNav = (props: Props) => {
  const { dynamicProps } = props
  const { logo, logoHref, routes } = dynamicProps
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <>
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="lg:hidden ml-auto navbar-burger flex w-12 h-12 items-center justify-center bg-gray-100 rounded-md transition duration-200"
      >
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H21" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 6H21" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 18H21" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        className={`${
          navShow ? 'translate-x-0' : '-translate-x-full'
        } transform duration-300 ease-in-out fixed top-0 left-0 bottom-0 w-6/7 max-w-md z-50`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={onToggleNav} />

        <nav className="relative flex flex-col py-6 px-4 w-full h-full bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-12">
            <Link className="mr-auto text-2xl font-medium leading-none" href={logoHref}>
              <Image src={logo} width={200} height={50} alt={'Logo'} />
            </Link>
            <button className="navbar-close" onClick={onToggleNav}>
              <svg
                className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div>
            <ul className="mb-8">
              {routes.map((route) => (
                <li key={route.name} className=" block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded">
                  <Link href={route.href}>{route.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}
