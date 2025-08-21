import { Home } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './theme-toggle';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 frosted-glass-dark">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold font-geist">NexusHome</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#products"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Products
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <ThemeToggle />
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
