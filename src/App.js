import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    console.log('component did mount');
  }, [])

  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice');
  }

  return (
    <>
      <h1>App</h1>
    </>
  );
}

export default App;
