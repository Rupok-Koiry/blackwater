import SponsorsSection from "./SponsorsSection";
import ReactPlayer from "react-player";
import { useWindowSize } from "@react-hook/window-size";
import { useState, useEffect } from "react";
import Image from "next/image";

const cards = [
   {
      iconSrc: "/img/icons8_conference.svg",
      title: "Fully Managed",
      subtitle:
         "Full technician support 24/7 around the clock, and regular maintenance. ",
   },
   {
      iconSrc: "/img/icons8_request_money.svg",
      title: "Daily/Monthly Payouts",
      subtitle:
         "Automatic payouts at the end of every day (depending on pool).",
   },
   {
      iconSrc: "/img/icons8_historical.svg",
      title: "Superior Uptime",
      subtitle:
         "We reside in the middle of 7 sub-stations in Las Vegas, Nevada using industrial grade transformers.",
   },

   {
      iconSrc: "/img/icons8_handshake.svg",
      title: "Operational Excellence & Speed",
      subtitle:
         "We get your equipment up and running in the right environment faster. Start hosting today and start earning fast.",
   },
];

function VideoSection() {
   const [vimeoVideoRatio, setVimeoVideoRatio] = useState({
      width: 0,
      height: 0,
   });
   const [windowWidth] = useWindowSize();

   useEffect(() => {
      if (windowWidth >= 900) {
         setVimeoVideoRatio({
            width: 900,
            height: 510,
         });
      } else {
         setVimeoVideoRatio({
            width: windowWidth - 20,
            height: ((windowWidth - 20) / 30) * 17,
         });
      }
   }, [windowWidth]);

   return (
      <section
         style={{
            backgroundImage: "url('/img/body_bg_left.webp')",
         }}
         className="overflow-hidden mt-[70px] lg:mt-[130px] bg-no-repeat bg-left-top"
      >
         <div className="container">
            <h2 className="title_md text-center lg:w-[35%] mx-auto">
               Take Your Mining to New Heights.
            </h2>
         </div>
         <div className="flex justify-center container_sm mt-[50px] ">
            <div
               className="w-full lg:w-[900px] border border-transparent overflow-hidden rounded-xl lg:rounded-[30px]"
               style={{
                  background:
                     "linear-gradient(#000, #000) padding-box, linear-gradient(270deg, #2e27fe 0%, #9a12ff 73.96%, #cd05ff 100%) border-box",
               }}
            >
               {/* <VideoPlayer /> */}

               {/* <ReactPlayer
                  url="https://vimeo.com/703219895/42c6f65d4a"
                  width={`${vimeoVideoRatio.width}px`}
                  height={`${vimeoVideoRatio.height}px`}
                  playing={true}
                  controls={true}
                  loop={true}
                  autoPlay={false}
               /> */}
               <div className="player-wrapper overflow-hidden">
                  <ReactPlayer
                     url="/welcome.mp4"
                     className="react-player"
                     width="100%"
                     height="100%"
                     controls={true}
                     loop={true}
                  />
               </div>
            </div>
         </div>
         <div
            className="pt-10 bg-no-repeat bg-right"
            style={{
               backgroundImage: "url('/img/body_bg_right.webp')",
            }}
         >
            <div className="overflow-hidden flex flex-col items-center px-5 lg:px-0 ">
               <h4 className="title_sm mt-16">Establish Your Crypto Wealth</h4>
               <p className="subtitle_md mt-[7px] sm:w-[320px] text-center">
                  BlackWater Group offers unparalleled service and functionality
               </p>
            </div>
            <div className="overflow-hidden container_sm mt-[72px]">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {cards.map((card, index) => (
                     <Card {...card} key={index} serial={index + 1} />
                  ))}
               </div>
            </div>
            <SponsorsSection />
         </div>
      </section>
   );
}

export default VideoSection;

const Card = ({ iconSrc, title, subtitle, serial }) => {
   return (
      <div
         data-aos={`fade-${serial % 2 === 0 ? "left" : "right"}`}
         className=" overflow-hidden mobile_sidebar_gradeint border-[1.5px] border-transparent rounded-[30px]"
      >
         <div className="px-[25px] lg:px-[67px] py-[25px] lg:py-[60px]">
            <Image
               src={iconSrc}
               alt={title}
               width={24}
               height={24}
               className="w-6 h-6 object-cover inline-block mb-3"
            />
            <h6 className="title_xs mb-2.5">{title}</h6>
            <p className="subtitle_md">{subtitle}</p>
         </div>
      </div>
   );
};
