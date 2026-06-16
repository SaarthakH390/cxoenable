import { Metadata } from 'next';
import { Search, Users, Target, TrendingUp, Briefcase, Building2 } from 'lucide-react';
import { CTASection } from '@/components/CTASection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Executive Search, Leadership Advisory, and Strategic Hiring services for organizations building high-impact leadership teams.',
};

const services = [
  {
    id: 'executive-search',
    icon: Search,
    title: 'Executive Search',
    overview: 'Identifying, evaluating, and securing exceptional leadership talent aligned with your strategic vision and organizational culture.',
    benefits: [
      'Access to a curated network of senior executives',
      'Rigorous evaluation beyond credentials',
      'Cultural fit assessment',
      'Discrete handling of sensitive searches',
      'Comprehensive candidate insights',
    ],
    idealFor: 'Organizations seeking C-suite executives, functional leaders, and strategic leadership roles.',
  },
  {
    id: 'leadership-advisory',
    icon: Users,
    title: 'Leadership Advisory',
    overview: 'Providing counsel on leadership decisions, organizational structure, and succession planning with discretion and insight.',
    benefits: [
      'Succession planning guidance',
      'Leadership assessment support',
      'Organizational design counsel',
      'Executive coaching recommendations',
      'Board advisory services',
    ],
    idealFor: 'Boards, CEOs, and leadership teams navigating leadership decisions and organizational transitions.',
  },
  {
    id: 'strategic-hiring',
    icon: Target,
    title: 'Strategic Hiring',
    overview: 'Building leadership capacity through thoughtful, strategic approaches to senior-level talent acquisition.',
    benefits: [
      'Market intelligence and insights',
      'Hiring strategy development',
      'Competitive positioning advice',
      'Leadership team composition',
      'Talent pipeline development',
    ],
    idealFor: 'Organizations building or restructuring leadership teams for growth or transformation.',
  },
  {
    id: 'cxo-search',
    icon: Briefcase,
    title: 'CXO Search',
    overview: 'Specialized focus on C-level executive searches, understanding the unique requirements and visibility of these roles.',
    benefits: [
      'Deep CXO network access',
      'Board-level presentation support',
      'Compensation benchmarking',
      'Transition planning',
      'Integration support',
    ],
    idealFor: 'Organizations filling Chief Executive, Chief Financial, Chief Operating, and other C-level positions.',
  },
  {
    id: 'talent-advisory',
    icon: TrendingUp,
    title: 'Strategic Talent Advisory',
    overview: 'Long-term advisory relationships supporting ongoing leadership strategy and talent decisions.',
    benefits: [
      'Regular strategic counsel',
      'Market perspective and insights',
      'Leadership benchmarking',
      'Talent ecosystem awareness',
      'Proactive opportunity identification',
    ],
    idealFor: 'PE firms, VC-backed companies, and family businesses with recurring leadership needs.',
  },
  {
    id: 'organizational-growth',
    icon: Building2,
    title: 'Organizational Growth Support',
    overview: 'Supporting organizations through growth phases with leadership capacity building and team design.',
    benefits: [
      'Leadership capacity planning',
      'Executive team design',
      'Growth-stage hiring strategy',
      'Cultural evolution guidance',
      'Scaling leadership frameworks',
    ],
    idealFor: 'High-growth companies, scale-ups, and organizations navigating significant expansion.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16">
            <h1 className="font-serif text-4xl sm:text-5xl text-navy mb-8 leading-tight">
              Services
            </h1>
            <p className="text-lg text-gray-600 font-sans leading-relaxed">
              We help organizations make better leadership decisions through
              trust, judgment, and deep experience. Each engagement is tailored
              to your unique context and leadership requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {services.slice(0, 3).map((service) => (
              <Link
                key={service.id}
                href={`#${service.id}`}
                className="group p-8 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-navy/10 transition-colors">
                  <service.icon className="w-6 h-6 text-navy" strokeWidth={1.5} />
                </div>
                <h3 className="font-sans font-semibold text-xl text-navy mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  {service.overview}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="font-sans text-accent text-sm uppercase tracking-wider font-semibold">
              Additional Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-navy mt-3 mb-6">
              Specialized Advisory
            </h2>
            <p className="text-gray-600 font-sans leading-relaxed">
              Beyond core services, we offer specialized support for specific
              leadership situations and organizational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.slice(3).map((service) => (
              <Link
                key={service.id}
                href={`#${service.id}`}
                className="group p-8 rounded-lg bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-navy/10 transition-colors">
                  <service.icon className="w-6 h-6 text-navy" strokeWidth={1.5} />
                </div>
                <h3 className="font-sans font-semibold text-xl text-navy mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  {service.overview}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-6">
              Service Details
            </h2>
            <p className="text-gray-600 font-sans max-w-2xl">
              Comprehensive information about each service, including benefits,
              ideal client profiles, and engagement approaches.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-lg bg-navy/5 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-navy" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-navy">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 font-sans leading-relaxed mb-8">
                      {service.overview}
                    </p>
                    <div className="p-6 rounded-lg bg-gray-50">
                      <h4 className="font-sans font-semibold text-navy text-sm uppercase tracking-wider mb-3">
                        Ideal For
                      </h4>
                      <p className="font-sans text-gray-600 text-sm leading-relaxed">
                        {service.idealFor}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-sans font-semibold text-navy text-sm uppercase tracking-wider mb-6">
                      Key Benefits
                    </h4>
                    <ul className="space-y-4">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="font-sans text-gray-600 text-sm leading-relaxed">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {service.id !== services[services.length - 1].id && (
                  <div className="mt-16 h-px bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
