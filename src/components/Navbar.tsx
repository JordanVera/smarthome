import { Home, Menu, ChevronDown, Settings } from 'lucide-react';
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 frosted-glass-dark">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logos/logo-white.png"
              alt="Seamless Smart Solutions Logo"
              width={250}
              height={250}
              className="hidden dark:block"
              priority
            />
            <Image
              src="/logos/logo-black.png"
              alt="Seamless Smart Solutions Logo"
              width={250}
              height={250}
              className="block dark:hidden"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <AdminOnly>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Admin
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/estimate">Estimate</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/products">Products</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/api-test">API Test</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </AdminOnly>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Residential
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/residential/shades-blinds">Shades & Blinds</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/residential/smart-lighting">Smart Lighting</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/residential/smart-thermostats">
                    Smart Thermostats
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
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
                    <div className="space-y-2">
                      <div className="font-medium text-foreground">Admin</div>
                      <div className="pl-4 space-y-2">
                        <Link
                          href="/products"
                          className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Products
                        </Link>
                        <Link
                          href="/estimate"
                          className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Estimate
                        </Link>
                      </div>
                    </div>
                  </AdminOnly>
                  <div className="space-y-2">
                    <div className="font-medium text-foreground">
                      Residential
                    </div>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/residential/shades-blinds"
                        className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Shades & Blinds
                      </Link>
                      <Link
                        href="/residential/smart-lighting"
                        className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Smart Lighting
                      </Link>
                      <Link
                        href="/residential/smart-thermostats"
                        className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Smart Thermostats
                      </Link>
                    </div>
                  </div>
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
