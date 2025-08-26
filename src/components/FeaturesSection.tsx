import { Button } from './ui/button';

const FeaturesSection = () => {
  const featuresData = [
    {
      id: 1,
      title: 'Easy',
      subtitle: 'Make your home life easier',
      image: '/images/1.avif',
    },
    {
      id: 2,
      title: 'Save',
      subtitle: 'Save time and energy',
      image: '/images/2.avif',
    },
    {
      id: 3,
      title: 'Care',
      subtitle: 'Care for your loved ones',
      image: '/images/3.avif',
    },
    {
      id: 4,
      title: 'Secure',
      subtitle: 'Keep your data secure',
      image: '/images/4.avif',
    },
  ];

  return (
    <section id="features" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-geist mb-6 gradient-header">
            Intelligent by Design
          </h2>
          <p className="text-xl text-foreground font-manrope max-w-2xl mx-auto">
            Experience the perfect fusion of cutting-edge technology and
            intuitive design
          </p>
        </div>
        {/* Four vertical sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="bg-gray-100 rounded-2xl p-6 flex flex-col relative overflow-hidden h-[420px] lg:h-[380px]"
              style={{
                backgroundImage: `url(${feature.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Background image overlay for better text readability */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content with relative positioning to appear above the overlay */}
              <div className="relative z-10 flex-1 flex flex-col justify-between mt-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-lg mb-6 text-center">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
