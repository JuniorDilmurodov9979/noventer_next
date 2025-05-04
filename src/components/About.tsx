import React from "react";
import aboutImg1 from "@/assets/images/about1.png";
import aboutImg2 from "@/assets/images/about2.png";
import aboutImg3 from "@/assets/images/about3.png";
import Image from "next/image";

const About = () => {
  return (
    <section className="about relative  bg-[#0E041D] overflow-hidden">
      <div className="bg-[#5A00DB] relative z-10  py-10 pb-8 flex flex-col items-center text-center gap-2">
        <div className="container mx-auto px-4  text-start">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-white">
            Biz haqimizda
          </h2>
          <p className="text-base sm:text-lg text-white">Qisqacha ma’lumot</p>
        </div>
      </div>
      <div className="container_custom relative z-10 px-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6 md:gap-10 pt-10 pb-8">
          {[aboutImg1, aboutImg2, aboutImg3].map((img, index) => (
            <li
              key={index}
              className="flex flex-col gap-2 bg-[#FFFFFF1A] rounded-2xl"
            >
              <Image className="w-full rounded-t-2xl" src={img} alt="" />
              <div className="pt-5 pl-6 sm:pl-7 pb-10">
                <h3 className="font-semibold text-xl sm:text-2xl text-white">
                  {index === 0
                    ? "Boshlanishi"
                    : index === 1
                    ? "Uzoq muddatli loyihalar"
                    : "Jamoamiz kengaymoqda"}
                </h3>
                <p className="text-white text-base sm:text-lg">
                  {index === 0
                    ? "Biz --- dan ish boshladik va ---- larni oldimizga maqsad qilib qo’ydik"
                    : index === 1
                    ? "Tajribamiz davomida umumiy hisobda - - loyiha uchun -- - muddatda ishlab topshirdik"
                    : "Jamoamiz safi esa tobora kengaymoqda. Boshida - kishidan boshlangan faoliyatimiz hozirda -- kishi bilan davom etmoqda"}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-white text-base sm:text-lg pb-16 text-center md:text-left">
          Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry`s standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>
      <div
        className="absolute w-[70vw] h-[70vh] md:w-60 md:h-60 rounded-full opacity-90 z-1  top-[30%] right-[-60%] md:left-[34%] md:top-[60%] "
        style={{
          background:
            "radial-gradient(circle, rgba(77,9,184,0.8) 40%, rgba(0,0,0,0) 80%)",
          filter: "blur(50px)",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <div
        className="absolute w-[70vw] h-[70vh] md:w-70 md:h-70 rounded-full opacity-90 z-1 md:bottom-[-10%] md:right-[-20%] bottom-[30%] right-[20%] "
        style={{
          background:
            "radial-gradient(circle, rgba(77,9,184,0.8) 40%, rgba(0,0,0,0) 80%)",
          filter: "blur(60px)",
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      <div
        className="absolute w-[70vw] h-[70vh] rounded-full sm:hidden opacity-90 z-1  "
        style={{
          background:
            "radial-gradient(circle, rgba(77,9,184,0.8) 40%, rgba(0,0,0,0) 80%)",
          filter: "blur(60px)",
          bottom: "10%",
          right: "-60%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </section>
  );
};

export default About;
