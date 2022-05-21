import React from "react";

const Login = () => {
   return (
      <section className="md:flex">
         <div className="flex items-center justify-center w-[100%] md:w-[50%] md:min-h-screen relative md:bg-[url('/img/login/login-frame.svg')]">
            <div className="text-white w-full mx-auto hidden md:block">
               <img
                  className="relative -top-5 left-6 xl:left-16"
                  src="/img/login/elipse.svg"
                  alt="Elipse"
               />

               <div className="mx-auto w-fit relative -top-14 lg:px-0 px-5">
                  <h1 className="text-4xl md:text-6xl lg:text-8xl max-w-[452px] font-bold md:leading-[62px] lg:leading-[96px]">
                     Mine the Future of Money.
                  </h1>
                  <p className="max-w-[366px] mt-4 leading-6 mb-16">
                     Magna eu cras amet leo. Id ultrices tortor convallis
                     vivamus at pellentesque. Maecenas sagittis proin venenatis.
                  </p>
                  <button className="text-[#cd05ff] hover:opacity-90 mt-10 font-bold bg-white px-10 py-3 rounded-full">
                     Learn More
                  </button>
               </div>
            </div>
         </div>
         <div className="w-[100%] md:w-[50%] flex items-center justify-center bg-black md:my-0 my-8">
            <div className="lg:px-0 px-5">
               <p className="text-4xl font-bold leading-9 text-white pb-6 text-center">
                  Create an Account
               </p>
               <p className="text-sm mt-2 leading-snug text-[#A3A5C1] pb-4">
                  Lectus neque interdum mattis etiam morbi mauris ac.
               </p>
               <button className="flex items-center rounded-full w-full justify-center hover:opacity-80 mt-6 button-gradient text-white text-sm font-bold gap-2 max-w-[357px] h-[53px]">
                  <svg
                     width={24}
                     height={24}
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M12.545 10.239V14.06H17.99C17.278 16.375 15.343 18.032 12.545 18.032C9.21297 18.032 6.51197 15.331 6.51197 12C6.51197 8.669 9.21297 5.968 12.545 5.968C14.043 5.968 15.411 6.517 16.466 7.421L19.28 4.607C17.503 2.988 15.139 2 12.545 2C7.02097 2 2.54297 6.477 2.54297 12C2.54297 17.523 7.02097 22 12.545 22C20.941 22 22.794 14.15 21.971 10.252L12.545 10.239Z"
                        fill="white"
                     />
                  </svg>
                  Continue with Google
               </button>
               <div className="flex justify-center mt-12 items-center">
                  <svg
                     className="absolute"
                     width={357}
                     height={1}
                     viewBox="0 0 357 1"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <line y1="0.5" x2={357} y2="0.5" stroke="#2E2F36" />
                  </svg>
                  <p className="text-xs px-4 absolute bg-black leading-tight text-[#A3A5C1]">
                     or register with your email
                  </p>
               </div>
               <div className="mt-12">
                  <div>
                     <input className="border-b border-[#2E2F36] max-w-[357px] py-3 bg-transparent outline-none text-base text-white w-full" />
                     <label className="text-xs leading-tight mt-1 text-[#A3A5C1]">
                        First Name
                     </label>
                  </div>
                  <div className="mt-8">
                     <input className="border-b border-[#2E2F36] max-w-[357px] py-3 bg-transparent outline-none text-base text-white w-full" />
                     <label className="text-xs leading-tight mt-1 text-[#A3A5C1]">
                        Last Name
                     </label>
                  </div>
                  <div className="mt-8">
                     <input
                        type="email"
                        className="border-b border-[#2E2F36] max-w-[357px] py-3 bg-transparent outline-none text-base text-white w-full"
                     />
                     <label className="text-xs leading-tight mt-1 text-[#A3A5C1]">
                        E-mail Address
                     </label>
                  </div>
                  <div className="mt-8">
                     <input
                        type="password"
                        className="border-b border-[#2E2F36] max-w-[357px] py-3 bg-transparent outline-none text-base text-white w-full"
                     />
                     <label className="text-xs leading-tight mt-1 text-[#A3A5C1]">
                        Password
                     </label>
                  </div>
                  <div className=" flex justify-center ">
                     <button className="w-full h-full bg-black rounded-full mt-12 hover:opacity-80 h-[46px] p-[1px] button-gradient rounded-full">
                        <p className="text-sm font-bold rounded-full text-center text-white">
                           Create Account
                        </p>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Login;
