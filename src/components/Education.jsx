import React, { useState } from 'react';

function Education() {
  const [activeTab, setActiveTab] = useState("bachelors");

  return (
    <>
    <section id="education" className="section-wrapper">
  <h2 className="section-heading">Education</h2>
  <div className="education-container">
      <>
        <div className="tabs">
          <button
            className={`tab-link ${activeTab === "bachelors" ? "active" : ""}`}
            onClick={() => setActiveTab("bachelors")}
          >
            Bachelors
          </button>
          <button
            className={`tab-link ${activeTab === "associate" ? "active" : ""}`}
            onClick={() => setActiveTab("associate")}
          >
            Associate
          </button>
          <button
            className={`tab-link ${activeTab === "secondary" ? "active" : ""}`}
            onClick={() => setActiveTab("secondary")}
          >
            Secondary
          </button>
        </div>

        <div
          id="bachelors"
          className={`tab-content ${activeTab === "bachelors" ? "active" : ""}`}
        >
          <h3>La Verdad Christian College</h3>
          <p>
            <strong>Program:</strong> Bachelor of Science in Information Systems
          </p>
          <p>
            <strong>Specialization:</strong> Project Management
          </p>
          <p>
            <strong>Years:</strong> 2025 - Present
          </p>
        </div>

        <div
          id="associate"
          className={`tab-content ${activeTab === "associate" ? "active" : ""}`}
        >
          <h3>La Verdad Christian College</h3>
          <p>
            <strong>Program:</strong> Computer Technology
          </p>
          <p>
            <strong>Specialization:</strong> Student Government Leadership and Campus Engagement
          </p>
          <p>
            <strong>Honors and Awards:</strong> Dean’s Lister
          </p>
          <p>
            <strong>Years:</strong> 2021 - 2023  
          </p>
        </div>

        <div
          id="secondary"
          className={`tab-content ${activeTab === "secondary" ? "active" : ""}`}
        >
          <h3>La Verdad Christian College</h3>
          <p>
            <strong>Strand:</strong> Science, Technology, Engineering, and Mathematics (STEM)
          </p>
          <p>
            <strong>Honor and Awards:</strong> With Honors and Perfect Attendance Award
          </p>
          <p>
            <strong>Years:</strong> 2018 - 2020
          </p>
        </div>
      </>
  </div>
</section>

    </>
  )
}

export default Education
