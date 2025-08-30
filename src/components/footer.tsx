import Link from 'next/link';
import { CodeXml, Twitter, Linkedin, Facebook, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <CodeXml className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">LOG_ON</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Powering business efficiency with smart technology solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solutions" className="text-muted-foreground hover:text-primary">IT Solutions</Link></li>
              <li><Link href="/automation" className="text-muted-foreground hover:text-primary">Automation</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">Trainings</Link></li>
              <li><Link href="/solutions" className="text-muted-foreground hover:text-primary">Scalable Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter /></a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin /></a>
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:logo@logon.com.ng" className="text-muted-foreground hover:text-primary">logo@logon.com.ng</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-muted-foreground">+234 814 306 6320</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto px-4 md:px-6 py-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} LOG_ON. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
