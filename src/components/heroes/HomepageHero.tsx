import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

export default function HomepageHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background opacity-90"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/25 to-cyan-400/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-pink-500/20 to-rose-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/15 to-indigo-400/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
          Next-Gen Smart Home Technology
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold font-geist mb-6 bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent">
          The Future of
          <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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
    </section>
  );
}
