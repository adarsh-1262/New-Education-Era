"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";

const SchoolingManagement = () => {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="pt-24 flex flex-col items-center justify-auto w-full min-h-screen bg-gradient-to-b from-gray-50 via-blue-100 to-white">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-900">Schooling Management</h1>

      {/* Modal Overlay */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 mt-20 bg-black/90 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      {/* Modal Content */}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] md:mt-10">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[400px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden shadow-lg"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-60 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-2 text-sm rounded-full font-bold bg-green-500 text-white hover:bg-green-600"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Schooling Management Cards */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col items-center justify-center bg-white hover:bg-gray-100 rounded-xl cursor-pointer shadow-lg"
          >
            <motion.div layoutId={`image-${card.title}-${id}`}>
              <img
                width={80}
                height={80}
                src={card.src}
                alt={card.title}
                className="h-40 w-full rounded-lg object-cover object-top"
              />
            </motion.div>
            <div className="text-center">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-medium text-neutral-800 dark:text-neutral-200 text-base"
              >
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-neutral-600 dark:text-neutral-400 text-base"
              >
                {card.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
};

export const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-black"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);

const cards = [
  {
    title: "Evening Classes",
    description: "Join our evening classes tailored for working professionals and students.",
    src: "https://media.istockphoto.com/id/1051410466/photo/modern-black-student-texting-on-his-mobile-phone-and-smiling-at-night.jpg?s=612x612&w=0&k=20&c=sJf9B4ON9ovtzAl048xet5vXWQbIgjkatTF3eSzanC8=",
    ctaText: "Learn More",
    ctaLink: "/schooling/evening-classes",
  },
  {
    title: "Part-Time Programs",
    description: "Explore our part-time programs designed to fit your schedule.",
    src: "https://media.istockphoto.com/id/1163541808/photo/portrait-of-nice-attractive-confident-content-cheerful-bearded-guy-wearing-checked-shirt.jpg?s=612x612&w=0&k=20&c=JGjOItCa7PeEHnOVbt8uuiINQRx3A4gIaBp9W9C1aZI=",
    ctaText: "Explore",
    ctaLink: "/schooling/part-time-programs",
  },
  {
    title: "Enrollment",
    description: "Find out how to enroll in our programs and start your journey.",
    src: "https://media.istockphoto.com/id/1262645363/vector/vector-of-students-standing-in-line-to-enter-university.jpg?s=612x612&w=0&k=20&c=ngSxj-OZVJS9oFX8h5i6RhxeAB9WzJmOqEY2eGZWSbo=",
    ctaText: "Enroll Now",
    ctaLink: "/schooling/enrollment",
  },
  {
    title: "Contact Us",
    description: "Have questions? Reach out to us for more information.",
    src: "https://media.istockphoto.com/id/482690487/photo/representation-of-digital-communication-channels.jpg?s=612x612&w=0&k=20&c=IE3gIwnf5MgZ4l4vq3lZLlmDDYJqkaccEu67f4wcOuM=",
    ctaText: "Get in Touch",
    ctaLink: "/schooling/contact",
  },
];

export default SchoolingManagement;
