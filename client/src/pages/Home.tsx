import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ToursSection from "@/components/ToursSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import OfficeSection from "@/components/OfficeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEOHead from "@/components/SEOHead";

/**
 * Home Page - Main landing page for Amporn Tour
 * 
 * Design Philosophy: Warm Hospitality with Cultural Bridge
 * - Warm earth tones (terracotta, sage green) with deep teal accents
 * - Playfair Display for elegant headings + Poppins for readable body text
 * - Asymmetric layout with organic wave dividers
 * - Real photography prioritized; lazy loading for all images
 * - Multilingual support (English, Thai, Hebrew with RTL)
 * - Persistent WhatsApp integration
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOHead />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ToursSection />
        <TestimonialsSection />
        <AboutSection />
        <GallerySection />
        <OfficeSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
