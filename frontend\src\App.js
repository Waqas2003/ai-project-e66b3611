import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentList from './StudentList';
import StudentForm from './StudentForm';

function App() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3000/api/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = async (student) => {
    try {
      const response = await axios.post('http://localhost:3000/api/students', student);
      setStudents([...students, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (student) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/students/${student._id}`, student);
      setStudents(students.map(s => s._id === student._id ? response.data : s));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/students/${id}`);
      setStudents(students.filter(s => s._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Student Management System</h1>
      <StudentForm onSubmit={handleSubmit} />
      <StudentList students={students} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
}

export default App;