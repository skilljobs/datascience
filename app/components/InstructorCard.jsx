import Image from "next/image";
import { hindSiliguri } from "../layout";

export default function InstructorCard() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1
        className={`text-4xl font-bold text-center mb-8 ${hindSiliguri.className}`}
      >
        ইন্সট্রাক্টর
      </h1>

      <div className="bg-white transform transition-all duration-300 hover:-translate-y-2 rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 space-y-4">
          <div className="inline-block">
            <div className="border border-purple-300 rounded-full px-4 py-1 text-purple-500 text-sm font-medium">
              LEAD INSTRUCTOR
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Shahriar Jahan Rafi</h2>
            <p className="text-gray-600">BSc in CSE, MSc (ASDS, JU)</p>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-gray-700">
                  ✓ Taught over ২৫০+ students
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-blue-600">
                  ✓ 6+ years industry experience
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-48 h-48 rounded-lg overflow-hidden">
          <Image
            src="/profile.png"
            width={200}
            height={200}
            alt="Instructor"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
