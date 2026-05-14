import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MembershipPage from "./pages/MembershipPage";
import BusinessExportClubPage from "./pages/BusinessExportClubPage";
import ContactPage from "./pages/ContactPage";
import RegisterPage from "./pages/RegisterPage";
import EventsPage from "./pages/EventsPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import GalleryPage from "./pages/GalleryPage";
import FAQPage from "./pages/FAQPage";
import TeamPage from "./pages/TeamPage";
import PartnersPage from "./pages/PartnersPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentSlug, setCurrentSlug] = useState<string | undefined>();

  const handleNavigate = (page: string, slug?: string) => {
    setCurrentPage(page);
    setCurrentSlug(slug);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage />;
      case "membership":
        return <MembershipPage onNavigate={handleNavigate} />;
      case "business-export-club":
        return <BusinessExportClubPage />;
      case "contact":
        return <ContactPage />;
      case "register":
        return <RegisterPage onNavigate={handleNavigate} />;
      case "events":
        return <EventsPage />;
      case "blog":
        return <BlogPage onNavigate={handleNavigate} />;
      case "blog-post":
        return <BlogPostPage slug={currentSlug} onNavigate={handleNavigate} />;
      case "gallery":
        return <GalleryPage />;
      case "faq":
        return <FAQPage />;
      case "team":
        return <TeamPage />;
      case "partners":
        return <PartnersPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;