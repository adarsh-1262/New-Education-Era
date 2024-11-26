"use client";
import React, { useState, useId, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";

const experts = [
  {
    id: 1,
    name: "Dr. Sophia Moore",
    specialization: "Mental Health",
    image: "https://via.placeholder.com/400x300.png?text=Expert+1",
    description: "Get expert advice on mental health issues.",
  },
  {
    id: 2,
    name: "John Smith",
    specialization: "Career Counseling",
    image: "https://via.placeholder.com/400x300.png?text=Expert+2",
    description: "Professional career counseling tailored for you.",
  },
  {
    id: 3,
    name: "Emily Brown",
    specialization: "Nutrition",
    image: "https://via.placeholder.com/400x300.png?text=Expert+3",
    description: "Expert advice on balanced nutrition and healthy habits.",
  },
  {
    id: 4,
    name: "Michael Lee",
    specialization: "Fitness",
    image: "https://via.placeholder.com/400x300.png?text=Expert+4",
    description: "Get fit with personalized fitness advice.",
  },
  {
    id: 5,
    name: "Dr. Amelia Johnson",
    specialization: "Parenting",
    image: "https://via.placeholder.com/400x300.png?text=Expert+5",
    description: "Parenting advice to help you handle challenges effectively.",
  },
  {
    id: 6,
    name: "William Garcia",
    specialization: "Financial Planning",
    image: "https://via.placeholder.com/400x300.png?text=Expert+6",
    description: "Plan your finances for a brighter future.",
  },
  {
    id: 7,
    name: "Sophia Martinez",
    specialization: "Stress Management",
    image: "https://via.placeholder.com/400x300.png?text=Expert+7",
    description: "Manage stress and anxiety with proven strategies.",
  },
  {
    id: 8,
    name: "James Anderson",
    specialization: "Educational Guidance",
    image: "https://via.placeholder.com/400x300.png?text=Expert+8",
    description: "Get advice on education and career pathways.",
  },
  {
    id: 9,
    name: "Dr. Olivia Wilson",
    specialization: "Work-Life Balance",
    image: "https://via.placeholder.com/400x300.png?text=Expert+9",
    description: "Improve your work-life balance with expert guidance.",
  },
  {
    id: 10,
    name: "Daniel White",
    specialization: "Physical Therapy",
    image: "https://via.placeholder.com/400x300.png?text=Expert+10",
    description: "Personalized physical therapy to boost recovery.",
  },
];

export default function OnlineConsultation() {
  const [active, setActive] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [isBooked, setIsBooked] = useState(false);
  const id = useId();
  const ref = useRef(null);

  useOutsideClick(ref, () => setActive(null));

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleBooking = () => {
    if (selectedTime) {
      setIsBooked(true); // Update booking status here
    } else {
      alert("Please select a time slot.");
    }
  };

  return (
    <div className="pt-6 flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-gray-50 via-blue-100 to-white">
      <h1 className="text-3xl font-bold text-blue-900 mt-6 mb-6">
        Free Consultation
      </h1>
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
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid w-full place-items-center z-[100] md:mt-10">
            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className="w-full max-w-[700px] h-fit md:max-h-[90%] flex flex-col bg-white sm:rounded-3xl overflow-hidden shadow-lg"
            >
              <motion.div layoutId={`image-${active.name}-${id}`}>
                <img
                  src={active.image}
                  alt={active.name}
                  className="w-full h-60 sm:rounded-tr-lg sm:rounded-tl-lg object-cover"
                />
              </motion.div>

              <div className="p-4 max-h-[300px] overflow-y-auto">
                <motion.h3 layoutId={`name-${active.name}-${id}`} className="text-xl font-semibold mb-2">
                  {active.name}
                </motion.h3>
                <motion.p layoutId={`specialization-${active.specialization}-${id}`} className="text-gray-600 mb-2">
                  Specialization: {active.specialization}
                </motion.p>
                <motion.p layoutId={`description-${active.description}-${id}`} className="text-gray-600">
                  {active.description}
                </motion.p>

                <div className="mt-4">
                  <label htmlFor="time" className="block text-gray-700">
                    Select a Time Slot:
                  </label>
                  <select
                    id="time"
                    className="mt-2 p-2 border rounded-lg w-full"
                    value={selectedTime}
                    onChange={(e) => {
                      setSelectedTime(e.target.value);
                      setIsBooked(false); // Reset booking status when changing time
                    }}
                  >
                    <option value="">Select Time</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                  </select>
                </div>

                <button
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
                  onClick={handleBooking}
                >
                  Confirm Booking
                </button>

                {isBooked && (
                  <div className="mt-6 bg-green-100 p-4 rounded-lg">
                    <p className="text-green-700">
                      Booking Confirmed for {active.name} at {selectedTime}.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-10 px-4">
        {experts.map((expert) => (
          <motion.div
            layoutId={`card-${expert.name}-${id}`}
            key={expert.id}
            onClick={() => setActive(expert)}
            className="p-6 flex flex-col items-center justify-center bg-white hover:bg-neutral-50 rounded-xl cursor-pointer max-w-lg shadow-lg"
          >
            <motion.div layoutId={`image-${expert.name}-${id}`}>
              <img
                src={expert.image}
                alt={expert.name}
                className="h-48 w-full rounded-lg object-cover"
              />
            </motion.div>
            <div className="text-center mt-2">
              <motion.h3 layoutId={`name-${expert.name}-${id}`} className="font-medium text-neutral-800 text-lg">
                {expert.name}
              </motion.h3>
              <motion.p layoutId={`specialization-${expert.specialization}-${id}`} className="text-neutral-600 text-sm">
                {expert.specialization}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}
