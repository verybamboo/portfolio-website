import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../styles/Contact.css"

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Container = styled.section`
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

export default function Contact() {
  return (
    <Section id="contact" className="contact-section">
      <Container className="contact-container">
        <h1 className="contact-title">Contact me</h1>
        <p>
          If you wish to get in touch with me, please don't hesitate to send me your email and a brief message. I'll get back to you promptly.
        </p>
        <form className="contact-form">
          <table className="contact-form-table">
            <tr>
              <td>
                <span className="label"> Name:</span>
                <motion.input
                  type="text"
                  placeholder="name"
                  initial={{ opacity: 0, x: 2000 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="inputs"
                />
              </td>
            </tr>
            <tr>
              <td>
                <span className="label"> Email:</span>
                <motion.input
                  type="text"
                  placeholder="email"
                  initial={{ opacity: 0, x: -1000 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="inputs"
                />
              </td>
            </tr>
            <tr>
              <td className="label">
                <span className="label"> Message:</span>
                <motion.input
                  type="text"
                  placeholder="message"
                  initial={{ opacity: 0, x: 2000 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="inputs"
                />
              </td>
            </tr>
            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{
                scale: 1.1,
              }}
              initial="none"
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              Submit
            </motion.button>
          </table>
        </form>
        <h1 className="footer">George Chen, New York 2022 </h1>
      </Container>
    </Section>
  );
}
