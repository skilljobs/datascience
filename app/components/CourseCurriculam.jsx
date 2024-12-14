"use client";
import { Anek_Bangla } from "next/font/google";
import Image from "next/image";

const anekBangla = Anek_Bangla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const bgColors = ["bg-[#FFA500]", "bg-[#FF7F50]", "bg-[#9370DB]", "bg-[#00BFFF]"];

export default function CourseCurriculum() {
  const [openSections, setOpenSections] = useState({});

  const curriculum = [
    {
      title: "সপ্তাহ ১-২: ডেটা সায়েন্সের প্রাথমিক ধারণা এবং পাইথন প্রোগ্রামিং",
      instructor: "Shahriar Jahan Rafi",
      weeks: "১-২",
      modules: {
        title: "সপ্তাহ ১-২: ডেটা সায়েন্সের প্রাথমিক ধারণা এবং পাইথন প্রোগ্রামিং",
        modules: [
          {
            number: "১",
            title: "দিন ১-২: ডেটা সায়েন্সের পরিচিতি",
          },
          {
            number: "২",
            title: "দিন ৩-৪: ডেটা সায়েন্সের জন্য গণিত",
          },
          {
            number: "৩",
            title: "দিন ৫-৬: পরিসংখ্যান - ১",
          },
          {
            number: "৪",
            title: "দিন ৭-৮: পরিসংখ্যান - ২",
          },
          {
            number: "৫",
            title: "দিন ৯: কম্পিউটিংয়ের প্রাথমিক ধারণা",
          },
          {
            number: "৬",
            title: "দিন ১০-১১: পাইথন প্রোগ্রামিংয়ের পরিচিতি",
          },
          {
            number: "৭",
            title: "দিন ১২: ভ্যারিয়েবল, ডেটা টাইপ এবং স্ট্রিং",
          },
          {
            number: "৮",
            title: "দিন ১৩-১৪: লিস্ট, টুপল এবং ডিকশনারি",
          },
        ],
      },
    },
    {
      title: "সপ্তাহ ৩-৪: প্রোগ্রামিং কনসেপ্ট এবং SQL",
      instructor: "Shahriar Jahan Rafi",
      weeks: "৩-৪",
      modules: {
        title: "মডিউল ২: প্রোগ্রামিংয়ের মৌলিক ধারণা এবং ডাটাবেস",
        modules: [
          {
            number: "১",
            title: "দিন ১৫: কন্ডিশনাল স্টেটমেন্ট",
          },
          {
            number: "২",
            title: "দিন ১৬: লুপিং",
          },
          {
            number: "৩",
            title: "দিন ১৭-১৮: ফাংশন এবং স্কোপ",
          },
          {
            number: "৪",
            title: "দিন ১৯: মডিউল এবং এক্সসেপশন হ্যান্ডলিং",
          },
          {
            number: "৫",
            title: "দিন ২০: পাইথনে ফাইলের সাথে কাজ",
          },
          {
            number: "৬",
            title: "দিন ২১-২২: পাইথনে API ব্যবহার",
          },
          {
            number: "৭",
            title: "দিন ২৩-২৪: পাইথনে OOP - ১",
          },
          {
            number: "৮",
            title: "দিন ২৫-২৬: পাইথনে OOP - ২",
          },
          {
            number: "৯",
            title: "দিন ২৭-২৮: SQL - ১ (মৌলিক)",
          },
          {
            number: "১০",
            title: "দিন ২৯-৩০: SQL - ২ (এডভান্সড)",
          },
        ],
      },
    },
    {
      title: "সপ্তাহ ৫-৬: ডেটা ম্যানিপুলেশন এবং ভিজুয়ালাইজেশন",
      instructor: "Shahriar Jahan Rafi",
      weeks: "৫-৬",
      modules: {
        title: "মডিউল ৩: ডেটা ম্যানিপুলেশন এবং ভিজুয়ালাইজেশন",
        modules: [
          {
            number: "১",
            title: "দিন ৩১-৩২: Numpy - ১",
          },
          {
            number: "২",
            title: "দিন ৩৩-৩৪: Numpy - ২",
          },
          {
            number: "৩",
            title: "দিন ৩৫-৩৬: Pandas - ১",
          },
          {
            number: "৪",
            title: "দিন ৩৭-৩৮: Pandas - ২",
          },
          {
            number: "৫",
            title: "দিন ৩৯-৪০: Pandas - ৩",
          },
          {
            number: "৬",
            title: "দিন ৪১-৪২: Matplotlib এবং Seaborn - ১ (বেসিক ভিজুয়ালাইজেশন)",
          },
          {
            number: "৭",
            title: "দিন ৪৩-৪৪: Matplotlib এবং Seaborn - ২ (এডভান্সড ভিজুয়ালাইজেশন)",
          },
        ],
      },
    },
    {
      title: "সপ্তাহ ৭-৮: মেশিন লার্নিং এবং অ্যাডভান্সড টপিকস",
      instructor: "Shahriar Jahan Rafi",
      weeks: "৭-৮",
      modules: {
        title: "মডিউল ৪: মেশিন লার্নিং এবং আনসুপারভাইজড লার্নিং",
        modules: [
          {
            number: "১",
            title: "দিন ৪৫-৪৬: মেশিন লার্নিংয়ের পরিচিতি",
          },
          {
            number: "২",
            title: "দিন ৪৭-৫০: লিনিয়ার রিগ্রেশন তত্ত্ব (৪টি লেকচার)",
          },
          {
            number: "৩",
            title: "দিন ৫১-৫২: লিনিয়ার রিগ্রেশন Scikit-learn ব্যবহার করে (২টি লেকচার)",
          },
          {
            number: "৪",
            title: "দিন ৫৩-৫৪: লজিস্টিক রিগ্রেশন Scikit-learn ব্যবহার করে (২টি লেকচার)",
          },
          {
            number: "৫",
            title: "দিন ৫৫-৫৬: ডিসিশন ট্রি (২টি লেকচার)",
          },
          {
            number: "৬",
            title: "দিন ৫৭-৫৮: রেন্ডম ফরেস্ট (২টি লেকচার)",
          },
          {
            number: "৭",
            title: "দিন ৫৯-৬০: গ্রেডিয়েন্ট বুস্টিং (২টি লেকচার)",
          },
          {
            number: "৮",
            title: "দিন ৬১-৬২: আনসুপারভাইজড লার্নিং: ক্লাস্টারিং, মিন, রিকমেন্ডার সিস্টেম (২টি লেকচার)",
          },
        ],
      },
    },
  ];

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <main className={`relative ${anekBangla.className}`}>
      {/* Title */}
      <h1 className={`text-3xl font-semibold text-center mb-12 text-gray-800 ${anekBangla.className}`}>কারিকুলাম</h1>

      {/* Curriculum Container */}
      <div className="w-full max-w-7xl mx-auto py-8 px-6 bg-[#F9F9FA] rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-14">
          {curriculum.map((section, sectionIndex) => (
            <div key={sectionIndex} className={`bg-white rounded-xl shadow-md overflow-hidden ${sectionIndex !== 0 && anekBangla.className}`}>
              {/* Section Header */}
              {/* <div className="p-6 bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6] text-white"> */}
              <div className="p-6 bg-gray-600 text-white">
                <h2 className="text-2xl font-semibold text-center">{section.title}</h2>
                <div className="flex items-center justify-center gap-3 text-sm mt-2">
                  <span>ক্লাস শিক্ষক</span>
                  <Image width={24} height={24} src="/profile.png" alt="Instructor" className="w-8 h-8 rounded-full border border-white" />
                  <span>{section.instructor}</span>
                </div>
              </div>

              {/* Accordion Toggle Button */}
              <div className="p-4">
                <button onClick={() => toggleSection(`section-${sectionIndex}`)} className="w-full flex items-center justify-between p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                  <div className="flex items-center flex-wrap md:flex-row">
                    <p className={`font-semibold ${bgColors[sectionIndex]} text-white px-3 py-1 rounded mr-2 text-xl`}>সপ্তাহ {section.weeks}</p>
                    <p className="text-lg">{section.modules.title}</p>
                  </div>
                  <ChevronDown className={`transition-transform duration-300 h-6 w-6 text-gray-400 bg-gray-200 rounded-full ${openSections[`section-${sectionIndex}`] ? "rotate-180" : ""}`} />
                </button>

                {/* Module List */}
                <div className={`mt-2 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${openSections[`section-${sectionIndex}`] ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                  {section.modules.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="border-t border-gray-200">
                      <div className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-all duration-200">
                        <div className={`${bgColors[sectionIndex]} text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold`}>{module.number}</div>
                        <span className="flex-1">{module.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
