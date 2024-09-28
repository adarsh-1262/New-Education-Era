import React from "react";
import { BackgroundLines } from "../ui/background-lines";

export function Home() {
  return (
    <BackgroundLines className="flex flex-col items-center justify-center h-screen px-4">
      <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-blue-400 to-blue-600 text-5xl md:text-7xl font-bold mb-6 relative z-20">
        Welcome to EduHub
      </h1>
      <p className="max-w-xl mx-auto text-xl md:text-2xl text-white text-center mb-6">
        Your platform for AI-driven educational support.
      </p>
      <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded hover:bg-blue-500 hover:text-white transition">
        Explore Now
      </button>
    </BackgroundLines>
  );
}

export default Home;
