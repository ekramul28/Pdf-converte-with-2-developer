"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Benefits = () => {
  const playerWidth =
    typeof window !== "undefined" && window.innerWidth >= 768 ? 500 : 300;

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-2xl mx-auto my-12">
      <div className="col-span-1 ml-2 ">
        <ReactPlayer
          width={playerWidth}
          url="https://www.youtube.com/watch?v=En1TDojx8KY"
        />
      </div>
      <div className="text-center col-span-1">
        <p className="md:text-5xl text-3xl text-black dark:text-white font-bold">Benefits</p>
        <ol className="md:text-xl text-xs text-customOrange my-4 ">
          <li className="p-2">1. Effortless PDF Management for Time Savings</li>
          <li className="p-2">2. Securely Handle Sensitive Documents</li>
          <li className="p-2">3. Versatile Support for Various File Formats</li>
          <li className="p-2">4. User-Friendly Interface for a Smooth Experience</li>
          <li className="p-2">5. Responsive Customer Support for Your Needs</li>
          <li className="p-2">6. Stay Updated with Innovative Features Regularly</li>
        </ol>
      </div>
    </div>

  );
};

export default Benefits;
