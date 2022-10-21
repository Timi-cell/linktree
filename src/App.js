import React, { Component } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="top">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
