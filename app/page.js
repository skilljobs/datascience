import CertificateSection from "./components/CertificateSection";
import ComputerRequirements from "./components/ComputerRequirements";
import CourseCurriculum from "./components/CourseCurriculam";
import CourseDescription from "./components/CourseDescription";
import CourseEligibility from "./components/CourseEligibility";
import CourseFeatures from "./components/CourseFeatures";
import CourseLanding from "./components/CourseLanding";
import DataFAQSection from "./components/DataFAQSection";
import DataScienceTools from "./components/DataScienceTools";
import { Footer } from "./components/Footer";
import GraduateGallery from "./components/GraduateGallery";
import HeroSection from "./components/HeroSection";
import InstructorCard from "./components/InstructorCard";
import { Navbar } from "./components/Navbar";
import StickyEnrollButton from "./components/StickyEnrollButton";
import TestimonialCarousel from "./components/TestimonialCarousel";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <main className="relative" id="main">
        <HeroSection />
        <CourseLanding />
        <div className="my-8">
          <CourseCurriculum />
        </div>

        <div className="mb-8">
          <CourseDescription />
        </div>

        <div className="mb-8">
          <DataScienceTools />
        </div>

        <div className="mb-8">
          <CourseFeatures />
        </div>
        <div className="mb-8">
          <CourseEligibility />
        </div>
        <div className="mb-8">
          <InstructorCard />
        </div>

        <div className="mb-8">
          <ComputerRequirements />
        </div>
        <div className="mb-8">
          <CertificateSection />
        </div>

        <div className="mb-8 sticky bottom-0 left-0 right-0">
          <StickyEnrollButton />
        </div>
      </main>

      <div className="mb-8 flex">
        <DataFAQSection />
      </div>
      <div></div>
      <div className="mb-8">
        <TestimonialCarousel />
      </div>
      <div className="mb-8">
        <GraduateGallery />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
