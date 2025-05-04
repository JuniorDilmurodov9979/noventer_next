import Image from "next/image";
import React from "react";
import service1 from "@/assets/icons/service1.svg";
import service2 from "@/assets/icons/service2.svg";
import service3 from "@/assets/icons/service3.svg";
import service4 from "@/assets/icons/service4.svg";
import service5 from "@/assets/icons/service5.svg";
import service6 from "@/assets/icons/service6.svg";
import service7 from "@/assets/icons/service7.svg";
import service8 from "@/assets/icons/service8.svg";
import service9 from "@/assets/icons/service9.svg";

const services = [
  {
    title: "Landing sahifalar",
    description:
      "Qisqa, ta'sirli va maqsadli sahifalar, mijozlarni alohida harakatga undash uchun mo'ljallangan.",
    image: service1,
  },
  {
    title: "Korporativ veb-sayt",
    description:
      "Kompaniyaning umumiy ma'lumotini taqdim etish, xizmatlar yoki mahsulotlar haqida ma'lumot berish.",
    image: service2,
  },
  {
    title: "Online do’kon",
    description:
      "Mahsulotlar yoki xizmatlarni onlayn tarzda sotish. To‘lov tizimlari va mahsulotni boshqarish tizimi mavjud.",
    image: service3,
  },
  {
    title: "CRM tizimi",
    description:
      "Mijozlar bilan ishlashni avtomatlashtirish va boshqarish. Katta kompaniyalar yoki mijozlar bilan faol ishlaydigan tashkilotlar.",
    image: service4,
  },
  {
    title: "Portfolio saytlari",
    description:
      "Shaxsiy yoki kompaniya ishlarini ko‘rsatish. Freelancerlar yoki ijodkorlar uchun o‘z ishlarini targ‘ib qilishda.",
    image: service5,
  },
  {
    title: "Blog sahifalari",
    description:
      "O‘z fikrlari, yangiliklari yoki ma'lumotlarini o‘rtoqlashish. Ma'lumot yetkazish, auditoriyani jalb qilish va reklama qilish uchun.",
    image: service6,
  },
  {
    title: "Ta’lim platformasi",
    description:
      "Ta'lim kurslari, videodarsliklar, yoki online testlar uchun. O‘quv muassasalari yoki onlayn dars beruvchi kompaniyalar uchun.",
    image: service7,
  },
  {
    title: "ERP platformasi",
    description:
      "ERP platformasi korxona yoki tashkilotning barcha jarayonlarini birlashtiruvchi kompleks dasturiy ta'minotdir.",
    image: service8,
  },
  {
    title: "Alohida loyihami?",
    description:
      "Biz yangi startap loyihalarni ham rivojlantirishda yordam beramiz. Agarda sizda yangi startap g’oya mavjud bo’lsa, biz siz bilan uni rivojlantirish ustida ishlashga tayyormiz.",
    image: service9,
    special: true, // This will apply a different background color
  },
];

const Service = () => {
  return (
    <section
      id="services_id"
      className="bg-[#0E041D] overflow-hidden relative z-10 pt-10 pb-50"
    >
      <div className="container mx-auto relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl">
            Xizmat turlari
          </h2>
          <p className="text-white text-lg mt-2">
            Dasturlash sohasidagi eng talabgir xizmat turlaridan quyidagilar:
          </p>
        </div>

        {/* Services Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <li
              key={index}
              className={`flex flex-col items-center text-center gap-6 p-6 rounded-2xl ${
                service.special ? "bg-[#5A00DB]" : "bg-[#FFFFFF1A]"
              }`}
            >
              <div className="p-6 bg-[#FFFFFF1A] rounded-3xl">
                <Image
                  width={64}
                  height={64}
                  className="w-16 h-16"
                  src={service.image}
                  alt={service.title}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white font-semibold text-xl sm:text-2xl leading-tight">
                  {service.title}
                </h3>
                <p className="text-white text-base sm:text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="absolute w-[70vw] h-[70vh] md:w-60 md:h-60 rounded-full opacity-90 z-1 md:top-[35%] md:right-[0%] right-[-50%] top-[8%] "
        style={{
          background:
            "radial-gradient(circle, rgba(77,9,184,0.8) 40%, rgba(0,0,0,0) 80%)",
          filter: "blur(50px)",
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
        className="absolute w-[70vw] h-[70vh] md:w-50 md:h-50 rounded-full opacity-90 z-0 md:hidden bottom-[25%] "
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

export default Service;
