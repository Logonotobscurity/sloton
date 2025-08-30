import Link from 'next/link';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 border-t border-white/10 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <Link href="/" className="font-bold text-2xl tracking-tighter text-primary" prefetch={false}>
              LOG_ON
            </Link>
            <p className="text-sm text-muted-foreground">
              Powering business efficiency with smart technology solutions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-6 text-primary text-lg">Services</h3>
            <ul className="space-y-3 list-none">
              <li><Link href="/solutions" className="text-muted-foreground hover:text-primary text-sm transition-colors">IT Solutions</Link></li>
              <li><Link href="/automation" className="text-muted-foreground hover:text-primary text-sm transition-colors">Automation</Link></li>
              <li><Link href="/use-cases" className="text-muted-foreground hover:text-primary text-sm transition-colors">Use Cases</Link></li>
              <li><Link href="/training" className="text-muted-foreground hover:text-primary text-sm transition-colors">Training</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-6 text-primary text-lg">Company</h3>
             <ul className="space-y-3 list-none">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><Link href="/insights" className="text-muted-foreground hover:text-primary text-sm transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-6 text-primary text-lg">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter /></a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin /></a>
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} LOG_ON. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
