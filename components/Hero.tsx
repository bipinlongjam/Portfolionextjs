"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { socialMedia } from "@/data";
import Link from "next/link";

const Hero = () => {
  const [backgroundColor, setBackgroundColor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundColor((prevColor) => (prevColor + 1) % colors.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff"];

  return (
    <div className="pb-10 pt-36 relative">
      <motion.div
        className="h-screen w-full dark:bg-white-100 bg-white absolute top-0 left-0 flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${colors[backgroundColor]}, ${colors[(backgroundColor + 1) % colors.length]})` }}
        animate={{ background: `linear-gradient(135deg, ${colors[backgroundColor]}, ${colors[(backgroundColor + 1) % colors.length]})` }}
        transition={{ duration: 2 }}
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:green-100 bg-pink [mask-image:radial-gradient(ellipse_at_center,transparent_40%,pink)]"
        />
      </motion.div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="text-center text-[40px] md:text-6xl lg:text-6xl">
            Bipin Longjam
          </p>
          <TextGenerateEffect
            words="Passionate about learning new Technology"
            className="text-center text-[40px] md:text-sm lg:text-sm"
          />

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={25} height={25} />
              </div>
            ))}
          </div>
          <Link href="#about">
            <MagicButton title="More about me" position="" href="" icon="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
