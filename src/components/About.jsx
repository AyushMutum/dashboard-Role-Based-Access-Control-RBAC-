import React from "react";
import "../styles/App.css";
import school from "../images/college.avif";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <div>
          <h1>About Our School ERP System</h1>
          <p>Revolutionizing the way schools manage their operations</p>
        </div>
        <div className="about-image">
          <img src={school} alt="School ERP System" />
        </div>
      </div>

      <div className="about-content">
        <div className="about-description">
          <h2>Our Mission</h2>
          <p>
            Our School ERP system is designed to streamline the management of
            school activities, from student enrollment to faculty coordination.
            Our mission is to enhance productivity, foster communication, and
            improve the overall educational experience for students, teachers,
            and administrative staff.
          </p>
        </div>

        <div className="about-features">
          <h2>Key Features</h2>
          <ul>
            <li>
              <strong>Student Management:</strong> Track student information,
              grades, and attendance.
            </li>
            <li>
              <strong>Teacher Management:</strong> Assign subjects, track
              performance, and manage schedules.
            </li>
            <li>
              <strong>Staff Management:</strong> Manage staff records, roles,
              and responsibilities.
            </li>
            <li>
              <strong>Fee Management:</strong> Simplify fee collection and
              tracking.
            </li>
            <li>
              <strong>Communication Portal:</strong> Facilitate communication
              between students, teachers, and parents.
            </li>
            <li>
              <strong>Reports and Analytics:</strong> Generate insightful
              reports for better decision-making.
            </li>
          </ul>
        </div>

        <div className="about-vision">
          <h2>Our Vision</h2>
          <p>
            To create a world where educational institutions can function
            seamlessly, with integrated solutions that empower educators,
            students, and administrative staff to work together more
            efficiently.
          </p>
        </div>
      </div>

      <div className="about-footer">
        <p>&copy; 2024 School ERP System. All rights reserved.</p>
      </div>
    </div>
  );
};

export default About;
