import Header from "../header";
import { FlipWords } from "../ui/flip-words";
import { ParallaxScroll } from "../ui/parallax-scroll";
import { galleryimg1, galleryimg10, galleryimg2, galleryimg3, galleryimg4, galleryimg5, galleryimg6, galleryimg7, galleryimg8, galleryimg9 } from "@/constants/assets";

const images = [
  galleryimg1,
  galleryimg2,
  galleryimg3,
  galleryimg4,
  galleryimg5,
  galleryimg6,
  galleryimg7,
  galleryimg8,
  galleryimg9,
];

export default function Gallery() {
  return (
    <>
      <div className="flex bg-grid-black/[0.09] relative flex-col">

        <div className="t-0 l-0 w-full relative bg-gradient-to-b from-[#7155ff2f] to-transparent">
          <Header />
          <section className="pt-14 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center">
            <div className="mx-auto text-center">

              <h1 className="text-4xl sm:text-5xl lg:text-[75px] font-bold mb-6 text-gray-900">
                Gallery of <FlipWords words={['Wonders.', 'Views.', 'Stories.', 'Memories.']} />
              </h1>

              <p className="text-lg sm:text-xl max-w-3xl mb-8 text-gray-600">
                Discover amazing features and services that will revolutionize your experience.
                Join us on this exciting journey of innovation and creativity.
              </p>

            </div>
            <ParallaxScroll images={images} />
          </section>
        </div>
      </div>
    </>
  );
}
