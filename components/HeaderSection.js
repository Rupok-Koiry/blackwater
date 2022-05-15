import React, { useEffect } from "react";
function HeaderSection(props) {
   return (
      <section className="mt-[80px] lg:mt-[120px]">
         <div className="container overflow-hidden flex flex-col items-center text-center">
            <h1 className="title_lg">
               <span className="gradient_contact_text">{props.title}</span>.
            </h1>
            <div className="subtitle_md">{props.subtitle}</div>
            <button className="gradeint_btn duration-200 mt-10">
               Learn More
            </button>
         </div>
      </section>
   );
}

export default HeaderSection;
