import React from "react";
import HeroSlider from "../components/HeroSlider";
import ServicesCarousel from "../components/ServicesCarousel";
import AboutSection from "../components/AboutSection";
import ActivitiesSection from "../components/ActivitiesSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import ContactInfoSection from "../components/ContactInfoSection";
import BlogSection from "../components/BlogSection";

interface HomePageProps {
  onNavigate: (page: string, slug?: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div>
      <HeroSlider />
      <ServicesCarousel />
      <AboutSection onNavigate={onNavigate} />
      <ActivitiesSection />
      <TeamSection />
      <ContactSection />
      <ContactInfoSection />
      <BlogSection onNavigate={onNavigate} />
    </div>
  );
};

export default HomePage;
