import React from "react";
import Slider from "react-slick";
import Card from "../../Components/Card/Card.jsx";
import "./SliderComponent.css";
// import HookSliderComponent from "./hookSliderComponent";

const SliderComponent = ({ arrImage }) => {
   let settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",

      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: true,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };
   return (
      <Slider {...settings}>
         {arrImage.map((movie) => {
            return (
               <Card
                  isItemSlide
                  key={movie.id}
                  nowPlaying={movie.nowPlaying}
                  link={movie.link}
                  image={movie.image}
                  name={movie.name}
                  id={movie.id}
               />
            );
         })}
      </Slider>
   );
};

export default SliderComponent;
