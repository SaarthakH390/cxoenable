import Image from 'next/image';
import { Linkedin } from 'lucide-react';

export function FounderSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/10 rounded-2xl -z-10 hidden lg:block" />
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gray-200 border-4 border-white shadow-2xl shadow-navy/10">
              <Image
                src="https://images.pexels.com/photo/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Founder Portrait"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="font-sans text-accent text-sm uppercase tracking-wider font-semibold">
                The Founder
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-6">
              Experience Built Through Leadership.
            </h2>
            <div className="space-y-4 text-gray-600 font-sans leading-relaxed">
              <p>
                After years of leading executive hiring initiatives at established firms,
                our founder recognized the need for a more personalized, trust-based approach
                to leadership advisory.
              </p>
              <p>
                CXOEnable Advisors was founded on the principle that leadership decisions
                require judgment, discretion, and deep understanding of organizational
                context—not just candidate databases.
              </p>
              <p>
                We bring senior corporate experience, executive hiring expertise, and
                strategic insight to every engagement.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-sans font-medium text-sm rounded-lg hover:bg-navy-deep transition-colors duration-200 shadow-lg shadow-navy/10"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy font-sans font-medium text-sm rounded-lg border-2 border-navy hover:bg-navy hover:text-white transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
