import { Home, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './theme-toggle';
import Link from 'next/link';
import AuthButtons from './AuthButtons';
import { SignedIn } from '@clerk/nextjs';
import AdminOnly from './AdminOnly';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 frosted-glass-dark">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold font-geist">NexusHome</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <AdminOnly>
              <Link href="/estimate">Estimate</Link>
            </AdminOnly>
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
            <SignedIn>
              <Link
                href="/dashboard"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Dashboard
              </Link>
            </SignedIn>
            <ThemeToggle />
            <AuthButtons />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Navigation</DrawerTitle>
                </DrawerHeader>
                <div className="p-4 space-y-4">
                  <AdminOnly>
                    <Link
                      href="/estimate"
                      className="block py-2 text-foreground hover:text-primary transition-colors"
                    >
                      Estimate
                    </Link>
                  </AdminOnly>
                  <a
                    href="#features"
                    className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                  <a
                    href="#products"
                    className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Products
                  </a>
                  <a
                    href="#about"
                    className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                  <SignedIn>
                    <Link
                      href="/dashboard"
                      className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Dashboard
                    </Link>
                  </SignedIn>
                  <div className="pt-4">
                    <AuthButtons />
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
}
