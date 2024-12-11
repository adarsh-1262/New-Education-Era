"use client";
import React from "react";
import { motion } from "framer-motion";
import { useId } from "react";

const SchoolingManagement = () => {
  const id = useId();

  return (
    <div className="pt-24 flex flex-col items-center justify-auto w-full min-h-screen bg-gradient-to-b from-gray-50 via-blue-100 to-white">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-900">
        Schooling Management
      </h1>

      {/* Schooling Management Cards */}
      <ul className="grid grid-cols-1 gap-6 py-10 w-full px-4 max-w-5xl">
        {cards.map((card) => (
          <motion.div
            key={card.title}
            layoutId={`card-${card.title}-${id}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col md:flex-row bg-white hover:bg-gray-100 border border-gray-300 rounded-xl shadow-lg cursor-pointer overflow-hidden transition-all"
          >
            {/* Image Section */}
            <motion.div
              layoutId={`image-${card.title}-${id}`}
              className="w-full md:w-1/3"
            >
              <img
                src={card.src}
                alt={card.title}
                className="h-40 md:h-full w-full object-cover"
              />
            </motion.div>

            {/* Content Section */}
            <div className="flex flex-col justify-center p-6 w-full md:w-2/3">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-semibold text-lg text-neutral-800 mb-2"
              >
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.title}-${id}`}
                className="text-neutral-600 mb-4"
              >
                {card.description}
              </motion.p>
              <motion.button
                layout
                className="self-start px-4 py-2 text-sm font-bold rounded-full bg-blue-500 text-white hover:bg-blue-600"
                onClick={() => (window.location.href = card.ctaLink)}
              >
                {card.ctaText}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
};

const cards = [
  {
    title: "Courses",
    description:
      "Browse through our wide range of online courses designed to help you learn at your own pace. Whether you're looking to develop new skills or deepen your knowledge, you'll find something for you.",
    src: "https://media.istockphoto.com/id/1051410466/photo/modern-black-student-texting-on-his-mobile-phone-and-smiling-at-night.jpg?s=612x612&w=0&k=20&c=sJf9B4ON9ovtzAl048xet5vXWQbIgjkatTF3eSzanC8=",
    ctaText: "Learn More",
    ctaLink: "/schooling/courses",
  },
  {
    title: "Part-Time Programs",
    description:
      "Explore flexible part-time programs that fit around your schedule. These programs are perfect for those looking to study while working or managing other responsibilities.",
    src: "https://media.istockphoto.com/id/1163541808/photo/portrait-of-nice-attractive-confident-content-cheerful-bearded-guy-wearing-checked-shirt.jpg?s=612x612&w=0&k=20&c=JGjOItCa7PeEHnOVbt8uuiINQRx3A4gIaBp9W9C1aZI=",
    ctaText: "Explore",
    ctaLink: "/schooling/part-time-programs",
  },
  {
    title: "Student Schedule",
    description:
      "Manage all your upcoming classes, events, and deadlines in one place. View your full schedule, set reminders, and never miss an important date or event again.",
    src: "https://media.istockphoto.com/id/482690487/photo/representation-of-digital-communication-channels.jpg?s=612x612&w=0&k=20&c=IE3gIwnf5MgZ4l4vq3lZLlmDDYJqkaccEu67f4wcOuM=",
    ctaText: "Get in Touch",
    ctaLink: "/schooling/studentSchedule",
  },
];

export default SchoolingManagement;
