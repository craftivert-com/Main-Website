import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import pfp from "@/assets/pfp.jpg"
import { forex, HealMillet, parthkabra, shirodeclasses, shubhamsteelhome, userprofile } from "@/constants/assets";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Craftivert designed our millet brochure with patience and valuable content suggestions. We’re happy with the outcome!",
      name: "Shefali Agarwal",
      designation: "Founder of HealMillet",
      src: HealMillet
    },
    {
      quote:
        "Your extra effort and keen attention to detail on my banners were truly commendable. Thanks for the great work!",
      name: "Shubham Somani",
      designation: "Owner of Shubham Steel Home",
      src: shubhamsteelhome
    },
    {
      quote:
        "Fantastic card design! Clean layout, great typography, and a perfect color scheme. Well done!",
      name: "Devesh Mahajan",
      designation: "LIC Agent",
      src: userprofile
    },
    {
      quote:
        "Craftivert nailed our logo! They understood our vision and delivered a kid-friendly, engaging design with great detail.",
      name: "Radhika Shirode",
      designation: "Founder of ShirodeClasses",
      src: shirodeclasses
    },    
    {
      quote:
        "The Navratri poster was brilliant! Clear, informative, and visually appealing. Thanks for the amazing work!",
      name: "Aditya Bhangdiya",
      designation: "Founder of Forex Trader",
      src: forex
    },
    {
      quote: "Craftivert designed the perfect logo for me—clean, professional, and exactly what I envisioned!",
      name: "Parth Kabra",
      designation: "Freelance Web Developer",
      src: parthkabra
    },
  ];
  
  
	return (
		<>
		    <div className="w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.5] relative flex items-center justify-center">
				<section data-aos="fade-up" className="pt-10  flex p-4 flex-col justify-around items-center">
        <span className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What people say about<span className="text-[#7155ff]"> Us?</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mt-[-8px]">
            Real voices, real reviews from our satisfied clients.
          </p>
        </span>
				<br/>
				<br/>
				<AnimatedTestimonials testimonials={testimonials} />;
			</section>

			</div>

		</>
	)
}
