import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";
import ForthingBanner from "../assets/Forthing/HeroBanner/ForthingBanner.png";

import whiteCar from "../assets/Forthing/HeroBanner/colorSelect/carWhite.png";
import blueCar from "../assets/Forthing/HeroBanner/colorSelect/carBlue.png";
import greyCar from "../assets/Forthing/HeroBanner/colorSelect/carGrey.png";
import greenCar from "../assets/Forthing/HeroBanner/colorSelect/carGreen.png";
import blackCar from "../assets/Forthing/HeroBanner/colorSelect/carBlack.png";
//slider 1
import slidea from "../assets/Forthing/ADD/Exterior-A.png";
import slideb from "../assets/Forthing/ADD/Exterior-B.png";
import slidec from "../assets/Forthing/ADD/Exterior-C.png";
import slided from "../assets/Forthing/ADD/Exterior-D.png";
import slidee from "../assets/Forthing/ADD/Exterior-E.jpg";
//slider3 images
import adasA from "../assets/Forthing/ADAS/adasA.png";
import adasB from "../assets/Forthing/ADAS/adasB.png";
import adasC from "../assets/Forthing/ADAS/AirBags.png";
import adasD from "../assets/Forthing/ADAS/adasD.png";
import adasE from "../assets/Forthing/ADAS/adasE.png";

//slider2 images
import slideA from "../assets/Forthing/InteriorFeatures/Interior-A.png";
import slideB from "../assets/Forthing/InteriorFeatures/Interior-B.png";
import slideC from "../assets/Forthing/InteriorFeatures/Interior-C.png";
import slideD from "../assets/Forthing/InteriorFeatures/Interior-D.png";
import slideE from "../assets/Forthing/InteriorFeatures/Interior-E.png";
//banner and additional images
import ForthingSpec from "../assets/Forthing/ForthingSpecs.png";
import ForthingBig from "../assets/Forthing/Grid/ForthingBig.png";
import ForthingLeft from "../assets/Forthing/Grid/ForthingLeft.png";
import ForthingRight from "../assets/Forthing/Grid/ForthingRight.png";
// Import TestDrive for test drive navigation
import TestDrive from "../pages/test";
import MainApp from "../pages/testDrive2";
import Newsletter from "../pages/newsLetter";
// import Footer from "../pages/footer";
// Define the props interface
interface ForthingProps {
  onBack: () => void;
}

