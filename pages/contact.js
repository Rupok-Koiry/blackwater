import GetStarted from "../components/GetStarted";
import Header from "../components/Header";
import HeaderSection from "../components/HeaderSection";
import { InlineWidget } from "react-calendly";
import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";

const Contact = () => {
   return (
      <div className="relative h-screen">
         <div className="absolute -z-10 -left-6 top-1/4 md:top-24 md:left-0">
            <Image
               src="/img/body_bg_left.webp"
               alt="left background"
               width={1000}
               height={1000}
            />
         </div>
         <Header />
         <HeaderSection
            title="Contact Us"
            subtitle="Using the Project WiFi Brand Properly."
         />
         <section className="mt-[100px] md:mt-[120px] container grid grid-cols-1 lg:grid-cols-2 content-center">
            <div className="flex flex-col w-/12 text-center lg:text-left lg:pr-8">
               <h1 className="title_md">Warehouse</h1>
               <p className="subtitle_sm ">
                  BlackWater&apos;s Warehouse was specially designed to
                  withstand the high temperatures produced by ASIC mining rigs.
                  The walls are made of thick concrete, and the roof is lined
                  with fire-resistant panels. In addition, the floors are
                  reinforced with steel beams to prevent collapse. As a result,
                  BlackWater&apos;s Warehouse is one of the safest and most
                  reliable places to house mining rigs in the world.
               </p>
               <h2 className="subtitle_md pt-6 font-bold text-white">
                  Address
               </h2>
               <p className="subtitle_sm">
                  1700 S Industrial Rd. Las Vegas, NV 89102
               </p>
               <h2 className="subtitle_md pt-4 font-bold text-white">
                  Contact No.
               </h2>
               <p className="subtitle_sm">+1 (469) 463-0075</p>
               <h2 className="subtitle_md pt-4 font-bold text-white">
                  Email Address
               </h2>
               <p className="subtitle_sm">info@blackwater.co</p>
            </div>
            <div
               style={{
                  background:
                     "linear-gradient(#000, #000) padding-box, linear-gradient(270deg, #2e27fe 0%, #9a12ff 73.96%, #cd05ff 100%) border-box",
               }}
               className="flex  mt-[40px] lg:mt-0 w-full border border-transparent rounded-xl lg:rounded-[25px] "
            >
               <Image
                  className="border border-transparent rounded-xl lg:rounded-[25px]"
                  src="/img/warehouse.jpg"
                  alt="warehouse"
                  width={740}
                  height={500}
               />
            </div>
         </section>

         <section className="container flex flex-col  mt-[120px] mb-[120px] ">
            <div className="text-center">
               <h3 className="title_md mb-[20px]">Book an Appointment</h3>
               <p className="subtitle_sm mb-[20px]">
                  What are you waiting for? Book your next Calendly appointment
                  now!
               </p>
            </div>

            <InlineWidget
               styles={{
                  minWidth: "320px",
                  height: "800px",
                  position: "relative",
               }}
               pageSettings={{
                  hideGdprBanner: true,
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
               }}
               utm={{
                  utmCampaign: "",
                  utmContent: "",
                  utmMedium: "",
                  utmSource: "",
                  utmTerm: "",
               }}
               url="https://calendly.com/blackwatermining/30min"
            />
         </section>
         <Footer />
      </div>
   );
};

export default Contact;
