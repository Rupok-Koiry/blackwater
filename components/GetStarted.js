import React, { useEffect } from "react";

function GetStarted(props) {
   return (
      <section className="mt-[40px] lg:mt-[80px] h-[550px]">
         <div className="container h-full flex flex-col justify-center items-center text-center">
            <img
               className=" absolute object-cover -z-10 w-full h-full opacity-85"
               src={props.src}
               alt="miners"
            />

            <div className="overflow-hidden">
               <h2 className="title_lg">
                  <span className="gradient_contact_text">Ready</span> to get{" "}
                  started?
               </h2>
               <div className="subtitle_md text-white sm:w-[467px] mx-auto mt-1.5">
                  We provide our clients with custom fit, Mining-As-A-Service
                  capabilities that will make you successful in the Bitcoin and
                  cryptocurrency markets.
               </div>
               <button className="gradeint_btn duration-200 mt-10">
                  Contact Us
               </button>
            </div>
         </div>
      </section>
   );
}

export default GetStarted;
