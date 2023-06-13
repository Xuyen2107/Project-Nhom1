import React, { useState, useEffect } from "react";

const Slide = () => {
   const slides = ["Slide 1", "Slide 2", "Slide 3"]; // Nội dung của slide
   const [currentSlide, setCurrentSlide] = useState(0); // Index của slide hiện tại

   const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
   };

   const prevSlide = () => {
      setCurrentSlide((prevSlide) => {
         if (prevSlide === 0) {
            return slides.length - 1;
         }
         return prevSlide - 1;
      });
   };

   useEffect(() => {
      const slideTimer = setInterval(() => {
         nextSlide();
      }, 5000);

      // Dừng slide show khi component bị unmount
      return () => {
         clearInterval(slideTimer);
      };
   }, [slides.length]);

   return (
      <div className="slide-container">
         <div className="slide">
            <h3>{slides[currentSlide]}</h3>
         </div>
         <button onClick={prevSlide}>Previous</button>
         <button onClick={nextSlide}>Next</button>
      </div>
   );
};

export default Slide;
