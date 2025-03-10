"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { aditya, aniket, krishna, om, piyush, shivraj } from "@/constants/assets";


export function Team() {
  const cards = data.map((card, index) => (
    <Card key={`{index}234`} card={card} index={index} />
  ));

  return (
    (<section data-aos="fade-up" id="team" className="w-full h-full relative pt-16 pb-10">
                <div style={{top: "20%", right: "0px"}} className="z-[-1] blur-box w-[200px] absolute h-[200px]"></div>

          <h1 className="text-4xl text-center sm:text-5xl lg:text-[55px] font-bold mb-6 text-gray-900">

          Creators of <span className="text-[#7155ff]">Craftivert.</span>
          </h1>
      <Carousel items={cards} />
    </section>)
  );
}

const DummyContent = () => {
  return (<>
    {[...new Array(3).fill(1)].map((_, index) => {
      return (
        (
          <div></div>
        )
      );
    })}
  </>);
};

const data = [
  {
    category: "Founder & Designer",
    title: "Om Birla",
    src: om,
    content: <DummyContent />,
  },
  {
    category: "Designer",
    title: "Shivraj Talekar",
    src: shivraj,
    content: <DummyContent />,
  },
  {
    category: "Backend Developer",
    title: "Aditya borse",
    src: aditya,
    content: <DummyContent />,
  },
  {
    category: "Web developer",
    title: "Aniket More",
    src: aniket,
    content: <DummyContent />,
  },
  {
    category: "Customer Relationship Manager",
    title: "Krishna Wable",
    src: krishna,
    content: <DummyContent />,
  },
  {
    category: "Developer",
    title: "Piyush Nashikkar",
    src: piyush,
    content: <DummyContent />,
  },
];
