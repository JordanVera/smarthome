import { Shield, Zap, Smartphone, Wifi, Settings, Home } from 'lucide-react';
import { Card } from './ui/card';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-6 relative overflow-hidden">
      {/* Blurred background elements using hero colors */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-to-r from-primary/20 via-purple-500/15 to-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/15 via-cyan-400/20 to-teal-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-[700px] h-[700px] bg-gradient-to-l from-pink-500/15 via-rose-400/20 to-red-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-[550px] h-[550px] bg-gradient-to-r from-purple-500/15 via-indigo-400/20 to-blue-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-orange-500/10 via-red-500/15 to-pink-500/10 rounded-full blur-3xl"></div>
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-geist mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Intelligent by Design
          </h2>
          <p className="text-xl text-foreground font-manrope max-w-2xl mx-auto">
            Experience the perfect fusion of cutting-edge technology and
            intuitive design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8" />,
              title: 'Lightning Fast Response',
              description:
                'Sub-millisecond response times with edge computing technology',
              bgColor: 'from-primary/10 via-blue-500/5 to-cyan-400/10',
              borderColor: 'border-primary/20',
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: 'Military-Grade Security',
              description:
                'End-to-end encryption with biometric authentication protocols',
              bgColor: 'from-purple-500/10 via-indigo-400/5 to-blue-500/10',
              borderColor: 'border-purple-500/20',
            },
            {
              icon: <Smartphone className="w-8 h-8" />,
              title: 'Universal Control',
              description:
                'Control everything from anywhere with our advanced mobile app',
              bgColor: 'from-pink-500/10 via-rose-400/5 to-red-500/10',
              borderColor: 'border-pink-500/20',
            },
            {
              icon: <Wifi className="w-8 h-8" />,
              title: 'Mesh Network',
              description:
                'Self-healing network that ensures 99.9% uptime reliability',
              bgColor: 'from-green-500/10 via-emerald-400/5 to-teal-500/10',
              borderColor: 'border-green-500/20',
            },
            {
              icon: <Settings className="w-8 h-8" />,
              title: 'AI Learning',
              description:
                'Adaptive algorithms that learn your preferences automatically',
              bgColor: 'from-orange-500/10 via-yellow-400/5 to-red-400/10',
              borderColor: 'border-orange-500/20',
            },
            {
              icon: <Home className="w-8 h-8" />,
              title: 'Seamless Integration',
              description:
                'Works with 10,000+ devices from leading smart home brands',
              bgColor: 'from-cyan-500/10 via-teal-400/5 to-blue-400/10',
              borderColor: 'border-cyan-500/20',
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className={`p-6 transition-all duration-300 group border ${feature.borderColor} bg-gradient-to-br ${feature.bgColor} backdrop-blur-sm hover:scale-105 hover:shadow-xl`}
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold font-geist mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-manrope">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
