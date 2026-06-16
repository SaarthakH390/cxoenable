const industries = [
  { name: 'Technology', description: 'Software, Hardware, IT Services' },
  { name: 'Manufacturing', description: 'Industrial, Automotive, Aerospace' },
  { name: 'Healthcare', description: 'Pharmaceuticals, Medical Devices, Services' },
  { name: 'Consumer', description: 'Retail, FMCG, E-commerce' },
  { name: 'Industrial', description: 'Energy, Infrastructure, Construction' },
  { name: 'Financial Services', description: 'Banking, Insurance, Asset Management' },
];

export function IndustriesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-4">
            Industries We Serve
          </h2>
          <p className="font-sans text-gray-600 max-w-2xl mx-auto">
            Sector expertise across executive leadership requirements.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group relative p-6 rounded-lg bg-white border border-gray-100 hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all duration-200 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-navy group-hover:bg-accent transition-colors duration-200" />
              <div className="pl-4">
                <h3 className="font-sans font-semibold text-navy group-hover:text-accent transition-colors duration-200 mb-2">
                  {industry.name}
                </h3>
                <p className="font-sans text-gray-500 text-sm">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
