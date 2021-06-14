import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const handleResize = (e) => {
    console.log(e.target.innerWidth);
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li');
      li.forEach((el, i) => {
        console.log(el)
        if (i % 2 === 0) {
          el.style.transform = "skewY(50deg)";
        } else {
          el.style.transform = "skewY(-50deg)";
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
