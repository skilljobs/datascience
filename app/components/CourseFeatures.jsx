import { Anek_Bangla } from "next/font/google";
import Image from "next/image";
import { hindSiliguri } from "../layout";
const anekBangla = Anek_Bangla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const features = [
  {
    icon: "/ben/৪ মাসের স্টাডিপ্ল্যান.png",
    title: "১০৫ দিনের স্টাডি প্ল্যান ",
    description: "একদম বিগিনার লেভেল থেরেই আপডেটেড কারিকুলাম",
  },
  {
    icon: "/ben/35 টি লাইভ ক্লাস.png",
    title: "৩৫ টি লাইভ ক্লাস",
    description: "ইন্ডাস্ট্রি এক্সপার্টদের কাছে শিখুন লাইভে",
  },
  {
    icon: "/ben/1.png",
    title: "৪ টি রিয়েল লাইফ প্রজেক্ট",
    description: "ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রজেক্ট এড করুন পিডিএফ, এক্সেল সবার চেয়ে এগিয়ে",
  },
  {
    icon: "/ben/প্রোগ্রেস ট্র্যাকিং.png",
    title: "প্রোগ্রেস ট্র্যাকিং",
    description: "নিজের বোর্ড দেখুন নিজের গতিশীল উন্নয় প্রগ্রেস",
  },
  {
    icon: "/ben/সাপোর্ট ক্লাস.png",
    title: "২৪/৭  সাপোর্ট",
    description: "প্র্যাক্টিস করতে গিয়ে পাবেন লাইভ সাপোর্ট",
  },
  {
    icon: "/ben/কমিউনিটি সাপোর্ট.png",
    title: "কমিউনিটি সাপোর্ট",
    description: "থাকুন প্রোগ্রামিং কমিউনিটির সাথে অলটাইমস",
  },
  // new
  {
    icon: "/ben/live-support.png",
    title: "ডেডিকেটেড ২৪/৭ সাপোর্ট",
    description: "ডেডিকেটেড ২৪/৭ সাপোর্ট অলটাইমস",
  },
  {
    icon: "/ben/লাইফটাইম এক্সেস.png",
    title: "লাইফটাইম এক্সেস",
    description: "প্রিরেকর্ডেড ভিডিও, রিসোর্স এবং ক্লাস রেকর্ডস এ থাকবে লাইফ টাইম এক্সেস",
  },
  {
    icon: "/ben/coding.png",
    title: "ফ্রী ৩টি ফাউন্ডেশন ক্লাস ",
    description: "কোডিং নলেজ যাদের নেই , ফ্রী ৩টি ফাউন্ডেশন ক্লাস",
  },
  // 2nd
  {
    icon: "/ben/opportunity.png",
    title: "ইন্টার্নশীপ অপরচুনিটি",
    description: "কোর্সে ভালো করলে পাবেন ইন্টার্নশীপের সুযোগ।",
  },
  {
    icon: "/ben/জব মার্কেট গাইডলাইন.png",
    title: "জব মার্কেট গাইডলাইন",
    description: "ইন্ডাস্ট্রি এক্সপার্টদের কাছে পান জব মার্কেট ব্রেক করার পূর্ণাঙ্গ নির্দেশনা",
  },
  {
    icon: "/ben/মার্কেটপ্লেস গাইডলাইন.png",
    title: "মার্কেটপ্লেস গাইডলাইন",
    description: "কীভাবে মার্কেটপ্লেস কাজ করবেন, পাবেন সে সম্পর্কিত গাইডলাইন",
  },
  {
    icon: "/ben/সার্টিফিকেট.png",
    title: "সার্টিফিকেট",
    description: "কোর্স শেষ করে পাবেন সেয়ারেবল কোর্স কমপ্লিশন এবং এসেসমেন্ট সার্টিফিকেট",
  },
];

export default function CourseFeatures() {
  return (
    <section className={`${hindSiliguri.className}`}>
      <div className="w-full max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          কোর্সে আপনি পাচ্ছেন
          {/* <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-yellow-400 mt-2"></div> */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-yellow-400 mt-2 rounded-md"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
          {features.map((feature, index) => (
            <div key={index} className={`border-r border-b flex flex-col items-center text-center p-6 bg-white rounded-lg  border-l border-gray-200 hover:shadow-md transition-shadow duration-300 relative  after:bg-gray-200  ${index === features.length - 1 ? "md:border-r-0 lg:col-start-2" : "md:border-r"} `}>
              <div className="w-16 h-16 mb-4 relative">
                <Image src={feature.icon} alt="" layout="fill" objectFit="contain" />
              </div>
              <h3 className={`${index === 0 && anekBangla.className} text-xl font-semibold mb-2`}>{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
