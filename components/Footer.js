import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

function Footer() {
   return (
      <footer>
         <div
            className="h-[13px] w-full "
            style={{
               background:
                  "linear-gradient(270deg, #2E27FE 0%, #9A12FF 73.96%, #CD05FF 100%)",
            }}
         ></div>
         <div
            style={{
               backgroundImage:
                  "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.6) 100%), url('/img/footer_bg.webp')",
               backgroundPosition: "bottom center",
            }}
         >
            <div className=" overflow-hidden flex flex-col gap-y-16 lg:gap-0 lg:flex-row justify-between container py-[72px] bg-no-repeat  text-center lg:text-left">
               <div className="flex flex-col items-center lg:block">
                  <div>
                     <Image
                        src="/img/black_water_icon.webp"
                        width={32}
                        height={35}
                        quality={100}
                        alt="black_water_icon"
                     />
                  </div>
                  <div className="mt-4">
                     <Image
                        src="/img/BLACKWATER.webp"
                        width={159}
                        height={18}
                        alt="BlackWater Logo"
                     />
                  </div>
                  <p className="subtitle_sm w-[75%] lg:w-[260px] mt-2">
                     Copyright © 2022. All rights reserved by BlackWater Group
                     LLC.
                  </p>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-[80px] xl:gap-[160px] xl:w-[650px] place-items-center lg:place-items-start">
                  <div>
                     <p className="subtitle_sm xl:w-[260px]">Company</p>
                     <ul className="mt-5 space-y-2.5">
                        <li>
                           <Link href="#">
                              <a className="subtitle_md text-white hover:text-blue duration-200">
                                 About
                              </a>
                           </Link>
                        </li>
                        <li>
                           <Link href="#">
                              <a className="subtitle_md text-white hover:text-blue duration-200">
                                 Careers
                              </a>
                           </Link>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <p className="subtitle_sm xl:w-[260px]">Social</p>
                     <ul className="mt-5 space-y-2.5">
                        <li>
                           <Link href="#">
                              <a className="subtitle_md text-white hover:text-blue duration-200">
                                 Twitter
                              </a>
                           </Link>
                        </li>
                        <li>
                           <Link href="#">
                              <a className="subtitle_md text-white hover:text-blue duration-200">
                                 Discord
                              </a>
                           </Link>
                        </li>
                        <li>
                           <Link href="#">
                              <a className="subtitle_md text-white hover:text-blue duration-200">
                                 Linkedin
                              </a>
                           </Link>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <p className="subtitle_sm xl:w-[260px]">Policies</p>
                     <ul className="mt-5 space-y-2.5">
                        <li>
                           <Link href="#">
                              <a className="subtitle_md text-white hover:text-blue duration-200">
                                 Your Data
                              </a>
                           </Link>
                        </li>
                        <li>
                           <Link href="#">
                              <a className="subtitle_md text-white hover:text-blue duration-200">
                                 Refund Policy
                              </a>
                           </Link>
                        </li>
                        <li>
                           <Link href="#">
                              <a className="subtitle_md text-white hover:text-blue duration-200">
                                 Privacy Policy
                              </a>
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
