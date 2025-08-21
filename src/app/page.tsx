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
import FeaturesSection from '@/components/FeaturesSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <HomepageHero />
      {/* Features Section */}
      <FeaturesSection />
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
    </div>
  );
}
