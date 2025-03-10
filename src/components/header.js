'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { UserButton, useUser } from '@clerk/nextjs';
import { useState } from 'react'
import { Sidebar } from './sidebar'
import { logoheader } from '@/constants/assets';

function NavLink({title, link = ''}){
    return (
        <Link href={link} className="text-[18px] navlink transition hover:text-[#7155ff]">
            {title}
        </Link>
    )
}

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const navlinks = [
        {title: 'About', link: '/#about'},
        {title: 'Gallery', link: '/gallery'},
        {title: 'Team', link: '/#team'},
        {title: 'Our Journey', link: '/#journey'},
        // {title: 'Projects', link: '/#projects'},
        {title: 'Contact', link: '/#contact'},
    ]
    const { isLoaded, isSignedIn, user } = useUser();
  return (
    <header className=" h-[6rem] w-full  t-0 l-0 flex items-center text-center justify-center ">
      <div className="w-[95%] shadow-sm backdrop-blur-sm bg-white/30 rounded-[10px]  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 justify-center flex items-center">
            <Link href="/">
              <Image alt='craftivert logo transparent' src={logoheader} className='w-[125px]' />
            </Link>
            
          </div>

            <nav className="hidden navlinks_ md:flex space-x-10">
            
                {navlinks.map((navlink, index)=>{
                    return (
                        <NavLink title={navlink.title} link={navlink.link} />
                    )
                })}                
            </nav>

          <div className="hidden navlinks_ md:flex items-center space-x-4">
          {
          isSignedIn ?
            <div className="text-center items-center flex">
              <span className='mr-2'>
              Hey, {user.firstName}!
              </span>
              <UserButton />
            </div>
            :
            <>
            <Link href={"/login"}>
              <Button variant="outline">Log in</Button>
            </Link>
            <Link href={"/signup"}>
              <Button>Sign up</Button>
            </Link>
            </>
          }
          
      <Sidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />

          </div>

          <div className="md:hidden more_icon">
            <Button variant="ghost" size="icon"  onClick={() => setIsSidebarOpen(true)}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

