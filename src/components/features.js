import { cn } from "@/lib/utils";
import {
  IconCurrencyDollar,
  IconDeviceDesktopHeart,
  IconFiltersFilled,
  IconHeart,
  IconHelp,
  IconLetterCase,
  IconNeedleThread,
  IconRocket,
} from "@tabler/icons-react";

export function Features() {
  const features = [
    {
      title: "Post-Launch Assistance",
      description:
        "Providing ongoing support to ensure your designs thrive post-launch success.",
      icon: <IconRocket />,
    },
    {
      title: "Sleek and trendy design",
      description:
        "Crafting modern, stylish designs that resonate with contemporary visual trends.",
      icon: <IconFiltersFilled />,
    },
    {
      title: "Pricing like no other",
      description:
        "Offering unbeatable pricing without compromising quality or design excellence.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Tailored Solutions for All",
      description: "Custom design solutions catered to your unique brand and needs.",
      icon: <IconNeedleThread />,
    },
    {
      title: "Effective Typography",
      description: "Utilizing impactful typography that enhances readability and brand identity.",
      icon: <IconLetterCase />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "Always available to assist you with design needs, anytime, anywhere.",
      icon: <IconHelp />,
    },
    {
      title: "Cross-Platform Consistency",
      description:
        "Ensuring seamless design consistency across all platforms and devices.",
      icon: <IconDeviceDesktopHeart />,
    },
    {
      title: "And everything else",
      description: "Delivering comprehensive design services that cover all your creative needs.",
      icon: <IconHeart />,
    },
  ];

  return (
    <section id="features" className="pt-12 p-4 flex flex-col items-center justify-around">
      <span className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          <span className="text-[#7155ff]">Core</span> Features<span className="text-[#7155ff]">.</span>
        </h1>
        <p className="text-gray-600 mt-[-15px] text-lg sm:text-xl">Designs that elevate your brand identity effectively.</p>
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      data-aos="zoom-in-up"
      className={cn(
        "flex flex-col py-10 relative group/feature border p-6 rounded-lg dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 text-neutral-600 dark:text-neutral-400 flex justify-center">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 text-center">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 text-center">
        {description}
      </p>
    </div>
  );
};
