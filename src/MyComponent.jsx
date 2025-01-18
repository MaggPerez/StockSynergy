import React, { useState } from 'react';
import { ref, set } from 'firebase/database';
import { database } from './firebase'; // Import from your firebase.js file

function MyComponent() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const userId = new Date().getTime(); // Unique ID for the data
      set(ref(database, `users/${userId}`), {
        name: name,
        age: age,
      })
        .then(() => {
          alert('Data written successfully!');
          setName('');
          setAge('');
        })
        .catch((error) => {
          console.error('Error writing data: ', error);
        });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
};

export default MyComponent;
