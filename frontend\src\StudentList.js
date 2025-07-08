import React from 'react';

const StudentList = ({ students, onUpdate, onDelete }) => {
  return (
    <ul>
      {students.map(student => (
        <li key={student._id}>
          <span>{student.name}</span>
          <span>{student.email}</span>
          <span>{student.rollNumber}</span>
          <button onClick={() => onUpdate(student)}>Update</button>
          <button onClick={() => onDelete(student._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;