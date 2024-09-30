"use client";
import React, { useState } from "react";
import { HoveredLink } from "../ui/navbar-menu"; // Adjust import if necessary
import { cn } from "../lib/utils";

export default function Navbar({ className }) {
  // State to track the active link
  const [activeLink, setActiveLink] = useState("");

  // Function to handle link click
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 bg-black border border-white rounded-full", className)}>
      <div className="flex space-x-6 justify-center py-4">
        {/* Home link */}
        <HoveredLink
          to="/"
          className={`text-white hover:text-white transition-colors duration-200 ${activeLink === "/" ? "text-green-600" : ""}`}
          onClick={() => handleLinkClick("/")}
        >
          Home
        </HoveredLink>

        {/* Learning Hub link */}
        <HoveredLink
          to="/learning-hub"
          className={`text-white hover:text-red-600 transition-colors duration-200 ${activeLink === "/learning-hub" ? "text-red-600" : ""}`}
          onClick={() => handleLinkClick("/learning-hub")}
        >
          Learning Hub
        </HoveredLink>

        {/* Financial Support link */}
        <HoveredLink
          to="/financial-support"
          className={`text-white hover:text-red-600 transition-colors duration-200 ${activeLink === "/financial-support" ? "text-red-600" : ""}`}
          onClick={() => handleLinkClick("/financial-support")}
        >
          Financial Support
        </HoveredLink>

        {/* Parent's Corner link */}
        <HoveredLink
          to="/parental-engagement"
          className={`text-white hover:text-red-600 transition-colors duration-200 ${activeLink === "/parental-engagement" ? "text-red-600" : ""}`}
          onClick={() => handleLinkClick("/parental-engagement")}
        >
          Parent's Corner
        </HoveredLink>

        {/* Schooling link */}
        <HoveredLink
          to="/flexible-schooling"
          className={`text-white hover:text-red-600 transition-colors duration-200 ${activeLink === "/flexible-schooling" ? "text-red-600" : ""}`}
          onClick={() => handleLinkClick("/flexible-schooling")}
        >
          Schooling
        </HoveredLink>
      </div>
    </div>
  );
}
