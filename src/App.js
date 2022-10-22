import React, { Component } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

class App extends Component {
  state = {
    list: [
      {
        id: "twitter_page",
        content: "Twitter Link",
        link: "https://twitter.com/_teeblaq10",
        title: "My Twitter Page",
      },
      {
        id: "btn_zuri",
        content: "Zuri Team",
        link: "https://training.zuri.team/",
      },
      ,
      {
        id: "books",
        content: "Zuri Books",
        link: "http://books.zuri.team/",
        title: "Find books about design and coding",
      },
      ,
      {
        id: "book__python",
        content: "Python Books",
        link: "https://books.zuri.team/python-for-beginners?ref_id=",
      },
      ,
      {
        id: "pitch",
        content: "Background Check For Coders",
        link: "https://background.zuri.team/",
      },
      ,
      {
        id: "book__design",
        content: "Design Books",
        link: "https://books.zuri.team/design-rules",
      },
    ],
  };
  render() {
    return (
      <div className="top flex-column">
        <Header />
        <Body lists={this.state.list} />
        <Footer />
      </div>
    );
  }
}

export default App;
