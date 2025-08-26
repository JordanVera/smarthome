import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logos/logo-white.png"
                alt="NexusHome Logo"
                width={250}
                height={250}
                className="hidden dark:block"
                priority
              />
              <Image
                src="/logos/logo-black.png"
                alt="NexusHome Logo"
                width={250}
                height={250}
                className="block dark:hidden"
                priority
              />
            </Link>
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
          © 2024 NexusHome. All rights reserved. The future of home automation.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
