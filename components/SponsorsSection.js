import Image from "next/image";
import Marquee from "react-fast-marquee";
function SponsorsSection() {
   return (
      <section className="mt-[90px] lg:mt-[177px] pb-[245px] lg:pb-[445px] -mb-[145px] lg:-mb-[300px]">
         <div className="bg-[#601DFE]">
            <div className="container py-[40px]">
               <Marquee
                  speed={40}
                  pauseOnHover
                  gradientColor={["96", "29", "254"]}
                  gradientWidth={100}
               >
                  <div className="gap-x-10 lg:gap-0 flex justify-around items-center w-full">
                     <div>
                        <Image
                           src="/img/after_pay_logo.svg"
                           width={105}
                           height={20}
                           className="w-[105px]"
                           alt="AfterPay Logo"
                        />
                     </div>
                     <div>
                        <Image
                           src="/img/atlassian_logo.svg"
                           width={120}
                           height={20}
                           className="w-[120px]"
                           alt="Atlassian Logo"
                        />
                     </div>
                     <div>
                        <Image
                           src="/img/intercom_logo.svg"
                           width={112}
                           height={20}
                           className="w-[112px]"
                           alt="Intercom Logo"
                        />
                     </div>
                     <div>
                        <Image
                           src="/img/productboard_logo.svg"
                           width={154}
                           height={20}
                           className="w-[154px]"
                           alt="ProductBoard Logo"
                        />
                     </div>
                     <div className="mr-10 lg:mr-0">
                        <Image
                           src="/img/squarespac_logo.svg"
                           width={148}
                           height={20}
                           className="w-[148px]"
                           alt="SquareSpace Logo"
                        />
                     </div>
                  </div>
               </Marquee>
            </div>
         </div>
      </section>
   );
}

export default SponsorsSection;
