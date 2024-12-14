import Image from "next/image";
import { hindSiliguri } from "../layout";

export default function CertificateSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className={`text-4xl font-bold  mb-4 ${hindSiliguri.className}`}>সার্টিফিকেট</h2>
        <p className={`text-lg text-gray-700 ${hindSiliguri.className}`}>কোর্স শেষে পেয়ে যান পেয়ারেবল কোর্স কমপ্লিশন এবং এসেসমেন্ট সার্টিফিকেট</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
        <div className="w-full max-w-4xl transform hover:scale-105 transition-transform duration-300">
          <Image width={1200} height={1200} src="/certificate.jpg" alt="Course Completion Certificate" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}
