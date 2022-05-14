import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";

const CalendlyPopupButton = dynamic(() =>
   import("../components/CalendlyPopupButton")
);

function PricingSection() {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
   }, []);
   return (
      <section className="mt-[140px] md:mt-[158px]">
         <div className="container text-center">
            <div className="overflow-hidden title_md">
               Mining-As-A-Service Pricing
            </div>
            <p className="overflow-hidden subtitle_md mt-3">
               BlackWater Group offers unlimited hosting services. Understanding
               your unique goals and the details of each bundle is the best way
               to help maximize ROI.
            </p>
         </div>
         <div className="container grid grid-cols-1 md:grid-cols-[358px,auto] gap-[22px] my-[58px]">
            {/* Left Price Plan --Start-- */}
            <div
               className=" overflow-hidden border-[1.5px] lg:border border-transparent w-full rounded-[30px]"
               data-aos="fade-right"
               data-aos-duration="1000"
               style={{
                  background:
                     "linear-gradient(#000, #000) padding-box, linear-gradient(270deg, #2E27FE 0%, #9A12FF 73.96%, #CD05FF 100%) border-box",
               }}
            >
               <div
                  style={{
                     backgroundImage: "url('/img/price_paln_1_bg.webp')",
                  }}
                  className="bg-cover bg-no-repeat h-full bg-bottom"
               >
                  <div className="w-full h-[170px] flex flex-col items-center justify-center">
                     <h6 className="text-white font-lufga-bold text-sm !leading-[97.5%]">
                        Phase #1
                     </h6>
                     <h1 className="title_md mt-3">$2,500.00</h1>
                     <p className="mt-1.5 subtitle_sm">ONE TIME FEE</p>
                  </div>
                  <Devider />

                  <div className="pt-8 px-[20px] lg:px-[34px]">
                     <div className="flex flex-wrap justify-between">
                        <h6 className="text-white font-lufga-bold text-lg">
                           + $325
                        </h6>
                        <p className="subtitle_sm">Management Fee</p>
                     </div>
                     <div className="flex flex-wrap justify-between mt-8">
                        {/* <h6 className="text-white font-lufga-bold text-lg">
                            Included
                        </h6>
                        <p className="subtitle_sm">Maintance</p> */}
                     </div>

                     <div className="mt-10">
                        <h6 className="text-white font-lufga-bold text-sm">
                           Membership
                        </h6>
                        <p className="subtitle_md mt-3">
                           The $2,500 is a one-time expensed to get access to
                           our exclusive community and purchase unlimited
                           machines with us.
                        </p>
                     </div>

                     <div className="mt-7 space-y-[14px]">
                        <div className="flex gap-3 items-center">
                           <Image
                              src="/img/check.svg"
                              alt="check"
                              className="w-4 h-4 shrink-0"
                              width={16}
                              height={16}
                           />
                           <p className="subtitle_sm text-white">
                              Exclusive Discord Community
                           </p>
                        </div>
                        <div className="flex gap-3 items-center">
                           <Image
                              src="/img/check.svg"
                              alt="check"
                              className="w-4 h-4 shrink-0"
                              width={16}
                              height={16}
                           />
                           <p className="subtitle_sm text-white">
                              Experienced Expertise & Management
                           </p>
                        </div>
                        <div className="flex gap-3 items-center">
                           <Image
                              src="/img/check.svg"
                              alt="check"
                              className="w-4 h-4 shrink-0"
                              width={16}
                              height={16}
                           />
                           <p className="subtitle_sm text-white">
                              Members Discount & Special Events
                           </p>
                        </div>
                     </div>
                     <div className="mt-[120px] md:pt-[410px] lg:pt-[90px] xl:pt-0 mb-8 flex justify-center">
                        {/* <button className="font-inter duration-150 font-bold text-sm text-white px-[45px] py-3 border-[1.5px] border-white rounded-full hover:bg-white group">
                           <span className="group-hover:gradient_contact_text">
                              Book A Call
                           </span>
                        </button> */}
                        <div>
                           {typeof window !== "undefined" && (
                              <CalendlyPopupButton />
                           )}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* Left Price Plan --End-- */}

            {/* Right Price Plan --Start-- */}
            <div
               className="overflow-hidden border-[1.5px] lg:border border-transparent w-full rounded-[30px]"
               style={{
                  background:
                     "linear-gradient(#000, #000) padding-box, linear-gradient(270deg, #2E27FE 0%, #9A12FF 73.96%, #CD05FF 100%) border-box",
               }}
               data-aos="fade-left"
               data-aos-duration="1000"
            >
               <div
                  style={{
                     backgroundImage: "url('/img/price_paln_2_bg.webp')",
                  }}
                  className="bg-cover bg-no-repeat bg-bottom h-full"
               >
                  <div className="overflow-hidden w-full lg:h-[170px] grid grid-cols-1 gap-y-10 lg:gap-y-0 py-12 lg:py-0 lg:grid-cols-[auto,230px] content-center px-5 lg:px-[54px]">
                     <div className="flex flex-col items-center lg:block">
                        <h6 className="text-white font-lufga-bold text-sm !leading-[97.5%]">
                           Phase #2
                        </h6>
                        <h1 className="title_md mt-3">Inquire Team </h1>
                        <p className="mt-1.5 subtitle_sm">PER MINER</p>
                     </div>
                     {/* <div className="flex flex-col justify-center">
                        <div className="flex flex-wrap justify-between">
                           <h6 className="text-white font-lufga-bold text-lg">
                              + $325
                           </h6>
                           <p className="subtitle_sm">Management Fee</p>
                        </div>
                        <div className="flex flex-wrap justify-between mt-1.5">
                           <h6 className="text-white font-lufga-bold text-lg">
                              + $50
                           </h6>
                           <p className="subtitle_sm">Insurance</p>
                        </div>
                     </div> */}
                  </div>
                  <Devider />

                  <div className="pt-8 px-5 lg:px-[54px]">
                     <h6 className="text-white font-lufga-bold text-sm">
                        Miner Hardware
                     </h6>
                     <p className="subtitle_md mt-3">
                        Hardware cost is a one-time expense incurred at the time
                        of purchase that varies based on the quantity and
                        quality of your equipment.
                     </p>

                     <div className="pr-8 lg:px-0 grid grid-cols-1 lg:grid-cols-2 mt-[57px] gap-y-[35px] gap-x-[20px]">
                        <div>
                           <h6 className="flex items-center gap-2.5 text-white font-lufga-bold text-sm">
                              <Image
                                 src="/img/icons8_select_all.svg"
                                 width={24}
                                 height={24}
                                 alt="icons8_select_all"
                              />
                              Miner Sourcing & Management
                           </h6>
                           <p className="subtitle_md text-sm mt-[15px] text-white">
                              We have an exclusive partnership with vendors and
                              to get the latest equipment at the best price. Our
                              goal is to maximize your uptime, and as a result,
                              your ROI.
                           </p>
                        </div>
                        <div>
                           <h6 className="flex items-center gap-2.5 text-white font-lufga-bold text-sm">
                              <Image
                                 src="/img/icons8_web_design.svg"
                                 width={24}
                                 height={24}
                                 alt="icons8_web_design"
                              />
                              Network Security
                           </h6>
                           <p className="subtitle_md text-sm mt-[15px] text-white">
                              Our telecom background has helped us implement
                              enterprise grade security standards across our
                              hardware and physical surroundings.
                           </p>
                        </div>
                        <div>
                           <h6 className="flex items-center gap-2.5 text-white font-lufga-bold text-sm">
                              <Image
                                 src="/img/icons8_internet_connection.svg"
                                 width={24}
                                 height={24}
                                 alt="icons8_internet_connection"
                              />
                              Highly Proven & Trusted
                           </h6>
                           <p className="subtitle_md text-sm mt-[15px] text-white">
                              Built by technology and financial experts, our
                              US-based operations are designed for investors who
                              seek a proven and reliable partner.
                           </p>
                        </div>
                        <div>
                           <h6 className="flex items-center gap-2.5 text-white font-lufga-bold text-sm">
                              <Image
                                 src="/img/icons8_pubg_helmet.svg"
                                 width={24}
                                 height={24}
                                 alt="icons8_pubg_helmet"
                              />
                              24/7 Support
                           </h6>
                           <p className="subtitle_md text-sm mt-[15px] text-white">
                              BlackWater Group is your premier partner in the
                              mining space. Our suite of services can help you
                              acquire, deploy and manage your miners in one
                              cohesive solution.
                           </p>
                        </div>
                     </div>

                     <div className="mt-[50px] mb-8 lg:mb-[50px] flex justify-center md:justify-between">
                        {/* <button className="font-inter duration-150 font-bold text-sm px-[45px] py-3 border-[1.5px] border-white rounded-full bg-white hover:bg-transparent group">
                           
                        </button> */}

                        <div>
                           {typeof window !== "undefined" && (
                              <CalendlyPopupButton />
                           )}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* Right Price Plan --End-- */}
         </div>
      </section>
   );
}

export default PricingSection;

const Devider = () => {
   return (
      <div
         className="w-full h-px"
         style={{
            background:
               "linear-gradient(270deg, #2E27FE 0%, #9A12FF 73.96%, #CD05FF 100%)",
         }}
      ></div>
   );
};
