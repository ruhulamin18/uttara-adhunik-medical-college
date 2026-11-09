import { Suspense } from "react"
import type { Metadata } from "next"
import DepartmentDirectory from "@/components/departments/DepartmentDirectory"

export const metadata: Metadata = {
  title: "Departments - Uttara Adhunik Medical College",
  description: "Explore clinical and academic departments at Uttara Adhunik Medical College.",
}

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#110C2D] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#F5D253] text-sm font-semibold uppercase tracking-wider">Clinical Excellence</span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4">Our Departments</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            Multidisciplinary departments staffed by expert consultants delivering quality healthcare and education.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <Suspense
          fallback={
            <p className="py-12 text-center text-slate-600" role="status">
              Loading departments…
            </p>
          }
        >
          <DepartmentDirectory />
        </Suspense>
      </section>
    </div>
  )
}
