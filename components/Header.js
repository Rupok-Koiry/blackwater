import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import React, { useEffect } from "react";
import Link from "next/link";
import { useWindowSize } from "@react-hook/window-size";
import Image from "next/image";

const navs = [
   {
      title: "Home",
      url: "/",
   },
   {
      title: "Services",
      url: "services",
   },
   {
      title: "About",
      url: "about",
   },
   {
      title: "Branding",
      url: "branding",
   },
   {
      title: "Contact",
      url: "contact",
   },
];

function Header() {
   const [windowWidth, windowHeight] = useWindowSize();

   const [showSidebar, setShowSidebar] = useState(false);

   const closeSidebar = (e) =>
      e?.target?.id === "mobile_sidebar" && setShowSidebar(false);
   const closeSidebarForcely = () => setShowSidebar(false);

   const [headerHeight, setHeaderHeight] = useState("auto");
   const [mobieSidebarHeight, setMobieSidebarHeight] = useState("auto");

   //

   useEffect(() => {
      document.body.style.overflow = showSidebar ? "hidden" : "auto";
   }, [showSidebar]);

   useEffect(() => {
      setTimeout(() => {
         if (windowWidth < 1024) {
            const header_main_wrapper = document.getElementById(
               "header_main_wrapper"
            )?.clientHeight;
            setHeaderHeight(header_main_wrapper || 0);
            setMobieSidebarHeight(`${windowHeight - (headerHeight - 1)}px`);
         } else {
            setHeaderHeight("auto");
            setMobieSidebarHeight("auto");
         }
      }, 0);
   }, [windowWidth]);

   return (
      <header
         className="sticky top-0 left-0 w-full z-50 duration-[0.4s]"
         id="header_main_wrapper"
      >
         <div className="container relative py-6 backdrop-blur-sm bg-black/10 lg:py-10 flex justify-between items-center ">
            {/* Logo Start */}
            <div className="shrink-0">
               <Link href="/">
                  <a className="max-w-[170px] block lg:w-auto">
                     <Image
                        src="/img/black_water_logo.svg"
                        alt="Black water"
                        width={500}
                        height={250}
                     />
                  </a>
               </Link>
            </div>
            {/* Logo End */}

            <div>
               {/* Nav Start */}
               <div
                  onClick={closeSidebar}
                  id="mobile_sidebar"
                  className={`fixed pointer-events-none overflow-hidden left-0 w-full backdrop-blur-sm bg-black/10 z-50 lg:static lg:w-auto lg:h-auto lg:bg-transparent opacity-0 duration-[0.3s] ${
                     showSidebar ? "opacity-100 pointer-events-auto" : ""
                  } lg:opacity-100 lg:pointer-events-auto font-openSans`}
                  style={{ top: headerHeight, height: mobieSidebarHeight }}
               >
                  <ul
                     className={`text-center gap-10 font-inter font-normal text-white backdrop-blur-sm bg-black/10 py-5 lg:py-0 w-full lg:w-auto lg:flex h-auto lg:bg-transparent -translate-y-full duration-[0.3s] ${
                        showSidebar ? "translate-y-0" : ""
                     } lg:translate-y-0`}
                  >
                     {navs.map((nav, i) => (
                        <li key={i}>
                           <Link href={nav.url}>
                              <a
                                 onClick={closeSidebarForcely}
                                 className=" hover:text-blue border-b-2 border-transparent hover:border-primary duration-100 px-6 py-2.5 block lg:p-1"
                              >
                                 {nav.title}
                              </a>
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>
               {/* Nav End */}
               <div className="text-white flex items-center gap-6 lg:gap-8">
                  {/* Hamburger Icon --Start-- */}
                  <div
                     className="hover:text-white lg:hidden"
                     onClick={() => setShowSidebar((prev) => !prev)}
                  >
                     {showSidebar ? (
                        <IoMdClose size={28} className="relative z-50" />
                     ) : (
                        <GiHamburgerMenu size={25} />
                     )}
                  </div>
                  {/* Hamburger Icon --End-- */}
               </div>
            </div>
         </div>
      </header>
   );
}

export default Header;
