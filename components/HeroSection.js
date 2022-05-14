import React, { useEffect, useRef } from "react";
// import AOS from "aos";
//
import dynamic from "next/dynamic";

const CalendlyPopupButton = dynamic(() =>
   import("../components/CalendlyPopupButton")
);

function HeroSection() {
   // useEffect(() => {
   //    AOS.init();
   //    AOS.refresh();
   // }, []);
   return (
      <section className="mt-[60px]">
         <div className="container overflow-hidden grid grid-cols-1 lg:grid-cols-[45%,auto] gap-y-10">
            <div className="flex flex-col justify-center text-center lg:text-left">
               <h1 className="text-white font-lufga-bold text-[55px] lg:text-[96px] !leading-[89%]">
                  Mine the <span className="gradient_future">Future</span> of
                  Money.
               </h1>
               <p className="subtitle_md my-9 lg:w-[60%]">
                  Create your own crypto mining farm and earn passive income
                  through bitcoin mining.
               </p>

               <div>
                  {typeof window !== "undefined" && <CalendlyPopupButton />}
               </div>
            </div>
            <div className="overflow-hidden">
               <video autoPlay muted loop playsInline>
                  <source src="/banner.mp4" />
               </video>
            </div>
         </div>
      </section>
   );
}

export default HeroSection;
