
import Link from 'next/link';
import { X, Instagram } from 'lucide-react';
import { IconMedium, IconSubstack } from '@/lib/icons';

const socialLinks = [
  { href: 'https://medium.com/@Logon_thepage', label: 'Medium', icon: <IconMedium className="w-6 h-6" /> },
  { href: 'https://x.com/log_onthepage', label: 'X', icon: <X className="w-6 h-6" /> },
  { href: 'https://www.instagram.com/logon_thepage/', label: 'Instagram', icon: <Instagram className="w-6 h-6" /> },
  { href: 'https://substack.com/@logonthepage', label: 'Substack', icon: <IconSubstack className="w-6 h-6" /> },
];

export function Footer() {
  return (
    <footer className="py-8 md:py-16 border-t border-white/10 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 text-center md:text-left">
            <Link href="/" className="inline-block" prefetch={false}>
                <div className="flex flex-col items-center md:items-start">
                  <span className="font-bold text-2xl tracking-tighter text-primary leading-tight">LOG_ON</span>
                  <span className="text-xs text-muted-foreground -mt-1">Connecting Advantages...</span>
                </div>
            </Link>
            <address className="text-sm text-muted-foreground not-italic">
              LOG_ON connecting Advantages<br />
              [Virtual Office] 123 Innovation Drive, Yaba, Lagos, Nigeria<br />
              Serving clients worldwide
            </address>
            <p className="text-sm text-muted-foreground">
              Powering business efficiency with smart technology solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 md:col-span-2 gap-8">
              <div className="text-center md:text-left">
                <h3 className="font-semibold mb-4 text-primary text-lg">Services</h3>
                <ul className="space-y-2 list-none">
                  <li><Link href="/solutions" className="text-muted-foreground hover:text-primary text-sm transition-colors">IT Solutions</Link></li>
                  <li><Link href="/automation" className="text-muted-foreground hover:text-primary text-sm transition-colors">Automation</Link></li>
                  <li><Link href="/use-cases" className="text-muted-foreground hover:text-primary text-sm transition-colors">Use Cases</Link></li>
                  <li><Link href="/training" className="text-muted-foreground hover:text-primary text-sm transition-colors">Training</Link></li>
                </ul>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-semibold mb-4 text-primary text-lg">Company</h3>
                 <ul className="space-y-2 list-none">
                  <li><Link href="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">About Us</Link></li>
                  <li><Link href="/insights" className="text-muted-foreground hover:text-primary text-sm transition-colors">Insights</Link></li>
                   <li><Link href="/#faq" className="text-muted-foreground hover:text-primary text-sm transition-colors">FAQ</Link></li>
                  <li><Link href="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</Link></li>
                </ul>
              </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4 text-primary text-lg">Connect</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
               {socialLinks.map(link => (
                  <a key={link.label} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    {link.icon}
                  </a>
                ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} LOG_ON. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