export const Forthing: React.FC<ForthingProps> = ({ onBack }) => {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentSlideIndex2, setCurrentSlideIndex2] = useState(0);
  const [currentSlideIndex3, setCurrentSlideIndex3] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [showTestDrive, setShowTestDrive] = useState(false);
  const [showTestDrivePage, setShowTestDrivePage] = useState(false);

  // Handle responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // WhatsApp function
  const handleWhatsAppClick = () => {
    const phoneNumber = "+923008255276"; // Replace with your actual WhatsApp number
    const message =
      "Hi! I'm interested in the Forthing vehicle. Can you provide more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  // Navigation function for Book Now button
  const handleBookNow = (): void => {
    setShowTestDrive(true);
  };

  // Navigation function for Test Drive button
  const handleTestDrive = (): void => {
    setShowTestDrivePage(true);
  };

  // Function to go back from test drive to Forthing page
  const handleBackFromTestDrive = (): void => {
    setShowTestDrive(false);
  };

  // Function to go back from test drive page to Forthing page
  const handleBackFromTestDrivePage = (): void => {
    setShowTestDrivePage(false);
  };

  // If showing test drive component, render it with transparent back button overlay (same as JMEV)
  if (showTestDrive) {
    return (
      <div className="relative w-full h-screen">
        {/* Render MainApp without onBack prop */}
        <MainApp />

        {/* Transparent back button overlay */}
        <button
          onClick={handleBackFromTestDrive}
          className="fixed top-24 left-6 z-[999] flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-lg transition-all duration-300 border border-gray-200"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
          <span className="text-sm font-medium text-gray-700">
            Back to Forthing
          </span>
        </button>
      </div>
    );
  }

  // If showing test drive page, render it with transparent back button overlay
  if (showTestDrivePage) {
    return (
      <div className="relative w-full h-screen">
        {/* Render TestDrive component */}
        <TestDrive />

        {/* Transparent back button overlay */}
        <button
          onClick={handleBackFromTestDrivePage}
          className="fixed top-24 left-6 z-[999] flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-lg transition-all duration-300 border border-gray-200"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
          <span className="text-sm font-medium text-gray-700">
            Back to Forthing
          </span>
        </button>
      </div>
    );
  }

  // Car color variants for Forthing - using your existing images as base
  // Note: You'll need to add actual color variant images to your assets
  // Car color variants for forthing

  const cars = [
    {
      image: blueCar, // Replace with actual blue variant when available
      color: "Deep Blue",
      bgColor: "bg-blue-900",
      colorCode: "#1082ba",
    },
    {
      image: whiteCar, // Replace with actual white variant when available
      color: "Pearl White",
      bgColor: "bg-white",
      colorCode: "#FFFFFF",
    },
    {
      image: greyCar, // Using your existing image as main
      color: "Silver Metallic",
      bgColor: "bg-gray-400",
      colorCode: "#C0C0C0",
    },
    {
      image: blackCar, // Replace with actual black variant when available
      color: "Midnight Black",
      bgColor: "bg-black",
      colorCode: "#000000",
    },

    {
      image: greenCar, // Replace with actual green variant when available
      color: "Forest Green",
      bgColor: "bg-green-700",
      colorCode: "#a0dcc1",
    },
  ];

  // First Advanced Driving Dynamics slides data (5 slides)
  const slides = [
    {
      image: slidea,
      title: "⦁	Big Panoramic Sunroof ",
      description:
        "Enjoy expansive sky views and natural light with the larger, panoramic sunroof—perfect for a more open and airy cabin experience.",
    },
    {
      image: slideb,
      title: "⦁	Modern Grille and Headlights",
      description:
        "Stand out with a bold modern grille and sleek LED headlights, combining striking style with enhanced road visibility.",
    },
    {
      image: slidec,
      title: "⦁	Aerodynamic Side Profile",
      description:
        "Showcasing a sleek and sculpted design, the aerodynamic side profile enhances both beauty and performance for a smooth, efficient drive.",
    },
    {
      image: slided,
      title: "⦁	Sport-Tuned Alloy Wheels",
      description:
        "Sport-tuned alloy wheels enhance both style and performance. Designed for stability and sharp handling, they add a bold, athletic edge to every drive",
    },
    {
      image: slidee,
      title: "⦁	LED Matrix Headlights & Tail Lamps",
      description:
        "LED matrix headlights and tail lamps offer superior visibility and a modern look. They adapt intelligently to driving conditions, improving safety, enhancing the vehicle's futuristic style.",
    },
  ];

  // Interior Features slides data (5 slides) - Using exact text from image
  const slides2 = [
    {
      image: slideA,
      title: "SMART HOME SPACE",
      description:
        "Step into a roomy, tech-savvy cabin where comfort and innovation come together.Thoughtfully designed for you, the open interior offers maximum space and ease.Smart features throughout make every drive smooth, connected, and refined.",
    },
    {
      image: slideB,
      title: "⦁	ERGONOMIC SEATS WITH LEATHER & VENTILATION OPTIONS",
      description:
        "Designed for optimal comfort and support, the seats feature high-quality leather finishes and optional ventilation to enhance the driving experience in all conditions.",
    },
    {
      image: slideC,
      title: "Dual HD screens: infotainment + digital cluster",
      description:
        "Features a high-resolution infotainment touchscreen paired with a fully digital instrument cluster, delivering clear visuals, intuitive control, and a connected driving experience.",
    },
    {
      image: slideD,
      title: "Shift Electronic Gear Shifting Technology",
      description:
        "Experience seamless control with advanced electronic gear shifting for a sleek, modern drive.",
    },
    {
      image: slideE,
      title: "Spacious trunk with split-folding rear seats",
      description:
        "Spacious trunk with split-folding rear seats offers flexible storage for all your adventures.",
    },
  ];

  // Security Features slides data - using your imports
  const securitySlides = [
    {
      image: adasA,
      title: "ADAS Advanced Driver Assistance System",
      description:
        "ADAS (Advanced Driver Assistance System) enhances safety with intelligent features like lane keeping, collision warning, and adaptive cruise control for a smarter, more secure drive",
    },
    {
      image: adasB,
      title: "AEB Autonomous Emergency Braking",
      description:
        "It automatically detects obstacles and applies the brakes to help prevent or reduce the severity of collisions, ensuring greater safety on the road.",
    },
    {
      image: adasC,
      title: "6-Airbag Protection System",
      description:
        "Forthing Friday comes with comprehensive safety with front, side, and curtain airbags, shielding occupants from multiple angles in the event of a collision",
    },
    {
      image: adasD,
      title: "⦁	Lane Keep Assist Adaptive Cruise Control",
      description:
        "maintains a set speed while automatically adjusting to the flow of traffic, ensuring a smooth and safe driving experience.",},
    {
      image: adasE,
      title: "C360° Surround View Camera",
      description:
        "360° Surround View Camera delivers a real-time bird's-eye view of your surroundings, making parking and maneuvering in tight spaces safer and easier.",
    },
  ];

  // Helper function to get max slide index
  const getMaxIndex = (slidesLength: number) => {
    return Math.max(0, slidesLength - (isDesktop ? 2 : 1));
  };

  // Car navigation functions
  const nextCar = () => {
    setCurrentCarIndex((prev) => (prev + 1) % cars.length);
  };

  const prevCar = () => {
    setCurrentCarIndex((prev) => (prev - 1 + cars.length) % cars.length);
  };

  const selectCar = (index: number) => {
    setCurrentCarIndex(index);
  };

  // Helper function to create gradient style for two-tone colors
  const getColorStyle = (index: number) => {
    const car = cars[index];
    return {
      backgroundColor: car.colorCode,
    };
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => {
      const maxIndex = getMaxIndex(slides.length);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => {
      const maxIndex = getMaxIndex(slides.length);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  // Functions for second slider
  const nextSlide2 = () => {
    setCurrentSlideIndex2((prev) => {
      const maxIndex = getMaxIndex(slides2.length);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide2 = () => {
    setCurrentSlideIndex2((prev) => {
      const maxIndex = getMaxIndex(slides2.length);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  // Functions for security slider
  const nextSlide3 = () => {
    setCurrentSlideIndex3((prev) => {
      const maxIndex = getMaxIndex(securitySlides.length);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide3 = () => {
    setCurrentSlideIndex3((prev) => {
      const maxIndex = getMaxIndex(securitySlides.length);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  return (
    <div className="w-full">
      {/* Back to Home Button - Fixed position moved down 3 inches (72px) */}
      <button
        onClick={onBack}
        className="fixed top-24 left-6 z-50 flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-lg transition-all duration-300 border border-gray-200"
      >
        <ArrowLeft className="w-5 h-5 text-gray-700" />
        <span className="text-sm font-medium text-gray-700">Back to Home</span>
      </button>

      {/* Hero Banner Section */}
      <div className="relative w-full">
        <img
          src={ForthingBanner}
          alt="Forthing Hero Banner"
          className="w-full h-auto object-cover"
        />

        {/* WhatsApp Button - Top Right */}
        <button
          onClick={handleWhatsAppClick}
          className="absolute top-8 right-8 flex items-center justify-center w-12 h-12 bg-black/20 hover:bg-black-900 border border-white backdrop-blur  text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-30"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </button>

        {/* Test Drive Button positioned at bottom left */}
        <div className="absolute bottom-8 left-8">
          <button
            onClick={handleTestDrive}
            className="px-3 sm:px-5 py-2 sm:py-3 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 text-xs sm:text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105"
            style={{ borderRadius: "8px" }}
            type="button"
          >
            TEST DRIVE
          </button>
        </div>

        {/* Buttons positioned at bottom right */}
        <div className="absolute bottom-8 right-8 flex space-x-4">
          <button
            onClick={handleBookNow}
            className="px-4 sm:px-8 py-3 sm:py-4 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105"
            style={{ borderRadius: "8px" }}
          >
            BOOK NOW
          </button>
          <button
            className="px-4 sm:px-8 py-3 sm:py-4 border-2 border-white text-white bg-black   transition-all duration-300 text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105"
            style={{ borderRadius: "8px" }}
          >
            BROCHURE
          </button>
        </div>
      </div>
      {/* Specifications Section */}
      <div className="bg-white py-4 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center">
            <div className="flex items-center bg-transparent rounded-lg p-4 shadow-sm">
              <div className="flex flex-col items-center px-6">
                <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">
                  UP TO
                </p>
                <h3 className="text-xl font-light text-gray-700 mb-1">
                  1100 Km*
                </h3>
                <p className="text-gray-500 text-xs">Driving Range</p>
              </div>
              <div className="flex flex-col items-center px-6 border-l border-r border-gray-300 mx-4">
                <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">
                  AS FAST AS
                </p>
                <h3 className="text-xl font-light text-gray-700 mb-1">
                  10.9 Sec*
                </h3>
                <p className="text-gray-500 text-xs">To Reach 100</p>
              </div>
              <div className="flex flex-col items-center px-6">
                <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">
                  UP TO
                </p>
                <h3 className="text-xl font-light text-gray-700 mb-1">
                  31.94 KWh*
                </h3>
                <p className="text-gray-500 text-xs">Capacity</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Car Gallery Section with Color Selector */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-8 px-4 relative min-h-[600px]">
        <div className="max-w-7xl mx-auto relative">
          {/* Color selector dots - positioned top right */}
          <div className="absolute top-4 right-4 z-20 flex space-x-2">
            {cars.map((car, index) => (
              <button
                key={index}
                onClick={() => selectCar(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 border border-gray-300 ${
                  currentCarIndex === index
                    ? "ring-2 ring-gray-600 ring-offset-2"
                    : ""
                }`}
                style={getColorStyle(index)}
                title={car.color}
              />
            ))}
          </div>

          {/* Navigation arrows on sides */}
          <button
            onClick={prevCar}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextCar}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Car image centered */}
          <div className="flex justify-center items-center h-full py-12">
            <div className="w-full max-w-4xl">
              <img
                src={cars[currentCarIndex].image}
                alt={`Forthing ${cars[currentCarIndex].color} car`}
                className="w-full h-auto object-contain transition-all duration-500"
              />
            </div>
          </div>

          {/* Gallery Bottom Line - Small decorative line */}
          <div className="flex items-center justify-center mt-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Advanced Driving Dynamics Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title with Lines on Both Sides */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gray-400 max-w-24"></div>
              <h2 className="px-6 text-lg font-medium text-gray-800 tracking-wider">
                ADVANCED DRIVING DYNAMICS
              </h2>
              <div className="flex-1 h-px bg-gray-400 max-w-24"></div>
            </div>
          </div>

          {/* Slider Container */}
          <div className="relative">
            {/* Main Slide Display - Show 2 at a time on desktop, 1 on mobile */}
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{
                  transform: `translateX(-${
                    currentSlideIndex * (isDesktop ? 50 : 100)
                  }%)`,
                }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/2 flex-shrink-0 px-2"
                  >
                    <div className="bg-white rounded-lg overflow-hidden group cursor-pointer">
                      {/* Image with hover zoom effect */}
                      <div className="relative overflow-hidden">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Text Content Below Image - Left Aligned with Gray Background */}
                      <div className="p-4 md:p-6 text-left bg-gray-100">
                        <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3">
                          {slide.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Vehicle Gallery Section */}
      <div className="bg-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            {/* Top - Large banner image spanning full width */}
            <div className="w-full">
              <img
                src={ForthingBig}
                alt="Forthing Main Vehicle"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Bottom - Two smaller images side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <img
                  src={ForthingLeft}
                  alt="Forthing Side View"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="w-full">
                <img
                  src={ForthingRight}
                  alt="Forthing Front View"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interior Features Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title with Lines on Both Sides */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gray-400 max-w-24"></div>
              <h2 className="px-6 text-lg font-medium text-gray-800 tracking-wider">
                INTERIOR FEATURES
              </h2>
              <div className="flex-1 h-px bg-gray-400 max-w-24"></div>
            </div>
          </div>

          {/* Slider Container */}
          <div className="relative">
            {/* Main Slide Display - Show 2 at a time on desktop, 1 on mobile */}
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{
                  transform: `translateX(-${
                    currentSlideIndex2 * (isDesktop ? 50 : 100)
                  }%)`,
                }}
              >
                {slides2.map((slide, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/2 flex-shrink-0 px-2"
                  >
                    <div className="bg-white rounded-lg overflow-hidden group cursor-pointer">
                      {/* Image with hover zoom effect */}
                      <div className="relative overflow-hidden">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Text Content Below Image - Left Aligned with Gray Background */}
                      <div className="p-4 md:p-6 text-left bg-gray-100">
                        <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3">
                          {slide.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide2}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide2}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Brochure Button - Bottom Right */}
          <div className="flex justify-end mt-4">
            <button className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-all duration-300 text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105 rounded">
              BROCHURE
            </button>
          </div>
        </div>
      </div>

      {/* Security Features Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title with Lines on Both Sides */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gray-400 max-w-24"></div>
              <h2 className="px-6 text-lg font-medium text-gray-800 tracking-wider">
                SECURITY FEATURES
              </h2>
              <div className="flex-1 h-px bg-gray-400 max-w-24"></div>
            </div>
          </div>

          {/* Slider Container */}
          <div className="relative">
            {/* Main Slide Display - Show 2 at a time on desktop, 1 on mobile */}
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{
                  transform: `translateX(-${
                    currentSlideIndex3 * (isDesktop ? 50 : 100)
                  }%)`,
                }}
              >
                {securitySlides.map((slide, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/2 flex-shrink-0 px-2"
                  >
                    <div className="bg-white rounded-lg overflow-hidden group cursor-pointer">
                      {/* Image with hover zoom effect */}
                      <div className="relative overflow-hidden">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Text Content Below Image - Left Aligned with Gray Background */}
                      <div className="p-4 md:p-6 text-left bg-gray-100">
                        <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3">
                          {slide.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide3}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide3}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Final Specifications Section */}
      <div className="bg-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="w-full">
            <img
              src={ForthingSpec}
              alt="Forthing Specifications"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Final decorative line at the bottom */}
          <div className="flex items-center justify-center pt-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />
      <div className="border-t border-gray-300" />
      {/* Footer Section */}
      {/* <Footer /> */}
    </div>
  );
};

export default Forthing;
