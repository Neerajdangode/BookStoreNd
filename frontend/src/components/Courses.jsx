import React from "react";
import list from "../../public/list.json";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Link} from "react-router-dom"

function Courses() {
  // const filterCours = list.filter((data) => data.category === "");
  // console.log(filterCours);
  // slider
  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <div>
      <>
        <div className="max-w-screen-2xl container mx-auto md:px-20  px-4">
          <div>
            <h1 className="text-4xl font-semibold  text-center space-y-12">
              Books Courses in any{" "}
              <span className="text-pink-400"> Strim :)</span>
            </h1>
            <p className="text-center mt-6 text-wrap">
              Ever wanted to buy a book but could not because it was too
              expensive? worry not! Ever wanted to buy a book but could not
              because it was too expensive? worry not! Ever wanted to buy a book
              but could not because it was too expensive? worry not!
            </p>
            <div className="flex justify-center mt-6 rounded-lg ">
           <Link to={"/"}>
           <button className="btn  items-center  hover:bg-pink-500 text-xl pt-2 hover:text-white text-pink-400  px-5 py-5 ">
                Back
              </button>
           </Link>
           
        
             
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-4">
            {list.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
          {/* <div>
            <div className="slider-container">
              <Slider {...settings}>
                {list.map((item) => (
                  <Card item={item} key={item.id} />
                ))}
              </Slider>
            </div>
          </div> */}
          {/* <div>
            <div className="slider-container">
              <Slider {...settings}>
                {filterCours.map((item) => (
                  <Card item={item} key={item.id} />
                ))}
              </Slider>
            </div>
          </div> */}
          {/* <div>
            <div className="slider-container">
              <Slider {...settings}>
                {filterCours.map((item) => (
                  <Card item={item} key={item.id} />
                ))}
              </Slider>
            </div>
          </div> */}
        </div>
      </>
    </div>
  );
}

export default Courses;
