import React from "react";

const Included = (props) => {
   return (
      <div>
         <div
            style={{
               background:
                  "linear-gradient(#000, #000) padding-box,linear-gradient(180deg, #2E27FE 0%, #9A12FF 100%) border-box",
               ...props.style,
            }}
            className="bg-black/40  flex flex-col w-full py-12  px-4 md:px-8 md:h-[200px] justify-center items-center text-center border border-transparent rounded-2xl"
         >
            <img className="" src={props.src} alt="Icons" />
            <p className="subtitle_sm text-xs md:text-base text-white mt-4 ">
               {props.title}
            </p>
         </div>
      </div>
   );
};

export default Included;
