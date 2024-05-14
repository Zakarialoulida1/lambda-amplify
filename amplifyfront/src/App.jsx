import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://1i5wqro902.execute-api.us-east-1.amazonaws.com/zakstagedev/media');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Media Data</h1>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            {/* Render your data here */}
            <p>{item.username}</p>
            <p>{item.full_name}</p>
            {/* Add more fields as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
