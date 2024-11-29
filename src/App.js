import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DashboardContent from "./components/DashboardContent";
import "./styles/App.css";
import AddRole from "./components/AddRole";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/About";

function App() {
  const [teachers, setTeachers] = useState(3);
  const [students, setStudents] = useState(3);
  const [staff, setStaff] = useState(3);

  const [teacherList, setTeacherList] = useState([
    { name: "John Doe", subject: "Mathematics" },
    { name: "Jane Smith", subject: "Physics" },
    { name: "Alice Johnson", subject: "Chemistry" },
  ]);
  const [studentList, setStudentList] = useState([
    { name: "Michael Brown", rollNumber: "S12345", classAndSection: "10A" },
    { name: "Emily Davis", rollNumber: "S12346", classAndSection: "12B" },
    { name: "David Wilson", rollNumber: "S12347", classAndSection: "9C" },
  ]);
  const [staffList, setStaffList] = useState([
    { name: "Rachel Adams", role: "Admin" },
    { name: "Mark Green", role: "Technician" },
    { name: "Sophia Clark", role: "Security" },
  ]);

  const handleNewRole = (roleData) => {
    if (roleData.role === "teacher") {
      setTeachers(teachers + 1);
      setTeacherList([
        ...teacherList,
        { name: roleData.name, subject: roleData.subject },
      ]);
    } else if (roleData.role === "student") {
      setStudents(students + 1);
      setStudentList([
        ...studentList,
        {
          name: roleData.name,
          rollNumber: roleData.rollNumber,
          classAndSection: roleData.classAndSection,
        },
      ]);
    } else if (roleData.role === "staff") {
      setStaff(staff + 1);
      setStaffList([
        ...staffList,
        { name: roleData.name, role: roleData.staffRole },
      ]);
    }
  };

  return (
    <Router>
      <ToastContainer />
      <div className="dashboard">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <DashboardContent
                  teachers={teachers}
                  students={students}
                  staff={staff}
                  teacherList={teacherList}
                  studentList={studentList}
                  staffList={staffList}
                />
              }
            />
            <Route
              path="/new-role"
              element={<AddRole handleNewRole={handleNewRole} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
