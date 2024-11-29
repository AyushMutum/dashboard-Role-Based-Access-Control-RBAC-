import React, { useState, useEffect } from "react";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaUserTie,
  FaTrash,
} from "react-icons/fa";
import "../styles/App.css";

const DashboardContent = ({
  teachers,
  students,
  staff,
  teacherList,
  studentList,
  staffList,
}) => {
  const [activeList, setActiveList] = useState("teachers");
  const [teachersData, setTeachersData] = useState(teacherList);
  const [studentsData, setStudentsData] = useState(studentList);
  const [staffData, setStaffData] = useState(staffList);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  useEffect(() => {
    switch (roleFilter) {
      case "teachers":
        setActiveList("teachers");
        break;
      case "students":
        setActiveList("students");
        break;
      case "staff":
        setActiveList("staff");
        break;
      default:
        setActiveList("teachers");
        break;
    }
  }, [roleFilter]);

  const handleListChange = (list) => {
    setActiveList(list);
    setRoleFilter(list);
  };

  const handleRoleFilterChange = (e) => {
    setRoleFilter(e.target.value);
  };

  const handleDelete = (index) => {
    switch (activeList) {
      case "teachers":
        setTeachersData((prevData) => prevData.filter((_, i) => i !== index));
        break;
      case "students":
        setStudentsData((prevData) => prevData.filter((_, i) => i !== index));
        break;
      case "staff":
        setStaffData((prevData) => prevData.filter((_, i) => i !== index));
        break;
      default:
        break;
    }
  };

  const getListToDisplay = () => {
    let list = [];
    if (activeList === "teachers") {
      list = teachersData;
    } else if (activeList === "students") {
      list = studentsData;
    } else if (activeList === "staff") {
      list = staffData;
    }

    return list.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const isEmpty = (list) => list.length === 0;

  return (
    <div className="dashboard-content">
      <div className="cards">
        <div className="card">
          <FaChalkboardTeacher className="card-icon" />
          <h3>Teachers</h3>
          <p>{teachers}</p>
          <button onClick={() => handleListChange("teachers")}>
            View Teachers
          </button>
        </div>
        <div className="card">
          <FaUsers className="card-icon" />
          <h3>Students</h3>
          <p>{students}</p>
          <button onClick={() => handleListChange("students")}>
            View Students
          </button>
        </div>
        <div className="card">
          <FaUserTie className="card-icon" />
          <h3>Staff</h3>
          <p>{staff}</p>
          <button onClick={() => handleListChange("staff")}>View Staff</button>
        </div>
      </div>

      {/* Search and Dropdown Section */}
      <div className="search-filter-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name, subject, roll number..."
          className="search-bar"
        />
        <select
          value={roleFilter}
          onChange={handleRoleFilterChange}
          className="role-dropdown"
        >
          <option value="">All Roles</option>
          <option value="teachers">Teachers</option>
          <option value="students">Students</option>
          <option value="staff">Staff</option>
        </select>
      </div>

      {/* Table Section */}
      <div className="table-container">
        <table className="scrollable-table">
          <thead>
            <tr>
              <th>Name</th>
              {activeList === "teachers" && <th>Subject</th>}
              {activeList === "students" && <th>Roll Number</th>}
              {activeList === "students" && <th>Class & Section</th>}
              {activeList === "staff" && <th>Role</th>}
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {isEmpty(getListToDisplay()) ? (
              <tr>
                <td
                  colSpan={activeList === "students" ? 4 : 3}
                  className="no-data"
                >
                  No data
                </td>
              </tr>
            ) : (
              getListToDisplay().map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  {activeList === "teachers" && <td>{item.subject}</td>}
                  {activeList === "students" && <td>{item.rollNumber}</td>}
                  {activeList === "students" && <td>{item.classAndSection}</td>}
                  {activeList === "staff" && <td>{item.role}</td>}
                  <td>
                    <button
                      onClick={() => handleDelete(index)}
                      className="delete-button"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardContent;
