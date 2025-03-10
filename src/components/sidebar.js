"use client"

import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Home, Settings, HelpCircle, UsersIcon, LogInIcon } from "lucide-react"
import Link from "next/link"
import { IconAddressBook, IconArtboard, IconCameraSelfie, IconFileStack, IconHomePlus, IconInfoCircle } from "@tabler/icons-react"

export function Sidebar({ open, onOpenChange }) {
  const menuItems = [
    { icon: IconInfoCircle, label: "About", href: "/#about" },
    { icon: IconCameraSelfie, label: "Gallery", href: "/gallery" },
    { icon: UsersIcon, label: "Team", href: "/#team" },
    { icon: IconFileStack, label: "Our Journey", href: "/#journey" },
    // { icon: IconArtboard, label: "Projects", href: "/#projects" },
    { icon: IconAddressBook, label: "Contact", href: "/#contact" },
    { icon: LogInIcon, label: "Login", href: "/login" },
    { icon: IconHomePlus, label: "Sign Up", href: "/signup" },
  ]

  const handleItemClick = (href) => {
    onOpenChange(false)
    // You can add navigation logic here if needed
    console.log(`Navigating to: ${href}`)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="top" className="w-full z-[10000]">
        <nav className="flex flex-col">
          {menuItems.map((item) => (
            <Link href={item.href} className="w-full">
              <Button
              key={item.label}
              variant="ghost"
              className="justify-start w-full p-2"
              onClick={() => handleItemClick(item.href)}
            >
              <item.icon className="mr-2 text-[#7155ff] h-4 w-4" />
              <span className="text-[#7155ff] text-[16px]">{item.label}</span>
            </Button>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

