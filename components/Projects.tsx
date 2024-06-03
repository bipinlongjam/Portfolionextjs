import React from "react";
import { projects } from "@/data";
import { Button } from "./ui/MovingBorder";
import MagicButton from "./ui/MagicButton";

const Projects = () => {
  return (
    <div className="py-20 w-full flex flex-col items-center justify-center bg-gray-300" id="projects">
      <h1 className="heading text-black">
        My Projects
      </h1>

      <div className="grid grid-cols-2 gap-10 p-10">
        {projects.map((card) => (
          <div key={card.id} className="flex justify-center">
            <Button
              borderRadius="1.2rem"
              style={{
                background: "white",
                height: "20rem",
                width: "35rem",
              }}
              className="flex-1 text-black dark:text-white border-neutral-200 border border-slate-800 rounded-sm"
            >
              <div className="flex flex-col items-center p-3 md:p-5 lg:p-10 gap-2">
                <div className="ms-5 text-center">
                  <h1 className="text-xl md:text-2xl font-bold text-black">
                    {card.title}
                  </h1>
                  <p className="mt-3 font-semibold text-black">
                    {card.des}
                  </p>
                  <div className="flex flex-row items-center gap-4">
                  <p className="mt-3">
                    <div>
                    <MagicButton
                      title="Git Repository"
                      href={card.link}
                      icon=""
                      position=""
                      />
                      </div>
                  </p>
                  <div>
                  <p className="mt-3">
                    <MagicButton
                      title="Clone"
                      href={card.link}
                      icon=""
                      position=""
                      />
                  </p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-400 w-full"></div>
                <div className="flex mt-3 w-full">
                    <h3>Languages :</h3>
                    <span className="text-black">JavaScript: 80%</span>
                    <span className="text-black">React: 90%</span>
                    <div className="text-sm text-gray-500 ms-3 text-black">Updated: {card.updated}</div>
                  </div>
              </div>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
