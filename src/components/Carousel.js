import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

import concert from "../assets/corousel/concert.jpg";
import opera from "../assets/corousel/opera.jpg";
import football from "../assets/corousel/football.jpg";
import sunburn from "../assets/corousel/sunburn.png"

const Carousel = () => {
  return (
    <>
      <TECarousel showControls showIndicators ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">

        <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img src={sunburn} className="block w-full h-[750px]" alt="..." />
            <div className="absolute inset-x-[15%] bottom-12 hidden py-5 text-center text-white md:block pb-6 md:pb-12">
              <h5 className="text-6xl pb-3 font-extrabold ">Sunburn Festival 2024</h5>
              <p className="md:text-2xl text-2xl ">Sunburn, a Percept Intellectual Property, is Asia’s Premiere Electronic Dance Music (EDM) Festival, and is ranked amongst the world’s biggest music festivals.</p>
            </div>
          </TECarouselItem>
          

          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img src={concert} className="block w-full h-[750px]" alt="..." />
            <div className="absolute inset-x-[15%] bottom-12 hidden py-5 text-center text-white md:block pb-6 md:pb-12">
              <h5 className="text-6xl pb-3 font-extrabold ">Tomorrowland</h5>
              <p className="md:text-2xl text-2xl ">Prepare for your festival experience and discover the origin story of Life by reading the fantasy adventure novel THE SPIRIT OF LIFE.</p>
            </div>
          </TECarouselItem>

          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img src={football} className="block w-full h-[750px]" alt="..." />
            <div className="absolute inset-x-[15%] bottom-12 hidden py-5 text-center text-white md:block pb-6 md:pb-12">
              <h5 className="text-6xl pb-3 font-extrabold ">
                Super Bowl LVIII
              </h5>
              <p className="md:text-2xl text-2xl ">
                Feeling tail-great at this Super Bowl party!
              </p>
            </div>
          </TECarouselItem>

          <TECarouselItem
            itemID={4}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img src={opera} className="block w-full h-[750px]" alt="..." />
            <div className="absolute inset-x-[15%] bottom-12 hidden py-5 text-center text-white md:block pb-6 md:pb-12">
              <h5 className="text-6xl pb-3 font-extrabold ">Concert</h5>
              <p className="md:text-2xl text-2xl ">Conce</p>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
};

export default Carousel;
