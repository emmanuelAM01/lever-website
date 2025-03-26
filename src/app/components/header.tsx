// import React from "react";
// const Whitepaper = "/leverWhitepaper.pdf";

// const Header = ({
//   isVisible,
//   scrollToForm,
// }: {
//   isVisible: boolean;
//   scrollToForm: () => void;
// }) => {
//   const handleWhitePaper = () => window.open(Whitepaper, "_blank");

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-3xl shadow-md py-4 md:py-6 transition-all duration-500">
//       <div className="relative px-6 flex items-center justify-between h-full transition-all duration-700 ease-in-out">
//         {/* Centered or Left Logo */}
//         <div
//           className={`transition-all duration-700 ease-in-out h-full ${
//             isVisible
//               ? "relative flex items-center justify-start w-auto "
//               : "absolute inset-0 flex items-center justify-center w-full bg-[#dd3333]"
//           }`}
//         >
//           <h1 className="text-xl md:text-xl font-bold font-heading text-corralPrimary hover:text-corralPrimary/80 transition-all duration-300 ease-in-out">
//             LEVER
//           </h1>
//         </div>

//         {/* Conditionally Render Buttons */}
//         {isVisible && (
//           <div className="flex flex-row gap-2 transition-all duration-700 ease-in-out opacity-100 translate-y-0">
//             <button
//               className="bg-gray-100 hover:bg-gray-400 text-black hover:text-gray-900 px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm rounded-full font-medium transition-all duration-500"
//               onClick={handleWhitePaper}
//             >
//               Whitepaper
//             </button>
//             <button
//               className="bg-corralPrimary hover:bg-corralPrimary/90 text-white px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm rounded-full font-medium transition-all duration-500"
//               onClick={scrollToForm}
//             >
//               Join Waitlist
//             </button>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Whitepaper = "/leverWhitepaper.pdf";

const Header = ({
  isVisible, // isVisible === true means hero is out of view (state 2)
  scrollToForm,
}: {
  isVisible: boolean;
  scrollToForm: () => void;
}) => {
  const handleWhitePaper = () => window.open(Whitepaper, "_blank");

  // Ref to measure the width of the logo
  const logoRef = useRef<HTMLHeadingElement>(null);
  // Offset needed to move the centered logo so its left edge aligns with target margin
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (logoRef.current && typeof window !== "undefined") {
      // Tailwind class "right-6" is typically 1.5rem, which is about 24px at a 16px base.
      const targetMargin = 24; 
      const logoWidth = logoRef.current.offsetWidth;
      // When centered, the logo's center is at window.innerWidth / 2.
      // To have its left edge be at targetMargin, its center should be at targetMargin + (logoWidth / 2).
      // The required offset is the difference:
      const computedOffset = window.innerWidth / 2 - (targetMargin + logoWidth / 2);
      setOffset(computedOffset);
    }
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-3xl shadow-md"
      layout
      transition={{ duration: 0.5 }}
    >
      {/* Flex container ensures vertical centering */}
      <div className="relative px-6 h-12 md:h-16 flex items-center justify-center">
        <motion.h1
          ref={logoRef}
          className="text-lg md:text-xl font-bold font-heading text-corralPrimary hover:text-corralPrimary/80"
          animate={{ x: isVisible ? -offset : 0 }}
          transition={{ duration: 0.7 }}
        >
          LEVER
        </motion.h1>

        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="absolute right-6 flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.7 }}
            >
              <button
                className="bg-gray-100 hover:bg-gray-400 text-black hover:text-gray-900 px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm rounded-full font-medium"
                onClick={handleWhitePaper}
              >
                Whitepaper
              </button>
              <button
                className="bg-corralPrimary hover:bg-corralPrimary/90 text-white px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm rounded-full font-medium"
                onClick={scrollToForm}
              >
                Join Waitlist
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
