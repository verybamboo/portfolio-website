import React from "react"
import "../styles/NavigationSideBar.css"
import { motion } from "framer-motion";
import { IoMdHome, IoMdContacts } from "react-icons/io";
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { BsTools } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"

const fadeFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 10 },
};

export default function NavigationSideBar(){
  return (
    <motion.div
      className="side-bar-navigation"
      variants={fadeFromLeft}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
    >
      <motion.a
        href="#home"
        whileHover={{ scale: 1.2 }}
        variants={fadeFromLeft}
        inital={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="social-logos"
      >
        {<IoMdHome />}
      </motion.a>
      <motion.a
        href="#skills"
        whileHover={{ scale: 1.2 }}
        variants={fadeFromLeft}
        inital={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="social-logos"
      >
        {<BsTools />}
      </motion.a>
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.2 }}
        variants={fadeFromLeft}
        inital={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="social-logos"
      >
        {<AiOutlineFundProjectionScreen />}
      </motion.a>
      <motion.a
        href="#profile"
        whileHover={{ scale: 1.2 }}
        variants={fadeFromLeft}
        inital={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="social-logos"
      >
        {<CgProfile />}
      </motion.a>
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.2 }}
        variants={fadeFromLeft}
        inital={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="social-logos"
      >
        {<IoMdContacts />}
      </motion.a>
    </motion.div>
  )
}