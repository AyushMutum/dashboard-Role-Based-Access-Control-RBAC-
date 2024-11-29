import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify
import '../styles/App.css';

const AddRole = ({ handleNewRole }) => {
  const navigate = useNavigate(); // For navigation after success
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [classAndSection, setClassAndSection] = useState('');
  const [staffRole, setStaffRole] = useState('');

  const [error, setError] = useState(''); // State to hold error message

  // Handle change in role selection
  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setName('');
    setSubject('');
    setRollNumber('');
    setClassAndSection('');
    setStaffRole('');
    setError(''); // Reset error message on role change
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!role) {
      setError('Please select a role.');
      return;
    }

    if (role === 'teacher' && (!name || !subject)) {
      setError('Please fill in all the required fields for Teacher.');
      return;
    }

    if (role === 'student' && (!name || !rollNumber || !classAndSection)) {
      setError('Please fill in all the required fields for Student.');
      return;
    }

    if (role === 'staff' && (!name || !staffRole)) {
      setError('Please fill in all the required fields for Staff.');
      return;
    }

    const roleData = {
      role,
      name,
      subject,
      rollNumber,
      classAndSection,
      staffRole,
    };

    try {
      handleNewRole(roleData); // Pass data to parent component

      // Show success toast
      toast.success('New role added successfully!');

      // Navigate to DashboardContent after a successful form submission
      navigate('/'); // Assuming '/dashboard' is your route for the dashboard
    } catch (error) {
      // Show error toast in case of failure
      toast.error('Something went wrong. Please try again.');
    }

    // Clear form fields after submission
    setRole('');
    setName('');
    setSubject('');
    setRollNumber('');
    setClassAndSection('');
    setStaffRole('');
    setError(''); // Reset error message after submission
  };

  return (
    <div className="add-role-container">
      <h2>Add New Role</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>} {/* Display error message */}

        <div className="form-group">
          <label>Select Role:</label>
          <select value={role} onChange={handleRoleChange}>
            <option value="">Select</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
            <option value="staff">Staff</option>
          </select>
        </div>

        {role === 'teacher' && (
          <>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Teacher's Name"
              />
            </div>
            <div className="form-group">
              <label>Subject:</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter Subject"
              />
            </div>
          </>
        )}

        {role === 'student' && (
          <>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Student's Name"
              />
            </div>
            <div className="form-group">
              <label>Roll Number:</label>
              <input
                type="text"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                placeholder="Enter Roll Number"
              />
            </div>
            <div className="form-group">
              <label>Class & Section:</label>
              <input
                type="text"
                value={classAndSection}
                onChange={(e) => setClassAndSection(e.target.value)}
                placeholder="Enter Class & Section"
              />
            </div>
          </>
        )}

        {role === 'staff' && (
          <>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Staff's Name"
              />
            </div>
            <div className="form-group">
              <label>Role:</label>
              <input
                type="text"
                value={staffRole}
                onChange={(e) => setStaffRole(e.target.value)}
                placeholder="Enter Staff Role"
              />
            </div>
          </>
        )}

        <button type="submit">Add {role.charAt(0).toUpperCase() + role.slice(1)}</button>
      </form>
    </div>
  );
};

export default AddRole;
