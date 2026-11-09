import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-white overflow-hidden">
      {/* Upper About Section (Node 13:1134) */}
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Image Group */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-[540px] lg:max-w-none">
              {/* Main image */}
              <div className="relative w-[85%] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/about-1.jpg"
                  alt="UAMC Medical Students in Laboratory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 85vw, 450px"
                />
              </div>

              {/* Secondary overlapping image */}
              <div className="absolute -bottom-8 -right-2 sm:right-4 w-[62%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/about-2.jpg"
                  alt="UAMC Doctors and Clinical Discussion"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 320px"
                />
              </div>

              {/* Floating Round UAMC Emblem Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white p-2 shadow-2xl border-4 border-[#018837] flex items-center justify-center animate-pulse">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/uamc-logo-round.png"
                    alt="UAMC Seal"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center pt-8 lg:pt-0">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#018837]" />
              <span className="text-[#018837] font-semibold text-sm sm:text-base tracking-wide capitalize">
                knowledge meets innovation
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-bitter text-3xl sm:text-4xl lg:text-5xl font-bold text-[#262626] leading-tight tracking-tight">
              About UAMC
            </h2>

            {/* Paragraphs */}
            <p className="mt-6 text-[#737477] text-base sm:text-lg leading-relaxed">
              Uttara Adhunik Medical College (UAMC) is a prestigious medical institution located in Uttara Model Town, Dhaka, Bangladesh. Established in 2003.
            </p>
            <p className="mt-4 text-[#737477] text-base sm:text-lg leading-relaxed">
              UAMC offers a Bachelor of Medicine and Bachelor of Surgery (MBBS) program, designed to equip students with the knowledge, skills, and hands-on clinical training needed to excel in the medical profession.
            </p>

            {/* Two Pillars: Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {/* Mission Box */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-[#018837]/20 bg-[#e6f4ec]/30">
                <div className="w-12 h-12 rounded-lg bg-[#018837] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#018837] text-base leading-tight">
                    College Mission
                  </h4>
                  <p className="text-xs text-[#737477] font-medium mt-0.5">
                    Statement
                  </p>
                </div>
              </div>

              {/* Vision Box */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-[#018837]/20 bg-[#e6f4ec]/30">
                <div className="w-12 h-12 rounded-lg bg-[#018837] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#018837] text-base leading-tight">
                    College Vision
                  </h4>
                  <p className="text-xs text-[#737477] font-medium mt-0.5">
                    Achievement
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#018837] text-white font-semibold text-base shadow-lg shadow-[#018837]/20 hover:bg-[#016f2c] transition-all group"
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

      {/* Key Metrics Banner (Node 13:1253) */}
      <div className="relative w-full bg-[#018837] overflow-hidden">
        {/* Background texture overlay */}
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/metrics-bg.jpg"
            alt="UAMC Medical Research Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center">
            
            {/* Metric 1 */}
            <div className="text-center md:px-8">
              <div className="font-bitter text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                90%
              </div>
              <p className="mt-2 text-base sm:text-lg font-bold text-[#FECD2F] uppercase tracking-wide">
                Post-Graduation Success Rate
              </p>
            </div>

            {/* Metric 2 */}
            <div className="text-center md:px-8 md:border-x md:border-white/20">
              <div className="font-bitter text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                Top 10
              </div>
              <p className="mt-2 text-base sm:text-lg font-bold text-[#FECD2F] uppercase tracking-wide">
                Colleges That Create Futures
              </p>
            </div>

            {/* Metric 3 */}
            <div className="text-center md:px-8">
              <div className="font-bitter text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                No. 1
              </div>
              <p className="mt-2 text-base sm:text-lg font-bold text-[#FECD2F] uppercase tracking-wide">
                In The Nation For Materials R&amp;D
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
