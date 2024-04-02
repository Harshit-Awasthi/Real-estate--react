import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:awasthiharshit8@gmail.com";
  };

  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
          <button onClick={handleEmailClick} className="button">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
