// src/components/layout/Footer.tsx
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/50 mt-24">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-text-secondary text-sm">
          &copy; {new Date().getFullYear()} ADmyBRAND AI Suite. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <Link href="#" className="text-text-secondary hover:text-text-primary transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-text-secondary hover:text-text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}