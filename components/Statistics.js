import Marquee from "react-fast-marquee";
function Statistics(props) {
   return (
      <section className="mt-[90px] lg:mt-[177px] pb-[150px] md:pb-[50px] lg:pb-[200px]  -mb-[145px] lg:-mb-[300px]">
         <div className="bg-[#601DFE]">
            <div className="container py-[40px]">
               <Marquee
                  speed={45}
                  pauseOnHover
                  gradientColor={["96", "29", "254"]}
                  gradientWidth={100}
               >
                  <div className="gap-x-10 lg:gap-x-0 flex justify-around items-center w-full">
                     <div className="text-center">
                        <h1 className="title_statistcs text-lg md:text-3xl lg:text-4xl">
                           {props.title1}
                        </h1>
                        <p className="subtitle_statistics text-sm md:text-lg">
                           {props.subtitle1}
                        </p>
                     </div>
                     <div className="text-center">
                        <h1 className="title_statistcs text-lg md:text-3xl lg:text-4xl">
                           {props.title2}
                        </h1>
                        <p className="subtitle_statistics text-sm md:text-lg">
                           {props.subtitle2}
                        </p>
                     </div>
                     <div className="text-center">
                        <h1 className="title_statistcs text-lg md:text-3xl lg:text-4xl">
                           {props.title3}
                        </h1>
                        <p className="subtitle_statistics text-sm md:text-lg">
                           {props.subtitle3}
                        </p>
                     </div>
                     {/* <div>
                        <h1 className="title_statistcs">{props.title4}</h1>
                        <p className="subtitle_statistics">{props.subtitle4}</p>
                     </div>
                     <div className="mr-10 lg:mr-0">
                        <h1 className="title_statistcs">{props.title5}</h1>
                        <p className="subtitle_statistics">{props.subtitle5}</p>
                     </div> */}
                  </div>
               </Marquee>
            </div>
         </div>
      </section>
   );
}

export default Statistics;
