import Header from "../components/Header";
import HeaderSection from "../components/HeaderSection";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import Image from "next/image";

import React, { useEffect } from "react";

export default function Branding() {
   return (
      <>
         <div className="relative h-full overflow-hidden">
            <div className="absolute -z-10 -left-24  md:left-0 -top-48  md:-top-72 ">
               <Image
                  className=""
                  src="/img/bg-left-branding.webp"
                  alt="left background"
                  width={1000}
                  height={1000}
               />
            </div>
            <div className="absolute -z-10 -top-12 right-0 md:right-0">
               <Image
                  className="absolute -z-10 -top-12 right-0 md:right-0"
                  src="/img/404_bg_right.webp"
                  alt="Right Background"
                  width={1000}
                  height={1000}
               />
            </div>

            <Header />
            <HeaderSection
               title="Branding"
               subtitle="BlackWater's branding is an intricately designed and perfected work of art."
            />

            <section className="mt-[80px] lg:mt-[120px]">
               <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col justify-center space-y-[20px] text-center">
                     <h2
                        data-aos="fade-right"
                        className="title_sm md:text-left"
                     >
                        Logo Composition
                     </h2>
                     <div data-aos="fade-right">
                        <Image
                           className=""
                           src="/img/brandingline.svg"
                           alt="line"
                           width={565}
                           height={5}
                        />
                     </div>
                     <p className="subtitle_md lg:w-[80%] md:text-left">
                        A deep dive into the composition of symbolyms used to
                        create the logomark.
                     </p>
                     <p className="subtitle_md lg:w-[80%] md:text-left">
                        BlackWater creates accessibility for people of all
                        experience levels to participate in the digital
                        financial markets.
                     </p>
                  </div>
                  <div>
                     <div
                        data-aos="fade-left"
                        className="w-full h-auto text-center"
                     >
                        <Image
                           className=""
                           src="/img/logocomposition.svg"
                           alt="logocomposition"
                           width={500}
                           height={500}
                        />
                     </div>
                  </div>
               </div>
            </section>

            <section className="mt-[80px] lg:mt-[120px]">
               <div className="container flex flex-col justify-center space-y-[20px] text-center md:mb-[150px]">
                  <h2 data-aos="fade-up" className="title_sm md:text-left">
                     Logo Composition
                  </h2>
                  <div className="flex justify-start">
                     <div data-aos="fade-up">
                        <Image
                           className=""
                           src="/img/brandingline.svg"
                           alt="line"
                           width={565}
                           height={5}
                        />
                     </div>
                  </div>
                  <div data-aos="fade-up" className="w-full h-auto ">
                     <Image
                        className="w-full h-auto "
                        src="/img/scaling.svg"
                        alt="logocomposition"
                        width={1134}
                        height={479}
                     />
                  </div>
               </div>
            </section>

            <section
               data-aos="fade-up"
               className="mt-[80px] lg:mt-[120px] overflow-x-hidden"
            >
               <div className="container grid grid-cols-1 justify-center md:grid-cols-2 gap-y-10">
                  <div className="flex flex-col items-center md:items-start space-y-[20px] text-center md:text-left md:mb-[150px]">
                     <div className="text-left">
                        <h2 data-aos="fade-up" className="title_sm">
                           Typeface
                        </h2>
                     </div>
                     <div data-aos="fade-up">
                        <Image
                           className=""
                           src="/img/brandingline.svg"
                           alt="line"
                           width={550}
                           height={5}
                        />
                     </div>
                     {/* <div className="h-[561px]">
                           <Image
                              className=""
                              src="/img/fonts.svg"
                              alt="fonts"
                              width={319}
                              height={590}
                           />
                        </div> */}
                     <div data-aos="fade-right">
                        <div className="md:pb-[30px]">
                           <Image
                              src="/img/brandingfont1.svg"
                              alt="fonts"
                              width={265}
                              height={265}
                           />
                        </div>

                        <div>
                           <Image
                              src="/img/brandingfont2.svg"
                              alt="fonts"
                              width={265}
                              height={265}
                           />
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col space-y-[20px] text-center md:text-left md:mb-[120px] ml-[10px]">
                     <h2 data-aos="fade-up" className="title_sm">
                        Color Palette
                     </h2>
                     <div data-aos="fade-up">
                        <Image
                           className=""
                           src="/img/brandingline.svg"
                           alt="line"
                           width={550}
                           height={5}
                        />
                     </div>
                     <div
                        data-aos="fade-left"
                        className="md:h-[561px] md:pt-[20px] "
                     >
                        <Image
                           className=""
                           src="/img/color.svg"
                           alt="color pallete"
                           width={635}
                           height={641}
                        />
                     </div>
                     <div
                        data-aos="fade-left"
                        className="absolute -z-20 right-0 top-1/5"
                     >
                        <Image
                           className=""
                           src="/img/about_bg_right.webp"
                           alt="Right Background"
                           width={1000}
                           height={1000}
                        />
                     </div>
                  </div>
               </div>
            </section>
         </div>
         <GetStarted src="/img/getstartedminers_bg.webp" />
         <Footer />
      </>
   );
}
