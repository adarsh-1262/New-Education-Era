"use client";
import React, { useState, useId, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";
import axiosInstance from "../axiosConfig";
import DateTimePicker from "../components/DatePicker";


export default function OnlineConsultation() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);
  const [allExperts, setAllExperts] = useState([])

  const getAllExperts = async() => {
    try {
      console.log("debug get all experts")
      const response = await axiosInstance.get('/api/expert/get_experts');
      setAllExperts(response.data.data)
    } catch (error) {
      console.log("error while fetching all experts ",error)
    }
  }

  console.log("experts ",allExperts);
  useEffect(() => {
    getAllExperts()
  },[])

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

  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [message, setMessage] = useState("");

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate.toLocaleDateString());
  };

  const handleTimeChange = (selectedTime) => {
    setTime(selectedTime.toLocaleTimeString());
  };

  const BookingExpert = async() =>{
    try {
      const response = await axiosInstance.post('/api/expert/bookExpert', {
        expertName: active.username,
        Expertemail: active.email,
        field: active.consultationField,
        time: time,
        date: date,
      })
      console.log("expert booking response ",response.data)
      setMessage(response.data.message)
    } catch (error) {
      console.log("error while booking expert ",error)
      setMessage(error.response?.data?.message || "Something went wrong during booking.")
    }
  }

  const handleBooking = () => {
    if (date && time) {
      BookingExpert()
    } else {
      if(!date)
        alert("Please select a date.");
      else if(!time)
        alert("Please select a time slot.");
    }
  };

  useEffect(() => {
    setDate(null)
    setTime(null)
    setMessage("")
  }, [active])

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
              layoutId={`card-${active.username}-${id}`}
              ref={ref}
              className="w-full max-w-[700px] h-fit md:max-h-[90%] flex flex-col bg-white sm:rounded-3xl overflow-hidden shadow-lg"
            >
              <motion.div layoutId={`image-${active.username}-${id}`}>
                <img
                  src={active.profilePicture}
                  alt={active.username}
                  className="w-full h-60 sm:rounded-tr-lg sm:rounded-tl-lg object-cover"
                />
              </motion.div>
                  <div className="mt-6 bg-green-100 p-4 rounded-lg">
                    <p className="text-green-700">
                      {message}
                    </p>
                  </div>
              <div className="p-4 max-h-[300px] overflow-y-auto">
                <motion.h3 layoutId={`name-${active.username}-${id}`} className="text-xl font-semibold mb-2">
                  {active.username}
                </motion.h3>
                <motion.p layoutId={`specialization-${active.consultationField}-${id}`} className="text-gray-600 mb-2">
                  Specialization: {active.consultationField}
                </motion.p>
                <motion.p layoutId={`description-${active.description}-${id}`} className="text-gray-600">
                  {active.description}
                </motion.p>

                <div className="p-6">
                  <h1 className="text-2xl font-bold text-center mb-6">Date and Time Selection</h1>
                  <DateTimePicker onDateChange={handleDateChange} onTimeChange={handleTimeChange} />
                  {date && time && (
                    <div className="mt-6 text-center p-4 border border-gray-200 rounded-md shadow">
                      <p className="text-lg">
                        <strong>Selected Date:</strong> {date}
                      </p>
                      <p className="text-lg">
                        <strong>Selected Time:</strong> {time}
                      </p>
                    </div>
                  )}
                </div>

                <button
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
                  onClick={handleBooking}
                >
                  Confirm Booking
                </button>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-10 px-4">
        {allExperts.map((expert) => (
          <motion.div
            layoutId={`card-${expert.username}-${id}`}
            key={expert._id}
            onClick={() => setActive(expert)}
            className="p-6 flex flex-col items-center justify-center bg-white hover:bg-neutral-50 rounded-xl cursor-pointer max-w-lg shadow-lg"
          >
            <motion.div layoutId={`image-${expert.username}-${id}`}>
              <img
                src={expert.profilePicture}
                alt={expert.username}
                className="h-48 w-full rounded-lg object-cover"
              />
            </motion.div>
            <div className="text-center mt-2">
              <motion.h3 layoutId={`name-${expert.username}-${id}`} className="font-medium text-neutral-800 text-lg">
                {expert.username}
              </motion.h3>
              <motion.p layoutId={`specialization-${expert.consultationField}-${id}`} className="text-neutral-600 text-sm">
                {expert.consultationField}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}
