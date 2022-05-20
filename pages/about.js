import Header from "../components/Header";
import HeaderSection from "../components/HeaderSection";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import React, { useEffect } from "react";

const members = [
   {
      name: "Marcello Cantu",
      title: "Chief Executive Officer",
      description:
         "My passion is making processes and procedures more efficient to save time and money.",
      link: "/img/marcello.webp",
      instagram: "marcellocantu",
      linkedin: "marcellocantu",
      github: "",
      email: "marcello@blackwater.co",
   },
   {
      name: "Andy Kong",
      title: "Chief Technology Officer",
      description:
         "My goal is to solve problems for people who can’t and to create products that makes life easier.",
      link: "/img/andy.png",
      instagram: "andyvonde",
      linkedin: "andyvonde",
      github: "andyvonde",
      email: "info@andykong.me",
   },
   {
      name: "Joey Fraser",
      title: "Chief Finance Officer",
      description:
         "My objective is to provide clarity through transparent and detailed communication.",
      link: "/img/joey.webp",
      instagram: "joeyjaf",
      linkedin: "josephfraser",
      email: "joey@blackwater.co",
   },
   {
      name: "Aaron Kong",
      title: "Operation Officer",
      description:
         "My objective is to automate daily tasks in operations and develop scalable applications.",
      link: "/img/aaron.png",
      instagram: "aarontkong",
      linkedin: "",
      github: "",
      email: "",
   },
   {
      name: "Johnny Huynh",
      title: "Operation Specialist",
      description:
         "My mission is to be innovative while elevating businesses and scaling systems.",
      link: "/img/johnny.webp",
      instagram: "johnnykhuynh",
      linkedin: "",
      github: "",
      email: "johnny@blackwater.co",
   },
   {
      name: "Jaime Martin",
      title: "Onboarding Manager",
      description:
         "My experience keeps me focused on client communication while I accomplish my role of managing.",
      link: "/img/jaime.webp",
      instagram: "jaimemartin",
      linkedin: "jaimemartinr",
      github: "",
      email: "jaime@blackwater.co",
   },
];

const Member = ({
   name,
   title,
   description,
   link,
   instagram,
   linkedin,
   github,
   email,
}) => {
   return (
      <div
         data-aos="fade-up"
         className="flex flex-col  relative z-0 mb-[150px]"
      >
         <div className="w-full shadow-lg rounded-[30px] text-center">
            <Image
               className=""
               src={link}
               alt="team photos"
               width={400}
               height={400}
            />
         </div>
         <div
            className="flex flex-col mx-auto left-0 right-0 -bottom-24 text-center absolute justify-center border-transparent border  overflow-hidden w-10/12 rounded-[30px] bg-darkGray p-3 sm:p-6"
            style={{
               background:
                  "linear-gradient(#000, #000) padding-box, linear-gradient(270deg, #2e27fe 0%, #9a12ff 73.96%, #cd05ff 100%) border-box",
            }}
         >
            <h2 className="title_xs ">{name}</h2>
            <h3 className="subtitle_sm pt-2 text-purple font-semibold">
               {title}
            </h3>
            <p className="subtitle_sm pt-4">{description}</p>
         </div>
         <div className="flex flex-row justify-center absolute mx-auto left-0 right-0 -bottom-[140px] space-x-[10px]">
            {instagram && (
               <a
                  className="text-white hover:text-purple"
                  href={`https://www.instagram.com/${instagram}/`}
               >
                  <FaInstagram size={24} />
               </a>
            )}
            {linkedin && (
               <a
                  className="text-white hover:text-purple"
                  href={`https://www.linkedin.com/in/${linkedin}/`}
               >
                  <FaLinkedin size={24} />
               </a>
            )}
            {github && (
               <a
                  className="text-white hover:text-purple"
                  href={`https://www.github.com/${github}/`}
               >
                  <FaGithub size={24} />
               </a>
            )}
            {email && (
               <a
                  className="text-white hover:text-purple"
                  href={`mailto:${email}`}
               >
                  <FaEnvelope size={24} />
               </a>
            )}
         </div>
      </div>
   );
};

