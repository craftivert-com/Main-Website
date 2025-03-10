import Header from "./header";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { Button } from "./ui/button";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { FlipWords } from "./ui/flip-words";
import pfp from "@/assets/pfp.jpg"
import Image from "next/image"
import downarrow from "@/assets/downarrow.png"
import Link from "next/link";
import { forex, HealMillet, parthkabra, shirodeclasses, shubhamsteelhome } from "@/constants/assets";

export default function Hero(){

    const pfpitems = [
        {id:1 , name: "parth kabra", image: parthkabra},
        {id:2 , name: "shirode classes", image: shirodeclasses},
        {id:3 , name: "forex trader", image: forex},
        {id:4 , name: "heal millet", image: HealMillet},
        {id:5 , name: "shubham steel home", image: shubhamsteelhome},
    ]

    return (    
        <section className="flex relative relative flex-col">

            <div className="fixed w-full top-50 z-[500]">
                <Header/>
            </div>
            <div className="absolute t-0 l-0 h-full w-full  bg-grid-black/[0.09] relative ">
                <section  className="pt-14 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center bg-gradient-to-b from-[#7155ff2f] to-transparent">
            <div  data-aos="zoom-in" className=" mx-auto text-center">
                <h1 className="text-5xl sm:text-5xl lg:text-[75px] font-bold mb-6 text-gray-900">
                    We Craft <FlipWords words={['Creative', 'Powerful', 'Bold', 'Timeless']} />Designs<span className="text-[#7155ff]">.</span>
                </h1>
                <p className="text-xl max-w-3xl sm:text-xl mb-8 text-gray-600">
                    Discover amazing features and services that will revolutionize your experience. 
                    Join us on this exciting journey of innovation and creativity.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button variant="default" size="lg">
                        <Link href={"/#about"} className="w-full h-full text-center flex items-center justify-center">  
                            Learn More
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg">
                        <Link href={"/#journey"} className="w-full h-full text-center flex items-center justify-center">  
                            Explore
                        </Link>
                    </Button>
                </div>
                <br/>
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={pfpitems} />
                </div>
                
            </div>
                </section>
            </div>
            
            <Link alt="scroll down to about" href={"#about"} className="absolute" style={{left: "50%", bottom: "10px"}}>
                <Image src={downarrow} className="w-[50px]" alt="scroll down to about"/>
            </Link>

        </section>
    )
}