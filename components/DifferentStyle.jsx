import React from "react";
import Anime from "@/assets/different_styles/anime.jpg";
import Black from "@/assets/different_styles/black.jpg";
import Comic from "@/assets/different_styles/comic.jpg";
import Minimalism from "@/assets/different_styles/minimalism.jpg";
import Simple from "@/assets/different_styles/simple.jpg";
import Watercolor from "@/assets/different_styles/watercolor.jpg";
import Image from "next/image";

function DifferentStyle() {
  const styles = [
    {
      image: Anime,
      name: "Anime",
    },
    {
      image: Black,
      name: "Black & White",
    },
    {
      image: Comic,
      name: "Minimalism",
    },
    {
      image: Minimalism,
      name: "Comic",
    },
    {
      image: Simple,
      name: "Simple Icons",
    },
    {
      image: Watercolor,
      name: "Watercolor",
    },
  ];

  return (
    <section>
      <div className="px-7 py-16 md:py-24 md:px-20">
        <div>
          <h2 className="text-4xl font-bold mb-7">Use different styles</h2>
        </div>
        <div className="grid grid-cols-2 justify-center items-center gap-5 md:grid-cols-3">
          {styles.map((style, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <span className="font-semibold">{style.name}</span>
              <Image
                src={style.image}
                alt={style.name}
                className="rounded-md h-32 w-32 sm:h-52 sm:w-52 md:h-60 md:w-60 lg:h-80 lg:w-80"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DifferentStyle;
