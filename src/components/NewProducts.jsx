import React, {useState} from "react";
import Tees from '../images/Tees.png'
import TeesTwo from '../images/Tees2.png'
import TeesThree from '../images/Tees3.png'
import TeesFour from '../images/Tees4.png'

const NewProducts = () => {
    const perPage = 4
    const [viewMore,setMore] = useState(perPage)
    const datas = [
        {title:"Men Henley Neck Full Sleeve Red Wine", img:Tees},
        {title:"Men Henley Neck Full Sleeve Red Wine", img:TeesTwo},
        {title:"Men Henley Neck Full Sleeve Red Wine", img:TeesThree},
        {title:"Men Henley Neck Full Sleeve Red Wine", img:TeesFour},
        {title:"Men Henley Neck Full Sleeve Red Wine", img:Tees},
        // {title:"Men Henley Neck Full Sleeve Red Wine", img:TeesTwo},
        // {title:"Men Henley Neck Full Sleeve Red Wine", img:TeesThree},
        // {title:"Men Henley Neck Full Sleeve Red Wine", img:Tees},
        // {title:"Men Henley Neck Full Sleeve Red Wine", img:TeesTwo},
    ]
    const [data, setData] = useState(datas)

    const handleMoreBtn = () => {
        setMore(perPage + viewMore);
     };
   return (
      <section className="p-4 ">
      <div className="main flex flex-col items-center justify-center w-full font-playfair">
         <div className="flex items-center justify-center w-full mb-4">
            <div className="w-1/6 h-[0.03rem] bg-red-500 mx-2 md:w-11/12 md:h-[0.03rem] md:bg-red-500 md:mx-12"></div>
            <h3 className="text-[#1C1C1C] text-xl md:text-2xl text-center font-semibold w-1/2">
               New Products
            </h3>
            <div className="w-1/6 h-[0.03rem] bg-red-500 mx-2 md:w-11/12 md:h-[0.03rem] md:bg-red-500 md:mx-12"></div>
         </div>

         <div className="cardWrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full mt-4">
            {data?.slice(0, viewMore).map((item, index) => (
               <div key={index} className="card flex items-center flex-col py-4">
                  <div className="">
                     <img className="w-full" src={item.img} alt="" />
                  </div>
                  <h3 className="text-center text-sm md:text-base">{item.title}</h3>
                  <h4 className="font-semibold">₹399</h4>
                  <div className="size flex gap-2">
                     <h3 className="border-[0.02rem] px-2">S</h3>
                     <h3 className="border-[0.02rem] px-2">M</h3>
                     <h3 className="border-[0.02rem] px-2">XL</h3>
                     <h3 className="border-[0.02rem] px-2">XXL</h3>
                  </div>
               </div>
            ))}
         </div>
         <div className="loadbtnWrap flex items-center justify-center mt-4 mb-4">
            {viewMore < data?.length && (
               <button className="bg-[#770015] font-mont rounded-shadow text-white px-4 py-2" onClick={handleMoreBtn}>
                  View More
               </button>
            )}
         </div>
      </div>
   </section>
   );
};
export default NewProducts;
