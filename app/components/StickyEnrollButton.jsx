import { Anek_Bangla } from "next/font/google";
import Link from "next/link";
const anekBangla = Anek_Bangla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function StickyEnrollButton() {
  return (
    <div>
      <div className=" px-4 py-6  flex  justify-center flex-col sm:flex-row items-center gap-4 md:gap-8 bg-gray-900">
        <h3 className={`text-white text-xl font-semibold ${anekBangla.className}`}>সিট সংখ্যা শেষ হওয়ার আগে জয়েন করুন</h3>
        <Link href="https://forms.gle/YEYxLYr1fdtznTrs9" className=" justify-center items-center gap-3 min-w-[150px] w-full sm:w-auto py-4 flex bg-red-600 hover:bg-red-700 duration-300 text-white font-bold  px-4 rounded" target="_blank">
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
          </svg>{" "}
          Enroll now
        </Link>
      </div>
    </div>
  );
}
