"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Anek_Bangla } from "next/font/google";

const anekBangla = Anek_Bangla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const faqData = [
  // {
  //   question: "আমি কি ভিডিওগুলো ডাউনলোড করতে পারবো?",
  //   answer:
  //     "হ্যাঁ, আপনি সমস্ত ভিডিও ডাউনলোড করতে পারবেন এবং অফলাইনে দেখতে পারবেন। ডাউনলোড করার জন্য ভিডিওর নীচে ডাউনলোড বাটনে ক্লিক করুন।",
  // },
  {
    number: "18",
    question: "আমি কি মোবাইল দিয়ে জয়েন করতে পারবো?",
    answer: "হ্যাঁ, আপনি মোবাইল ফোন দিয়ে খুব সহজেই জয়েন করতে পারবেন। আমাদের প্ল্যাটফর্ম মোবাইল-ফ্রেন্ডলি।",
  },
  {
    number: "19",
    question: "আমার কি ভিডিওগুলোর লাইফটাইম অ্যাক্সেস থাকবে?",
    answer: "হ্যাঁ, একবার কোর্সে এনরোল করলে আপনি লাইফটাইম অ্যাক্সেস পাবেন।",
  },
  {
    number: "20",
    question: "লাইভ ক্লাস কোথায় হবে ?",
    answer: "Google meet  এ হবে  এবং google class room এ সব এসেট এবং টুলস দিয়ে দেয়া হবে",
  },
  {
    number: "21",
    question: "এসাইনমেন্ট কিভাবে হবে?",
    answer: "প্রতি মডিউল শেষে একটি এসাইনমেন্ট থাকবে। আপনি অনলাইনে জমা দিতে পারবেন এবং ফিডব্যাক পাবেন।",
  },
  {
    number: "22",
    question: "ওয়েব প্রো ব্যাচ কাদেরকে নেয়া হবে?",
    answer: "যারা ওয়েব ডেভেলপমেন্টে ক্যারিয়ার গড়তে চান এবং প্রোগ্রামিংয়ে আগ্রহী, তাদের জন্য এই ব্যাচ।",
  },
  {
    number: "23",
    question: "দেশের বাইরে থেকে কিভাবে পেমেন্ট করবো?",
    answer: "জ্বি! দেশের বাইরে থেকে পেমেন্ট করতে পারবেন এবং ক্লাস করতে পারবেন",
  },
  {
    number: "24",
    question: "লাইভ ক্লাসের রেকর্ডিং থাকবে?",
    answer: "হ্যাঁ, প্রতিটি লাইভ ক্লাসের রেকর্ডিং সংরক্ষণ করা হবে এবং আপনি যেকোনো সময় দেখতে পারবেন।",
  },
  {
    number: "25",
    question: "প্রাকটিস করতে গিয়ে সমস্যায় পরলে সাপোর্ট পাবো কোথায়?",
    answer: "আমাদের ডেডিকেটেড সাপোর্ট টিম আছে। আপনি সাপোর্ট সেকশনে টিকেট খুলে সহায়তা চাইতে পারবেন।",
  },
];

export default function FAQSection() {
  return (
    <Accordion type="single" collapsible className={`w-full space-y-4 ${anekBangla.className}`}>
      {faqData.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 py-2">
          <AccordionTrigger className="text-xl font-bold hover:no-underline">{`${faq.number}. ${faq.question}`}</AccordionTrigger>
          <AccordionContent className="text-lg text-gray-600">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
