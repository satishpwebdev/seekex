import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Banner from "../images/banner3.png";

const SliderThree = () => {
   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 1,
         slidesToSlide: 1,
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 1,
         slidesToSlide: 1,
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1,
         slidesToSlide: 1,
      },
   };

   return (
      <>
         <section className="max-w-full shadow- md:rounded-sm  rounded-lg mx-[0.23rem] md:mx-0  overflow-hidden md:mt-8 mt-16 md:h-  mb-1 ">
            <Carousel
               className="mx-four rounded-2x"
               swipeable={true}
               draggable={false}
               showDots={false}
               responsive={responsive}
               autoPlay={false}
               ssr={true}
               infinite={true}
               autoPlaySpeed={3300}
               removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            >
               <img draggable="false" className=" w-full object-fill cursor-pointer" src={Banner} />

               {/* {Slides.map((items, i) => (
                    <Image src={items} className=" h-72  sm:h-72 w-full object-contain cursor-pointer"></Image>
                 ))} */}
            </Carousel>
         </section>
      </>
   );
};
export default SliderThree;
