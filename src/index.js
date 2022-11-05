import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./App.css";
import Contact from "./components/Contact";
const root = ReactDOM.createRoot(document.getElementById("root"));
const user_name = "OluwaTimilehin";
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<Contact name={user_name} />} />
    </Routes>
  </BrowserRouter>
);
