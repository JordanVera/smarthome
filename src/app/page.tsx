import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  ArrowRight,
  Home,
  Shield,
  Zap,
  Smartphone,
  Wifi,
  Settings,
} from 'lucide-react';
import HomepageHero from '@/components/heroes/HomepageHero';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <HomepageHero />
      {/* Features Section */}
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

      {/* Products Showcase */}
      <section
        id="products"
        className="py-20 px-6 bg-gradient-to-b from-background to-muted/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-geist mb-6">
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
                  The brain of your smart home. Powered by quantum processors
                  and AI neural networks for unprecedented automation
                  intelligence.
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
                  throughout your home, monitoring everything from air quality
                  to security.
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
                  src="/placeholder-fp4gd.png"
                  alt="NexusHome Smart Hub"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="frosted-glass-dark p-12 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-bold font-geist mb-6">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-muted-foreground font-manrope mb-8">
              Join thousands of homeowners who have already stepped into the
              future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-4"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted px-8 py-4 bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-geist">NexusHome</span>
            </div>
            <div className="flex space-x-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Support
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 NexusHome. All rights reserved. The future of home
            automation.
          </div>
        </div>
      </footer>
    </div>
  );
}
