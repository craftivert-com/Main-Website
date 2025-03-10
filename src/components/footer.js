import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail } from "lucide-react";
import { IconMapPin, IconPhone } from "@tabler/icons-react";
import { SocialIcon } from "./social-icon";
import { logo } from "@/constants/assets";

export default function Footer() {
    const links1 = [
        { title: "Home", link: "/" },
        { title: "About", link: "/#about" },
        { title: "Team", link: "/#team" },
    ]
    const links2 = [
        { title: "Blogs", link: "/blogs" },
        { title: "Journey", link: "/#journey" },
        { title: "Contact", link: "/#contact" }

    ]
  return (
    <footer className="bg-black text-white ">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block">
              <Image src={logo} alt="Craftivert Company Logo" width={150} height={150} className="w-auto h-12" />
            </Link>
            <p className="mt-4 text-sm">
              Empowering your digital journey with innovative solutions and unparalleled service.
            </p>
          </div>

          {/* Website Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 ">Quick Links</h3>
            <ul className="items-center flex space-x-4">
              <span className="space-y-2">
              {links1.map((item, ind) => (
                <li key={`${ind} 3434`}>
                  <Link
                    href={item.link}
                    className="navlink transition hover:text-[#7155ff]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              </span>
              <span className="space-y-2">
              {links2.map((item, ind) => (
                <li key={`${ind} 3434`}>
                  <Link
                    href={item.link}
                    className="navlink transition hover:text-[#7155ff]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              </span>
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 ">Connect</h3>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: "https://x.com/craftivert", label: "Twitter" },
                { icon: Github, href: "https://github.com/craftivert-com", label: "Github" },
                { icon: Instagram, href: "https://www.instagram.com/craftivert", label: "Instagram" },
              ].map((social, ind) => (
                <>
                <SocialIcon color="white" href={social.href} icon={social.icon} label={social.label} />
                </>
              ))}
            </div>
            <div className="flex space-x-4 mt-[10px]">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/craftivert/", label: "Linkedin" },
                { icon: Mail, href: "mailto:craftivert@gmail.com", label: "Mail" },
              ].map((social, ind) => (
                <>
                <SocialIcon color="white" href={social.href} icon={social.icon} label={social.label} />
                </>
              ))}
            </div>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 ">Contact Us</h3>
            <address className="not-italic text-sm space-y-2">
              {[
                { icon: IconMapPin, text: "Shri Maheshwari Vidyarthi Bhavan and Hostel, Sharanpur Rd, Old Pandit Colony, Police Staff Colony, Nashik, Maharashtra 422002" },
                { icon: Mail, text: "craftivert@gmail.com", href: "mailto:craftivert@gmail.com" },
                { icon: IconPhone, text: "+917420988635", href: "tel:+917420988635" },
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <item.icon size={18} className="mr-2 mt-1 flex-shrink-0" />
                  {item.href ? (
                    <a href={item.href} className="transition duration-300">
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </address>
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="bg-[#4621ff] py-2">
        <div className="max-w-6xl mx-auto px-4 text-center text-white text-sm">
          © {new Date().getFullYear()} Craftivert. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

