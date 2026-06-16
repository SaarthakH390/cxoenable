import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-navy via-navy-deep to-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-accent" />
            <span className="font-sans text-accent text-sm uppercase tracking-wider font-semibold">
              Get Started
            </span>
            <span className="h-px w-12 bg-accent" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6">
            Build Leadership With Confidence.
          </h2>
          <p className="font-sans text-gray-300 mb-10 leading-relaxed">
            Schedule a confidential conversation to discuss your leadership requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-accent text-white font-sans font-medium text-base rounded-lg hover:bg-accent/90 transition-colors duration-200 shadow-lg shadow-accent/25"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 bg-transparent text-white font-sans font-medium text-base rounded-lg border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
