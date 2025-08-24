import Image from 'next/image';
import { Card } from './ui/card';

const ProductLogos = () => {
  const products = [
    {
      name: 'Amazon Alexa',
      logo: '/products/alexa.png',
      description: 'Voice control and smart home automation',
      bgColor: 'from-sky-500/10 via-cyan-400/5 to-teal-500/10',
      borderColor: 'border-sky-500/20',
    },
    {
      name: 'Google Assistant',
      logo: '/products/googleAssistant.png',
      description: 'AI-powered voice commands and control',
      bgColor: 'from-yellow-500/10 via-amber-400/5 to-orange-500/10',
      borderColor: 'border-yellow-500/20',
    },
    {
      name: 'Google Cast',
      logo: '/products/googleCast.png',
      description: 'Seamless media streaming and casting',
      bgColor: 'from-blue-500/10 via-indigo-400/5 to-purple-500/10',
      borderColor: 'border-blue-500/20',
    },
    {
      name: 'Apple HomeKit',
      logo: '/products/homekit.png',
      description: 'Secure and private smart home ecosystem',
      bgColor: 'from-orange-500/10 via-amber-400/5 to-yellow-500/10',
      borderColor: 'border-orange-500/20',
    },
    {
      name: 'Philips Hue',
      logo: '/products/phillupsHue.png',
      description: 'Advanced lighting control and automation',
      bgColor: 'from-purple-500/10 via-violet-400/5 to-indigo-500/10',
      borderColor: 'border-purple-500/20',
    },
    {
      name: 'Shelly',
      logo: '/products/shelly.png',
      description: 'Reliable smart home devices and sensors',
      bgColor: 'from-cyan-500/10 via-emerald-400/5 to-teal-500/10',
      borderColor: 'border-cyan-500/20',
    },
    {
      name: 'Samsung SmartThings',
      logo: '/products/smartThings.png',
      description: 'Comprehensive smart home platform',
      bgColor: 'from-blue-500/10 via-cyan-400/5 to-teal-500/10',
      borderColor: 'border-blue-500/20',
    },
    {
      name: 'Sonos',
      logo: '/products/sonos.png',
      description: 'Premium wireless audio and home theater',
      bgColor: 'from-purple-500/10 via-violet-400/5 to-indigo-500/10',
      borderColor: 'border-purple-500/20',
    },
    {
      name: 'Zigbee',
      logo: '/products/zigbee.png',
      description: 'Low-power wireless mesh networking',
      bgColor: 'from-pink-500/10 via-rose-400/5 to-red-500/10',
      borderColor: 'border-pink-500/20',
    },
    {
      name: 'Home Wizard Energy',
      logo: '/products/homeWizard.png',
      description: 'Smart energy management and monitoring',
      bgColor: 'from-green-500/10 via-emerald-400/5 to-teal-500/10',
      borderColor: 'border-green-500/20',
    },
  ];

  return (
    <section id="products" className="py-20 px-6 relative overflow-hidden">
      {/* Blurred background elements
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-to-r from-primary/20 via-purple-500/15 to-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/15 via-cyan-400/20 to-teal-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-[700px] h-[700px] bg-gradient-to-l from-pink-500/15 via-rose-400/20 to-red-500/15 rounded-full blur-3xl"></div>
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-geist mb-6 gradient-header">
            Compatible with Leading Brands
          </h2>
          <p className="text-xl text-foreground font-manrope max-w-3xl mx-auto">
            Seamlessly integrate with your favorite smart home devices and
            platforms. Our system works with the most popular brands in the
            industry.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`p-4 md:p-6 transition-all duration-300 group border ${product.borderColor} bg-gradient-to-br ${product.bgColor} backdrop-blur-sm hover:scale-105 hover:shadow-xl hover:shadow-primary/10`}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="relative w-16 h-16 md:w-20 md:h-20 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={product.logo}
                    alt={`${product.name} logo`}
                    fill
                    className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                    sizes="(max-width: 768px) 64px, 80px"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm md:text-base font-semibold font-geist text-foreground leading-tight">
                    {product.name}
                  </h3>
                  {/* <p className="text-xs md:text-sm text-muted-foreground font-manrope leading-relaxed hidden md:block">
                    {product.description}
                  </p> */}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground">
              All devices automatically detected and configured
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductLogos;
