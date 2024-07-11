import { motion } from 'framer-motion';
import React from "react";
import Image from "../ASsets/githubprof.png"; // Relative path for better maintainability

function Home() {
  return (

    <div className="flex">
      {/* Left Column */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-4">
        <h3 className="text-center text-2xl">Hello! there</h3>
        <h1 className="font-bold text-5xl text-gray-800">I'm John Maina</h1>
        <motion.h2
          className="text-center"
          animate={{
            y: [0, -10, 0],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          I am a fullstack developer
        </motion.h2>
        <div className="flex space-x-4">
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
            Get in touch
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
            Download Resume
          </button>
        </div>
      </div>
      
      {/* Right Column */}
      <div className="flex-1 flex items-center justify-center">
        <img src={Image} alt="profile" className="w-full h-50 max-w-md" />
      </div>
    </div>
  );
}

export default Home;
