"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };

    // Check on mount
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Clean up
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image src="/Skill.jobs_.png" width={210} height={100} alt="Daffodil Group" className="rounded-lg" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/courses"
                style={{
                  borderRadius: "4px",
                }}
                className="text-blue-600 hover:text-blue-800 px-3 hover:bg-gray-200 duration-300 py-2  text-sm font-medium"
              >
                View All Courses
              </Link>
              <Link href="/login" style={{ borderRadius: "4px" }} className="text-blue-600 hover:text-blue-800 hover:bg-gray-200 duration-300 px-3 py-2 rounded-md text-sm font-medium">
                Login
              </Link>
              <Link
                style={{
                  borderRadius: "4px",
                }}
                href="/register"
                className="text-blue-600 hover:text-blue-800 hover:bg-gray-200 duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Register
              </Link>
              <Link href="https://skill.jobs/contact-us" style={{ borderRadius: "4px" }} className="text-blue-600 hover:text-blue-800 hover:bg-gray-200 duration-300 px-3 py-2 rounded-md text-sm font-medium">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleSidebar}>
              <span className="sr-only">Open main menu</span>
              <Menu className="!size-10 text-blue-600" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Sidebar */}
      <div className={`fixed inset-0 z-50 ${isSidebarOpen ? "visible" : "invisible"}`}>
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black transition-all duration-300 ease-in-out ${isSidebarOpen ? "opacity-50 visible" : "opacity-0 invisible"}`} onClick={toggleSidebar}></div>

        {/* Sidebar */}
        <div className={`absolute top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-all duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0 opacity-100 visible" : "-translate-x-full opacity-0 invisible"}`}>
          <div className="p-4">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="flex-shrink-0">
                <Image src="/Skill.jobs_.png" width={130} height={100} alt="Daffodil Group" className="rounded-lg" />
              </Link>
              <Button variant="ghost" onClick={toggleSidebar}>
                <X className="!size-10  text-blue-600" aria-hidden="true" />
              </Button>
            </div>
            <div className="space-y-4">
              <Link href="/courses" className="block text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-base font-medium">
                View All Courses
              </Link>
              <Link href="/login" className="block text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-base font-medium">
                Login
              </Link>
              <Link href="/register" className="block text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-base font-medium">
                Register
              </Link>
              <Link href="https://skill.jobs/contact-us" className="block text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-base font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
