import React, { useState } from "react";
import Tees from "../images/Blur.png";
import TeesTwo from "../images/BlurTwo.png";
import TeesThree from "../images/BlurThree.png";
import TeesFour from "../images/BlurFour.png";

const Collection = () => {
   const perPage = 6;
   const [viewMore, setMore] = useState(perPage);
   const datas = [
      { title: "Streetwear Collections", img: Tees },
      { title: "Striped T-Shirts", img: TeesTwo },
      { title: "Round Neck T-Shirts", img: TeesThree },
      { title: "Printed T-Shirts", img: TeesFour },
      { title: "Oversized T-Shirts", img: Tees },
      { title: "Oversized T-Shirts", img: Tees },
      { title: "Striped T-Shirts", img: TeesTwo },
      { title: "Round Neck T-Shirts", img: TeesThree },


   ];
   const [data, setData] = useState(datas);

   
   return (
      <section className="mx-12 ">
         <div className="main flex flex-col items-center justify-center w-full font-playfair ">
            <div className="cardWrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full mt-4 ">
               {data?.slice(0, viewMore).map((item, index) => (
                  <div key={index} className="relative card flex items-center flex-col py-4">
                     <div className="relative">
                        <img className="w-" src={item.img} alt="" />
                     </div>
                     <div className="w-[92.7%] h-12 flex items-center font-bold text-center justify-center text-sm absolute bottom-4 backdrop-blur-sm bg-white/30 text-white">
                        <h3 className="text-center">{item.title}</h3>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};
export default Collection;
