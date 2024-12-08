import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: "1",
      name: "Ekramul Ahmed",
      initials: "EA",
      content:
        "The Data Science and Machine Learning Zero to Mastery course at Skill Jobs is incredibly comprehensive. It covers everything from basic concepts to advanced techniques, with a strong focus on practical, real-world applications. The hands-on projects and excellent mentorship have greatly enhanced my skills and confidence in the field.",
    },
    {
      id: "2",
      name: "Khadiza Akter Khushi",
      initials: "KA",
      content:
        "The Data Science and Machine Learning Zero to Mastery course at Skill Jobs is exceptional. The curriculum is thorough, the projects are hands-on, and the mentorship is outstanding. It's perfect for mastering data science.",
    },
    {
      id: "3",
      name: "Hasan Mahmud Rezvee",
      initials: "HM",
      content:
        "আমি স্কিল জবস থেকে ডেটা সায়েন্স ও মেশিন লার্নিং জিরো টু মাস্টারি কোর্সটি সম্পন্ন করেছি এবং পুরো অভিজ্ঞতাটাই অসাধারণ ছিল। কোর্সটির কনটেন্ট খুবই ভালোমতো সাজানো হয়েছে এবং অভিজ্ঞ মেন্টরদের সাথে কাজ করার সুযোগ পেয়ে আমি অনেক উপকৃত হয়েছি। বাস্তব জীবনের উদাহরণ এবং প্রজেক্টভিত্তিক শিক্ষা আমাকে অনেক সহায়তা করেছে। যারা ডেটা সায়েন্স ও মেশিন লার্নিং শিখতে চান, তাদের জন্য আমি এই কোর্সটি সুপারিশ করছি।",
    },
    {
      id: "4",
      name: "Rakib Mia",
      initials: "RM",
      content:
        "স্কিল জবস এর ডেটা সায়েন্স ও মেশিন লার্নিং জিরো টু মাস্টারি কোর্সটি আমাকে একেবারে নতুন একটি যাত্রায় নিয়ে গেছে। কোর্সটির কনটেন্ট, সাবলীল মেন্টরশিপ এবং প্রজেক্টভিত্তিক শিক্ষাদানের পদ্ধতি আমাকে আত্মবিশ্বাস বাড়াতে সাহায্য করেছে। এটি এমন একটি কোর্স যা আমার নতুন দক্ষতা অর্জন এবং বাস্তব জীবনে প্রয়োগের জন্য সহায়ক হয়েছে।",
    },
    {
      id: "5",
      name: "Jahidul Haque",
      initials: "JH",
      content:
        "এই কোর্সটি সম্পন্ন করার পর আমি বুঝতে পেরেছি বর্তমান সময়ে ডেটা সায়েন্স ও মেশিন লার্নিং কতটা গুরুত্বপূর্ণ। স্কিল জবস এর এই কোর্সটি আমাকে শুধু তাত্ত্বিক জ্ঞান দেয়নি, বরং ব্যবহারিক অ্যাসাইনমেন্ট এবং প্রজেক্টের মাধ্যমে আমাকে বাস্তব জীবনের সমস্যার সমাধান করতে শিখিয়েছে। কোর্সটির প্রতিটি অংশই খুবই মানসম্মত এবং প্রাসঙ্গিক।",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          আমাদের <span className="">লার্নারদের</span> কাছে শুনুন
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="p-6 bg-white shadow-sm h-full">
            <div className="flex items-start gap-4 h-full">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-900">
                    {testimonial.initials}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
              <Quote className="w-6 h-6 text-blue-600 flex-shrink-0" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
