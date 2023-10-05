
import React from "react";
import MasImg from "../images/Mask group.png";

const Subscribe = () => {
   const containerStyle = {
      backgroundImage: `url(${MasImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
   };

   return (
      <section className="h-72 lg:mx-28 bg-gradient-to-r from-red-900 via-red-700 to-red-700 lg:my-20 ">
         <div
            className="flex flex-col items-center justify-center h-full bg-opacity-75"
            style={containerStyle}
         >
            <h1 className="font-playfair text-white text-xl md:text-3xl mb-4 md:w-1/2 text-center">
               Subscribe to get updates on exciting offers & deals
            </h1>
            <form className="flex md:flex-row flex-col gap-2 md:gap-0 items-center justify-center">
               <input
                  type="text"
                  className="px-4 py-2 font-mont bg-red-700 border placeholder:text-white border-white"
                  placeholder="Enter your email"
               />
               <button
                  className="px-4 py-[0.59rem] font-playfair bg-white text-red-900 "
                  type="submit"
               >
                  Subscribe
               </button>
            </form>
         </div>
      </section>
   );
};
export default Subscribe;
