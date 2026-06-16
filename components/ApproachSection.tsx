const steps = [
  {
    number: '01',
    title: 'Understand',
    description: 'We begin by deeply understanding your organization, leadership context, strategic goals, and culture before any candidate discussions.',
  },
  {
    number: '02',
    title: 'Identify',
    description: 'Through our network and research, we identify exceptional candidates who align with your vision and leadership needs.',
  },
  {
    number: '03',
    title: 'Enable',
    description: 'We guide the process from introduction through integration, ensuring successful leadership transitions.',
  },
];

export function ApproachSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="px-3 py-1 bg-accent/10 rounded-full">
              <span className="font-sans text-accent text-xs uppercase tracking-wider font-semibold">
                Our Process
              </span>
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-4">
            Our Approach
          </h2>
          <p className="font-sans text-gray-600 max-w-2xl mx-auto">
            A thoughtful, three-step process designed to deliver leadership outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.title} className="relative group">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-accent to-transparent -translate-x-4" />
              )}
              <div className="text-center lg:text-left p-8 rounded-xl bg-gray-50 hover:bg-navy/[0.03] transition-colors duration-200">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-navy text-white font-serif text-2xl mb-6 group-hover:bg-accent transition-colors duration-200">
                  {step.number}
                </div>
                <h3 className="font-sans font-semibold text-xl text-navy mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
