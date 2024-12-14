import Image from "next/image";
import Link from "next/link";

const courseLinks = [
  { title: "Full Stack Web Development", href: "/courses/web-development" },
  { title: "Microsoft Power BI", href: "/courses/data-science" },
  { title: "Video Editing", href: "/courses/mobile-development" },
];

const resourceLinks = [{ title: "About Us", href: "https://skill.jobs/about-us" }, { title: "Blog", href: "https://blog.skill.jobs/" }, , { title: "Contact", href: "https://skill.jobs/contact-us" }];

const legalLinks = [
  { title: "Terms & Conditions", href: "https://skill.jobs/terms-and-conditions" },
  { title: "Privacy Policy", href: "https://skill.jobs/privacy-and-policy" },
  { title: "Refund Policy", href: "/refund" },
];

const helpCenter = [
  {
    address: "DT4, 102/1 Shukrabad, Mirpur Road, Dhanmondi, Dhaka-1207",
    cell: ["01847-334766", "+8801847027537"],
    email: "contact@skill.jobs",
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-300 text-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600">A Concern Of Daffodil Family</h3>
            <Link href="/">
              <Image src="/Skill.jobs_.png" width={300} height={100} alt="Daffodil Group" className="rounded-lg" />
            </Link>
            <p className="text-slate-800 mt-4">SkillJobs Learning - a leading job application site and online career portal in Bangladesh</p>
          </div>

          {/* Courses Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600">Our Courses</h3>
            <ul className="space-y-2">
              {courseLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-800 hover:text-blue-600 transition-colors">
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
                  <Link href={link.href} className="text-slate-800 hover:text-blue-600 transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Help Center Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600">Legal</h3>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-800 hover:text-blue-600 transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600">Help Center</h3>
            <div className="text-slate-800">
              <p className="mb-2">Address: {helpCenter[0].address}</p>
              <p className="mb-2">Cell: {helpCenter[0].cell.join(", ")}</p>
              <p>
                Email:{" "}
                <a href={`mailto:${helpCenter[0].email}`} className="text-blue-600 hover:underline">
                  {helpCenter[0].email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-800 text-sm text-center w-full">© {new Date().getFullYear()} SkillJobs Learning. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
