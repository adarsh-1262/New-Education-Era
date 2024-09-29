"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";

export default function CommunicationTips() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="pt-24 flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <h1 className="text-white text-3xl font-bold mb-4">Communication Tips</h1>
      <p className="text-gray-300 mb-8">Learn effective strategies to communicate with your child.</p>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
        {communicationTips.map((tip) => (
          <motion.div
            key={tip.title}
            onClick={() => setActive(tip)}
            className="p-4 flex flex-col items-center justify-center bg-black hover:bg-neutral-50 light:hover:bg-neutral-800 rounded-xl cursor-pointer max-w-xs"
          >
            <img
              src={tip.src}
              alt={tip.title}
              className="h-40 w-full rounded-lg object-cover object-top"
            />
            <div className="text-center">
              <h3 className="font-medium text-neutral-800 dark:text-neutral-200 text-base">
                {tip.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-base">
                {tip.description}
              </p>
            </div>
          </motion.div>
        ))}
      </ul>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 grid place-items-center z-[100]"
          >
            <motion.div
              ref={ref}
              className="w-full max-w-[400px] bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-4">
                <h3 className="font-medium text-neutral-700 dark:text-neutral-200 text-base">{active.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-base">{active.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const communicationTips = [
  {
    title: "Active Listening",
    description: "Practice active listening to understand your child's thoughts and feelings.",
    src: "https://t4.ftcdn.net/jpg/04/20/67/57/240_F_420675723_jSrUBuwHqWm3ZnwNm3QiuZOOv8axZDI8.jpg",
  },
  {
    title: "Positive Reinforcement",
    description: "Use positive reinforcement to encourage good behavior.",
    src: "https://t3.ftcdn.net/jpg/08/17/22/56/240_F_817225622_iAAWfQMsVs2zbdSAZg3pvaDnyJT9XjYb.jpg",
  },
];
