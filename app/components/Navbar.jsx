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
    <nav className="sticky md:fixed top-0 z-50 w-full bg-white shadow-md ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image src="/Skill.jobs_.png" width={160} height={60} alt="Daffodil Group" className="rounded-lg" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-5 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-800 px-2 py-2 hover:bg-gray-200 duration-300 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="https://training.skill.jobs/courses"
                className="text-blue-600 hover:text-blue-800 px-2 py-2 hover:bg-gray-200 duration-300 rounded-md text-sm font-medium"
              >
                Courses
              </Link>
              <Link
                href="https://training.skill.jobs/online-course"
                className="text-blue-600 hover:text-blue-800 px-2 py-2 hover:bg-gray-200 duration-300 rounded-md text-sm font-medium"
              >
                Online Courses
              </Link>
              <Link
                href="https://training.skill.jobs/program/workshop"
                className="text-blue-600 hover:text-blue-800 px-2 py-2 hover:bg-gray-200 duration-300 rounded-md text-sm font-medium"
              >
                Workshop
              </Link>
              <Link
                href="https://training.skill.jobs/program/free-class"
                className="text-blue-600 hover:text-blue-800 px-2 py-2 hover:bg-gray-200 duration-300 rounded-md text-sm font-medium"
              >
                Free Class
              </Link>
              <Link
                href="https://training.skill.jobs/program/events"
                className="text-blue-600 hover:text-blue-800 px-2 py-2 hover:bg-gray-200 duration-300 rounded-md text-sm font-medium"
              >
                Events
              </Link>
              <Link
                href="https://training.skill.jobs/program/short-course"
                className="text-blue-600 hover:text-blue-800 px-2 py-2 hover:bg-gray-200 duration-300 rounded-md text-sm font-medium"
              >
                Short Course
              </Link>
              <Link
                href="https://skill.jobs/contact-us"
                className="text-blue-600 hover:text-blue-800 px-2 py-2 hover:bg-gray-200 duration-300 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
              <Link
                href="https://skill.jobs/"
                className="text-blue-600 hover:text-blue-800 px-2 py-2 hover:bg-gray-200 duration-300 rounded-md text-sm font-medium"
              >
                Back to Skill Jobs
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
              <Link href="https://training.skill.jobs" className="block text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link href="https://training.skill.jobs/courses" className="block text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-base font-medium">
                Courses
              </Link>
              <Link href="https://training.skill.jobs/online-course" className="block text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-base font-medium">
                Online Courses
              </Link>
              <Link href="https://training.skill.jobs/program/workshop" className="block text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-base font-medium">
                Workshop
              </Link>
              <Link href="https://training.skill.jobs/program/free-class" className="block text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-base font-medium">
                Free Class
              </Link>
              <Link href="https://training.skill.jobs/program/events" className="block text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-base font-medium">
                Events
              </Link>
              <Link href="https://training.skill.jobs/program/short-course" className="block text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-base font-medium">
                Short Course
              </Link>
              <Link href="https://skill.jobs/contact-us" className="block text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-base font-medium">
                Contact
              </Link>
              <Link href="https://skill.jobs/" className="block text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-base font-medium">
                Back to Skill Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}