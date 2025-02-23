import AboutUs from "@/features/landing/about-us";
import ContactUs from "@/features/landing/contact-us";
import Gallery from "@/features/landing/gallary";
import HeroSection from "@/features/landing/hero-section";
import Products from "@/features/landing/products";
export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <HeroSection />
      {/* Products Section */}
      <Products />
      {/* About-us and aervices Section */}
      <AboutUs />
      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <ContactUs />
    </div>
  );
}
