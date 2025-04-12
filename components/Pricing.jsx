import React from "react";
import firstImg from "@/assets/first.jpg";
import Image from "next/image";

function Pricing() {
  const pricing = [
    {
      title: "basic",
      generation: "15 GENERATIONS",
      icons: "45 ICONS",
      pricing: "10",
      img: <firstImg />,
    },
    {
      title: "standard",
      generation: "50 GENERATIONS",
      icons: "89 ICONS",
      pricing: "20",
      img: <firstImg />,
    },
    {
      title: "premium",
      generation: "150 GENERATIONS",
      icons: "60 ICONS",
      pricing: "40",
      img: <firstImg />,
    },
  ];

  return (
    <div className="px-7 py-16 md:py-24 md:px-20">
      <div>
        <h2 className="text-4xl font-bold">Pricing</h2>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 mt-7">
        {pricing.map((price, index) => (
          <div
            className={`flex flex-col ${
              price.title === "basic"
                ? "bg-pink-300"
                : price.title === "standard"
                ? "bg-green-300"
                : price.title === "premium"
                ? "bg-yellow-300"
                : "bg-gray-200"
            } rounded-md p-4 w-full`}
            key={index}
          >
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-xl">{price.title}</span>
                <span className="font-semibold text-xl">${price.pricing}</span>
              </div>
              <div className="flex flex-col justify-center items-start">
                <span>{price.generation}</span>
                <span>{price.icons}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
