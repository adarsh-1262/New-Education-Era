"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";

export default function UpcomingEvents() {
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
      <h1 className="text-white text-3xl font-bold mb-4">Upcoming Events</h1>
      <p className="text-gray-300 mb-8">Stay updated with the latest events for parents and children.</p>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
        {events.map((event) => (
          <motion.div
            key={event.title}
            onClick={() => setActive(event)}
            className="p-4 flex flex-col items-center justify-center bg-black hover:bg-neutral-50 light:hover:bg-neutral-800 rounded-xl cursor-pointer max-w-xs"
          >
            <img
              src={event.src}
              alt={event.title}
              className="h-40 w-full rounded-lg object-cover object-top"
            />
            <div className="text-center">
              <h3 className="font-medium text-neutral-800 dark:text-neutral-200 text-base">
                {event.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-base">
                {event.date}
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

const events = [
  {
    title: "Parent-Teacher Meeting",
    date: "October 15, 2024",
    description: "Discuss your child's progress with teachers.",
    src: "https://t4.ftcdn.net/jpg/07/15/72/96/240_F_715729632_Fxy4LTmAf8I7NuChHDoyLpNKwYHYO4EF.jpg",
  },
  {
    title: "Family Fun Day",
    date: "November 20, 2024",
    description: "Join us for a day of fun activities for the whole family.",
    src: "https://t4.ftcdn.net/jpg/06/73/53/11/240_F_673531147_TjWJh8t9Q6XiG0OrkZBTnCyJeYkGx8P6.jpg",
  },
];
