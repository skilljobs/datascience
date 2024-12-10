"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Hind_Siliguri } from "next/font/google";
import Link from "next/link";
import FAQSection from "./FAQSection";

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const faqData = [
  {
    question: "ডেটা সায়েন্সের ভবিষ্যৎ কেমন?",
    answer: "ডেটা সায়েন্স বর্তমানে বিশ্বের সবচেয়ে দ্রুত বিকাশমান ক্ষেত্রগুলোর মধ্যে একটি। বিস্তারিত জানতে ",
    link: {
      text: "এই লিংকটি দেখুন।",
      url: "https://www.youtube.com/watch?v=dothW_DnYy8",
    },
  },
  {
    question: "ডেটা সায়েন্সে কি প্রোগ্রামিং জানা জরুরি?",
    answer: "হ্যাঁ, ডেটা সায়েন্সে প্রোগ্রামিং একটি গুরুত্বপূর্ণ অংশ। এই কোর্সে প্রয়োজনীয় সমস্ত প্রোগ্রামিং শেখানো হবে ফাউন্ডেশন ক্লাসে।",
  },
  {
    question: "আমি প্রোগ্রামিং জানি না। তাহলে কি এই কোর্সটি করতে পারব?",
    answer: "অবশ্যই। যারা একদম নতুন, তাদের জন্য আলাদা ফাউন্ডেশন ক্লাস রাখা হয়েছে।",
  },
  {
    question: "ডেটা সায়েন্সে কী কী প্রোগ্রামিং জানা জরুরি?",
    answer: "ডেটা সায়েন্সের জন্য বেসিক প্রোগ্রামিং যেমন:",
    list: ["ভেরিয়েবল", "অপারেটর", "লুপ", "কন্ডিশন", "ফাংশন"],
    additionalInfo: "এই কোর্সে আপনাকে সেগুলো শেখানো হবে।",
  },
  {
    question: "ডেটা সায়েন্সে কি গণিত জানা জরুরি?",
    answer: "হ্যাঁ, তবে আপনাকে বিশেষজ্ঞ হতে হবে না। বেসিক ক্যালকুলাস এবং লিনিয়ার অ্যালজেব্রা জানলেই যথেষ্ট।",
  },
  {
    question: "আমার গণিতে তেমন শক্তিশালী ব্যাকগ্রাউন্ড নেই। তাহলে কি এই কোর্সটি করতে পারব?",
    answer: "অবশ্যই। এই কোর্সে গণিতের বেসিক বিষয়গুলো সহজভাবে শেখানো হবে।",
  },
  {
    question: "ডেটা সায়েন্সে গণিতের কোন কোন অংশ জানা জরুরি?",
    answer: "ডেটা সায়েন্সে গুরুত্বপূর্ণ গণিতের অংশগুলো হল:",
    list: ["ক্যালকুলাস (ডেরিভেটিভ, ইন্টিগ্রেশন)", "লিনিয়ার অ্যালজেব্রা (ম্যাট্রিক্স এবং ভেক্টর)"],
    additionalInfo: "কোর্সে এই বিষয়গুলো কভার করা হবে।",
  },
  {
    question: "আমার কম্পিউটার সায়েন্স ব্যাকগ্রাউন্ড নেই। তাহলে কি এই কোর্সটি করতে পারব?",
    answer: "হ্যাঁ, কম্পিউটার সায়েন্স ব্যাকগ্রাউন্ড ছাড়াই এই কোর্সটি করা সম্ভব।",
  },
  {
    question: "এই কোর্সটি কার জন্য?",
    answer: "ডেটা সায়েন্স শিখতে আগ্রহী যেকোনো ব্যক্তি এই কোর্সটি করতে পারেন। আপনার যা যা লাগবে:",
    list: ["একটি কম্পিউটার", "ইন্টারনেট সংযোগ"],
  },
  {
    question: "কিভাবে বুঝব এই কোর্সটি আমার জন্য সঠিক?",
    answer: "যদি আপনি নতুন কিছু শিখতে চান, সৃজনশীল কাজ করতে পছন্দ করেন, এবং নিজের ভবিষ্যৎ গড়তে চান, তবে এটি আপনার জন্য।",
  },
  {
    question: "কোর্স শেষে কি সার্টিফিকেট দেওয়া হবে?",
    answer: "হ্যাঁ, কোর্স সফলভাবে সম্পন্ন করার পর একটি সার্টিফিকেট প্রদান করা হবে।",
  },
  {
    question: "কোর্স শেষ হওয়ার পর কি কন্টেন্টে অ্যাক্সেস থাকবে?",
    answer: "হ্যাঁ, কোর্স শেষ হওয়ার পরও কন্টেন্ট রিভিশনের জন্য অ্যাক্সেস থাকবে।",
  },
  {
    question: "ক্লাসের মধ্যে কি অ্যাসাইনমেন্ট বা প্রজেক্ট থাকবে?",
    answer: "হ্যাঁ, প্রতিটি ক্লাস শেষে অ্যাসাইনমেন্ট থাকবে যা শেখার প্রক্রিয়াকে আরো সহজ করবে।",
  },
  {
    question: "ক্লাসগুলো কোন প্ল্যাটফর্মে হবে?",
    answer: "লাইভ ক্লাসগুলো অনলাইনে পরিচালিত হবে।",
  },
  {
    question: "যদি কোনো ক্লাস মিস করি তাহলে কি হবে?",
    answer: "ক্লাসের রেকর্ডিং পাওয়া যাবে, তাই আপনি সময়মতো দেখে নিতে পারবেন।",
  },
  {
    question: "ক্লাসের বাইরে কি সাপোর্ট পাব?",
    answer: "হ্যাঁ, WhatsApp এবং মেইলের মাধ্যমে ২৪/৭ সাপোর্ট থাকবে।",
  },
  {
    question: "এই কোর্স সম্পর্কে আরও জানতে কোথায় যোগাযোগ করব?",
    answer: "আমাদের সহায়তা টিমের সাথে যোগাযোগ করুন।",
  },
];

export default function DataFAQSection() {
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 py-16 ${hindSiliguri.className}`}>
      <h2 className={`text-4xl font-bold mb-8 text-center ${hindSiliguri.className}`}>Data Science and Machine Learning Zero to Mastery - FAQs</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 py-2">
            <AccordionTrigger className="text-xl font-bold hover:no-underline">{`${index + 1}. ${faq.question}`}</AccordionTrigger>
            <AccordionContent className="text-lg text-gray-600">
              {faq.answer}
              {faq.link && (
                <Link href={faq.link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {faq.link.text}
                </Link>
              )}
              {faq.list && (
                <ul className="list-disc pl-5 mt-2">
                  {faq.list.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}
              {faq.additionalInfo && <p className="mt-2">{faq.additionalInfo}</p>}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="mb-4" />
      <FAQSection />
    </div>
  );
}
