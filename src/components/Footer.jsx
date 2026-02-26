import { NavLink } from 'react-router-dom';
import { Landmark, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border mt-auto w-full flex-shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4 pr-4">
            <NavLink to="/" className="flex items-center gap-2 group">
              <Landmark className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-secondary dark:from-primary dark:via-cyan-400 dark:to-secondary">
                MH Loan
              </span>
            </NavLink>
            <p className="text-sm text-text-muted leading-relaxed">
              Financial Support When You Need It Most. Empowering Canadians with affordable lending solutions. Experience a new standard of trust and transparency.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase mb-5 text-text">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Meet Our Team', path: '/team' },
                { name: 'Blog & News', path: '/blog' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="text-sm text-text-muted hover:text-primary transition-colors hover:underline underline-offset-4"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase mb-5 text-text">
              Resources
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'All Services', path: '/services' },
                { name: 'Loan Calculator', path: '/calculator' },
                { name: 'FAQs', path: '/faq' },
                { name: 'Apply Now', path: '/apply' },
              ].map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="text-sm text-text-muted hover:text-primary transition-colors hover:underline underline-offset-4"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Compliance */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase mb-5 text-text">
              Legal
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms of Service', path: '/privacy' },
                { name: 'Data Protection', path: '/privacy' },
              ].map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="text-sm text-text-muted hover:text-primary transition-colors hover:underline underline-offset-4"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-muted">
          <p>&copy; {new Date().getFullYear()} MH Loan. All rights reserved.</p>
          <p className="mt-2 md:mt-0">123 Finance Way, Suite 400, Toronto, ON M5V 2T6, Canada</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
