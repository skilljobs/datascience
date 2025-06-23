import { Anek_Bangla } from "next/font/google";
import Image from "next/image";

const anekBangla = Anek_Bangla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ComputerRequirements() {
  const requirements = [
    {
      icon: "/needs/laptop.png",
      title: "একটি ল্যাপটপ বা পিসি",
    },
    {
      icon: "/needs/internet.png",
      title: "ভালো ইন্টারনেট কানেকশন",
    },
    {
      icon: "/needs/programming.png",
      title: "প্রোগ্রামিং ফান্ডামেন্টালস জানা থাকলে ভালো",
    },
    // {
    //   icon: "/technology.png",
    //   title: "মিনিমাম Core i3 প্রসেসর",
    // },
    // {
    //   icon: "/ssd.png",
    //   title: "২৫৬ জিবি এসএসডি",
    // },
    {
      icon: "/needs/career.png",
      title: "ক্যারিয়ার ফোকাসড",
    },

    {
      icon: "/needs/graduation.png",
      title: "স্নাতক অধ্যয়নরত বা স্নাতক পাশ",
    },
    {
      icon: "/needs/determined.png",
      title: "লেগে থাকার মানসিকতা",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h1 className={`text-4xl font-bold text-center mb-12 ${anekBangla.className}`}>
        কী কী{" "}
        <span className=" relative">
          থাকতে
          <span className="absolute -bottom-1 left-0 w-full h-1 "></span>
        </span>
        <span> হবে</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
        {requirements.map((requirement, index) => (
          <div
            style={{
              borderRadius: "8px",
            }}
            key={index}
            className="p-6 bg-gray-100  rounded-lg flex flex-col items-center justify-center "
          >
            <div className="p-2 rounded-lg inline-block">
              <Image className="" src={requirement.icon} alt="" width={64} height={64} />
            </div>
            <h2 className={`text-lg font-medium text-gray-800 ${anekBangla.className}`}>{requirement.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
