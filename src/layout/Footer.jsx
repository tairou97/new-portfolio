import React from "react";

const Footer = () => {
  return (
    <div className="mainfooter">
      <h1 style={{ margin: "20px 0 0 20px" }}>Footer</h1>
      <span style={{ margin: "20px 0 0 20px", display: "flex", gap: "20px" }}>
        <p>Twitter</p>
        <p>GitHub</p>
        <p>Linkedin</p>
        <p>Slack</p>
      </span>
    </div>
  );
};

export default Footer;
