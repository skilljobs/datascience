import { Calendar, Clock, ClockAlert } from "lucide-react";
import { hindSiliguri } from "../layout";
export default function CourseLanding() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className=" hidden text-center mb-8 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-10 hover:bg-blue-100 transition-colors cursor-pointer">
          <span>
            <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m4.167 15.498 2.701-6.302a.5.5 0 0 0-.459-.698H4.434a.5.5 0 0 1-.46-.698l3.06-7a.5.5 0 0 1 .458-.3h5.133a.5.5 0 0 1 .39.813l-2.7 3.375a.5.5 0 0 0 .39.812h2.255a.5.5 0 0 1 .354.854L4.167 15.5Z" stroke="#006CFA" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </span>
          <span>Create</span>
        </div>

        <h1 className="text-[2.55rem] leading-tight max-w-[22ch] mx-auto font-bold text-gray-900 mb-6">Create engaging courses in minutes, not months</h1>

        <p className="text-[1.250rem] text-gray-700 mb-12">Building courses should be a delight, not a drag. Design your course in record time with our world-class authoring experience.</p>
      </div>

      {/* Stats Cards Section */}
      <div className="w-full max-w-6xl mx-auto bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl py-16 px-12 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { number: "৩৫ টি", label: "লাইভ ক্লাস" },
            { number: "৭৫", label: "ঘন্টা" },
            { number: "∞", label: "লাইফটাইম ক্লাস রেকর্ডিং অ্যাক্সেস" },
            { number: "🎓", label: "ইন্টার্নশীপ প্লেসমেন্ট সাপোর্ট " },
            { number: "✓", label: "জব প্লেসমেন্ট সাপোর্ট" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl border  border-blue-600 h-max p-px text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className={`${i === 0 && "py-2"} text-3xl font-bold  bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent  ${hindSiliguri.className}`}>{stat.number}</div>
              <div className={`text-gray-600 text-lg  ${hindSiliguri.className}`}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Schedule Section */}
        <div className="bg-white rounded-2xl p-8 space-y-6 shadow-lg mt-12">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center sm:justify-between justify-center w-full  p-4 bg-[#F9FAFB] rounded-xl">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 font-medium text-blue-600" />
                <div className="space-y-1">
                  <div className={`text-lg text-blue-600 font-bold ${hindSiliguri.className}`}>কোর্সটি শুরু:</div>
                  <div className="font-medium">১৫ জানুয়ারি, ২০২৫ ইং</div>
                </div>
              </div>
              <div className="w-[2px] h-10 bg-gray-200"></div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 font-medium text-blue-600" />
                <div className="space-y-1">
                  <div className="text-lg text-blue-600 font-bold">লাইভ ক্লাস</div>
                  <div className="font-medium">
                    রাত ৮ঃ১৫ - ১০ঃ১৫ <span className="text-gray-500">(রবিবার,মঙ্গলবার, বৃহস্পতিবার )</span>
                  </div>
                </div>
              </div>

              <div className="w-[2px] h-10 bg-gray-200"></div>
              <div className="flex items-center gap-3">
                <ClockAlert className="w-5 h-5 font-medium text-blue-600" />
                <div className="space-y-1">
                  <div className="text-lg text-blue-600 font-bold"> কোর্স শেষ:</div>
                  <div className="font-medium">১৫ মে, ২০২৫ ইং</div>
                </div>
              </div>
              {/* Class Timing Section */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
