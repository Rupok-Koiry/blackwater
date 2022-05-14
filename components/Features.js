import React from "react";

const Features = (props) => {
   return (
      <div>
         <div
            style={{
               background:
                  "linear-gradient(#000, #000) padding-box,linear-gradient(180deg, #2E27FE 0%, #9A12FF 100%) border-box",
            }}
            className="p-8 h-[140px] md:h-[180px] lg:h-[150px] flex flex-col border border-transparent bg-transparent rounded-2xl"
         >
            <h5 className="title_xs  mb-[20px]">{props.title}</h5>
            <p className="subtitle_sm">{props.subtitle}</p>
         </div>
      </div>
   );
};

export default Features;
