import CertificateSection from "./components/CertificateSection";
import ComputerRequirements from "./components/ComputerRequirements";
import CourseCurriculum from "./components/CourseCurriculam";
import CourseDescription from "./components/CourseDescription";
import CourseEligibility from "./components/CourseEligibility";
import CourseFeatures from "./components/CourseFeatures";
import CourseLanding from "./components/CourseLanding";
import DataFAQSection from "./components/DataFAQSection";
import DataScienceTools from "./components/DataScienceTools";
import FAQSection from "./components/FAQSection";
import { Footer } from "./components/Footer";
import GraduateGallery from "./components/GraduateGallery";
import HeroSection from "./components/HeroSection";
import InstructorCard from "./components/InstructorCard";
import MainBanner from "./components/MainBanner";
import { Navbar } from "./components/Navbar";
import StickyEnrollButton from "./components/StickyEnrollButton";
import TestimonialCarousel from "./components/TestimonialCarousel";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <MainBanner />
      <main className="relative" id="main">
        <HeroSection />
        <CourseLanding />
        <div className="my-16">
          <CourseCurriculum />
        </div>

        <div className="mb-16">
          <CourseDescription />
        </div>

        <div className="mb-16">
          <DataScienceTools />
        </div>

        <div className="mb-16">
          <CourseFeatures />
        </div>
        <div className="mb-16">
          <CourseEligibility />
        </div>
        <div className="mb-16">
          <InstructorCard />
        </div>

        <div className="mb-16">
          <ComputerRequirements />
        </div>
        <div className="mb-16">
          <CertificateSection />
        </div>

        <div className="mb-16 sticky bottom-0 left-0 right-0">
          <StickyEnrollButton />
        </div>
      </main>

      <div className="mb-16">
        <DataFAQSection />
      </div>
      <div className="mb-16">
        <FAQSection />
      </div>
      <div className="mb-16">
        <TestimonialCarousel />
      </div>
      <div className="mb-16">
        <GraduateGallery />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
