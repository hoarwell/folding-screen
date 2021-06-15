import React, { useState, useEffect } from 'react';
import face from './face.png';
import './App.css';

function App() {
  const [init, setInit] = useState({
    odd: 40,
    even: 60,
  });
  console.log(init);

  let screenWidth = window.innerWidth;

  const handleResize = (e) => {
    let percentage = (e.target.innerWidth * 70) / screenWidth;
    const li = document.querySelectorAll('li');
      li.forEach((el, i) => {
        if (i % 2 === 0) { //  even
          el.style.transform = `skewY(-${70 - percentage}deg)`;
        } else { // odd
          el.style.transform = `skewY(${70 - percentage}deg)`;
        }
      })
  }

  const initialize = () => {
    const li = document.querySelectorAll('li');

    li.forEach((el, i) => {
        el.style.backgroundImage = "none";
        el.style.backgroundRepeat = "no-repeat";
        el.style.backgroundPosition = "center";
        if ( i === 2 ){
          el.style.backgroundImage = `url(${face})`;
          el.style.backgroundPositionX = `${i - 2.2}%`;
        }

        if ( i > 2){
          el.style.backgroundImage = `url(${face})`;
          el.style.backgroundPositionX = `${i * 20 - 40}%`;
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
