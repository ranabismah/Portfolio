"use client";
import { FaHtml5, FaCss3, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { motion } from "framer-motion";

const skills = {
  title: "My Skills", // Title that will be displayed in red color
  description: "Here are some technologies I work with:",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiNextdotjs />, name: "Next.js" },
  ],
};

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="flex flex-col items-center justify-center container mx-auto">
        <Tabs className="flex flex-col w-full text-center max-w-[380px] gap-6">
          {/* Content */}
          <div className="min-h-[70vh] w-full flex items-center justify-center">
            <TabsContent className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-4">
                  <h3 className="text-4xl font-bold text-red-800">
                    {skills.title}
                  </h3>{" "}
                  {/* Title in red */}
                  <p className="max-w-[600px] text-white/60 mx-auto">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger
                            className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group"
                            aria-label={skill.name}
                          >
                            <div className="text-6xl group-hover:text-red-800 transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Skills;
