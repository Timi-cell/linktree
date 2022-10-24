import React from "react";

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
        <a href="https://app.slack.com/client/T041FKW3E20/D046204G9J9/rimeto_profile/U0464U6UK4J">
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
