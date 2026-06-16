import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-navy/[0.02] to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-accent" />
            <span className="font-sans text-accent text-sm uppercase tracking-widest font-semibold">
              Executive Search & Advisory
            </span>
            <span className="h-px w-12 bg-accent" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy leading-tight mb-8 animate-fade-up text-balance">
            Enabling Leadership That Drives Growth.
          </h1>
          <p className="font-sans text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            Executive Search and Leadership Advisory for organizations building high-impact leadership teams.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-navy text-white font-sans font-medium text-base rounded-lg hover:bg-navy-deep transition-colors duration-200 shadow-lg shadow-navy/10"
            >
              Schedule a Conversation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 bg-white text-navy font-sans font-medium text-base rounded-lg border-2 border-navy hover:bg-navy hover:text-white transition-colors duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
    </section>
  );
}
