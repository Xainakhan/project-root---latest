// App.tsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./pages/navBar";
import type { PageType } from "./pages/types";
import ContactForm from "./pages/contactUs";
import Footer from "./pages/footer";
// Import page components
import HomePage from "./pages/homePage";
import ZeekrPage from "./pages/zeekr";
import RiddaraPage from "./pages/riddara";
import ForthingPage from "./pages/forthing";
import JmevPage from "./pages/jmev";
import AboutPage from "./pages/aboutUs";
import News from "./pages/newsAndInsights";
import StoreLocation from "./pages/location";
import CombinedCareer from "./pages/career";
import TermsAndConditions from "./pages/termsAndConditions";
import FAQPage from "./pages/faqs";

// Component that handles navigation logic
const AppContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  // Map paths to page types
  const pathToPageMap: Record<string, PageType> = {
    "/": "home",
    "/home": "home",
    "/homepage": "homepage",
    "/about": "about",
    "/zeekr": "zeekr",
    "/riddara": "riddara",
    "/forthing": "forthing",
    "/jmev": "jmev",
    "/news": "news",
    "/contact": "contact",
    "/locations": "locations",
    "/career": "career",
    "/faqs": "faqs",
    "/terms-and-conditions": "termsAndConditions",
    "/vision": "vision",
    "/mission": "mission"
  };

  // Map page types to paths
  const pageToPathMap: Record<PageType, string> = {
    "home": "/",
    "homepage": "/",
    "about": "/about",
    "zeekr": "/zeekr",
    "riddara": "/riddara",
    "forthing": "/forthing",
    "jmev": "/jmev",
    "news": "/news",
    "contact": "/contact",
    "locations": "/locations",
    "career": "/career",
    "faqs": "/faqs",
    "termsAndConditions": "/terms-and-conditions",
    "vision": "/vision",
    "mission": "/mission"
  };

  // Update currentPage when location changes
  useEffect(() => {
    const page = pathToPageMap[location.pathname] || "home";
    setCurrentPage(page);
  }, [location.pathname]);

  // Function to handle page changes - maintains the same interface
  const handlePageChange = (page: PageType) => {
    const path = pageToPathMap[page];
    navigate(path);
    setCurrentPage(page);
    console.log("Navigating to:", page, "at path:", path);
  };

  // Function to handle back navigation to homepage
  const handleBackToHome = () => {
    navigate("/");
    setCurrentPage("home");
    console.log("Navigating back to home");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onPageChange={handlePageChange} currentPage={currentPage} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/zeekr" element={<ZeekrPage />} />
          <Route path="/riddara" element={<RiddaraPage onBack={handleBackToHome} />} />
          <Route path="/forthing" element={<ForthingPage onBack={handleBackToHome} />} />
          <Route path="/jmev" element={<JmevPage onBack={handleBackToHome} />} />
          <Route path="/news" element={<News onBack={handleBackToHome} />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/locations" element={<StoreLocation />} />
          <Route path="/career" element={<CombinedCareer />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          {/* Vision and Mission routes - you can add actual components later */}
          <Route path="/vision" element={<AboutPage />} />
          <Route path="/mission" element={<AboutPage />} />
          {/* Catch all route - redirect to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer onPageChange={handlePageChange} />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;