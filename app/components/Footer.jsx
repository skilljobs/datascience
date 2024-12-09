import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const courseLinks = [
  { title: "Web Development", href: "/courses/web-development" },
  { title: "Data Science", href: "/courses/data-science" },
  { title: "Mobile Development", href: "/courses/mobile-development" },
  { title: "UI/UX Design", href: "/courses/ui-ux-design" },
  { title: "Machine Learning", href: "/courses/machine-learning" },
];

const resourceLinks = [
  { title: "About Us", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Student Forum", href: "/forum" },
  { title: "Help Center", href: "/help" },
  { title: "Contact", href: "/contact" },
];

const legalLinks = [
  { title: "Terms & Conditions", href: "/terms" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Cookie Policy", href: "/cookies" },
  { title: "Refund Policy", href: "/refund" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/daffodilgroup.jpg" width={300} height={100} alt="Daffodil Group" className="rounded-lg" />
            </Link>
            <p className="text-slate-400">Daffodil Learning - a leading job application site and online career portal in Bangladesh</p>
          </div>

          {/* Courses Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600">Our Courses</h3>
            <ul className="space-y-2">
              {courseLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-blue-600 transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-blue-600 transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600">Legal</h3>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-blue-600 transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-600">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                  <Youtube className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="  border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">© {new Date().getFullYear()} Daffodil Learning. All rights reserved.</div>
            <div className="hidden  flex items-center space-x-4">
              <Link href="/app-store" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-md transition-colors">
                App Store
              </Link>
              <Link href="/play-store" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-md transition-colors">
                Play Store
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
