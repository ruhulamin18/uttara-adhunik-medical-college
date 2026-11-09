'use client';

import { useSearchParams } from 'next/navigation';
import { Baby, Bone, Brain, FlaskConical, HeartPulse, Stethoscope, Users } from 'lucide-react';

const departments = [
  { name: 'Cardiology', icon: HeartPulse, desc: 'Comprehensive cardiac care, ECG, Echo, and CCU facilities.' },
  { name: 'Medicine', icon: Stethoscope, desc: 'General internal medicine with specialist consultation.' },
  { name: 'Pediatrics', icon: Baby, desc: 'Child healthcare, immunization, and neonatal care.' },
  { name: 'Orthopedics', icon: Bone, desc: 'Bone, joint, and trauma care with modern surgery.' },
  { name: 'Neurology', icon: Brain, desc: 'Diagnosis and treatment of nervous system disorders.' },
  { name: 'Gynecology & Obstetrics', icon: Users, desc: "Maternal care, safe delivery, and women's health." },
  { name: 'Microbiology', icon: FlaskConical, desc: 'Microbiology education, laboratory diagnostics, and research.' },
  { name: 'Community Medicine', icon: Users, desc: 'Public health, preventive medicine, and community outreach.' },
  { name: 'Pathology', icon: FlaskConical, desc: 'Laboratory medicine, diagnostic testing, and pathology services.' },
];

export default function DepartmentDirectory() {
  const searchParams = useSearchParams();
  const rawSearch = searchParams.get('search')?.trim() ?? '';
  const query = rawSearch.toLowerCase();
  const departmentQuery = query.replace(/\bdepartment of\b/g, '').trim();
  const filteredDepartments = query
    ? departments.filter(({ name, desc }) => {
        const searchableText = `${name} ${desc}`.toLowerCase();
        return searchableText.includes(query) || searchableText.includes(departmentQuery);
      })
    : departments;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredDepartments.map((dept) => (
        <div key={dept.name} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition">
          <div className="w-14 h-14 bg-[#890C25] text-white rounded-2xl flex items-center justify-center mb-5">
            <dept.icon className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">{dept.name}</h3>
          <p className="text-sm text-slate-600 leading-relaxed">{dept.desc}</p>
        </div>
      ))}
      {filteredDepartments.length === 0 && (
        <p className="col-span-full text-center text-slate-600" role="status">
          No departments match &quot;{rawSearch}&quot;. Try a different search.
        </p>
      )}
    </div>
  );
}
