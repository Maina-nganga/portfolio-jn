import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../ASsets/download.png";

function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between px-1">
        <div>
          <img src={logo} alt="logo" className="w-40" />
        </div>
        <div>
          <ul className="flex items-center gap-10 mr-20">
            {['Home', 'About', 'Services', 'Projects', 'Contacts'].map((item) => (
              <motion.li
                key={item}
                className="relative"
                initial={{ y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 700 }}
              >
                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-800">
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
