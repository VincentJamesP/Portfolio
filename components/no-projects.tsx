"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Project= () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return ( 
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="mb-3 sm:mb-8 last:mb-0 text-center flex flex-col items-center justify-center "
    >
    <h1 className="text-4xl text-black font-bold mt-8 mb-8 animate-pulse dark:text-white/80">
        Coming Soon
    </h1>
    <p className="text-black text-lg lg:mb-40 mb-20 dark:text-white/60">
        Projects are ongoing. Stay tuned!
    </p>
    </motion.div>
  );
};

export default Project;