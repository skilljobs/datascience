import { CheckCircle2 } from "lucide-react";
import { Anek_Bangla } from "next/font/google";

const anekBangla = Anek_Bangla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const eligibilityPoints = [
  {
    text: "কোন কোডিং নলেজ নেই কিন্তু এরপরও ডাটা থেকে মিনিংফুল ইনসাইট ও ডিসিশন নিতে চান",
  },
  {
    text: "বিজনেস বা ডাটা এনালিটিক্সে ভবিষ্যতে যারা কাজ করতে চান",
  },
  {
    text: "যেকোন ব্যাকগ্রাউন্ডের স্টুডেন্ট যিনি ডাটা সায়েন্সে ক্যারিয়ার গড়তে চান",
  },
  {
    text: "জবে আছেন এবং যারা চাচ্ছেন ডাটা সায়েন্স সেক্টরে ক্যারিয়ার সুইচ করতে",
  },
  {
    text: "ফ্রীল্যান্সার হিসেবে কাজ করতে পারবেন",
  },
];

export default function CourseEligibility() {
  return (
    <section className={`w-full max-w-7xl mx-auto px-4 py-8 ${anekBangla.className}`}>
      <h2 className="text-3xl font-bold text-center mb-12">কোর্সটি আপনারই জন্য</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {eligibilityPoints.map((point, index) => (
          <div key={index} className="flex items-start gap-3 shadow-lg py-2 px-2">
            <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
            <p className="text-lg">{point.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
