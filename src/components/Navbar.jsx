"use client";
import React from "react";
import { HoveredLink } from "../ui/navbar-menu"; // Adjust import if necessary
import { cn } from "../lib/utils";

export default function Navbar({ className }) {
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 bg-black border border-white rounded-full", className)}>
      <div className="flex space-x-6 justify-center py-4">
        {/* Home link */}
        <HoveredLink to="/" className="text-white hover:text-red-600 transition-colors duration-200">Home</HoveredLink>

        {/* Learning Hub link */}
        <HoveredLink to="/learning-hub" className="text-white hover:text-red-600 transition-colors duration-200">
          Learning Hub
        </HoveredLink>

        {/* Financial Support links */}
        <HoveredLink to="/financial-support" className="text-white hover:text-red-600 transition-colors duration-200">
          Financial Support
        </HoveredLink>

        {/* Parent's Corner link */}
        <HoveredLink to="/parental-engagement" className="text-white hover:text-red-600 transition-colors duration-200">
          Parent's Corner
        </HoveredLink>

        {/* Schooling link */}
        <HoveredLink to="/flexible-schooling" className="text-white hover:text-red-600 transition-colors duration-200">
          Schooling
        </HoveredLink>
      </div>
    </div>
  );
}




// "use client";
// import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
// import { cn } from "../lib/utils";

// export function NavbarDemo() {
//   return (
//     <div className="relative w-full flex items-center justify-center">
//       <Navbar className="top-2" />
//       <p className="text-black dark:text-white">
//         The Navbar will show on top of the page
//       </p>
//     </div>
//   );
// }

// export default function Navbar({ className }) {
//   const [active, setActive] = useState(null);
//   return (
//     <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
//       <Menu setActive={setActive}>
//         <MenuItem setActive={setActive} active={active} item="Home">
//         <div className="flex flex-col space-y-4 text-sm">
//           <HoveredLink to="/">Home</HoveredLink>
//         </div>
//         </MenuItem>
        
//         <MenuItem setActive={setActive} active={active} item="Learning Hub">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink to="/learning-hub">Learning Hub</HoveredLink> {/* Clicking redirects to Learning Hub */}
//           </div>
//         </MenuItem>


//         <MenuItem setActive={setActive} active={active} item="Financial Support">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/financial-support/scholarships">Scholarships</HoveredLink>
//             <HoveredLink href="/financial-support/grants">Grants</HoveredLink>
//             <HoveredLink href="/financial-support/loans">Loans</HoveredLink>
//             <HoveredLink href="/financial-support/faq">FAQ</HoveredLink>
//           </div>
//         </MenuItem>
        
//         <MenuItem setActive={setActive} active={active} item="Parent's Corner">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/parental-engagement/resources">Resources</HoveredLink>
//             <HoveredLink href="/parental-engagement/communication">Communication</HoveredLink>
//             <HoveredLink href="/parental-engagement/events">Events</HoveredLink>
//             <HoveredLink href="/parental-engagement/faq">FAQ</HoveredLink>
//           </div>
//         </MenuItem>
        
//         <MenuItem setActive={setActive} active={active} item="Schooling">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/flexible-schooling/evening-classes">Evening Classes</HoveredLink>
//             <HoveredLink href="/flexible-schooling/part-time-programs">Part-Time Programs</HoveredLink>
//             <HoveredLink href="/flexible-schooling/enrollment">Enrollment</HoveredLink>
//             <HoveredLink href="/flexible-schooling/contact">Contact Us</HoveredLink>
//           </div>
//         </MenuItem>
//       </Menu>
//     </div>
//   );
// }
