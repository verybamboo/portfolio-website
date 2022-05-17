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
          If you wish to get in touch with me, please don't hesitate to send me an email and a brief message. I'll get back to you promptly.
        </p>
        <form className="contact-form" action="mailto:georgechen1338@gmail.com" method="POST" encType="multipart/form-data" name="emailform">
          <table className="contact-form-table">
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
              Email Me
            </motion.button>
          </table>
        </form>
        <h1 className="footer">George Chen, New York 2022 </h1>
      </Container>
    </Section>
  );
}
