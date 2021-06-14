import React, { useState, useEffect } from 'react';
import face from './face.png';
import './App.css';

function App() {
  const [init, setInit] = useState({
    odd: 3,
    even: 5,
  });
  let screenWidth = window.innerWidth;

  const handleResize = (e) => {
    let percentage = (e.target.innerWidth * 70) / screenWidth;
    const li = document.querySelectorAll('li');
      li.forEach((el, i) => {
        if (i % 2 === 0) { //  even
          console.log(70 - percentage)
          el.style.transform = `skewY(-${70 - percentage}deg)`;
        } else { // odd
          console.log(70 - percentage)
          el.style.transform = `skewY(${70 - percentage}deg)`;
        }
      })
  }

  const initialize = () => {
    const li = document.querySelectorAll('li');
    li.forEach((el, i) => {
      el.style.backgroundImage = `url(${face})`;
      if (i % 2 === 0) { //  even
        el.style.backgroundRepeat = "no-repeat";
        if( i === 2) {
          el.style.backgroundPositionX = `${init.even * 10}`;
        }
        el.style.backgroundPositionX = `${i * 20}%`;
      } else { // odd
        el.style.backgroundRepeat = "no-repeat";
        if ( i === 0){
          el.style.backgroundPositionX = `${init.odd}`;
        }
        el.style.backgroundPositionX = `${i * 20}%`;
      }
    })
  }

  useEffect(() => {
    initialize();
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
