"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export default function ProjectCard({title, description, img, link, id}) {
  return (
    (<CardContainer className="inter-var">
      <CardBody
        className="bg-[#f2f2f2] h-auto relative group/card border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-6">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-black dark:text-white">
          {id + 1}. {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-600 text-md max-w-sm mt-2 dark:text-neutral-300">
          <span>{description}</span>
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={img}
            height="1000"
            width="1000"
            className="h-[320px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
      </CardBody>
    </CardContainer>)
  );
}
