'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { TextFlip } from '../ui/text-flip';

export default function HomepageHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background opacity-90"></div>
      <div className="absolute inset-0">
        {/* Larger, more vibrant background elements */}
        <div className="absolute top-10 left-5 w-[500px] h-[500px] bg-gradient-to-r from-primary/40 via-purple-500/30 to-secondary/40 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute top-20 right-10 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/35 via-cyan-400/40 to-teal-500/35 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute bottom-10 right-5 w-[700px] h-[700px] bg-gradient-to-l from-pink-500/30 via-rose-400/35 to-red-500/30 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-20 left-10 w-[550px] h-[550px] bg-gradient-to-r from-purple-500/25 via-indigo-400/30 to-blue-500/25 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '0.5s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-orange-500/20 via-red-500/25 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '1.5s' }}
        ></div>

        {/* Additional vibrant elements for more coverage */}
        <div
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-yellow-400/25 via-orange-400/30 to-red-400/25 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '0.8s' }}
        ></div>
        <div
          className="absolute top-3/4 right-1/4 w-[450px] h-[450px] bg-gradient-to-bl from-green-400/20 via-emerald-400/25 to-teal-400/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '1.2s' }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-[350px] h-[350px] bg-gradient-to-tr from-violet-400/30 via-purple-400/35 to-pink-400/30 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '0.3s' }}
        ></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
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
          <span className="bg-gradient-to-r from-primary via-pink-500 to-secondary bg-clip-text text-transparent">
            Home Automation
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-manrope leading-relaxed">
          Transform your living space with intelligent automation that learns,
          adapts, and evolves with your lifestyle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-4"
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

      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}
