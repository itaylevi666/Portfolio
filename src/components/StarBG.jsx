import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const StarBG = () => {

    const [stars, setStars] = useState([]);

    useEffect(() => {
      
        generateStars();
    }, []);
    


   
    const generateStars = () => {
        const numberOfStarts = Math.floor(window.innerWidth * window.innerHeight) / 10000;

        const starsArray = [];
        
        for (let i = 0; i < numberOfStarts; i++) {
            starsArray.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.1 + 0.5,
                animationDuration: Math.random() * 5 + 1,
                animationDelay: Math.random() * 8,
            });
        }

        setStars(starsArray);
    };
         
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle color "
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
              animationDuration: star.animationDuration + "s",
            animationDelay: star.animationDelay + "s",
          }}
        />
      ))}

      {/* {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))} */}
    </div>
  );
};
export default StarBG