import FeaturedCourses from "@/components/FeaturedCourses";
import FooterSection from "@/components/FooterSection";
import { HeroHighlightDemo } from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialSection from "@/components/TestimonialSection";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/whyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroHighlightDemo />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialSection />
      <UpcomingWebinars />
      <Instructors />
      <FooterSection />
    </main>
  );
}
