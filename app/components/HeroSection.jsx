import Image from "next/image";
import Link from "next/link";
import { hindSiliguri } from "../layout";

export default function HeroSection() {
  return (
    <main className="relative bg-[url('https://assets-global.website-files.com/5baa44fa6bf0bedd67643641/61e07b0bb85d3c05c4bb5bd2_hero-bg.jpg')] bg-cover bg-center min-h-[975px] md:min-h-[890px] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-7xl mx-auto px-4 py-16">
        <div className="text-center max-w-5xl mx-auto">
          <p className="text-sm font-medium text-gray-600 mb-4 bg-[#fff] inline-block px-3 py-1 rounded-full">Learning Platform</p>
          <h1 style={{ lineHeight: "1.2" }} className="text-4xl sm:text-5xl md:text-[3.1rem] font-bold text-navy-900 mb-6">
            Data Science and Machine Learning Zero to Mastery (24th Batch)
          </h1>
          <p className={`text-lg text-gray-600 mb-8 max-w-2xl mx-auto ${hindSiliguri.className}`}>এ দেশের সবচেয়ে বড় ডাটা সায়েন্স ও মেশিন লার্নিং কোর্সটি এখন Skill Jobs-এ, যা একদম বিগিনারদের জন্য সাজানো হয়েছে। এখানে আপনি জয়েন করতে পারবেন কোনো কোডিং নলেজ ছাড়াই!</p>
          <Link
            style={{
              borderRadius: "4px",
            }}
            className={` w-max mx-auto flex gap-3 bg-[#006cfa] hover:bg-blue-600 text-white font-semibold py-4 px-8  text-base  ${hindSiliguri.className}`}
            href="https://forms.gle/YEYxLYr1fdtznTrs9"
            target="_blank"
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
            ২৪তম ব্যাচ এ Enroll করুন
          </Link>
        </div>

        <div className=" mt-16 text-center flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4 text-blue-600">A Concern Of Daffodil Family</h3>
          <Link href="/" className="inline-block">
            <Image src="/Skill.jobs_.png" width={300} height={100} alt="Daffodil Group" className="rounded-lg" />
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-white"
        style={{
          clipPath: "ellipse(75% 100% at 50% 100%)",
        }}
      ></div>
    </main>
  );
}
