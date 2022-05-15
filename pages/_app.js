import "swiper/css";
import "swiper/css/pagination";
import "../styles/globals.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import PreLoader from "../components/PreLoader";

function MyApp({ Component, pageProps }) {
   const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
      setTimeout(() => {
         setIsLoading(false);
      }, 1200);
   }, []);
   useEffect(() => {
      AOS.init({
         /* easing: "ease-out-cubic", */
         /* once: true, */
         offset: 30,
         duration: 800,
      });
   }, []);

   return (
      <>
         {isLoading ? (
            <PreLoader/>
         ) : (
            <Component {...pageProps} />
         )}
         ;
      </>
   );
}

export default MyApp;
