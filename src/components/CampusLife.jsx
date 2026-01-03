import React from 'react';
import '../styles/CampusLife.css';

function CampusLife() {
  return (
    <section id="campus" className="section campus-section">
      <div className="container">
        <h2 className="section-title">Campus Life</h2>
        <p className="section-intro">
          Experience a vibrant campus culture that nurtures innovation, creativity, and personal growth
        </p>
        <div className="campus-features">
          <div className="campus-feature">
            <h4>Diverse Programs</h4>
            <p>Engineering, Management, Law, Design, Health Sciences, and more across 10+ disciplines</p>
          </div>
          <div className="campus-feature">
            <h4>Entrepreneurial Ecosystem</h4>
            <p>Mentorship from successful entrepreneurs and access to funding opportunities</p>
          </div>
          <div className="campus-feature">
            <h4>Cultural Activities</h4>
            <p>Annual fests, tech competitions, sports events, and student clubs</p>
          </div>
          <div className="campus-feature">
            <h4>Industry Exposure</h4>
            <p>Regular workshops, seminars, and internships with top companies</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CampusLife;
