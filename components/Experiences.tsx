import React from "react";
import {workExperience} from '@/data'
import { Button } from "./ui/MovingBorder";


const Experiences = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center bg-white-200 pt-10 p-10" id="exprience">
      <h1 className="heading text-black">
        My Experiences
      </h1>
      <div className="w-full mt-12 flex flex-wrap justify-center gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            style={{
              height: "20rem",
              width: "35rem"
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white "
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-5 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold text-black">
                  {card.title}
                </h1>
                <p className="text-start  mt-3 font-semibold text-black">
                  {card.period}
                </p>
                <p className="text-start  mt-3 font-semibold text-black">
                  {card.company}
                </p>
                <p className="text-start  mt-3 font-semibold text-black">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
