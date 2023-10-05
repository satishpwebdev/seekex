// import React from "react";
// import Imgone from "../images/7days.png";
// import ImgTwo from "../images/quality.png";
// import ImgThree from "../images/payment.png";
// import ImgFour from "../images/helpline.png";
// import ElRight from "../images/EllipseRight.png";
// import ElLeft from "../images/EllipseLeft.png";

// const Assurance = () => {
//    return (
//       <section className="bg-[#F5F4F2] relative mt-10 ">
//          <div className="absolute top-28 ">
//             <img className="w-16" src={ElLeft} alt="" />
//          </div>
//          <div className="absolute right-0 bottom-28">
//             <img className="w-16 " src={ElRight} alt="" />
//          </div>
//          <div className="wrapper flex  items-center justify-evenly h-44">
//             <div className="border-1 border-r-2 px-12">
//                <img src={Imgone} alt="" />
//             </div>
//             <div className="border-1 border-r-2 px-12">
//                <img src={ImgTwo} alt="" />
//             </div>
//             <div className="border-1 border-r-2 px-12">
//                <img src={ImgThree} alt="" />
//             </div>
//             <div>
//                <img src={ImgFour} alt="" />
//             </div>
//          </div>
//       </section>
//    );
// };
// export default Assurance;

import React from "react";
import Imgone from "../images/7days.png";
import ImgTwo from "../images/quality.png";
import ImgThree from "../images/payment.png";
import ImgFour from "../images/helpline.png";
import ElRight from "../images/EllipseRight.png";
import ElLeft from "../images/EllipseLeft.png";

const Assurance = () => {
   return (
      <section className="bg-[#F5F4F2] lg:relative mt-10">
         <div className=" hidden md:block absolute top-28 ">
            <img className="w-16" src={ElLeft} alt="" />
         </div>
         <div className=" hidden md:block absolute right-0 bottom-28">
            <img className="w-16 " src={ElRight} alt="" />{" "}
         </div>
         <div className="container py-12 md:h-44 mx-auto flex flex-col items-center justify-center md:flex-row md:justify-evenly">
            <div className="flex flex-wrap items-center justify-center gap-12">
               <div className="border-1 border-r-0 border-b-2 md:border-r-2 md:border-b-0 md:mb-0 md:px-12 mb-2">
                  <img src={Imgone} alt="" />
               </div>
               <div className="border-1 border-r-0 border-b-2 md:border-r-2 md:border-b-0 md:mb-0 md:px-12 mb-2">
                  <img src={ImgTwo} alt="" />
               </div>
               <div className="border-1 border-r-0 border-b-2 md:border-r-2 md:border-b-0 md:mb-0 md:px-12 mb-2">
                  <img src={ImgThree} alt="" />
               </div>
               <div className="border-1 md:border-r-0 md:border-b-0 md:px-12">
                  <img src={ImgFour} alt="" />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Assurance;
