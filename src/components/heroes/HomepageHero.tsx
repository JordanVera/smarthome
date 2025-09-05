'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { TextFlip } from '../ui/text-flip';
import { AnimatedBackground } from '../ui/animated-background';
import { AnimatedBackgroundVibrant } from '../ui/animated-background-vibrant';

export default function HomepageHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden mt-[68px]">
      <AnimatedBackgroundVibrant />
      <div className={`absolute inset-0 bg-background/30`} />

      <div className="relative z-10 text-center max-w-4xl mx-auto  ">
        <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
          Next-Gen Smart Home Technology
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold font-geist mb-6 bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent">
          The Future of
          <br />
          {/* <TextFlip
            words={['Home Automation', 'lifts', 'leads']}
            interval={3000}
          /> */}
          <span className="gradient-header">Home Automation</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-manrope leading-relaxed">
          Transform your living space with intelligent automation that learns,
          adapts, and evolves with your lifestyle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="btn-primary text-white font-semibold px-8 py-4"
          >
            Explore Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-muted px-8 py-4 bg-transparent"
          >
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
