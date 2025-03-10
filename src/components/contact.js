import Image from "next/image";
import { SocialIcon } from "@/components/social-icon";
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { contact } from "@/constants/assets";

export default function Contact() {
  return (
    <section data-aos="fade-up" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full border rounded-[20px] sm:max-w-[90%] md:max-w-[90%] lg:max-w-[80%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 p-6">
          <h1 className="text-4xl sm:text-5xl lg:text-[55px] font-bold mb-6 text-gray-900">

              Contact Us<span className="text-[#7155ff]">.</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you. Please fill out this form or shoot us an email.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Name
                </label>
                <Input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email
                </label>
                <Input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea id="message" name="message" rows={4} required></Textarea>
              </div>
              <Button variant="default">Send Message</Button>
            </form>
            <div className="flex space-x-4">
              <SocialIcon href="https://x.com/craftivert" icon={Twitter} label="Twitter" />
              <SocialIcon href="https://www.instagram.com/craftivert" icon={Instagram} label="Instagram" />
              <SocialIcon href="https://www.linkedin.com/company/craftivert/" icon={Linkedin} label="LinkedIn" />
              <SocialIcon href="https://github.com/craftivert-com" icon={Github} label="GitHub" />
              <SocialIcon href="mailto:craftivert@gmail.com" icon={Mail} label="Email" />
            </div>
          </div>
          <div className="relative h-64 sm:h-80 md:h-full hidden md:block">
            <Image
              src={contact}
              alt="Contact us"
              fill
              className="object-cover shadow rounded-[20px] rounded-l-[0px]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}