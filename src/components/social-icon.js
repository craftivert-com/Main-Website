import Link from "next/link"
import { LucideIcon } from "lucide-react"

export function SocialIcon({ href, icon: Icon, label, color = '#c6c6c6' }) {
  let textcolor = `text-[${color}]`;
  if(color !== '#c6c6c6'){
    textcolor = `text-white`
  }
  return (
    <Link href={href} className={`${textcolor} hover:text-[#7155ff] transition-colors`} aria-label={label}>
      <Icon className="h-6 w-6" />
    </Link>
  )
}

