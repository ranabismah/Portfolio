import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import About from './about/page';
import Skills from './skills/page';
import Contact from './contact/page';

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full Stack Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-red-800">Rana Bisma Qasim</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Dedicated Full Stack Developer with a strong emphasis on backend
              technologies and a passion for Generative AI and I am proficient
              in various programming languages and technologies.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-red-800 rounded-full flex justify-center items-center text-red-800 text-base hover:bg-red-800 hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      

      <div>
        <section id="about" className="py-16">
          <About />
        </section>
        <section id="skills" className="py-16">
          <Skills />
        </section>
        <section id="contact" className="py-16">
          <Contact />
        </section>
      </div>
    </section>
  );
}
