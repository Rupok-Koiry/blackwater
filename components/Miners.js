import React, { useEffect } from "react";
import Image from "next/image";

const Miners = () => {
   return (
      <div className="container mt-[80px]">
         <div className="flex flex-col md:flex-row md:justify-center md:items-center">
            <div className=" flex flex-col pr-[20px] md:w-1/3 text-center md:text-left">
               <h1 className="title_sm py-[20px] ">
                  Check out our Miner Models.
               </h1>
               <p className="subtitle_md  mb-[15px]">
                  These miner models are commercial grade rigs that are known to
                  be a great investment.
               </p>
               <ul>
                  <li className="mb-[8px] flex flex-row justify-start  items-center ">
                     <img
                        className="inline-block w-3 h-3 "
                        src="/img/minerschecklist.svg"
                        alt="check"
                     />
                     <p className="subtitle_sm inline-block pl-[10px] pt-[3px]">
                        100% Uptime Guaranteed.
                     </p>
                  </li>
                  <li className="mb-[8px] flex flex-row justify-start items-center">
                     <img
                        className="inline-block w-3 h-3 "
                        src="/img/minerschecklist.svg"
                        alt="check"
                     />
                     <p className="subtitle_sm  inline-block pl-[10px] pt-[3px]">
                        Provided by the most reputable and reliable provider.
                     </p>
                  </li>
                  <li className="mb-[8px] flex flex-row justify-start items-center">
                     <img
                        className="inline-block w-3 h-3 "
                        src="/img/minerschecklist.svg"
                        alt="check"
                     />
                     <p className="subtitle_sm  inline-block pl-[10px] pt-[3px]">
                        Miners are in a secure and professional environment.
                     </p>
                  </li>
                  <li className="mb-[8px] flex flex-row justify-start items-center">
                     <img
                        className="inline-block w-3 h-3 "
                        src="/img/minerschecklist.svg"
                        alt="check"
                     />
                     <p className="subtitle_sm  inline-block pl-[10px] pt-[3px]">
                        Enjoy a steady stream of income from your miners
                     </p>
                  </li>
                  <li className="mb-[8px] flex flex-row justify-start items-center">
                     <img
                        className="inline-block w-3 h-3 "
                        src="/img/minerschecklist.svg"
                        alt="check"
                     />
                     <p className="subtitle_sm  inline-block pl-[10px] pt-[3px]">
                        Leave the maintenance and upkeep to us
                     </p>
                  </li>
                  <li className="mb-[8px] flex flex-row justify-start items-center">
                     <img
                        className="inline-block w-3 h-3 "
                        src="/img/minerschecklist.svg"
                        alt="check"
                     />
                     <p className="subtitle_sm  inline-block pl-[10px] pt-[3px]">
                        Team of experienced professionals
                     </p>
                  </li>
               </ul>
            </div>
            <div
               style={{
                  background:
                     "linear-gradient(#000, #000) padding-box,linear-gradient(180deg, #2E27FE 0%, #9A12FF 100%) border-box",
               }}
               className="overflow-hidden lg:max-h-[489px] md:h-[400px] md:w-1/3 flex flex-col items-center text-center border-2 border-transparent rounded-3xl md:mr-[20px] mt-[20px] "
            >
               <h1 className="title_sm pt-[40px]">S19J PRO</h1>
               <p className="subtitle_sm pt-[10px]">104TH/S</p>
               <Image
                  className="w-[150px] h-[200px] mb-[20px] "
                  src="/img/sjminer.webp"
                  alt="SJ19PRO"
                  width={150}
                  height={200}
               />

               <div className="w-full flex flex-row justify-evenly items-center">
                  <div className="text-left pb-[20px]">
                     <h3 className="title_money pb-[10px]">
                        $<span className="title_xs">11,000</span>
                     </h3>
                     <h3 className="title_money">
                        $<span className="title_xs">325/mo</span>
                     </h3>
                  </div>
                  <div className="text-right pb-[20px]">
                     <p className="subtitle_sm">Cost</p>
                     <p className="subtitle_sm">Maintenance</p>
                  </div>
               </div>
            </div>
            <div
               style={{
                  background:
                     "linear-gradient(#000, #000) padding-box,linear-gradient(180deg, #2E27FE 0%, #9A12FF 100%) border-box",
               }}
               className="bg-[#0C0A11] lg:max-h-[489px] md:h-[400px] md:w-1/3 flex flex-col items-center text-center border-2 border-transparent rounded-3xl mt-[20px] overflow-hidden"
            >
               <h1 className="title_sm pt-[40px]">KD6</h1>
               <p className="subtitle_sm pt-[10px]">29.02TH/S</p>
               <Image
                  className="w-[150px] h-[200px] mb-[20px]"
                  src="/img/kdminer.svg"
                  alt="KD6MINER"
                  width={150}
                  height={200}
               />

               <div className="w-full flex flex-row justify-evenly items-center">
                  <div className="text-left pb-[20px]">
                     <h3 className="title_money pb-[10px]">
                        $<span className="title_xs">11,000</span>
                     </h3>
                     <h3 className="title_money">
                        $<span className="title_xs">325/mo</span>
                     </h3>
                  </div>
                  <div className="text-right pb-[20px]">
                     <p className="subtitle_sm">Cost</p>
                     <p className="subtitle_sm">Maintenance</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Miners;
