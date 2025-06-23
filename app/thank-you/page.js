"use client";

import { CheckCircle, Mail, Phone, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export default function ThankYou() {
  useEffect(() => {
    // Track CompleteRegistration event since user reached thank you page
    const trackRegistration = () => {
      if (window.fbq) {
        window.fbq('track', 'CompleteRegistration');
      } else {
        // Retry after a short delay if fbq isn't loaded yet
        setTimeout(trackRegistration, 500);
      }
    };
    
    // Small delay to ensure pixel is loaded from layout
    setTimeout(trackRegistration, 1000);
  }, []);

  return (
    <main className="">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-[120px] pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-20 h-20 text-green-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your enrollment has been successfully submitted. We are excited to have you join our learning community!
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}