import AboutSection from "@/components/home/AboutSection";
import AdmissionBanner from "@/components/home/AdmissionBanner";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import FindDepartment from "@/components/home/FindDepartment";
import Hero from "@/components/home/Hero";
import NoticeBoard from "@/components/home/NoticeBoard";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FindDepartment />
      <FacilitiesSection />
      <AdmissionBanner />
      <NoticeBoard />
    </>
  );
}
