"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";

export default function ParentingFAQs() {
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
      <h1 className="text-white text-3xl font-bold mb-4">Parenting FAQs</h1>
      <p className="text-gray-300 mb-8">Find answers to commonly asked questions about parenting.</p>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
        {faqs.map((faq) => (
          <motion.div
            key={faq.question}
            onClick={() => setActive(faq)}
            className="p-4 flex flex-col items-center justify-center bg-black hover:bg-neutral-50 light:hover:bg-neutral-800 rounded-xl cursor-pointer max-w-xs"
          >
            <h3 className="font-medium text-neutral-800 dark:text-neutral-200 text-base">
              {faq.question}
            </h3>
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
                <h3 className="font-medium text-neutral-700 dark:text-neutral-200 text-base">{active.question}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-base">{active.answer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const faqs = [
  {
    question: "How can I manage my child's screen time?",
    answer: "Set clear limits on screen time and encourage other activities.",
  },
  {
    question: "What should I do if my child is struggling in school?",
    answer: "Communicate with teachers and seek additional support if needed.",
  },
];
