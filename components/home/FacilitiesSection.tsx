"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FacilityData {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}

const FACILITIES_LIST: FacilityData[] = [
  {
    id: "hostel",
    name: "Hostel",
    title: "Hostel Facilities",
    subtitle: "Ladies hostel:",
    description: "Hostel accommodations for female students are available with limited number of seats. Safe, secured, and equipped with modern amenities, study rooms, and hygienic dining.",
    image: "/images/facility-hostel.jpg",
    link: "/facilities",
  },
  {
    id: "laboratory",
    name: "Laboratory",
    title: "Modern Laboratories",
    subtitle: "Advanced Diagnostic Labs:",
    description: "Fully equipped pathology, biochemistry, microbiology, and histology laboratories designed for rigorous medical diagnostics and student practical sessions.",
    image: "/images/about-1.jpg",
    link: "/facilities",
  },
  {
    id: "hospital",
    name: "Hospital Service",
    title: "500-Bed Hospital Services",
    subtitle: "Comprehensive Care:",
    description: "24/7 emergency care, specialized ICUs, CCU, modern operation theaters, and outpatient departments catering to thousands of patients daily.",
    image: "/images/metrics-bg.jpg",
    link: "/facilities",
  },
  {
    id: "cafeteria",
    name: "Cafeteria",
    title: "Hygienic Campus Cafeteria",
    subtitle: "Nutrition & Well-being:",
    description: "Serving balanced, fresh, and nutritious meals for doctors, medical students, and staff in a clean and comfortable dining environment.",
    image: "/images/finddept-student1.jpg",
    link: "/facilities",
  },
  {
    id: "training",
    name: "Training",
    title: "Clinical Skill Training",
    subtitle: "Postgraduate & Intern Training:",
    description: "Hands-on internship programs accredited by BMDC and BCPS FCPS training, led by senior professors and clinical supervisors.",
    image: "/images/about-2.jpg",
    link: "/facilities",
  },
  {
    id: "meu",
    name: "Medical Education Unit",
    title: "Medical Education Unit (MEU)",
    subtitle: "Pedagogical Excellence:",
    description: "Dedicated to enhancing teaching methodologies, faculty development workshops, curriculum design, and assessment modernizations.",
    image: "/images/finddept-student2.jpg",
    link: "/facilities",
  },
  {
    id: "departments",
    name: "Departments",
    title: "28+ Specialized Departments",
    subtitle: "Pre-clinical & Clinical:",
    description: "Anatomy, Physiology, Pharmacology, Forensic Medicine, Community Medicine, Surgery, Medicine, Pediatrics, Gynae & Obs, and more.",
    image: "/images/finddept-doctor.jpg",
    link: "/departments",
  },
  {
    id: "publications",
    name: "Publications",
    title: "Medical Research Publications",
    subtitle: "Peer-Reviewed Research:",
    description: "Bi-annual peer-reviewed journal publishing original medical investigations, clinical trials, case reports, and epidemiological research.",
    image: "/images/metrics-bg.jpg",
    link: "/notice?tab=publication",
  },
  {
    id: "seminar",
    name: "Seminar",
    title: "Auditoriums & Seminar Halls",
    subtitle: "Conferences & Symposia:",
    description: "Centrally air-conditioned audiovisual-equipped seminar halls hosting national and international medical symposiums and clinical meets.",
    image: "/images/hero-bg.jpg",
    link: "/facilities",
  },
];

export default function FacilitiesSection() {
  const [selectedFacility, setSelectedFacility] = useState<FacilityData>(FACILITIES_LIST[0]);

  return (
    <section className="py-20 lg:py-28 bg-[#FAF6F6] relative overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#018837]" />
            <span className="text-[#018837] font-semibold text-sm sm:text-base tracking-wide capitalize">
              knowledge meets innovation
            </span>
          </div>
          <h2 className="font-bitter text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight">
            Our Facilities
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 9 Facility Selector Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {FACILITIES_LIST.map((facility) => {
              const isActive = selectedFacility.id === facility.id;
              return (
                <button
                  key={facility.id}
                  onClick={() => setSelectedFacility(facility)}
                  className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border transition-all text-left ${
                    isActive
                      ? "bg-white border-[#018837] shadow-md shadow-[#018837]/10"
                      : "bg-white border-[#E8E8F4] hover:border-[#018837]/40 hover:bg-white/80"
                  }`}
                >
                  <span
                    className={`text-base sm:text-lg font-bold transition-colors ${
                      isActive ? "text-[#018837]" : "text-black"
                    }`}
                  >
                    {facility.name}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                      isActive
                        ? "bg-[#018837] text-white scale-105"
                        : "bg-[#018837]/10 text-[#018837]"
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Facility Preview Card (Node 69:2871 -> Frame 75) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E8E8F4] shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* Facility Image */}
              <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
              </div>

              {/* Facility Details */}
              <div className="flex flex-col justify-between h-full py-2">
                <div>
                  <h3 className="font-bitter text-2xl sm:text-3xl font-bold text-[#018837] leading-tight">
                    {selectedFacility.title}
                  </h3>

                  <div className="mt-4">
                    <p className="text-base sm:text-lg font-semibold text-[#4A4A4A]">
                      {selectedFacility.subtitle}
                    </p>
                    <p className="mt-2 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
                      {selectedFacility.description}
                    </p>
                  </div>

                  <div className="mt-4">
                    <Link
                      href={selectedFacility.link}
                      className="inline-flex items-center gap-1.5 text-[#0094D3] font-semibold text-xs sm:text-sm hover:underline"
                    >
                      <span>View Details</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Primary CTA */}
                <div className="mt-8 pt-6 border-t border-[#E8E8F4]">
                  <Link
                    href="/facilities"
                    className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#018837] text-white font-semibold text-base shadow-lg shadow-[#018837]/20 hover:bg-[#016f2c] transition group"
                  >
                    <span>View Our Program</span>
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