export default function about() {
   return (
      <div className="relative h-screen">
         <Header />
         <HeaderSection
            title="Our Team"
            subtitle="Successful mining operations require a stable and reliable hosting service. For this reason, we are one of the leading providers in our industry with experience providing top-notch support for all types of clients' needs."
         />
         <div className="absolute -z-10 -top-12 right-0 md:right-0">
            <Image
               className="absolute -z-10 -top-12 right-0 md:right-0"
               src="/img/404_bg_right.webp"
               alt="Right Background"
               width={1000}
               height={1000}
            />
         </div>

         <div className="absolute -z-10 left-0 top-0">
            <Image
               className="absolute -z-10 left-0 top-0"
               src="/img/bg-left-branding.webp"
               alt="left background"
               width={1000}
               height={1000}
            />
         </div>

         <section
            className="mt-[80px] md:mt-[120px] pt-10 bg-no-repeat bg-right"
            style={{
               backgroundImage: "url('/img/about_bg_right.webp')",
            }}
         >
            <div
               data-aos="fade-up"
               className="container flex flex-col relative z-0 items-center justify-center"
            >
               <div className="border w-full lg:h-[600px] border-transparent overflow-hidden rounded-xl lg:rounded-[30px]">
                  <Image
                     src="/img/team.webp"
                     alt="Team Photo"
                     width={1115}
                     height={800}
                  />
               </div>
               <div
                  data-aos="fade-up"
                  data-offset='{"top": "0"}'
                  className="flex flex-col mx-auto left-0 right-0 -bottom-40  sm:-bottom-24  text-center absolute justify-center border-transparent border  overflow-hidden w-10/12 rounded-[30px] bg-darkGray space-y-[20px] p-4 md:p-6"
                  style={{
                     background:
                        "linear-gradient(#000, #000) padding-box, linear-gradient(270deg, #2e27fe 0%, #9a12ff 73.96%, #cd05ff 100%) border-box",
                  }}
               >
                  <h3 className="title_sm">About</h3>
                  <p className="subtitle_sm">
                     BlackWater is one of the leading hosting companies for
                     bitcoin mining operations. We offer turnkey solutions for
                     anyone looking to get into the bitcoin mining game. Our
                     mission is to make it easy and affordable for everyone to
                     participate in this exciting new industry.
                  </p>
               </div>
            </div>

            <div
               data-aos="fade-up"
               className="flex flex-col container justify-center text-center mt-[250px] md:mt-[200px] mb-8"
            >
               <h2 className="title_md">Team Members</h2>
               <p className="subtitle_md">
                  A group of dedicated professionals with diverse skillsets is
                  hard at work on BlackWater. They are passionate about their
                  jobs, which shows in the quality and attention they give each
                  project The people behind this game have an elite crew that
                  specializes in various fields from design to programming - but
                  most importantly: whatever task needs doing!
               </p>
            </div>

            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto mt-[80px]">
               {members.map((member, index) => (
                  <Member {...member} key={index} />
               ))}
            </div>
         </section>
         <div>
            <div
               data-aos="fade-up"
               className="flex flex-col container justify-center text-center mt-[250px] md:mt-[200px] mb-8"
            >
               <h2 className="title_md">BlackWater Team Milestones</h2>
               <p className="subtitle_md">
                  Lorem consectetur facilisis quis at odio curabitur a id eu.
                  Lectus adipiscing convallis blandit diam tristique. Lorem.
               </p>
            </div>
            <section className="bg-black mt-20 max-w-[1110px] mx-auto min-h-screen lg:block hidden overflow-x-hidden">
               <div className="relative flex items-start">
                  <p className="w-[300px] text h-20 text-6xl font-black leading-9 text-center">
                     2020
                  </p>
                  <div className="relative top-10 right-4">
                     <img src="/img/login/line-1.svg" alt="line" />
                     <div className="absolute right-64 top-12">
                        <p className="text-xl font-bold leading-loose text-white">
                           The Conception
                        </p>
                        <p
                           className="text-sm leading-snug text-[#A3A5C1]"
                           style={{ width: "608px" }}
                        >
                           Porttitor enim nibh ut egestas natoque laoreet.
                           Consequat posuere quam amet cursus. Suspendisse nec
                           posuere fermentum tellus ultricies consectetur.
                           Curabitur feugiat purus lectus maecenas. Sit at
                           pellentesque suspendisse sagittis sollicitudin.
                           Ultrices faucibus ut.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="relative top-20 left-20 xxl:left-28 flex items-start">
                  <div className="relative top-5 right-0">
                     <img src="/img/login/line-2.svg" alt="line" />

                     <div className="absolute left-72 top-12">
                        <p className="text-xl font-bold leading-loose text-right text-white">
                           Establishing the Company
                        </p>
                        <p
                           className="text-sm leading-snug text-right text-[#A3A5C1]"
                           style={{ width: "608px" }}
                        >
                           Integer adipiscing sed amet egestas. Donec etiam sit
                           facilisi et tincidunt. Interdum adipiscing felis, est
                           adipiscing ornare mauris sapien. Dolor parturient
                           donec donec tellus nibh. Consectetur habitant sit
                           posuere dignissim mattis risus metus egestas odio.
                           Elit.
                        </p>
                     </div>
                  </div>
                  <p className="w-[300px] text h-20 text-6xl font-black leading-9 text-center">
                     2021
                  </p>
               </div>
               <div className="relative top-40 flex items-start">
                  <p className="w-[300px] text h-20 text-6xl font-black leading-9 text-center">
                     2022
                  </p>
                  <div className="relative top-5 right-4">
                     <img src="/img/login/line-3.svg" alt="line" />
                     <div className="absolute right-20 top-12">
                        <p className="text-xl font-bold leading-loose text-white">
                           The Conception
                        </p>
                        <p
                           className="text-sm leading-snug text-[#A3A5C1]"
                           style={{ width: "608px" }}
                        >
                           Porttitor enim nibh ut egestas natoque laoreet.
                           Consequat posuere quam amet cursus. Suspendisse nec
                           posuere fermentum tellus ultricies consectetur.
                           Curabitur feugiat purus lectus maecenas. Sit at
                           pellentesque suspendisse sagittis sollicitudin.
                           Ultrices faucibus ut.
                        </p>
                     </div>
                  </div>
               </div>
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <div className="w-fit ml-auto relative bottom-10 right-20">
                  <p className="text-6xl text-center leading-[80px] font-black text">
                     Beyond
                  </p>
                  <p className="text-xl text-center mt-5 font-bold text-white">
                     Insert Title
                  </p>
                  <p
                     className="text-sm mt-3 leading-snug text-center text-[#A3A5C1]"
                     style={{ width: "500px" }}
                  >
                     Commodo sollicitudin pellentesque justo amet, et in sed.
                     Tincidunt ullamcorper quis enim dignissim nibh lacinia leo
                     ridiculus. Felis, tristique consequat sed etiam arcu sed
                     arcu vitae. Mollis senectus platea consequat massa urna
                     pharetra iaculis purus, consectetur.
                  </p>
               </div>
            </section>
            <section className="bg-black mt-20 mx-auto lg:hidden block">
               <div className="text-center">
                  <p className="text text-3xl font-black leading-9 text-center">
                     1. BlackWater Society Pass
                  </p>
                  <div className="md:px-10 px-4 mt-8">
                     <p className="text-xl font-bold leading-loose text-white">
                        The Conception
                     </p>
                     <p className="text-sm leading-snug text-[#A3A5C1]">
                        Porttitor enim nibh ut egestas natoque laoreet.
                        Consequat posuere quam amet cursus. Suspendisse nec
                        posuere fermentum tellus ultricies consectetur.
                        Curabitur feugiat purus lectus maecenas. Sit at
                        pellentesque suspendisse sagittis sollicitudin. Ultrices
                        faucibus ut.
                     </p>
                  </div>
               </div>
               <div className="w-3 h-3 mx-auto rounded-full back border-2 border-rounded-full border-white mt-10"></div>
               <div className="h-20 w-[1px] bg-white mx-auto"></div>
               <div className="w-3 h-3 mx-auto rounded-full back border-2 border-rounded-full border-white"></div>

               <div className="text-center mt-10">
                  <p className="text text-3xl font-black leading-9 text-center">
                     2021
                  </p>
                  <div className="md:px-10 px-4 mt-8">
                     <p className="text-xl font-bold leading-loose text-white">
                        The Conception
                     </p>
                     <p className="text-sm leading-snug text-[#A3A5C1]">
                        Integer adipiscing sed amet egestas. Donec etiam sit
                        facilisi et tincidunt. Interdum adipiscing felis, est
                        adipiscing ornare mauris sapien. Dolor parturient donec
                        donec tellus nibh. Consectetur habitant sit posuere
                        dignissim mattis risus metus egestas odio. Elit.
                     </p>
                  </div>
               </div>
               <div className="w-3 h-3 mx-auto rounded-full back border-2 border-rounded-full border-white mt-10"></div>
               <div className="h-20 w-[1px] bg-white mx-auto"></div>
               <div className="w-3 h-3 mx-auto rounded-full back border-2 border-rounded-full border-white"></div>

               <div className="text-center mt-10">
                  <p className="text text-3xl font-black leading-9 text-center">
                     2022
                  </p>
                  <div className="md:px-10 px-4 mt-8">
                     <p className="text-xl font-bold leading-loose text-white">
                        The Conception
                     </p>
                     <p className="text-sm leading-snug text-[#A3A5C1]">
                        Porttitor enim nibh ut egestas natoque laoreet.
                        Consequat posuere quam amet cursus. Suspendisse nec
                        posuere fermentum tellus ultricies consectetur.
                        Curabitur feugiat purus lectus maecenas. Sit at
                        pellentesque suspendisse sagittis sollicitudin. Ultrices
                        faucibus ut.
                     </p>
                  </div>
               </div>
               <div className="w-3 h-3 mx-auto rounded-full back border-2 border-rounded-full border-white mt-10"></div>
               <div className="h-20 w-[1px] bg-white mx-auto"></div>
               <div className="w-3 h-3 mx-auto rounded-full back border-2 border-rounded-full border-white"></div>

               <div className="text-center mt-10">
                  <p className="text text-3xl font-black leading-9 text-center">
                     Beyond
                  </p>
                  <div className="md:px-10 px-4 mt-8">
                     <p className="text-xl font-bold leading-loose text-white">
                        Insert Title
                     </p>
                     <p className="text-sm leading-snug text-[#A3A5C1]">
                        Commodo sollicitudin pellentesque justo amet, et in sed.
                        Tincidunt ullamcorper quis enim dignissim nibh lacinia
                        leo ridiculus. Felis, tristique consequat sed etiam arcu
                        sed arcu vitae. Mollis senectus platea consequat massa
                        urna pharetra iaculis purus, consectetur.
                     </p>
                  </div>
               </div>
            </section>
         </div>
         <GetStarted src="/img/getstartedminers_bg.webp" />
         <Footer />
      </div>
   );
}
