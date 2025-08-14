import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";

// Import page components
import ZeekrPage from "./zeekr";
import RiddaraPage from "./riddara";
import ForthingPage from "./forthing";
import JmevPage from "./jmev";
import News from "../pages/newsAndInsights";

// Hero banners
import ZeekrBanner from "../assets/HeroBanner/ZeekrBanner.png";
import ForthingBanner from "../assets/HeroBanner/ForthingBanner.png";
import JMEVBanner from "../assets/HeroBanner/JMEVBanner.png";
import RiddaraBanner from "../assets/HeroBanner/RiddaraBanner.png";
import ZeekrBan from "../assets/insights/ZeekrBan.png";

// Car slider images
import image1 from "../assets/insights/Img1.jpg";
import image2 from "../assets/insights/Img2.jpg";
import image3 from "../assets/insights/Img3.jpg";
import image4 from "../assets/insights/Img4.jpg";

// Other assets
import RiddaraVideo from "../assets/RiddaraVideo.mp4";
// import ServiceImage from "../assets/Home-v2.png";
import CSMGeely from "../assets/insights/CSM-GEELY-MOU.png";
import autoMob from "../assets/insights/auto-mob-future.png";
import sareena from "../assets/insights/SERENA-hotel-isb.png";
import accessories from "../assets/services/accesories.png";
import call from "../assets/services/callCenter.png";
import merchandise from "../assets/services/MErchandise.png";
import customer from "../assets/HeroBanner/whatsapp.jpg";
//Interior images
import fortingInterior from "../assets/Homepage-interior/ForthingInterior.png";
import jmeVInterior from "../assets/Homepage-interior/JMeVInterior.png";
import zeekrX from "../assets/Homepage-interior/ZeekeX.png";
import zeekrInterior from "../assets/Homepage-interior/ZeekrInterior.png";
import Newsletter from "../pages/newsLetter";
// import Footer from "../pages/footer";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [currentHeroBanner, setCurrentHeroBanner] = useState(0);
  const [currentInteriorBanner, setCurrentInteriorBanner] = useState(0);
  const [currentPage, setCurrentPage] = useState("home");
  const [isMuted, setIsMuted] = useState(true);
  const navigate = useNavigate();

  const heroBanners = [
    { id: 1, image: ZeekrBan },
    { id: 2, image: ZeekrBanner },
    { id: 3, image: RiddaraBanner },
    { id: 4, image: ForthingBanner },
    { id: 5, image: JMEVBanner },
  ];

  const interiorBanners = [
    { id: 1, image: fortingInterior, title: "Forthing Interior" },
    { id: 2, image: jmeVInterior, title: "JMEV Interior" },
    { id: 3, image: zeekrX, title: "Zeekr X Interior" },
    { id: 4, image: zeekrInterior, title: "Zeekr Interior" },
  ];

  const cars = [
    {
      id: 1,
      image: image1,
      // brand: "ZEEKR",
      logo: "Z",
      page: "zeekr",
    },
    {
      id: 2,
      image: image4,
      // brand: "RIDDARA",
      logo: "R",
      page: "riddara",
    },
    {
      id: 3,
      image: image2,
      // brand: "FORTHING",
      logo: "F",
      page: "forthing",
    },
    {
      id: 4,
      image: image3,
      // brand: "JMEV",
      logo: "J",
      page: "jmev",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Merchandise",
      description:
        "A Capital Selection Of Premium Branded Merchandise That Embodies The Spirit Of Innovation And Style.",
      image: merchandise,
    },
    {
      id: 2,
      title: "Call Centre",
      description:
        "A Dedicated Customer Care Service, Offering Personalized Support And Seamless Communication For All Inquiries.",
      image: call,
    },
    {
      id: 3,
      title: "Parts/Accessories",
      description:
        "Authentic Parts And Refined Accessories, Engineered To Enhance Performance And Elevate Your Driving Experience.",
      image: accessories,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Thompson",
      location: " Customer from United Kingdom",
      rating: 5,
      text: "Geely continues to exceed expectations with its focus on advanced technology, safety, and stylish design. The value for money is unmatched in today's market. I'm very satisfied with my Geely vehicle.",
      image: customer,
    },
    {
      id: 2,
      name: "Emily Johansson",
      location: " Customer from Sweden",
      rating: 5,
      text: "The Zeekr X has completely changed my perception of compact electric vehicles. It's stylish, smooth to drive, and packed with smart features that make daily commuting a pleasure. Zeekr has really nailed the balance between performance and practicality.",
      image: customer,
    },
    {
      id: 3,
      name: "Carlos Medina",
      location: " Customer from Spain",
      rating: 5,
      text: "I've been pleasantly surprised by the quality and comfort of my Forthing vehicle. It offers great value for money, with a spacious interior, modern design, and smooth driving experience. Forthing is definitely a brand to watch as it expands globall",
      image: customer,
    },
    {
      id: 4,
      name: "Amina Yusuf",
      location: "Customer from UAE",
      rating: 5,
      text: "The JMEV Elight EV has been a fantastic addition to my daily routine. It's sleek, energy-efficient, and surprisingly powerful for its size. I appreciate how Elight is making clean transportation more accessible and stylish at the same time.",
      image: customer,
    },
  ];

  // News data with navigation capability
  const newsItems = [
    {
      id: 1,
      title: "CSM & GEELY Signed MOU To Launch Zeekr In Pakistan",
      image: CSMGeely,
      slug: "csm-geely-mou-zeekr-pakistan",
    },
    {
      id: 2,
      title:
        "Dealer Meetup Organized By Capital Smart City At Serena Hotel, Islamabad",
      image: sareena,
      slug: "dealer-meetup-serena-hotel-islamabad",
    },
    {
      id: 3,
      title: "Zeging Excellence For Pakistan's Automotive Future",
      image: autoMob,
      slug: "pakistan-automotive-future-excellence",
    },
  ];

  // Handle car image click navigation
  const handleCarClick = (page: string) => {
    navigate(`/${page}`);
  };

  // Handle news card click navigation
  const handleNewsClick = (slug: string) => {
    navigate(`/news/${slug}`);
  };

  // Handle back to home
  const handleBackToHome = () => {
    setCurrentPage("home");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroBanner((prev) => (prev + 1) % heroBanners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Add useEffect for interior banner auto-transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInteriorBanner((prev) => (prev + 1) % interiorBanners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextHeroBanner = () => {
    setCurrentHeroBanner((prev) => (prev + 1) % heroBanners.length);
  };

  const prevHeroBanner = () => {
    setCurrentHeroBanner(
      (prev) => (prev - 1 + heroBanners.length) % heroBanners.length
    );
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Render different pages based on current page state
  if (currentPage === "zeekr") {
    return <ZeekrPage {...({ onBack: handleBackToHome } as any)} />;
  }

  if (currentPage === "riddara") {
    return <RiddaraPage {...({ onBack: handleBackToHome } as any)} />;
  }

  if (currentPage === "forthing") {
    return <ForthingPage {...({ onBack: handleBackToHome } as any)} />;
  }

  if (currentPage === "jmev") {
    return <JmevPage {...({ onBack: handleBackToHome } as any)} />;
  }

  if (currentPage === "news") {
    return <News {...({ onBack: handleBackToHome } as any)} />;
  }

  // Default homepage render
  return (
    <div className="bg-white">
      {/* Hero Banner Section - Optimized for 1440x450 aspect ratio with extra text space */}
      <section className="relative h-[160px] sm:h-[200px] md:h-[280px] lg:h-[380px] xl:h-[520px] overflow-hidden">
        {heroBanners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentHeroBanner ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={banner.image}
              alt={`Banner ${banner.id}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}

        {/* Navigation Controls - Mobile Responsive */}
        <div className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-20">
          {/* Pagination Dots */}
          <div className="flex flex-col space-y-2 md:space-y-3 mb-4 md:mb-6">
            {heroBanners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHeroBanner(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentHeroBanner
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          {/* Arrow Navigation */}
          <div className="flex space-x-1 md:space-x-2">
            <button
              onClick={prevHeroBanner}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-1.5 md:p-2 transition-all duration-300 shadow-lg"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </button>
            <button
              onClick={nextHeroBanner}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-1.5 md:p-2 transition-all duration-300 shadow-lg"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Car Grid - Static layout showing all 4 brands with navigation */}
      <section className="relative py-20 bg-gray-50">
        {/* Grid Container */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {cars.map((car) => (
              <div key={car.id} className="w-full">
                {/* Car Image - Now clickable */}
                <div
                  className="relative h-[200px] md:h-[280px] overflow-hidden group rounded-lg cursor-pointer"
                  onClick={() => handleCarClick(car.page)}
                >
                  <img
                    src={car.image}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Optional: Add overlay with brand name on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom spacing for "Our Services" text */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center space-x-4 md:space-x-6">
            <div className="h-px bg-gray-400 w-16 md:w-32"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 tracking-wide whitespace-nowrap">
              Our Services
            </h2>
            <div className="h-px bg-gray-400 w-16 md:w-32"></div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior View */}
      <section className="py-16 bg-white">
        <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
            <video
              src={RiddaraVideo}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted={isMuted}
              playsInline
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white"></div>
            </div>
            {/* Mute Button */}
            <button
              onClick={toggleMute}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-300 shadow-lg"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-white" />
              ) : (
                <Volume2 className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Customer Feedback - Updated to 4 testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 md:space-x-6">
              <div className="h-px bg-gray-400 w-16 md:w-32"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide whitespace-nowrap">
                Global Reviews
              </h2>
              <div className="h-px bg-gray-400 w-16 md:w-32"></div>
            </div>
          </div>

          {/* Updated layout for proper sizing */}
          <div className="flex flex-col md:flex-row justify-center items-end gap-6 md:gap-8">
            {/* 1st testimonial - smaller */}
            <div className="bg-white rounded-lg shadow-lg p-5 w-full md:w-72 mb-0 md:mb-8">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full mr-3 overflow-hidden">
                  <img
                    src={testimonials[0].image}
                    alt={testimonials[0].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 text-sm">
                    {testimonials[0].name}
                  </h4>
                  <p className="text-xs text-blue-800">
                    {testimonials[0].location}
                  </p>
                </div>
              </div>
              <p className="text-black text-xs leading-relaxed text-left">
                {testimonials[0].text}
              </p>
            </div>

            {/* 2nd testimonial - larger */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full md:w-96">
              <div className="flex items-center mb-4">
                <div className="w-12 md:w-14 h-12 md:h-14 rounded-full mr-4 overflow-hidden">
                  <img
                    src={testimonials[1].image}
                    alt={testimonials[1].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 text-base md:text-lg">
                    {testimonials[1].name}
                  </h4>
                  <p className="text-sm text-blue-800">
                    {testimonials[1].location}
                  </p>
                </div>
              </div>
              <p className="text-black text-sm leading-relaxed text-left">
                {testimonials[1].text}
              </p>
            </div>

            {/* 3rd testimonial - larger (same as 2nd) */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full md:w-96">
              <div className="flex items-center mb-4">
                <div className="w-12 md:w-14 h-12 md:h-14 rounded-full mr-4 overflow-hidden">
                  <img
                    src={testimonials[2].image}
                    alt={testimonials[2].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 text-base md:text-lg">
                    {testimonials[2].name}
                  </h4>
                  <p className="text-sm text-blue-800">
                    {testimonials[2].location}
                  </p>
                </div>
              </div>
              <p className="text-black text-sm leading-relaxed text-left">
                {testimonials[2].text}
              </p>
            </div>

            {/* 4th testimonial - smaller (same as 1st) */}
            <div className="bg-white rounded-lg shadow-lg p-5 w-full md:w-72 mb-0 md:mb-8">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full mr-3 overflow-hidden">
                  <img
                    src={testimonials[3].image}
                    alt={testimonials[3].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 text-sm">
                    {testimonials[3].name}
                  </h4>
                  <p className="text-xs text-blue-800">
                    {testimonials[3].location}
                  </p>
                </div>
              </div>
              <p className="text-black text-xs leading-relaxed text-left">
                {testimonials[3].text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Banner Section */}
      <section className="py-16 bg-white">
        <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            {interiorBanners.map((banner, index) => (
              <div
                key={banner.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentInteriorBanner ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-contain md:object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Insights - Updated with navigation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 md:space-x-6">
              <div className="h-px bg-gray-400 w-16 md:w-32"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide whitespace-nowrap">
                News & Insights
              </h2>
              <div className="h-px bg-gray-400 w-16 md:w-32"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((newsItem) => (
              <div
                key={newsItem.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => handleNewsClick(newsItem.slug)}
              >
                <img
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-2 hover:text-blue-800 transition-colors duration-300">
                    {newsItem.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12"></div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
      <div className="border-t border-gray-300" />
      {/* Footer Section */}
      {/* <Footer /> */}
    </div>
  );
};

export default Homepage;
