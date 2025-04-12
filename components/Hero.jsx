import React from "react";

function Hero() {
  return (
    <div className="px-7 py-16 flex flex-col  gap-6 md:py-24 md:px-20">
      <div className="flex flex-col gap-3 md:mb-9">
        <h1 className="text-4xl md:text-6xl font-bold">Design Icons Like</h1>
        <h1 className="text-4xl md:text-6xl font-bold pl-20 sm:pl-40 md:pl-20">Never Before</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 md:flex-row md:items-center md:justify-between">
        <p className="text-center max-w-[400px] md:order-2">
          Transform your ideas into sleek, professional icons with just a few
          words.
        </p>
        <button className="bg-linear-65 from-purple-500 to-pink-500 rounded-md py-3 text-xl text-white px-28 cursor-pointer md:order-1">
          Generate
        </button>
      </div>
    </div>
  );
}

export default Hero;
