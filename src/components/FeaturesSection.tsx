import { Shield, Zap, Smartphone, Wifi, Settings, Home } from 'lucide-react';
import { Card } from './ui/card';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-geist mb-6">
            Intelligent by Design
          </h2>
          <p className="text-xl text-muted-foreground font-manrope max-w-2xl mx-auto">
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
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: 'Military-Grade Security',
              description:
                'End-to-end encryption with biometric authentication protocols',
            },
            {
              icon: <Smartphone className="w-8 h-8" />,
              title: 'Universal Control',
              description:
                'Control everything from anywhere with our advanced mobile app',
            },
            {
              icon: <Wifi className="w-8 h-8" />,
              title: 'Mesh Network',
              description:
                'Self-healing network that ensures 99.9% uptime reliability',
            },
            {
              icon: <Settings className="w-8 h-8" />,
              title: 'AI Learning',
              description:
                'Adaptive algorithms that learn your preferences automatically',
            },
            {
              icon: <Home className="w-8 h-8" />,
              title: 'Seamless Integration',
              description:
                'Works with 10,000+ devices from leading smart home brands',
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="frosted-glass-dark p-6 hover:bg-muted/50 transition-all duration-300 group"
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
