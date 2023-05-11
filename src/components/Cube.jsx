import React, { useState, useEffect } from 'react';
import { html, css, javascript, reactjs, nodejs, tailwind } from '../assets';

const Cube = () => {
  const [currentSide, setCurrentSide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSide((prevSide) => (prevSide + 1) % 6);
//     }, 5000); // Change the interval time (in milliseconds) as needed

//     return () => clearInterval(interval);
//   }, []);

  const renderCubeSide = (sideIndex) => {
    const images = [
      html,
      css,
      javascript,
      reactjs,
      nodejs,
      tailwind,

    ];

    const imageUrl = images[sideIndex]

    return <div className={`side side-${sideIndex} flex justify-center items-center sm:w-[270px] vs:w-[220px] w-[180px] vs:h-[220px] sm:h-[270px] h-[180px]`}>
        <img src={imageUrl} className={`sm:h-[250px] h-[200px] sm:w-[250px] w-[200px] object-contain`}  alt="imageUrl" />
    </div>
  };

  return (
    <div className="cube">
      <div className="cube-inner">
        {renderCubeSide(currentSide)}
        {renderCubeSide((currentSide + 1) % 6)}
        {renderCubeSide((currentSide + 2) % 6)}
        {renderCubeSide((currentSide + 3) % 6)}
        {renderCubeSide((currentSide + 4) % 6)}
        {renderCubeSide((currentSide + 5) % 6)}
      </div>
        
    </div>
  );
};

export default Cube;
