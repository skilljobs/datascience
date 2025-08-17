"use client";

import { Anek_Bangla } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Script from "next/script";

const anekBangla = Anek_Bangla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  // Whenever the modal opens, re-run Tally.loadEmbeds() so it hydrates our iframe.
  useEffect(() => {
    if (isOpen && typeof window !== "undefined" && window.Tally) {
      window.Tally.loadEmbeds();
    }
  }, [isOpen]);

  return (
    <>
      {/* Load Tally's embed script lazily */}
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
      />

      <main className="relative bg-[url('https://assets-global.website-files.com/5baa44fa6bf0bedd67643641/61e07b0bb85d3c05c4bb5bd2_hero-bg.jpg')] bg-cover bg-center min-h-[890px] md:min-h-[790px] flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-7xl mx-auto px-4  relative -top-14">
          <div className="text-center max-w-5xl mx-auto">
            <h1 style={{ lineHeight: "1.2" }} className="text-4xl sm:text-5xl md:text-[3.1rem] font-bold text-navy-900 mb-6">
              Data Science and Machine Learning Zero to Mastery (28th Batch)
            </h1>
            <p className={`text-lg text-gray-600 mb-8 max-w-2xl mx-auto ${anekBangla.className}`}>দেশের সবচেয়ে বড় ডাটা সায়েন্স ও মেশিন লার্নিং কোর্সটি এখন Skill Jobs-এ, যা একদম বিগিনারদের জন্য সাজানো হয়েছে। এখানে আপনি জয়েন করতে পারবেন কোনো কোডিং নলেজ ছাড়াই!</p>
            <button
              onClick={() => setIsOpen(true)}
              style={{
                borderRadius: "4px",
              }}
              className={` w-max mx-auto flex gap-3 bg-[#006cfa] hover:bg-blue-600 text-white font-semibold py-4 px-8  text-base  ${anekBangla.className}`}
            >
              <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#a)" stroke="#fff" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3.553 11.899a6.363 6.363 0 0 1 7.424-10.24M1.321 11.853C.513 13.27.242 14.37.7 14.827c.693.692 2.862-.287 5.374-2.279M8.949 12.045 6.562 9.658l5.305-5.305a3.37 3.37 0 0 1 1.568-.886l1.365-.343a.562.562 0 0 1 .682.682l-.341 1.365a3.373 3.373 0 0 1-.888 1.568l-5.304 5.306Z"></path>
                  <path d="m6.562 9.658-1.955-.651a.281.281 0 0 1-.11-.467l.682-.681a2.255 2.255 0 0 1 2.308-.545l1.066.355-1.991 1.989ZM8.949 12.045 9.6 14a.282.282 0 0 0 .467.11l.681-.681a2.256 2.256 0 0 0 .545-2.308l-.355-1.067-1.99 1.99Z"></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h16v16H0z"></path>
                  </clipPath>
                </defs>
              </svg>
              ২৭তম ব্যাচ এ Enroll করুন
            </button>
          </div>

          <div className=" mt-16 text-center flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 text-blue-600">A Concern Of Daffodil Family</h3>
            <Link href="/" className="inline-block">
              <Image src="/daffodilgrouppng.png" width={300} height={100} alt="Daffodil Group" className="rounded-lg" />
            </Link>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-white"
          style={{
            clipPath: "ellipse(80% 100% at 50% 100%)",
          }}
        ></div>
      </main>

      {/* Modal overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl p-4 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
            >
              ✕
            </button>

            {/* Tally iframe */}
            <iframe
              data-tally-src="https://tally.so/embed/nPLQ0e?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Enroll Form"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}