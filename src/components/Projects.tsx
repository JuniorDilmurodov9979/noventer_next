import React from "react";
import ProjectImg1 from "@/assets/images/project1.png";
import ProjectImg2 from "@/assets/images/project2.png";
import ProjectImg3 from "@/assets/images/project3.png";
import Image from "next/image";

const projectsData = [
  {
    title: "Tourmad loyihasi",
    description:
      "Tourmad – O‘zbekistonning ichki turizimini rivojlantirish maqsadida ishlab chiqilgan bu web sayt o‘zida bir necha service larni o‘z ichiga jamlagan bo‘lib ulardan: Mehmonxona xizmari, Restoran xizmati, Gitlik xizmati, Mashinada sayohat qilish uchun haydovchilar xizmari va boshqa ko‘plab xizmarlarni o‘z ichiga oladi. Bundan tashqari saytdan o‘zingiz uchun qayerlarga boorish kerakligini va qayerlarda xizmat ko‘satish qancha ekanligini ko‘rishingiz va o‘zingiz uchun oldindan buyurtma qilishingiz mumkin.",
    image: ProjectImg1,
  },
  {
    title: "ProRun loyihasi",
    description: `Prorun.uz – bu saytda tez-tez bo‘lib o‘tadigan yugurish bo‘yicha musobaqalar bo‘lib o‘tadi va siz saytdan ro‘ yxatdan o‘tgan holda istalgan yoki har bir musobaqada qatnashishingiz mumkin. 
Nima uchun sayt qurilgan? Musobaqalarda chet ellik ishtirokchilar bo‘lgani bois ularga va boshqa qatnashchilarga ro‘yxatdan o‘tishni oson qilish uchun yangi web ilova ishlab chiqildi.
`,
    image: ProjectImg2,
  },
  {
    title: "Xalq trans loyihasi",
    description: `Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `,
    image: ProjectImg3,
  },
];

const Projects = () => {
  return (
    <section className="project relative overflow-hidden bg-[#0E041D] py-10">
      <div className="container_full mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center gap-2">
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl">
            Loyihalarimiz
          </h2>
          <p className="text-base sm:text-lg text-white">
            Biz haqimizda gapirsin!
          </p>
        </div>

        {/* Project List */}
        <ul className="mt-10 md:mt-20 flex flex-col gap-16">
          {projectsData.map((project, index) => (
            <li
              key={index}
              className={`flex flex-col-reverse md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-8 md:gap-[58px]`}
            >
              <Image
                className="w-[638px] min-h-[360px]  rounded-lg"
                src={project.image}
                alt={project.title}
              />
              <div
                className={`text-center flex flex-col md:gap-5  md:text-left ${
                  index % 2 !== 0 ? "items-end" : ""
                }`}
              >
                <h3 className="text-white font-semibold text-xl sm:text-2xl">
                  {project.title}
                </h3>
                <p
                  className={`text-white text-base sm:text-lg mt-4 mb-4 ${
                    index % 2 !== 0 ? "md:text-right" : ""
                  }`}
                >
                  {project.description}
                </p>
                <button className="bg-white/10 backdrop-blur-md text-white py-3 px-6 rounded-lg w-full max-w-[180px] mx-auto md:mx-0">
                  Loyihani ko’rish
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* View More Button */}
        <div className="flex justify-center pt-16 pb-[80px]">
          <button className="bg-[#5A00DB] font-semibold text-white py-3  rounded-lg w-full  max-w-[233px] text-center">
            Boshqa loyihalarni ko’rish
          </button>
        </div>
      </div>
      <div
        className="absolute w-[70vw] h-[70vh] md:w-40 md:h-40 rounded-full opacity-90 z-1 md:top-[10%] md:right-10 right-[-15%] top-[8%] "
        style={{
          background:
            "radial-gradient(circle, rgba(77,9,184,0.8) 40%, rgba(0,0,0,0) 80%)",
          filter: "blur(60px)",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <div
        className="absolute w-[70vw] h-[70vh] md:w-70 md:h-70 rounded-full opacity-90 z-0 md:top-[43%] left-[15%] "
        style={{
          background:
            "radial-gradient(circle, rgba(77,9,184,0.8) 40%, rgba(0,0,0,0) 80%)",
          filter: "blur(60px)",
          top: "43%",
          left: "15%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <div
        className="absolute w-[70vw] h-[70vh] md:w-70 md:h-70 rounded-full opacity-90 z-0 md:bottom-10 md:right-[-10%] right-[10%] bottom-[25%] "
        style={{
          background:
            "radial-gradient(circle, rgba(77,9,184,0.8) 40%, rgba(0,0,0,0) 80%)",
          filter: "blur(60px)",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </section>
  );
};

export default Projects;
