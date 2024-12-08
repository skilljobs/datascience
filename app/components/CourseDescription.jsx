import { BarChartIcon as ChartBar, Code } from "lucide-react";
import { hindSiliguri } from "../layout";

const CourseDescription = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div
        className={`w-full max-w-7xl mx-auto px-4 py-16 ${hindSiliguri.className}`}
      >
        <h2 className="text-3xl font-bold text-center mb-12">কোর্সের বর্ণনা</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <Code className="w-8 h-8 text-blue-500 mr-3" />
              <h3 className="text-2xl font-semibold">পাইথন প্রোগ্রামিং</h3>
            </div>
            <p className="text-gray-600 mb-6">
              পাইথন একটি সাধারণ উদ্দেশ্যে ব্যবহৃত প্রোগ্রামিং ভাষা, যা ডেটা
              সায়েন্সের জন্য দিনে দিনে জনপ্রিয় হয়ে উঠছে। বিশ্বব্যাপী অনেক
              কোম্পানি তাদের ডেটা থেকে অন্তর্দৃষ্টি বের করতে এবং প্রতিযোগিতামূলক
              সুবিধা অর্জন করতে পাইথন ব্যবহার করছে।
            </p>
            <p className="text-gray-600">
              অন্যান্য পাইথন টিউটোরিয়াল থেকে আলাদা, এই কোর্সটি বিশেষভাবে ডেটা
              সায়েন্সের জন্য পাইথন নিয়ে। আমাদের ইন্ট্রো টু পাইথন ক্লাসে আপনি
              ডেটা স্টোর এবং ম্যানিপুলেট করার শক্তিশালী উপায়গুলি শিখবেন, এবং
              আপনার নিজের বিশ্লেষণ শুরু করার জন্য শীতল ডেটা সায়েন্স টুলস
              সম্পর্কে জানবেন।
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <ChartBar className="w-8 h-8 text-green-500 mr-3" />
              <h3 className="text-2xl font-semibold">
                ডেটা সায়েন্স এবং মেশিন লার্নিং
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              এই কোর্সটি আপনাকে সফলভাবে বাস্তব বিশ্বে ডেটা সায়েন্স এবং মেশিন
              লার্নিং প্রজেক্ট চালানোর জন্য প্রয়োজনীয় দক্ষতা এবং জ্ঞান অর্জন
              করতে সাহায্য করবে।
            </p>
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">কোর্সের প্রথম অংশ:</h4>
              <p className="text-gray-600">
                ডেটা অ্যানালাইসিস এবং ভিজুয়ালাইজেশন শিখানো হবে। আপনি বাস্তব
                ডেটাসেটের ওপর কাজ করবেন এবং পাইথনের Numpy, Pandas, Matplotlib,
                এবং Seaborn লাইব্রেরি ব্যবহার করে ডেটা বিশ্লেষণ করবেন।
              </p>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">
                কোর্সের দ্বিতীয় অংশ:
              </h4>
              <p className="text-gray-600 mb-4">
                মেশিন লার্নিং-এ ফোকাস করা হবে। এখানে সুপারভাইজড এবং আনসুপারভাইজড
                লার্নিং উভয় বিষয় আলোচনা করা হবে। আমরা বিভিন্ন খাতের কেস স্টাডি
                নিয়ে কাজ করব, যার মধ্যে ফাইনান্স, হেলথকেয়ার, রিয়েল এস্টেট,
                সেলস, এবং মার্কেটিং অন্তর্ভুক্ত।
              </p>
              <h5 className="text-md font-semibold mb-2">
                গুরুত্বপূর্ণ অ্যালগোরিদম:
              </h5>
              <ul className="list-disc list-inside text-gray-600">
                <li>লিনিয়ার রিগ্রেশন</li>
                <li>লজিস্টিক রিগ্রেশন</li>
                <li>সাপোর্ট ভেক্টর মেশিন (SVM)</li>
                <li>K-মিনস ক্লাস্টারিং</li>
              </ul>
            </div>
            <p className="text-gray-600 italic">
              এই কোর্সটি এই স্পেশালাইজেশনের ডীপ লার্নিং কোর্সের জন্য একটি ভিত্তি
              তৈরি করবে।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDescription;
