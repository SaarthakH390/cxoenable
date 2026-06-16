const clientTypes = [
  {
    title: 'Founders',
    description: 'Building leadership teams for scale and impact.',
  },
  {
    title: 'CEOs',
    description: 'Strengthening executive leadership and succession.',
  },
  {
    title: 'Leadership Teams',
    description: 'Advancing organizational capability and culture.',
  },
  {
    title: 'Business Owners',
    description: 'Making critical leadership decisions with confidence.',
  },
  {
    title: 'Boards',
    description: 'Ensuring governance and leadership excellence.',
  },
  {
    title: 'Growing Organizations',
    description: 'Scaling leadership capacity for sustainable growth.',
  },
];

export function WhoWeHelp() {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
            Who We Help
          </h2>
          <p className="font-sans text-gray-300 max-w-2xl mx-auto">
            Partnering with leaders who value judgment, experience, and discretion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientTypes.map((client) => (
            <div
              key={client.title}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-200"
            >
              <h3 className="font-sans font-semibold text-lg text-white mb-3">
                {client.title}
              </h3>
              <p className="font-sans text-gray-400 text-sm leading-relaxed">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
