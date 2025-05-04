import React from "react";
import Image from "next/image";
import heroPc from "@/assets/images/heroPc.png";
import mobileHeroPc from "@/assets/images/mobile_heroPc.png";
import hero1 from "@/assets/icons/hero1.png";
import hero2 from "@/assets/icons/hero2.png";
import hero3 from "@/assets/icons/hero3.png";
import hero4 from "@/assets/icons/hero4.png";

const icons = [
  { src: hero1, title: "7+ yillik", subtitle: "Umumiy tajriba" },
  { src: hero2, title: "5+", subtitle: "Yirik loyihalar" },
  { src: hero3, title: "8+", subtitle: "Xizmat turlari" },
  { src: hero4, title: "100%", subtitle: "Xavfsizlik" },
];

const Hero = () => {
  return (
    <section className="hero relative bg-[#0E041D] overflow-hidden">
      <div className="hero__blur-wrapper absolute w-full flex  h-[100%]">
        {/* That blurry thing - placed before content */}
        <div
          className="hero__blur absolute w-[30vw] h-[30vw]  md:w-[25vw] md:h-[30vw] 
        bg-gradient-to-b from-[#2A0A58]/60 to-transparent backdrop-blur-lg rounded-2xl bottom-[0%] left-[17%] md:top-[60%] md:left-[28%] z-0"
        >
          <div
            className="absolute w-[25vw] h-[25vw] sm:w-[20vw] sm:h-[20vw] md:w-[20vw] md:h-[20vw] rounded-full opacity-90"
            style={{
              background:
                "radial-gradient(circle, rgba(77,9,184,0.8) 40%, rgba(0,0,0,0) 80%)",
              filter: "blur(50px)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </div>

        {/* Blurry Background Effect - Top Right */}
        <div
          className="hero__blur absolute w-[40vw] h-[30vw]  md:w-[30vw] md:h-[30vw] 
        bg-gradient-to-b from-[#2A0A58]/60 to-transparent backdrop-blur-lg rounded-2xl top-[50%] right-[14%] md:top-[10%] md:right-[17%] z-0"
        >
          <div
            className="absolute w-[25vw] h-[25vw] sm:w-[15vw] sm:h-[15vw] md:w-[20vw] md:h-[20vw] rounded-full opacity-100 md:bottom-[-10%] left-[30%] "
            style={{
              background:
                "radial-gradient(circle, rgba(77,9,184,0.8) 40%, rgba(0,0,0,0) 80%)",
              filter: "blur(50px)",
              bottom: "-50%",
              left: "30%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </div>
      </div>

      {/* Background Image */}
      <div
        className="hero__bg md:hidden absolute inset-0 "
        style={{
          backgroundImage: `url(${mobileHeroPc.src})`,
        }}
      ></div>

      {/* Desktop Background (visible on md+ screens) */}
      <div
        className="hero__bg hidden md:block absolute inset-0"
        style={{
          backgroundImage: `url(${heroPc.src})`,
        }}
      ></div>

      <div className="container_custom mx-auto relative z-10">
        {/* Title Section */}
        <div className="hero_title-wrapper flex flex-col md:text-left md:items-start gap-6 pt-20 md:pt-32 pb-16 md:pb-24">
          <div className="max-w-lg w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              <span>Yuqori sifatdagi</span>
              <br />
              <span className="font-light">aniqlikka asoslanib</span>
              <br />
              <span className="text-[#5A00DB]">istalgan turdagi</span>
              <br />
              <span>dasturlarni tayyorlaymiz</span>
            </h1>
          </div>
          <a
            href="#services_id"
            className="bg-[#5A00DB] max-w-[168px] md:max-w-[200px] w-full font-semibold text-white py-3 px-6 rounded-lg cursor-pointer text-center text-sm md:text-lg"
          >
            Xizmatlar haqida
          </a>
        </div>

        {/* Icons List (placed above the blur) */}
        <div className="relative z-10">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pb-12">
            {icons.map((icon, index) => (
              <li
                key={index}
                className="flex gap-4 items-center p-3 md:p-6 bg-white/10 backdrop-blur-md text-white rounded-2xl shadow-md"
              >
                <Image
                  width={24}
                  height={24}
                  className="w-6 h-6 md:w-12 md:h-12"
                  src={icon.src}
                  alt="Icon"
                />
                <div>
                  <p className="text-[14px] md:text-2xl font-semibold">
                    {icon.title}
                  </p>
                  <p className="text-[10px] md:text-lg text-gray-300">
                    {icon.subtitle}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
