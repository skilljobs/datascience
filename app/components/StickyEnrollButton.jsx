"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { Anek_Bangla } from "next/font/google";

const anekBangla = Anek_Bangla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function EnrollPage() {
  const [isOpen, setIsOpen] = useState(false);

  // Whenever the modal opens, re-run Tally.loadEmbeds() so it hydrates our iframe.
  useEffect(() => {
    if (isOpen && typeof window !== "undefined" && window.Tally) {
      window.Tally.loadEmbeds();
    }
  }, [isOpen]);

  return (
    <>
      {/* 1. Load Tally’s embed script lazily */}
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
      />

      {/* 2. Sticky bar */}
      <div className="px-4 py-6 flex justify-center flex-col sm:flex-row items-center gap-4 md:gap-8 bg-gray-900">
        <h3
          className={`text-white text-xl font-semibold ${anekBangla.className}`}
        >
          সিট সংখ্যা শেষ হওয়ার আগে জয়েন করুন
        </h3>
        <button
          onClick={() => setIsOpen(true)}
          className="min-w-[150px] py-4 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded flex items-center justify-center gap-2"
        >
          {/* your icon svg */}
          Enroll now
        </button>
      </div>

      {/* 3. Modal overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl p-4 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>

            {/* 4. Tally iframe */}
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
