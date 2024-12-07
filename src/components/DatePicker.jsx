import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateTimePicker = ({ onDateChange, onTimeChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date); // Pass the date to the parent component
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    onTimeChange(time); // Pass the time to the parent component
  };

  return (
    <div className="flex flex-row gap-5 items-center ">
      {/* Date Picker */}
      <div className="flex flex-col w-full">
        <label className="text-sm font-medium text-gray-600 mb-2">Select Date:</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy/MM/dd"
          placeholderText="Click to select a date"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Time Picker */}
      <div className="flex flex-col w-full">
        <label className="text-sm font-medium text-gray-600 mb-2">Select Time:</label>
        <DatePicker
          selected={selectedTime}
          onChange={handleTimeChange}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
          placeholderText="Click to select a time"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default DateTimePicker;
