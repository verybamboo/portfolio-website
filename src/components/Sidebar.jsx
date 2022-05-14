import React from "react";
import "../styles/Sidebar.css"
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";

import {
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGithub,
} from "react-icons/io";

export default function Sidebar() {
  return (
    <motion.div
      className="side-bar-social"
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
    >
      <motion.a
        href="https://www.linkedin.com/in/georgechen1338/"
        target={"_blank"}
        whileHover={{ scale: 1.2, color: "#0077b5" }}

        inital={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="social-logos"
      >
        {<IoLogoLinkedin />}
      </motion.a>
      <motion.a
        href="https://twitter.com/reallybamboo"
        whileHover={{ scale: 1.2, color: "#55acee" }}
        inital={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="social-logos"
      >
        {<IoLogoTwitter />}
      </motion.a>
      <motion.a
        href="https://github.com/verybamboo"
        target={"_blank"}
        whileHover={{ scale: 1.2, color: "#e4405f" }}
        inital={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="social-logos"
      >
        {<IoLogoGithub />}
      </motion.a>
      <motion.a
        href="mailto:georgechen1338@gmail.com"
        target={"_blank"}
        whileHover={{ scale: 1.2, color: "#0077b5" }}
        inital={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="social-logos"
      >
        {<AiOutlineMail />}
      </motion.a>
      <motion.a
        href="https://www.instagram.com/verybamb00/"
        target={"_blank"}
        whileHover={{ scale: 1.2, color: "#cd201f" }}
        inital={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="social-logos"
      >
        {<IoLogoInstagram />}
      </motion.a>
    </motion.div>
  )
}