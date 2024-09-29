"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";

export default function ParentingResources() {
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
      <h1 className="text-white text-3xl font-bold mb-4">Parenting Resources</h1>
      <p className="text-gray-300 mb-8">Explore a variety of resources to help you navigate parenting challenges.</p>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
        {resources.map((resource) => (
          <motion.div
            key={resource.title}
            onClick={() => setActive(resource)}
            className="p-4 flex flex-col items-center justify-center bg-black hover:bg-neutral-50 light:hover:bg-neutral-800 rounded-xl cursor-pointer max-w-xs"
          >
            <img
              src={resource.src}
              alt={resource.title}
              className="h-40 w-full rounded-lg object-cover object-top"
            />
            <div className="text-center">
              <h3 className="font-medium text-neutral-800 dark:text-neutral-200 text-base">
                {resource.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-base">
                {resource.description}
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

const resources = [
  {
    title: "Books for Parents",
    description: "Discover insightful books that offer guidance on various parenting topics.",
    src: "https://t4.ftcdn.net/jpg/05/17/78/71/240_F_517787169_FQ8w3yL7t4WXyoSwOFIyk4dYyIYUiMPp.jpg",
  },
  {
    title: "Webinars and Workshops",
    description: "Participate in online sessions to learn more about effective parenting.",
    src: "https://t4.ftcdn.net/jpg/07/96/28/83/240_F_796288385_AFFyMJAsIHf02vUKzwvz31XwbAHdwY7s.jpg",
  },
];
