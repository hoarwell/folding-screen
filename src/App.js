import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  let screenWidth = window.innerWidth;

  const handleResize = (e) => {
    let percentage = (e.target.innerWidth * 70) / screenWidth;
    console.log(70 - percentage);
    const li = document.querySelectorAll('li');
      li.forEach((el, i) => {
        if (i % 2 === 0) {
          el.style.transform = `skewY(-${70 - percentage}deg)`;
        } else {
          el.style.transform = `skewY(${70 - percentage}deg)`;
        }
      })

  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  })

  return (
    <div className="App">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default App;
