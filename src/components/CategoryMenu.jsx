import React, { useState, useEffect } from "react";
import oneCat from "../images/oneCat.png";
import twoCat from "../images/twoCat.png";
import threeCat from "../images/threeCat.png";
import fourCat from "../images/fourCat.png";
import fiveCat from "../images/fiveCat.png";
import sixCat from "../images/sixCat.png";

const catMenusData = [
   {
      title: "Men’s T-Shirts",
      img: oneCat,
   },
   {
      title: "Women’s Wear",
      img: twoCat,
   },
   {
      title: "Winter Collection",
      img: threeCat,
   },
   {
      title: "Hooded T-Shirts",
      img: fourCat,
   },
   {
      title: "Polo Neck T-Shirts",
      img: fiveCat,
   },
   {
      title: "Full Sleeves T-Shirts",
      img: sixCat,
   },
];

const CategoryMenu = () => {
   const [catMenus, setCatMenus] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setCatMenus(catMenusData);
         setIsLoading(false);
      }, 3000); 
   }, []);

   return (
      <section className="main mt-4 md:mt-8 mb-2 mx-4 md:mx-16">
         {isLoading ? (
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 ">
               {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="animate-pulse flex flex-col gap-2 font-playfair items-center justify-center p-1.5 md:p-4">
                     <div className="bg-gray-300 w-24 h-24 lg:w-44 lg:h-44 rounded-full"></div>
                     <div className="bg-gray-200 w-full h-4"></div>
                  </div>
               ))}
            </div>
         ) : (
            <div className="wrapper grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2">
               {catMenus.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2 font-playfair items-center justify-center p-1.5 md:p-4">
                     <img src={item.img} alt={item.title} className="max-w-full h-auto cursor-pointer" />
                     <h3 className="md:text-sm text-center  ">{item.title}</h3>
                  </div>
               ))}
            </div>
         )}
      </section>
   );
};

export default CategoryMenu;

