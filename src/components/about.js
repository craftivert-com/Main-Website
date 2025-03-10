import { about } from "@/constants/assets";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      data-aos="fade-up"
      id="about"
      className="py-14 p-5 relative flex items-center justify-center flex-col"
    >
      <div
        style={{ top: "20%", left: "0px" }}
        className="z-[-1] blur-box w-[200px] absolute h-[200px]"
      ></div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-around w-full max-w-6xl">
        <div className="w-full lg:w-[60%] text-justify lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-[75px] font-bold mb-6 text-gray-900">
            Our Story<span className="text-[#7155ff]">.</span>
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mb-6 text-gray-600">
            Craftivert is a Graphic design company established in January 2023, focused on creating exceptional digital experiences. With a team of 2 talented designers and 4 skilled developers, we specialize in crafting intuitive, user-centered designs that enhance interaction and usability. With over 15 successful projects for a diverse range of clients, we are committed to delivering customized solutions that meet each business’s unique needs.
          </p>
          <p className="text-lg sm:text-xl max-w-3xl mb-6 text-gray-600">
            Whether it's web design, mobile apps, or branding, we focus on combining creativity and functionality to help brands thrive in the digital space.
          </p>
          <Button variant="outline">
            <Link href={"/#journey"} className="w-full h-full text-center flex items-center justify-center">  
                Explore
            </Link>
          </Button>
        </div>

        <div className="w-full flex justify-center mt-10 lg:mt-0 lg:w-[40%]">
        <Image
            className="w-full p-6 max-w-[500px] lg:max-w-[600px] h-auto rounded-lg"
            alt="company team"
            src={about}
          />
        </div>
      </div>
    </section>
  );
}