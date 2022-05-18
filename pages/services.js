import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderSection from "../components/HeaderSection";
import Features from "../components/Features";
import FaqSection from "./../components/FaqSection";
// import TestimonialSection from "./../components/TestimonialSection";
import GetStarted from "../components/GetStarted";
import Statistics from "../components/Statistics";
import Included from "../components/Included";
import Miners from "../components/Miners";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useWindowSize } from "@react-hook/window-size";

export default function Services() {
   return (
      <div className="h-screen relative">
         <div className="absolute -z-10 left-0 top-[95%] opacity-90">
            <Image
               className="absolute -z-10 left-0 top-[95%] opacity-90"
               src="/img/leftsidebg.webp"
               alt="left background"
               width={1000}
               height={1000}
            />
         </div>

         <div className="absolute -z-10 right-0 top-1/4">
            <Image
               src="/img/bg-services-right.webp"
               alt="right background"
               width={1000}
               height={1000}
            />
         </div>

         <div className="absolute -z-10 left-0 -top-1/3">
            <Image
               src="/img/bg-left-branding.webp"
               alt="left background"
               width={1000}
               height={1000}
            />
         </div>

         <section className="w-full bg-[url('/img/login/3d.png')]">
            <Header />
            <div className="py-20 lg:py-36 mx-auto w-fit container text-center">
               <p className="text-5xl lg:text-6xl font-bold text-white leading-[64px] lg:w-[799px]">
                  Insert an <span className="text-[#2E27FE]">appropriate</span>{" "}
                  header text.
               </p>
               <p
                  className="text-base mx-auto mt-6 leading-relaxed text-[#A3A5C1]"
                  style={{ maxWidth: "571px" }}
               >
                  Magna eu cras amet leo. Id ultrices tortor convallis vivamus
                  at pellentesque. Maecenas sagittis proin venenatis.
               </p>
               <button className="gradeint_btn duration-200 mt-12">
                  Learn More
               </button>
            </div>
         </section>
         <div className="grid gap-10 grid-cols-1 lg:grid-cols-2 container mt-[50px] items-center">
            <div
               className="w-full border border-transparent overflow-hidden rounded-xl lg:rounded-[30px]"
               style={{
                  background:
                     "linear-gradient(#000, #000) padding-box, linear-gradient(270deg, #2e27fe 0%, #9a12ff 73.96%, #cd05ff 100%) border-box",
               }}
            >
               <div className="player-wrapper">
                  <ReactPlayer
                     url="/welcome.mp4"
                     className="react-player"
                     width="100%"
                     height="100%"
                     playing={true}
                     controls={true}
                     loop={true}
                     autoPlay={false}
                  />
               </div>
            </div>
            <div>
               <h3 className="text-2xl font-bold leading-snug text-white">
                  Video Title Here
               </h3>

               <p className="text-base mt-4 leading-relaxed text-[#A3A5C1]">
                  Magna eu cras amet leo. Id ultrices tortor convallis vivamus
                  at pellentesque.
               </p>
               <p className="text-base mt-5 leading-relaxed text-[#A3A5C1]">
                  Sit odio eu massa habitant viverra viverra. Enim varius congue
                  vivamus iaculis duis. Hendrerit est, pharetra lacus sed
                  feugiat turpis est orci. Sed id nunc fermentum viverra congue
                  porttitor nulla lacus, mi.
               </p>
               <button className="max-w-[240px] w-full mt-6 rounded-full hover:opacity-80 h-11 bg-white text-black flex items-center justify-center gap-3">
                  <svg
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M6 2C4.90575 2 4 2.90575 4 4V9C2.895 9 2 9.895 2 11V16C2 17.105 2.895 18 4 18V20C4 21.0943 4.90575 22 6 22H18C19.0943 22 20 21.0943 20 20V7.41406C19.9999 7.14886 19.8946 6.89454 19.707 6.70703L15.293 2.29297C15.1055 2.10543 14.8511 2.00005 14.5859 2H6ZM6 4H14V7C14 7.552 14.448 8 15 8H18V9H6V4ZM4 11H5.5C6.328 11 7 11.672 7 12.5C7 13.328 6.328 14 5.5 14H5V16H4V11ZM13 11H16V12H14V13H15.5996V14H14V16H13V11ZM8 11.0234H9.62891C11.2109 11.0234 12 11.9749 12 13.1289V13.9004C12 15.0684 11.2092 16 9.61523 16H8V11.0234ZM5 12V13H5.5C5.776 13 6 12.776 6 12.5C6 12.224 5.776 12 5.5 12H5ZM9 12.0234V15H9.61523C10.2472 15 11 14.8084 11 13.9004V13.1289C11 12.2149 10.2549 12.0234 9.62891 12.0234H9ZM6 18H18V20H6V18Z"
                        fill="#000001"
                     />
                  </svg>
                  Download PDF
               </button>
            </div>
         </div>
         <HeaderSection
            title="Services"
            subtitle="These are the services we offer"
         />
         <div className="container flex flex-col mt-[80px] lg:mt-[120px]">
            <div
               data-aos="fade-up"
               className="flex flex-col justify-center items-center text-center"
            >
               <h3 className="title_sm md:title_md mb-[20px]">
                  Main Features.
               </h3>
               <p className="subtitle_sm md:subtitle_md">
                  Check out all of the features we offer with our services.
               </p>
            </div>
            <div
               data-aos="fade-down"
               className="mt-[60px] container justify-center items-center grid md:grid-cols-3 gap-6"
            >
               <Features
                  title="Aligned Incentives"
                  subtitle="We are incentivized to maximize your returns through our simple model."
               />
               <Features
                  title="Best in Class Rates"
                  subtitle="You gain access to industry leading prices on hardware and energy."
               />
               <Features
                  title="Monthly Maintenance"
                  subtitle="With our team members we perform monthly maintenance on all rigs."
               />
               <Features
                  title="Interest Free Funding"
                  subtitle="Apply for Interest-Free funding for the first year."
               />
               <Features
                  title="24/7 Customer Support"
                  subtitle="Contact us through Discord with a private channel."
               />
               <Features
                  title="Monthly Distributions"
                  subtitle="Receive mining profits each month deposited into your wallet."
               />
            </div>
         </div>

         <Statistics
            title1="100+"
            subtitle1="Bitcoin Mined"
            title2="200+"
            subtitle2="Clients"
            title3="200+"
            subtitle3="Miner Machines"
         />

         <div
            data-aos="fade-up"
            className="container pt-[80px] md:pt-[180px] md:mt-[40px] flex flex-col justify-center items center text-center"
         >
            <h1 className="title_md md:subtitle_lg mb-[20px]">
               {"What's Included?"}
            </h1>
            <p className="subtitle_sm md:subtitle_md">
               {"Check out the other perks that included when working with us."}
            </p>
         </div>

         <div className="container overflow-hidden mt-[60px]  justify-center items-center grid grid-cols-2 md:grid-cols-4 gap-[10px]">
            <div data-aos="fade-up">
               <Included
                  title="Private Social Network "
                  src="/img/servicenetwork.svg"
               />
            </div>

            <div data-aos="fade-up">
               <Included
                  data-aos="fade-up"
                  title="Professional Engineers"
                  src="/img/servermaintenance.svg"
               />
            </div>
            <div data-aos="fade-up">
               <Included
                  data-aos="fade-up"
                  title="Enterprise Network "
                  src="/img/servicereplacement.svg"
               />
            </div>
            <div data-aos="fade-up">
               <Included
                  data-aos="fade-up"
                  title="Lightning Network"
                  src="/img/serviceelectric.svg"
               />
            </div>
            <div data-aos="fade-up">
               <Included
                  data-aos="fade-up"
                  title="Maintenance Routine"
                  src="/img/serviceinsurance.svg"
               />
            </div>
            <div data-aos="fade-up">
               <Included
                  data-aos="fade-up"
                  title="Mining ASIC Statistics"
                  src="/img/serviceremote.svg"
               />
            </div>
            <div data-aos="fade-up">
               <Included
                  data-aos="fade-up"
                  title="Custom Panel"
                  src="/img/servicedistribution.svg"
               />
            </div>
            <div data-aos="fade-up">
               <Included
                  style={{
                     paddingTop: "2.45rem",
                     paddingBottom: "2.45rem",
                     marginBottom: "0.3px",
                  }}
                  data-aos="fade-up"
                  title="Overclocked Network Speed"
                  src="/img/serviceadmin.svg"
               />
            </div>
         </div>

         <Miners />

         <div>
            {/* <TestimonialSection /> */}
            <FaqSection />
            <GetStarted src="/img/getstartedminers_bg.webp" />
            <Footer />
         </div>
      </div>
   );
}
