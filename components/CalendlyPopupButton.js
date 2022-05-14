import React from "react";
import ReactDom from "react-dom";
import { PopupButton } from "react-calendly";

const CalendlyPopupButton = () => {
   return (
      <PopupButton
         className="gradeint_btn"
         url="https://calendly.com/blackwatermining/30min?back=1&month=2022-04"
         text="Book A Call"
         rootElement={document.getElementById("__next")}
      />
   );
};

export default CalendlyPopupButton;
