import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Card from "./Card";

function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");
  // console.log(filterdata);

  // slider
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20  px-4">
        <div>
          <h1 className="text-xl font-semibold pb-2">Freebook books </h1>
          <p>
            Ever wanted to buy a book but could not because it was too
            expensive? worry not!
          </p>
        </div>

        <div>
          <div className="slider-container">
            <Slider {...settings}>
             {
              filterData.map((item)=>(
                <Card item={item} key={item.id} />
              ) )
             }
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Freebook;
