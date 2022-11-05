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
              <label htmlFor="first_name">
                First name{" "}
                <input
                  type="text"
                  id="first_name"
                  placeholder="Enter your first name"
                />
              </label>
            </div>
            <div>
              <label htmlFor="last_name">
                Last name{" "}
                <input
                  type="text"
                  id="last_name"
                  placeholder="Enter your last name"
                />
              </label>
            </div>{" "}
          </div>
          <div>
            <label htmlFor="email">
              Email{" "}
              <input type="email" id="email" placeholder="yourname@email.com" />
            </label>
          </div>
          <div>
            <label htmlFor="message">
              Message{" "}
              <textarea
                id="message"
                placeholder="Send me a message and I'll reply you as soon as possible..."
              />
            </label>
          </div>
          <div className="check">
            <input type="checkbox" />
            <p>
              You agree to providing your data to {name} who may contact you.
            </p>
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
