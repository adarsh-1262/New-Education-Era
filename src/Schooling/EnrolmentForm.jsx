import React, { useState, useEffect } from "react";
import axios from "../axiosConfig";

const EnrolmentForm = () => {
  const [classes, setClasses] = useState([]);
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    selectedClass: "",
  });

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch available classes
  useEffect(() => {
    axios.get("/api/classes").then((response) => {
      setClasses(response.data);
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/enrolments", formData);
      setMessage(response.data.message);
      setErrorMessage("")
      setFormData({
        studentName: "",
        parentName: "",
        email: "",
        phone: "",
        selectedClass: "",
      })
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Something went wrong during sign-up."
      );
      setMessage("")
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gradient-to-b from-gray-50 via-blue-100 to-white">
      <h2 className="text-xl font-bold mb-4">Enroll for Classes</h2>
      {errorMessage && <p className="text-red-500 mb-5">{errorMessage}</p>}
      {message && <p className="text-green-500 mb-5">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="studentName"
          placeholder="Student Name"
          value={formData.studentName}
          onChange={handleChange}
          required
          className="block bg-white border-black w-full p-2 border rounded"
        />
        <input
          type="text"
          name="parentName"
          placeholder="Parent Name"
          value={formData.parentName}
          onChange={handleChange}
          required
          className="block bg-white border-black w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="block bg-white w-full p-2 border border-black rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="block bg-white border-black w-full p-2 border rounded"
        />
        <select
          name="selectedClass"
          value={formData.selectedClass}
          onChange={handleChange}
          required
          className="block bg-white border-black w-full p-2 border rounded"
        >
          <option value="">Select Class</option>
          <option value="Nur">Nur</option>
          <option value="KG">KG</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          {classes.map((cls) => (
            <option key={cls.id} value={cls.name}>
              {cls.name} - {cls.seatsAvailable} seats available
            </option>
          ))}
        </select>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Enrol Now
        </button>
      </form>
    </div>
  );
};

export default EnrolmentForm;
