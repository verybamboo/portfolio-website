import React from "react"
import "../styles/NavigationSideBar.css"
import { motion } from "framer-motion";
import { IoMdHome, IoMdContacts } from "react-icons/io";
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { BsTools } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"

export default function NavigationSideBar(){
  return (
    <motion.div
      className="side-bar-navigation"
      initial="hidden"
      animate="visible"
    >
      <motion.a
        href="#home"
        whileHover={{ scale: 1.2 }}
        className="social-logos"
      >
        {<IoMdHome />}
      </motion.a>
      <motion.a
        href="#skills"
        whileHover={{ scale: 1.2 }}
        className="social-logos"
      >
        {<BsTools />}
      </motion.a>
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.2 }}
        className="social-logos"
      >
        {<AiOutlineFundProjectionScreen />}
      </motion.a>
      <motion.a
        href="#profile"
        whileHover={{ scale: 1.2 }}
        className="social-logos"
      >
        {<CgProfile />}
      </motion.a>
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.2 }}
        className="social-logos"
      >
        {<IoMdContacts />}
      </motion.a>
    </motion.div>
  )
}