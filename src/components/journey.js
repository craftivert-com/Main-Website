import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import pfp from "@/assets/pfp.jpg"
import { journey2023img1, journey2023img2, journey2024img1, journey2024img2 } from "@/constants/assets";

export default function Journey() {
  const data = [

    {
      title: "2023",
      content: (
        <div data-aos="fade-up">
            <p className="text-lg max-w-3xl mb-8 text-gray-600">
            Craftivert started in 2023 as a freelance venture, taking its first steps toward becoming a design company. It was a year of reaching out to clients, forming a stable team, and handling a few projects. These early efforts laid the foundation for our growth, turning challenges into opportunities and setting the stage for the journey ahead.
            </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={journey2023img1}
              alt="hero template"
              width={300}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <Image
              src={journey2023img2}
              alt="feature template"
              width={300}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div data-aos="fade-up">
            <p className="text-lg max-w-3xl mb-8 text-gray-600">
            In 2024, our agency was officially named Craftivert, marking a new chapter in our journey. We began collaborating with numerous businesses, delivering diverse projects that showcased our creativity and dedication. This year, we built a strong portfolio of satisfied clients, establishing ourselves as a reliable partner for design solutions and paving the way for continued success.
            </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src={journey2024img1}
              alt="startup template"
              width={300}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <Image
              src={journey2024img2}
              alt="startup template"
              width={300}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div data-aos="fade-up">
            <p className="text-lg max-w-3xl mb-8 text-gray-600">
              In 2024, Craftivert underwent a significant transformation. As the founder, I (Om Birla) faced the challenge of managing everything alone, with time management being a constant struggle. However, through perseverance, I figured out how to effectively run an agency.
            </p>

            <p className="text-lg max-w-3xl mb-8 text-gray-600">
              We rebranded from a design company to Craftivert, refining our workflow and embracing a more structured approach. This pivotal year marked the start of a new era, as we worked with many businesses and built a strong, diverse portfolio of clients.
            </p>
        </div>
      ),
    },
  ];
  return (
    (<div className="w-full" id="journey">
      <Timeline data={data} />
    </div>)
  );
}
