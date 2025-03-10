"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  images,
  className
}) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("h-auto py-10 items-start overflow-y-auto w-full", className)}
      ref={gridRef}>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 px-10"
        ref={gridRef}>
        {[firstPart, secondPart, thirdPart].map((part, partIdx) => (
          <div className="grid gap-10" key={"grid-part-" + partIdx}>
            {part.map((el, idx) => (
              <motion.div
              
                style={{
                  y: [translateFirst, translateSecond, translateThird][partIdx],
                }}
                key={`grid-${partIdx}-${idx}`}
                className="relative group bg-[#f4f4f4] p-2 rounded">
                <Image
                  src={el}
                  className="h-80 w-full object-contain object-left-top rounded-lg gap-10 !m-0 !p-0"
                  height="400"
                  width="400"
                  alt="thumbnail" />
                {/* Overlay */}
                {console.log(el)}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <a
                    href={el.src}
                    download
                    className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200">
                    Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
