import React, { useState } from 'react';

const api = "https://api.github.com/users/";

export default function Finder({ setUserData }) {
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(api + username);
      if (!response.ok) {
        throw new Error('User not found');
      }

      const data = await response.json();
      setUserData(data)
      console.log(data);
    } catch (err) {
      console.error(err.message);
      setUserData(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter username:
          <br />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
          />
        </label>
      </form>
    </div>
  );
}
