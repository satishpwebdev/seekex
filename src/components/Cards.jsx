
import React, { useState, useEffect } from "react";
import cardOne from "../images/Card1.png";
import cardTwo from "../images/Card2.png";
import cardThree from "../images/Card3.png";
import cardFour from "../images/Card4.png";
import cardFive from "../images/Card5.png";

const categories = [
   {
      title: "Category 1",
      img: cardOne,
   },
   {
      title: "Category 2",
      img: cardTwo,
   },
   {
      title: "Category 3",
      img: cardThree,
   },
   {
      title: "Category 4",
      img: cardFour,
   },
   {
      title: "Category 5",
      img: cardFive,
   },
];

const Cards = () => {
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setIsLoading(false);
      }, 4800); 
   }, []);

   return (
      <section className="mx-4 md:mx-10">
         {isLoading ? (
            <div className="animate-pulse flex flex-wrap mx-2 md:mx-12">
               {[1, 2].map((_, index) => (
                  <div key={index} className="w-full md:w-1/2 lg:w-1/2 px-2 mb-4">
                     <div className="w-full h-80 bg-gray-300"></div>
                  </div>
               ))}
            </div>
         ) : (
            <>
               <div className="flex flex-wrap mx-2 md:mx-12">
                  {categories.slice(0, 2).map((category, index) => (
                     <div key={index} className="w-full md:w-1/2 lg:w-1/2 px-2 mb-4">
                        <img src={category.img} alt={category.title} className="w-full" />
                     </div>
                  ))}
               </div>
               <div className="flex justify-center flex-wrap mx-2 md:mx-8 p-2 md:p-4">
                  {categories.slice(2).map((category, index) => (
                     <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                        <img src={category.img} alt={category.title} className="w-full" />
                     </div>
                  ))}
               </div>
            </>
         )}
      </section>
   );
};

export default Cards;

