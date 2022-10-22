import React from "react";
import Slack from "../svg/slack.svg";
import Github from "../svg/github.svg";

const Body = ({ lists }) => {
  const displayLinks = () => {
    return (
      <div>
        {lists.map((list) => {
          return (
            <button key={list.id} id={list.id}>
              <a
                href={`${list.link}`}
                title={list.title}
                rel="noopener"
                target="_blank"
              >
                {list.content}
              </a>
            </button>
          );
        })}
      </div>
    );
  };
  return (
    <div className="body-section flex-column">
      {displayLinks()}
      <div className="social__icons">
        <img src={Slack} alt="slack__icon" />
        <img src={Github} alt="github__icon" />
      </div>
    </div>
  );
};

export default Body;
