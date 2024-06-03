"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 0);
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex fixed z-[5000] top-0 left-0 w-full px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center space-x-4",
          className
        )}
        style={{
          backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          backgroundColor: scrolled ? "rgba(99, 139, 47, 0.43)" : "transparent",
          borderRadius: "12px",
          border: scrolled ? "1px solid rgba(255, 255, 255, 0.125)" : "none",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
             "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-200",
            {
              "font-bold text-": idx === 0, // Apply bold and larger text for the first item
              "text-sm !cursor-pointer": idx !== 0,
            }
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className=" text-sm !cursor-pointer text-black">{navItem.name}</span>
        </Link>
        ))}
       
      </motion.div>
    </AnimatePresence>
  );
};
