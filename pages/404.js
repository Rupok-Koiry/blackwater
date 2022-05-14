import Header from "../components/Header";
import Footer from "./../components/Footer";
import Image from "next/image";

export default function NotFound() {
   return (
      <div className="">
         <Header />
         <section className="relative h-screen w-screen">
            <div className="absolute -z-10 -top-48 right-0">
               <Image
                  className=""
                  src="/img/404_bg_right.webp"
                  alt="Right Background"
                  width={1000}
                  height={1000}
               />
            </div>
            <div className="absolute -z-10 -bottom-36 left-0">
               <Image
                  className=""
                  src="/img/404_bg_left.webp"
                  alt="Left Background"
                  width={1000}
                  height={1000}
               />
            </div>
            <div className="flex flex-col justify-center items-center ml-5 w-screen mx-auto mt-10">
               <h1 className="font-inter font-bold text-[250px] bg-clip-text text-transparent bg-gradient-to-b from-[#2E27FE] to-[#9A12FF] ">
                  404
               </h1>
               <h1 className="title_md">Page not found.</h1>
               <p className="subtitle_md my-3">
                  Sorry, we cant find what youre looking for.
               </p>
               <button className="gradeint_bordered_btn mt-3">Go Back</button>
            </div>
         </section>

         <Footer />

         {/* <section className="container flex flex-col h-screen justify-center items-center">
            <div className="">
               <img className="max-w-full" src="/img/404.png" alt="404" />
            </div>

            <div className="title_md">Page not found.</div>
            <div className="subtitle_md">
               <p>Sorry, we cant find what youre looking for</p>
            </div>
            <button className="gradeint_bordered_btn mt-10">Go Back</button>
         </section>
         <Footer /> */}
      </div>
   );
}
