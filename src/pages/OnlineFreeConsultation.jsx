import React, { useState, useId, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";
import Expert1 from "../assets/Expert1.jpg";
import Expert2 from "../assets/Expert2.jpg";
import Expert3 from "../assets/Expert3.jpg";
import Expert4 from "../assets/Expert4.jpg";

const experts = [
  {
    id: 1,
    name: "Expert 1",
    specialization: "Mental Health",
    image: Expert1,
    description: "Get expert advice on mental health issues.",
  },
  {
    id: 2,
    name: "Expert 2",
    specialization: "Career Counseling",
    image: Expert2,
    description: "Professional career counseling tailored for you.",
  },
  {
    id: 3,
    name: "Expert 3",
    specialization: "Nutrition",
    image: Expert3,
    description: "Expert advice on balanced nutrition and healthy habits.",
  },
  {
    id: 4,
    name: "Expert 4",
    specialization: "Fitness",
    image: Expert4,
    description: "Get fit with personalized fitness advice.",
  },
];

export default function OnlineConsultation() {
  const [active, setActive] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [isBooked, setIsBooked] = useState(false);
  const [messages, setMessages] = useState([]);
  const [chatMessage, setChatMessage] = useState("");
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

  const sendMessage = () => {
    if (chatMessage.trim()) {
      setMessages([...messages, { text: chatMessage, user: "You" }]);
      setChatMessage(""); // Clear input after sending
    }
  };

  return (
    <div className="pt-24 flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <h1 className="text-3xl font-bold text-white mt-12 mb-6" 
      style={{textShadow: '0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3)'}}>Free Consultation</h1>
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
              className="w-full max-w-[600px] h-fit md:max-h-[90%] flex flex-col bg-white sm:rounded-3xl overflow-hidden" // Reduced max-width
            >
              <motion.div layoutId={`image-${active.name}-${id}`}>
                <img
                  src={active.image}
                  alt={active.name}
                  className="w-full h-60 sm:rounded-tr-lg sm:rounded-tl-lg object-cover"
                />
              </motion.div>

              <div className="p-4 max-h-[300px] overflow-y-auto"> {/* Added max-height and overflow */}
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
                    className="mt-2 p-2 border rounded-lg"
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

      <ul className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 px-4">
        {experts.map((expert) => (
          <motion.div
            layoutId={`card-${expert.name}-${id}`}
            key={expert.id}
            onClick={() => setActive(expert)}
            className="p-4 flex flex-col items-center justify-center bg-white hover:bg-neutral-50 rounded-xl cursor-pointer max-w-[600px] shadow-lg" // Reduced max-width
          >
            <motion.div layoutId={`image-${expert.name}-${id}`}>
              <img
                src={expert.image}
                alt={expert.name}
                className="h-40 w-full rounded-lg object-cover"
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

      <div className="mt-10 p-6 bg-white shadow-lg rounded-lg w-3/4 mx-auto mb-6 shadow-lg shadow-white"
      style={{ boxShadow: '0 4px 30px rgba(255, 255, 255, 0.5)' }} // Customize as needed
      >
      
        <h2 className="text-2xl font-bold mb-4">Live Chat with an Expert</h2>

        <div className="h-64 overflow-y-auto mb-4 p-4 border rounded-lg bg-gray-50">
          {messages.length === 0 ? (
            <p className="text-gray-500">No messages yet.</p>
          ) : (
            messages.map((msg, index) => (
              <p key={index} className="mb-2">
                <strong>{msg.user}: </strong>{msg.text}
              </p>
            ))
          )}
        </div>

        <div className="flex">
          <input
            type="text"
            className="flex-1 p-2 border rounded-lg mr-2"
            placeholder="Type a message..."
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
