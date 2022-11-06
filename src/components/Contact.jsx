import React from "react";
import Footer from "./Footer";

const Contact = ({ name }) => {
  return (
    <>
      <div className="contact flex-column">
        <div className="contact--heading">
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask about anything you have in mind.</p>
        </div>
        <form className="contact--body">
          <div className="top_details">
            <div>
              <label htmlFor="first_name">First name </label>
              <input
                type="text"
                id="first_name"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label htmlFor="last_name">Last name </label>
              <input
                type="text"
                id="last_name"
                placeholder="Enter your last name"
              />
            </div>{" "}
          </div>
          <div>
            <label htmlFor="email">Email </label>
            <input type="email" id="email" placeholder="yourname@email.com" />
          </div>
          <div>
            <label htmlFor="message">Message </label>
            <textarea
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            />
          </div>
          <div className="check">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">
              You agree to providing your data to {name} who may contact you.
            </label>
          </div>
          <button type="submit" id="btn__submit">
            Send message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
