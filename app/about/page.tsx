import { Metadata } from 'next';
import Image from 'next/image';
import { CTASection } from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about CXOEnable Advisors - a boutique executive search and leadership advisory practice founded on trust, judgment, and experience.',
};

const values = [
  {
    title: 'Trust',
    description: 'Building lasting relationships through confidentiality, integrity, and reliability in every engagement.',
  },
  {
    title: 'Judgment',
    description: 'Applying experience and insight to help organizations make better leadership decisions.',
  },
  {
    title: 'Discretion',
    description: 'Handling sensitive leadership matters with professionalism and complete confidentiality.',
  },
  {
    title: 'Excellence',
    description: 'Delivering exceptional outcomes through rigorous processes and deep expertise.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl text-navy mb-8 leading-tight">
              Our Story
            </h1>
            <div className="space-y-5 text-gray-700 font-sans leading-relaxed">
              <p className="text-lg">
                CXOEnable Advisors was founded on a simple belief: leadership decisions
                deserve better than conventional recruitment approaches.
              </p>
              <p>
                After years of leading executive hiring initiatives at established firms,
                our founder recognized that organizations making critical leadership
                decisions needed something more—judgment, discretion, and a genuine
                understanding of leadership context, not just candidate databases.
              </p>
              <p>
                We built a different kind of firm. One that prioritizes relationships
                over transactions. One that values trust over volume. One that brings
                senior experience to every engagement, not junior researchers learning
                on the job.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-gray-200">
              <Image
                src="https://images.pexels.com/photo/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Founder Portrait"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="max-w-xl">
              <span className="font-sans text-accent text-sm uppercase tracking-wider font-semibold">
                The Founder
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-navy mt-3 mb-6">
                Experience Built Through Leadership.
              </h2>
              <div className="space-y-4 text-gray-600 font-sans leading-relaxed">
                <p>
                  Our founder brings years of senior leadership experience from
                  established firms, having led executive hiring initiatives across
                  industries and geographies.
                </p>
                <p>
                  Having sat on both sides of the leadership equation—as a hiring
                  executive and as an advisor—we understand the weight of leadership
                  decisions and the importance of getting them right.
                </p>
                <p>
                  This experience informs every engagement, bringing practical insight
                  rather than theoretical frameworks to your leadership challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-6">
              Why CXOEnable
            </h2>
            <p className="text-gray-600 font-sans leading-relaxed">
              We are not a recruitment agency. We are not a staffing company. We are
              not a job portal. We are a trust-based advisory practice helping
              organizations make better leadership decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl">
            {[
              {
                title: 'Experience-Driven',
                description: 'Senior-level expertise in every engagement, not junior researchers.',
              },
              {
                title: 'Relationship-Focused',
                description: 'Long-term partnerships built on trust and mutual respect.',
              },
              {
                title: 'Confidential',
                description: 'Complete discretion in handling sensitive leadership matters.',
              },
              {
                title: 'Strategic',
                description: 'Understanding your organizational context before candidate discussions.',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-1 h-auto bg-navy rounded-full flex-shrink-0" />
                <div>
                  <h3 className="font-sans font-semibold text-navy text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-6">
              Our Philosophy
            </h2>
            <p className="text-gray-600 font-sans leading-relaxed">
              Leadership decisions shape organizations. We believe these decisions
              deserve careful consideration, relevant experience, and genuine
              partnership—not transactional relationships or volume-driven processes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-8 rounded-lg border border-gray-100"
              >
                <h3 className="font-sans font-semibold text-navy text-lg mb-3">
                  {value.title}
                </h3>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
