import React from "react";
import Footer from "./Footer";
import { ReactComponent as Icon } from "../Icon.svg";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="error--section">
        <p>404 error</p>
        <h1>We can't find that page</h1>
        <p>Sorry, the page you are looking for doesn't exist.</p>
        <div className="buttons">
          <button onClick={() => navigate(-1)} id="first__button">
            <Icon />
            Go back
          </button>
          <Link to="/">
            <button id="second__button">Take me home</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
