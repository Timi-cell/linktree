import React from "react";

const Body = ({ lists }) => {
  const displayLinks = () => {
    return (
      <div className="body__links">
        {lists.map((list) => {
          return (
            <a
              href={list.link}
              title={list.title}
              key={list.id}
              id={list.id}
              rel="noopener"
              target="_blank"
            >
              {list.content}
            </a>
          );
        })}
      </div>
    );
  };
  return (
    <div className="body-section flex-column">
      {displayLinks()}
      <div className="social__icons">
        <a href="https://app.slack.com/client/T042F7V19Q8/D0486LUB6SE/rimeto_profile/U048KA6A1CH">
          <img src="./images/slack.png" alt="slack" />
        </a>
        <a href="https://github.com/timi-cell">
          <img src="./images/github.png" alt="github" />
        </a>
      </div>
    </div>
  );
};

export default Body;
