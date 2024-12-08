import CertificateSection from "./components/CertificateSection";
import ComputerRequirements from "./components/ComputerRequirements";
import CourseCurriculum from "./components/CourseCurriculam";
import CourseDescription from "./components/CourseDescription";
import CourseEligibility from "./components/CourseEligibility";
import CourseFeatures from "./components/CourseFeatures";
import CourseLanding from "./components/CourseLanding";
import DataScienceTools from "./components/DataScienceTools";
import FAQSection from "./components/FAQSection";
import HeroSection from "./components/HeroSection";
import InstructorCard from "./components/InstructorCard";
import MainBanner from "./components/MainBanner";
import TestimonialCarousel from "./components/TestimonialCarousel";

export default function Home() {
  return (
    <main className="">
      <MainBanner />
      <HeroSection />
      <CourseLanding />
      <div className="my-32">
        <CourseCurriculum />
      </div>

      <div className="mb-32">
        <CourseDescription />
      </div>

      <div className="mb-32">
        <DataScienceTools />
      </div>

      <div className="mb-32">
        <CourseFeatures />
      </div>
      <div className="mb-32">
        <CourseEligibility />
      </div>
      <div className="mb-32">
        <InstructorCard />
      </div>
      <div className="mb-32">
        <ComputerRequirements />
      </div>
      <div className="mb-32">
        <CertificateSection />
      </div>
      <div className="mb-32">
        <FAQSection />
      </div>
      <div className="mb-32">
        <TestimonialCarousel />
      </div>
    </main>
  );
}
