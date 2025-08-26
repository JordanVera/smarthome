import { ArrowRight } from 'lucide-react';
import React from 'react';

const ProductsShowcase = () => {
  return (
    <section
      id="products"
      className="py-20 px-6 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-geist mb-6 gradient-header">
            Revolutionary Products
          </h2>
          <p className="text-xl text-muted-foreground font-manrope max-w-2xl mx-auto">
            Discover our ecosystem of intelligent devices designed to elevate
            your home
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="frosted-glass-dark p-8 rounded-2xl">
              <h3 className="text-2xl font-bold font-geist mb-4 text-primary">
                NexusHub Pro
              </h3>
              <p className="text-muted-foreground font-manrope mb-6">
                The brain of your smart home. Powered by quantum processors and
                AI neural networks for unprecedented automation intelligence.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-primary mr-2" />
                  Quantum-enhanced processing
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-primary mr-2" />
                  Voice recognition in 50+ languages
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-primary mr-2" />
                  Predictive automation algorithms
                </li>
              </ul>
            </div>

            <div className="frosted-glass-dark p-8 rounded-2xl">
              <h3 className="text-2xl font-bold font-geist mb-4 text-secondary">
                SmartSense Network
              </h3>
              <p className="text-muted-foreground font-manrope mb-6">
                Invisible sensors that create a comprehensive awareness layer
                throughout your home, monitoring everything from air quality to
                security.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-secondary mr-2" />
                  Wireless mesh topology
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-secondary mr-2" />
                  10-year battery life
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-secondary mr-2" />
                  Real-time environmental monitoring
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="frosted-glass-dark p-8 rounded-3xl">
              <img
                src="/smart-home.jpg"
                alt="Seamless Smart Solutions Smart Hub"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
