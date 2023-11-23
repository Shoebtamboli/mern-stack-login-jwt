import React from "react";
import "./NotFound.css"; // Import the CSS file

function NotFound() {
  return (
    <div className="container">
      <div>
        <div className="title">404</div>
        <p className="message">Page not found!</p>
        <a href="/">Go Home</a>
      </div>
    </div>
  );
}

export default NotFound;
