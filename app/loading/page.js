import React from "react";
import AboutSuspense from "../components/suspense/AboutSuspense";

export default function LoadingPage() {
  return (
    <>
      {/* <div className="min-h-[60vh] bg-gray-200 text-white px-4 flex gap-4 flex-col justify-center items-center">
        <div className="w-full bg-gray-300 h-7 animate-pulse sm:w-[80%] md:h-8 lg:w-[60%] lg:h-9"></div>
        <div className="flex flex-col justify-center items-center h-full w-full gap-2">
          <div className="w-full h-4 bg-gray-300 animate-pulse sm:w-[80%] md:h-5 lg:w-[60%] lg:h-6 "></div>
          <div className="w-1/2 h-4 bg-gray-300 animate-pulse sm:w-[40%] md:h-5 lg:w-[30%] lg:h-6 "></div>
        </div>
      </div>

      <div className="h-[40vh] bg-gray-300 my-4 animate-pulse rounded-md"></div> */}

      <AboutSuspense />
    </>
  );
}
