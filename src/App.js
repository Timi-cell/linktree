import React, { Component } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

class App extends Component {
  state = {
    list: [
      {
        id: "twitter__page",
        content: "Twitter Link",
        link: "https://twitter.com/_teeblaq10",
      },
      {
        id: "btn__zuri",
        content: "Zuri Team",
        link: "https://training.zuri.team/",
      },
      ,
      {
        id: "books",
        content: "Zuri Books",
        link: "http://books.zuri.team/",
        title: "Click here to discover books about design and coding.",
      },
      ,
      {
        id: "book__python",
        content: "Python Books",
        link: "https://books.zuri.team/python-for-beginners?ref_id=OluwaTimilehin",
        title:
          "Click here to get my books on the popular programming language, Python!.",
      },
      ,
      {
        id: "pitch",
        content: "Background Check For Coders",
        link: "https://background.zuri.team/",
        title:
          "We offer the best services when it comes to background checks on coders.",
      },
      ,
      {
        id: "book__design",
        content: "Design Books",
        link: "https://books.zuri.team/design-rules",
        title: "Click here to discover the free design books offered by Zuri.",
      },
    ],
    slackname: "OluwaTimilehin",
  };
  render() {
    return (
      <div className="top flex-column">
        <Header name={this.state.slackname} />
        <Body lists={this.state.list} />
        <Footer />
      </div>
    );
  }
}

export default App;
