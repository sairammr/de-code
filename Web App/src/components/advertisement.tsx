import React from 'react';
import AD1 from "../assets/weekly_contest_ad.svg";
import AD3 from "../assets/AD3.svg";
import AccessStatus from "./courses-access";

const Advertisement = () => {
  return (
    <>
      <h1 className="announcement-title">Announcements</h1>
      <div className="ad-container">
        <div className="ad-item">
          <img className='ad-img' src={AD1} alt="Ad 1"/>
        </div>
        <div className="ad-item">
          <img className='ad-img' src={AD3} alt="Ad 3"/>
        </div>
        <AccessStatus />
      </div>
    </>
  );
};

export default Advertisement;
