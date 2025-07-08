import React, { useState } from 'react';

const StudentForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rollNumber, setRollNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, email, rollNumber });
    setName('');
    setEmail('');
    setRollNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Roll Number:
        <input type="text" value={rollNumber} onChange={(event) => setRollNumber(event.target.value)} />
      </label>
      <button type="submit">Create Student</button>
    </form>
  );
};

export default StudentForm;
```

This is a basic full-stack app for a student management system using React, Node.js, Express, and MongoDB. You can run the backend by executing `node server.js` in the backend directory, and the frontend by executing `npm start` in the frontend directory.