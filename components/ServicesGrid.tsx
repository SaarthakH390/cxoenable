import { Search, Users, Target } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Search,
    title: 'Executive Search',
    description: 'Identifying, evaluating, and securing exceptional leadership talent aligned with your strategic vision and organizational culture.',
    href: '/services#executive-search',
  },
  {
    icon: Users,
    title: 'Leadership Advisory',
    description: 'Providing counsel on leadership decisions, organizational structure, and succession planning with discretion and insight.',
    href: '/services#leadership-advisory',
  },
  {
    icon: Target,
    title: 'Strategic Hiring',
    description: 'Building leadership capacity through thoughtful, strategic approaches to senior-level talent acquisition.',
    href: '/services#strategic-hiring',
  },
];

export function WhatWeDo() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="px-3 py-1 bg-navy/5 rounded-full">
              <span className="font-sans text-navy text-xs uppercase tracking-wider font-semibold">
                What We Do
              </span>
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-4">
            Services
          </h2>
          <p className="font-sans text-gray-600 max-w-2xl mx-auto">
            Helping organizations make better leadership decisions through experience, judgment, and discretion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative p-8 rounded-xl bg-gray-50 border border-gray-100 hover:border-accent hover:shadow-xl hover:shadow-accent/5 transition-all duration-200"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-200">
                  <service.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-sans font-semibold text-xl text-navy mb-3 group-hover:text-accent transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="font-sans font-medium text-sm">Learn more</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
