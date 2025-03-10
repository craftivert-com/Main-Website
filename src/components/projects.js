import Link from "next/link";
import ProjectCard from "./project-card";
import one from "@/assets/projects/1.png";
import two from "@/assets/projects/2.png";
import three from "@/assets/projects/3.jpg";
import four from "@/assets/projects/4.png";

const projects = [
  {
    id: 1,
    title: "Logo Designed for YouTube Channel",
    img: one,
    description: "Designed a unique logo to represent the YouTube channel brand.",
  },
  {
    id: 2,
    title: "Makar Sankranti Festival Design",
    img: two,
    description: "Created vibrant festival designs to celebrate Makar Sankranti festivities.",
  },
  {
    id: 3,
    title: "Business Card for LIC Agent",
    img: three,
    description: "Designed a professional business card for an LIC insurance agent.",
  },
  {
    id: 4,
    title: "Brochure for Millet Business",
    img: four,
    description: "Designed an impactful brochure to showcase Millet business services.",
  },
];

export function Projects() {
  return (
    <section
      data-aos="fade-up"
      id="projects"
      className="w-full p-4 py-12 flex flex-col dark:bg-black bg-white dark:bg-dot-[white]/[0.2] bg-dot-black/[0.6] relative flex items-center justify-center"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <span className="text-center z-[100]">
        <h1 className="text-4xl sm:text-5xl lg:text-[65px] font-bold mb-6 text-gray-900">
          Past<span className="text-[#7155ff]"> Projects.</span>
        </h1>
        <p className="text-gray-600 mt-[-15px] text-lg sm:text-xl">See how we've turned ideas into impactful designs.</p>
      </span>

      <div className="grid gap-8 sm:gap-4 md:grid-cols-2 lg:grid-cols-2 xl:gap-8">
        {projects.map((project, index) => {
          return (
            <div key={project.id} className="flex-1 p-4">
              <ProjectCard
                id={index}
                title={project.title}
                description={project.description}
                img={project.img}
                link={project.link}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
