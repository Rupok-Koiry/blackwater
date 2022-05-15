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
import React, { useEffect } from "react";

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

         <Header />
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
